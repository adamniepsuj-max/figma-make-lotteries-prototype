import { Check, ChevronDown, ChevronUp, CircleMinus, Info, Pencil, Plus, Share2, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import IrishLotteryHeader from '../../imports/Frame1410092536-1-1/Frame1410092536-207-2626';
import { NumberPickerModal } from './NumberPickerModal';
import { HeaderVariant, IrishLottoHeaderCard } from './IrishLottoHeaderCard';
import { PreviousResultsModal } from './PreviousResultsModal';
import { ModalCloseButton } from './ModalCloseButton';
import { BottomNav } from './BottomNav';
import { useBetslip, type BetslipEntry } from '../contexts/BetslipContext';
import { SelectedNumberBall } from './SelectedNumberBall';
import { getOddsForMatch } from '../lotteryOdds';
import { getLotteryBallTheme } from '../lotteryBallStyles';
import {
  allDrawWeekdays,
  formatDrawDate,
  getNextDraw,
  getUpcomingDrawForDay,
  longWeekdayByShort,
  lotterySchedules,
  tabIdByLotteryId,
  type DrawWeekday,
  type LotteryTabId,
} from '../lotteryData';

const lotteryTabIdByTitle = Object.values(lotterySchedules).reduce<Record<string, LotteryTabId>>(
  (accumulator, lottery) => {
    accumulator[lottery.title] = lottery.tabId;
    return accumulator;
  },
  {},
);

type Line = {
  id: string;
  numbers: number[];
  bonusBall?: number;
};

type DayDraws = {
  id: string;
  day: string;
  date: string;
  options: DrawOption[];
  selected: Record<string, boolean>;
};

type DrawOption = {
  key: string;
  label: string;
  summaryLabel: string;
  time: string;
};

type LotteryDrawConfig = {
  days: Array<Omit<DayDraws, 'selected'>>;
  explanation: {
    how: string[];
    introStrong?: string;
    drawTimesIntro?: string;
    gameBullets?: string[];
    finalStrong?: string;
    drawTimes?: string[];
    means: string[];
    note?: string;
  };
};

const makeDrawDay = (lotteryId: LotteryTabId, weekday: DrawWeekday, options: DrawOption[]): Omit<DayDraws, 'selected'> => {
  const draw = getUpcomingDrawForDay(lotterySchedules[lotteryId], weekday);

  return {
    id: weekday.toLowerCase(),
    day: longWeekdayByShort[weekday],
    date: draw ? formatDrawDate(draw.date) : 'TBC',
    options,
  };
};

const makeDrawDays = (
  lotteryId: LotteryTabId,
  weekdays: DrawWeekday[],
  getOptions: (weekday: DrawWeekday) => DrawOption[],
): Array<Omit<DayDraws, 'selected'>> =>
  weekdays
    .map((weekday) => makeDrawDay(lotteryId, weekday, getOptions(weekday)))
    .sort((a, b) => {
      const weekdayA = weekdays.find((weekday) => longWeekdayByShort[weekday] === a.day);
      const weekdayB = weekdays.find((weekday) => longWeekdayByShort[weekday] === b.day);
      const dateA = weekdayA ? getUpcomingDrawForDay(lotterySchedules[lotteryId], weekdayA)?.date.getTime() ?? 0 : 0;
      const dateB = weekdayB ? getUpcomingDrawForDay(lotterySchedules[lotteryId], weekdayB)?.date.getTime() ?? 0 : 0;

      return dateA - dateB;
    });

const singleDrawOption = (time: string): DrawOption => ({
  key: 'main',
  label: `${time} Main draw`,
  summaryLabel: 'Main',
  time,
});

const lotteryDrawConfigs: Record<string, LotteryDrawConfig> = {
  'irish-lotto': {
    days: makeDrawDays('irish-lotto', ['Wed', 'Sat'], () => [
      { key: 'main', label: '20:00 Main draw', summaryLabel: 'Main', time: '20:00' },
      { key: 'plus1', label: '20:03 Plus 1 draw', summaryLabel: 'Plus 1', time: '20:03' },
      { key: 'plus2', label: '20:05 Plus 2 draw', summaryLabel: 'Plus 2', time: '20:05' },
    ]),
    explanation: {
      how: [
        'Irish Lotto draws take place every ',
        'Each draw includes three games played one after another:',
      ],
      introStrong: 'Wednesday and Saturday at 8pm.',
      gameBullets: [
        'Main Draw',
        'Plus 1 (drawn right after the main draw)',
        'Plus 2 (drawn right after Plus 1)',
      ],
      finalStrong: 'One ticket → 3 draws at 8pm',
      means: [
        'Your numbers are entered into the Main Draw',
        'They are then automatically entered again into Plus 1 and Plus 2',
        'Each draw gives you another chance to win',
      ],
      note: '*Your numbers are played across 3 consecutive draws for more chances to win',
    },
  },
  'uk-49s': {
    days: makeDrawDays('uk-49s', allDrawWeekdays, () => [
      { key: 'brunch', label: '11:49 Brunch', summaryLabel: 'Brunch', time: '11:49' },
      { key: 'lunch', label: '12:49 Lunch', summaryLabel: 'Lunch', time: '12:49' },
      { key: 'drive', label: '16:49 Drive', summaryLabel: 'Drive', time: '16:49' },
      { key: 'tea', label: '17:49 Tea', summaryLabel: 'Tea', time: '17:49' },
    ]),
    explanation: {
      how: [
        '49’s Lotto draws take place every day four times at:',
        'Each draw is a separate event.',
      ],
      drawTimes: [
        '11:49 (Brunch time draw)',
        '12:49 (Lunch time draw)',
        '16:49 (Drive time draw)',
        '17:49 (Tea time draw)',
      ],
      means: [
        'You can choose one or multiple draw times',
        'Each selection time is a separate entry',
        'More draws = more chances to win',
      ],
      note: '*Your numbers are played in each selected draw independently',
    },
  },
  'ny-lotto': {
    days: makeDrawDays('ny-lotto', ['Thu', 'Sun'], () => [singleDrawOption('00:15')]),
    explanation: {
      how: ['New York Lotto draws take place every ', 'Each draw is a single event.'],
      introStrong: 'Thursday and Sunday at 00:15',
      means: ['Your numbers are entered once per selected draw', 'Each draw gives you a new chance to win.'],
    },
  },
  'daily-millions': {
    days: makeDrawDays('daily-millions', allDrawWeekdays, () => [
      { key: 'main', label: '13:55 Main draw', summaryLabel: 'Main', time: '13:55' },
      { key: 'plus', label: '20:55 Plus draw', summaryLabel: 'Plus', time: '20:55' },
    ]),
    explanation: {
      how: ['Daily Millions Lotto draws take place every day.', 'There are two draws each day: 13:55 Main Draw and 20:55 Plus Draw.', 'Each draw is a separate event.'],
      means: ['You can choose to play the Main draw, the Plus draw, or both.', 'Each selected draw is a separate chance to win.', 'Your numbers are entered into each draw you select.'],
      note: '*Your numbers are entered separately into each selected draw',
    },
  },
  'australian-lotto': {
    days: makeDrawDays('australian-lotto', ['Sat'], () => [singleDrawOption('01:00')]),
    explanation: {
      how: ['Australian Lotto draws take place once per week on ', 'Each draw is a single event.'],
      introStrong: 'Saturdays at 01:00',
      means: ['Your numbers are entered once per selected draw', 'Each draw gives you one chance to win.'],
    },
  },
  'canadian-lotto': {
    days: makeDrawDays('canadian-lotto', ['Thu', 'Sun'], () => [singleDrawOption('02:15')]),
    explanation: {
      how: ['Canadian Lotto draws take place ', 'Each draw is a single event.'],
      introStrong: 'every Thursday and Sunday at 02:15.',
      means: ['Your numbers are entered once per draw', 'Each draw is a new chance to win.'],
    },
  },
  'french-lotto': {
    days: makeDrawDays('french-lotto', ['Mon', 'Wed', 'Sat'], () => [singleDrawOption('18:25')]),
    explanation: {
      how: ['French Lotto draws take place every ', 'Each draw is a single event.'],
      introStrong: 'Monday, Wednesday and Saturday at 18:25.',
      means: ['Your numbers are entered once per draw', 'Each draw gives you another chance to win.'],
    },
  },
  'german-lotto': {
    days: makeDrawDays('german-lotto', ['Wed', 'Sat'], (weekday) => [
      singleDrawOption(weekday === 'Wed' ? '16:25' : '17:25'),
    ]),
    explanation: {
      how: ['German Lotto draws take place every ', 'Each draw is a single event.'],
      drawTimesIntro: 'German Lotto draws take place every ',
      introStrong: 'Wednesday and Saturday:',
      drawTimes: ['Wednesday 16:25', 'Saturday 17:25'],
      means: ['Your numbers are entered once per draw', 'Each draw gives you another chance to win.'],
    },
  },
  'polish-lotto': {
    days: makeDrawDays('polish-lotto', ['Tue', 'Thu', 'Sat'], () => [singleDrawOption('19:15')]),
    explanation: {
      how: ['Polish Lotto draws take place every ', 'Each draw is a single event.'],
      introStrong: 'Tuesday, Thursday and Saturday at 19:15',
      means: ['Your numbers are entered once per selected draw', 'Each draw gives you a new chance to win.'],
    },
  },
};

const createDrawState = (lotteryTabId: string): DayDraws[] =>
  (lotteryDrawConfigs[lotteryTabId] ?? lotteryDrawConfigs['irish-lotto']).days.map((day) => ({
    ...day,
    selected: Object.fromEntries(day.options.map((option) => [option.key, false])),
  }));

const headerVariantByTab: Record<string, HeaderVariant> = {
  'irish-lotto': 'irish-lotto',
  'uk-49s': 'uk-49s',
  'ny-lotto': 'ny-lotto',
  'french-lotto': 'french-lotto',
  'australian-lotto': 'australian-lotto',
  'german-lotto': 'german-lotto',
  'canadian-lotto': 'canadian-lotto',
  'daily-millions': 'daily-millions',
  'polish-lotto': 'polish-lotto',
};

const lotteryTitleByTab: Record<string, string> = {
  'irish-lotto': 'Irish Lotto',
  'uk-49s': '49’s Lotto',
  'ny-lotto': 'New York Lotto',
  'french-lotto': 'French Lotto',
  'australian-lotto': 'Australian Lotto',
  'daily-millions': 'Daily Millions Lotto',
  'german-lotto': 'German Lotto',
  'canadian-lotto': 'Canadian Lotto',
  'polish-lotto': 'Polish Lotto',
};

const breadcrumbTitleByTab: Record<string, string> = {
  'irish-lotto': 'Irish lotto',
  'uk-49s': '49’s Lotto',
  'ny-lotto': 'New York Lotto',
  'french-lotto': 'French Lotto',
  'australian-lotto': 'Australian Lotto',
  'daily-millions': 'Daily Millions',
  'german-lotto': 'German Lotto',
  'canadian-lotto': 'Canadian Lotto',
  'polish-lotto': 'Polish Lotto',
};

const carouselLabelByTab: Record<string, string> = {
  'irish-lotto': 'Irish Lotto',
  'uk-49s': '49’s Lotto',
  'ny-lotto': 'NY Lotto',
  'french-lotto': 'French Lotto',
  'australian-lotto': 'Australian Lotto',
  'daily-millions': 'Daily Millions',
  'german-lotto': 'German Lotto',
  'canadian-lotto': 'Canadian Lotto',
  'polish-lotto': 'Polish Lotto',
};

const createEmptyLine = (id: string): Line => ({ id, numbers: [] });

const getNextLineId = (lines: Line[]) =>
  `${Math.max(0, ...lines.map((line) => Number.parseInt(line.id, 10)).filter(Number.isFinite)) + 1}`;

const ensureTrailingEmptyLine = (lines: Line[]) => {
  const currentLines = lines.length > 0 ? lines : [createEmptyLine('1')];
  const hasEmptyLine = currentLines.some((line) => line.numbers.length === 0);

  return hasEmptyLine ? currentLines : [...currentLines, createEmptyLine(getNextLineId(currentLines))];
};

const pendingLineStorageKey = (lotteryId: LotteryTabId) => `lotteries:pending-line:${lotteryId}`;

const readPendingLine = (lotteryId: LotteryTabId, supportsBonus: boolean): Line | undefined => {
  if (typeof window === 'undefined') return undefined;

  const storageKey = pendingLineStorageKey(lotteryId);
  const storedLine = window.sessionStorage.getItem(storageKey);
  if (!storedLine) return undefined;

  window.sessionStorage.removeItem(storageKey);

  try {
    const parsedLine = JSON.parse(storedLine);
    if (!parsedLine || !Array.isArray(parsedLine.numbers)) return undefined;

    return {
      id: '1',
      numbers: parsedLine.numbers.filter((number: unknown): number is number => typeof number === 'number'),
      bonusBall: supportsBonus && typeof parsedLine.bonusBall === 'number' ? parsedLine.bonusBall : undefined,
    };
  } catch {
    return undefined;
  }
};

const drawsExplainedTransitionMs = 280;

export function InteractiveLotteryScreen() {
  const navigate = useNavigate();
  const { lotteryId } = useParams();
  const { entries, addEntry, removeEntry, removeEntryLine, clearAll } = useBetslip();
  const activeTabButtonRef = useRef<HTMLButtonElement | null>(null);
  const weeksScrollerRef = useRef<HTMLDivElement | null>(null);
  const selectedWeekRef = useRef<HTMLDivElement | null>(null);

  const [activeTab, setActiveTab] = useState(() => tabIdByLotteryId[lotteryId ?? ''] ?? 'irish-lotto');
  const [lines, setLines] = useState<Line[]>([createEmptyLine('1')]);
  const [lineStakes, setLineStakes] = useState<Record<string, string>>({ '1': '1.00' });
  const [weeks, setWeeks] = useState(1);
  const [showNumberPicker, setShowNumberPicker] = useState<string | null>(null);
  const [showDrawsExplained, setShowDrawsExplained] = useState(false);
  const [showPreviousResults, setShowPreviousResults] = useState(false);
  const [isDrawsExplainedEntered, setIsDrawsExplainedEntered] = useState(false);
  const [isDrawsExplainedExiting, setIsDrawsExplainedExiting] = useState(false);
  const [isBetslipExpanded, setIsBetslipExpanded] = useState(false);
  const drawsExplainedCloseTimeoutRef = useRef<ReturnType<typeof window.setTimeout> | null>(null);

  const tabs = [
    { id: 'irish-lotto', label: 'Irish Lotto', route: '/lottery/2' },
    { id: 'uk-49s', label: 'UK 49’s', route: '/lottery/1' },
    { id: 'ny-lotto', label: 'NY Lotto', route: '/lottery/3' },
    { id: 'french-lotto', label: 'French Lotto', route: '/lottery/7' },
    { id: 'australian-lotto', label: 'Australian Lotto', route: '/lottery/5' },
    { id: 'daily-millions', label: 'Daily Millions', route: '/lottery/4' },
    { id: 'german-lotto', label: 'German Lotto', route: '/lottery/8' },
    { id: 'canadian-lotto', label: 'Canadian Lotto', route: '/lottery/6' },
    { id: 'polish-lotto', label: 'Polish Lotto', route: '/lottery/9' },
  ];

  const [draws, setDraws] = useState<DayDraws[]>(() => createDrawState(tabIdByLotteryId[lotteryId ?? ''] ?? 'irish-lotto'));
  const activeLotteryConfig = lotteryDrawConfigs[activeTab] ?? lotteryDrawConfigs['irish-lotto'];
  const activeLotterySchedule = lotterySchedules[activeTab as LotteryTabId] ?? lotterySchedules['irish-lotto'];
  const activeLotteryTitle = activeLotterySchedule.title;
  const activeBreadcrumbTitle = activeLotterySchedule.breadcrumbTitle;
  const previousResultsDrawLabels =
    activeLotteryConfig.days[0]?.options.map((option) => option.label.replace(/\s+draw$/i, '')) ?? ['Main'];
  const ballTheme = getLotteryBallTheme(activeTab);
  const selectedBallColor = ballTheme.gradient;
  const weekOptions = Array.from({ length: 20 }, (_, index) => index + 1);

  useEffect(() => {
    const nextActiveTab = tabIdByLotteryId[lotteryId ?? ''] ?? 'irish-lotto';
    const pendingLine = readPendingLine(nextActiveTab, lotterySchedules[nextActiveTab].supportsBonus);
    setActiveTab(nextActiveTab);
    setDraws(createDrawState(nextActiveTab));
    setLines(
      pendingLine
        ? ensureTrailingEmptyLine([pendingLine])
        : [createEmptyLine('1')]
    );
    setLineStakes({ '1': '1.00' });
    setWeeks(1);

    if (!lotterySchedules[nextActiveTab].supportsBonus) {
      setLines((currentLines) => currentLines.map((line) => ({ ...line, bonusBall: undefined })));
    }
  }, [lotteryId]);

  useEffect(() => {
    activeTabButtonRef.current?.scrollIntoView({ block: 'nearest', inline: 'center' });
  }, [activeTab]);

  useEffect(() => {
    const scroller = weeksScrollerRef.current;
    const selectedWeek = selectedWeekRef.current;

    if (!scroller || !selectedWeek) return;

    const frame = window.requestAnimationFrame(() => {
      if (weeks <= 5) {
        scroller.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
        return;
      }

      const edgePadding = 12;
      const scrollerRect = scroller.getBoundingClientRect();
      const selectedRect = selectedWeek.getBoundingClientRect();
      const leftOverflow = selectedRect.left - scrollerRect.left;
      const rightOverflow = selectedRect.right - scrollerRect.right;

      if (leftOverflow < edgePadding) {
        scroller.scrollBy({
          left: leftOverflow - edgePadding,
          behavior: 'smooth',
        });
      } else if (rightOverflow > -edgePadding) {
        scroller.scrollBy({
          left: rightOverflow + edgePadding,
          behavior: 'smooth',
        });
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [weeks]);

  useEffect(() => {
    if (!showDrawsExplained) return;

    setIsDrawsExplainedExiting(false);
    setIsDrawsExplainedEntered(false);

    const frame = window.requestAnimationFrame(() => setIsDrawsExplainedEntered(true));

    return () => window.cancelAnimationFrame(frame);
  }, [showDrawsExplained]);

  useEffect(() => () => {
    if (drawsExplainedCloseTimeoutRef.current) {
      window.clearTimeout(drawsExplainedCloseTimeoutRef.current);
    }
  }, []);

  const closeDrawsExplained = () => {
    if (isDrawsExplainedExiting) return;

    setIsDrawsExplainedExiting(true);
    setIsDrawsExplainedEntered(false);

    if (drawsExplainedCloseTimeoutRef.current) {
      window.clearTimeout(drawsExplainedCloseTimeoutRef.current);
    }

    drawsExplainedCloseTimeoutRef.current = window.setTimeout(() => {
      drawsExplainedCloseTimeoutRef.current = null;
      setShowDrawsExplained(false);
      setIsDrawsExplainedExiting(false);
    }, drawsExplainedTransitionMs);
  };

  // Calculate total draws per week
  const calculateDrawsPerWeek = () => {
    return draws.reduce(
      (total, day) => total + day.options.filter((option) => day.selected[option.key]).length,
      0
    );
  };

  const drawsPerWeek = calculateDrawsPerWeek();
  const usesSingleDrawCards = draws.every((day) => day.options.length === 1);
  const totalDraws = drawsPerWeek * weeks;

  const getLineStake = (lineId: string) => {
    const parsedStake = Number.parseFloat(lineStakes[lineId] || '1.00');
    return Number.isFinite(parsedStake) ? parsedStake : 0;
  };

  // Calculate total stake across all line stakes.
  const calculateTotalStake = () => {
    return lines.reduce((total, line) => total + getLineStake(line.id) * totalDraws, 0);
  };

  const hasBonusOddsForLine = (line: Line) => Boolean(line.bonusBall) && activeLotterySchedule.supportsBonus;

  const getOddsForLine = (line: Line) => {
    const matchCount = Math.min(line.numbers.length, 5);
    return getOddsForMatch(activeTab, matchCount, hasBonusOddsForLine(line));
  };

  const formatPrize = (amount: number) => {
    if (amount >= 1000) {
      const thousands = amount / 1000;
      const formattedThousands = Number.isInteger(thousands) ? thousands.toFixed(0) : thousands.toFixed(1);
      return `£${formattedThousands}k`;
    }

    return Number.isInteger(amount) ? `£${amount.toFixed(0)}` : `£${amount.toFixed(2)}`;
  };

  const handleIncrementLines = () => {
    const newLineId = getNextLineId(lines);
    setLines([...lines, { id: newLineId, numbers: [] }]);
    setLineStakes((stakes) => ({ ...stakes, [newLineId]: '1.00' }));
  };

  const handleClearAllLines = () => {
    setLines([createEmptyLine('1')]);
    setLineStakes({ '1': '1.00' });
  };

  const handleDeleteLine = (id: string) => {
    if (lines.length > 1) {
      setLines((currentLines) => ensureTrailingEmptyLine(currentLines.filter((line) => line.id !== id)));
      setLineStakes((stakes) => {
        const nextStakes = { ...stakes };
        delete nextStakes[id];
        return nextStakes;
      });
    }
  };

  const handleToggleDrawOption = (dayIndex: number, optionKey: string) => {
    setDraws((prevDraws) => {
      return prevDraws.map((day, index) =>
        index === dayIndex
          ? {
              ...day,
              selected: {
                ...day.selected,
                [optionKey]: !day.selected[optionKey],
              },
            }
          : day
      );
    });
  };

  const handleSelectAllDraws = () => {
    setDraws((prevDraws) =>
      prevDraws.map((day) => ({
        ...day,
        selected: Object.fromEntries(day.options.map((option) => [option.key, true])),
      }))
    );
  };

  const handleClearAllDraws = () => {
    setDraws((prevDraws) =>
      prevDraws.map((day) => ({
        ...day,
        selected: Object.fromEntries(day.options.map((option) => [option.key, false])),
      }))
    );
  };

  const getNearestDrawSelection = () => {
    const nextDraw = getNextDraw(activeLotterySchedule);
    if (!nextDraw) return [];

    const drawConfigDay = activeLotteryConfig.days.find((day) => day.day === longWeekdayByShort[nextDraw.weekday]);
    const drawOption = drawConfigDay?.options.find((option) => option.time === nextDraw.time);

    return [
      {
        day: longWeekdayByShort[nextDraw.weekday],
        label: nextDraw.time,
        options: [drawOption?.summaryLabel ?? nextDraw.time],
      },
    ];
  };

  const handleNumbersPicked = (
    lineId: string,
    numbers: number[],
    bonusBall?: number,
    action: 'confirm' | 'play-next-draw' = 'confirm',
  ) => {
    const stake = getLineStake(lineId);

    if (action === 'play-next-draw' && numbers.length > 0 && stake > 0) {
      addEntry({
        id: `manual-${activeTab}-${lineId}-${Date.now()}`,
        type: 'manual',
        lottery: activeLotteryTitle,
        lotteryAbbrev: activeLotteryTitle.split(' ').map((word) => word[0]).join('').slice(0, 2).toUpperCase(),
        lines: [
          {
            numbers,
            bonusBall: activeLotterySchedule.supportsBonus ? bonusBall : undefined,
            stake,
          },
        ],
        draws: getNearestDrawSelection(),
        duration: weeks,
      });
      setIsBetslipExpanded(true);
      setLines((prevLines) =>
        ensureTrailingEmptyLine(
          prevLines.map((line) =>
            line.id === lineId ? { ...line, numbers: [], bonusBall: undefined } : line
          )
        )
      );
    } else {
      setLines((prevLines) =>
        ensureTrailingEmptyLine(
          prevLines.map((line) =>
            line.id === lineId ? { ...line, numbers, bonusBall: activeLotterySchedule.supportsBonus ? bonusBall : undefined } : line
          )
        )
      );
    }
    setShowNumberPicker(null);
  };

  const getSelectedDrawsSummary = () => {
    const summary: string[] = [];
    draws.forEach((day) => {
      const selected = day.options
        .filter((option) => day.selected[option.key])
        .map((option) => option.summaryLabel);

      if (selected.length > 0) {
        summary.push(`${day.day.substring(0, 3)}: (${selected.join(', ')})`);
      }
    });
    return summary.join(', ');
  };

  const getSelectedDrawLines = () => {
    const drawLines: string[] = [];
    draws.forEach((day) => {
      const dayLabel = day.day.substring(0, 3);
      day.options.forEach((option) => {
        if (day.selected[option.key]) {
          drawLines.push(`${option.summaryLabel} ${dayLabel}, ${day.date}, ${option.time}`);
        }
      });
    });
    return drawLines;
  };

  const getDurationStartLabel = () => {
    const selectedDay = draws.find((day) =>
      day.options.some((option) => day.selected[option.key])
    );
    const startDay = selectedDay ?? draws[0];

    if (!startDay) return 'the next draw';

    return `${startDay.day.substring(0, 3)}, ${startDay.date} 2026`;
  };

  const getDurationLabel = () =>
    `${weeks} ${weeks === 1 ? 'week' : 'weeks'} (starting ${getDurationStartLabel()})`;

  const formatLineNumbers = (line: Line, lineNumber: number) => {
    if (line.numbers.length === 0) return `L${lineNumber}: Pick your numbers`;
    const numberText = line.numbers.join(' | ');
    return `L${lineNumber}: ${numberText}${line.bonusBall && activeLotterySchedule.supportsBonus ? ' | + Bonus ball' : ''}`;
  };

  const getEntryLineCount = (entry: BetslipEntry) =>
    entry.type === 'quick-pick'
      ? entry.lines
      : entry.lines.filter((line) => line.numbers.length > 0).length;

  const globalBetslipCount = entries.reduce((count, entry) => count + getEntryLineCount(entry), 0);

  const getEntryDrawsCount = (entry: BetslipEntry) =>
    entry.draws.reduce((count, draw) => count + draw.options.length, 0);

  const formatEntryDraws = (entry: BetslipEntry) => {
    if (entry.draws.length === 0) return ['Select draws to continue'];

    return entry.draws.map((draw) => {
      const options = draw.options.length > 0 ? ` (${draw.options.join(', ')})` : '';
      return `${draw.day}${options}`;
    });
  };

  const getEntryDurationLabel = (entry: BetslipEntry) =>
    `${entry.duration} ${entry.duration === 1 ? 'week' : 'weeks'}`;

  const formatEntryLineNumbers = (
    entry: Extract<BetslipEntry, { type: 'manual' }>,
    line: Extract<BetslipEntry, { type: 'manual' }>['lines'][number],
    lineNumber: number,
  ) => {
    const numberText = line.numbers.join(' | ');
    return `L${lineNumber}: ${numberText}${line.bonusBall ? ' | + Bonus ball' : ''}`;
  };

  const getEntryLineOdds = (
    entry: Extract<BetslipEntry, { type: 'manual' }>,
    line: Extract<BetslipEntry, { type: 'manual' }>['lines'][number],
  ) => {
    const lotteryTabId = lotteryTabIdByTitle[entry.lottery] ?? activeTab;
    const supportsEntryBonus = lotterySchedules[lotteryTabId]?.supportsBonus ?? false;
    return getOddsForMatch(lotteryTabId, Math.min(line.numbers.length, 5), Boolean(line.bonusBall) && supportsEntryBonus);
  };

  const getSelectedDraws = () =>
    draws
      .map((day) => {
        const selectedOptions = day.options.filter((option) => day.selected[option.key]);

        return {
          day: day.day,
          label: selectedOptions[0]?.time ?? '',
          options: selectedOptions.map((option) => option.summaryLabel),
        };
      })
      .filter((day) => day.options.length > 0);

  const filledLinesCount = lines.filter((line) => line.numbers.length > 0).length;
  const canPlaceBet = totalDraws > 0 && lines.some((line) => line.numbers.length > 0 && getLineStake(line.id) > 0);

  const handleAddToBetslip = () => {
    if (!canPlaceBet) return;

    const betslipLines = lines
      .filter((line) => line.numbers.length > 0 && getLineStake(line.id) > 0)
      .map((line) => ({
        numbers: line.numbers,
        bonusBall: activeLotterySchedule.supportsBonus ? line.bonusBall : undefined,
        stake: getLineStake(line.id),
      }));

    addEntry({
      id: `manual-${Date.now()}`,
      type: 'manual',
      lottery: activeLotteryTitle,
      lotteryAbbrev: activeLotteryTitle.split(' ').map((word) => word[0]).join('').slice(0, 2).toUpperCase(),
      lines: betslipLines,
      draws: getSelectedDraws(),
      duration: weeks,
    });
    setLines([createEmptyLine('1')]);
    setLineStakes({ '1': '1.00' });
    setIsBetslipExpanded(true);
  };

  return (
    <div className="w-full max-w-[375px] mx-auto bg-gray-50 min-h-screen pb-[190px]">
      {/* Header */}
      <div className="flex-shrink-0 relative">
        <IrishLotteryHeader onBack={() => navigate('/')} activeBreadcrumb={activeBreadcrumbTitle} />
        <button
          type="button"
          aria-label="Back to Lotteries"
          onClick={() => navigate('/')}
          className="absolute left-[12px] top-[56px] z-10 h-[24px] w-[320px] cursor-pointer"
        />
      </div>

      {/* Lottery Selector Tabs */}
      <div
        className="scrollbar-hide flex w-full items-start overflow-x-auto overflow-y-hidden border-b border-t border-white bg-white pt-1"
        data-node-id="1308:19833"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            ref={activeTab === tab.id ? activeTabButtonRef : undefined}
            onClick={() => {
              setActiveTab(tab.id);
              navigate(tab.route);
            }}
            className={`flex h-11 shrink-0 items-center justify-center border-b-2 px-3 text-center text-[14px] leading-4 transition ${
              activeTab === tab.id
                ? 'border-[#0b52b1] font-semibold text-[#0b52b1]'
                : 'border-transparent font-normal text-[#546d91] hover:text-[#183060]'
            }`}
            data-node-id={tab.id === 'irish-lotto' ? '1308:19835' : undefined}
          >
            {carouselLabelByTab[tab.id] ?? tab.label}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="px-4 py-4 space-y-4">
        {/* Featured Lottery Header */}
        <IrishLottoHeaderCard
          variant={headerVariantByTab[activeTab] ?? 'irish-lotto'}
          onResultsClick={() => setShowPreviousResults(true)}
        />

        {/* 1. Add Your Lines */}
        <div
          className="flex flex-col gap-3 rounded-[8px] bg-white px-3 py-6 shadow-[0_0_6px_0_rgba(23,31,51,0.1)]"
          data-node-id="1283:14183"
        >
          <div className="flex h-7 w-full items-center gap-[30px] pb-2 pr-1">
            <div className="flex min-w-0 flex-1 items-center gap-1.5">
              <h3 className="text-[16px] font-semibold leading-5 text-[#183060]">1. Add your lines</h3>
              <p className="text-[16px] font-semibold leading-5 text-[#183060]">({lines.filter((line) => line.numbers.length > 0).length})</p>
            </div>
            <button
              type="button"
              onClick={handleClearAllLines}
              className="flex shrink-0 items-center justify-end gap-3 text-[#0b52b1]"
            >
              <span className="text-[12px] font-semibold leading-4">Clear all</span>
              <X className="size-[10px]" strokeWidth={2.4} />
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {lines.map((line, index) => {
              const hasNumbers = line.numbers.length > 0;
              const lineOdds = getOddsForLine(line);
              const hasBonusOdds = hasBonusOddsForLine(line);

              return (
                <div
                  key={line.id}
                  className="flex flex-col gap-[6px] overflow-hidden rounded-[8px] bg-[#f8f9fa] p-3"
                  data-node-id={index === 0 ? '1283:14194' : '1283:14249'}
                >
                  <div className="flex w-full items-center gap-2 pr-0.5">
                    <button
                      type="button"
                      onClick={() => handleDeleteLine(line.id)}
                      disabled={lines.length <= 1}
                      className="flex size-[30px] shrink-0 items-center justify-center rounded-[10px] text-[#183060] disabled:cursor-default disabled:opacity-100"
                      aria-label={`Remove line ${index + 1}`}
                    >
                      <CircleMinus className="size-[14px] shrink-0" strokeWidth={1.8} />
                    </button>
                    <p className="min-w-0 flex-1 text-[14px] font-semibold leading-4 text-[#183060]">Line {index + 1}</p>
                  </div>

                  {hasNumbers ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setShowNumberPicker(line.id)}
                        className="flex h-14 w-full items-center rounded-[4px] bg-white px-2 py-3 text-left"
                        data-node-id="1283:14203"
                      >
                        <div className="flex min-w-0 flex-1 items-center gap-[6px]">
                          {line.numbers.map((num) => (
                            <SelectedNumberBall key={num} number={num} color={selectedBallColor} />
                          ))}
                        </div>
                    {line.bonusBall && activeLotterySchedule.supportsBonus && (
                          <>
                            <div className="mx-3 h-8 w-px bg-[#e4e4e4]" />
                            <div className="flex items-center gap-2 text-[12px] font-semibold leading-4 text-[#183060]">
                              <span>Bonus ball</span>
                              <Check className="size-[10px]" strokeWidth={2.4} />
                            </div>
                          </>
                        )}
                      </button>

                      <div className="flex items-center justify-center rounded-[4px] bg-white p-2">
                        <span className="text-[12px] leading-4 text-[#183060]">Stake:</span>
                        <div className="mx-3 h-5 w-px bg-[#e4e4e4]" />
                        <span className="ml-auto text-[14px] font-semibold leading-4 text-[#183060]">£1.00</span>
                      </div>

                      <div className="flex items-start gap-2.5 px-2 py-1.5 text-[10px] leading-3 text-[#546d91]">
                        <span className="shrink-0 whitespace-nowrap">
                          {hasBonusOdds ? 'Bonus Ball odds' : 'Odds'}: {lineOdds?.label ?? '-'}
                        </span>
                        <span className="ml-auto whitespace-nowrap">Potential max return:</span>
                        <span>{lineOdds?.value ? formatPrize(lineOdds.value) : '-'}</span>
                      </div>

                      <div className="h-px w-full bg-[#e4e4e4]" />

                      <div className="flex w-full items-center justify-center gap-2" data-node-id="1283:14239">
                        <button
                          type="button"
                          className="flex min-w-0 flex-1 items-center gap-[6px] rounded-[10px] px-2.5 py-2 text-[12px] leading-4 text-[#0b52b1]"
                        >
                          <span className="whitespace-nowrap">Share number</span>
                          <Share2 className="size-[10px] shrink-0" strokeWidth={2} />
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowNumberPicker(line.id)}
                          className="flex min-w-0 flex-1 items-center justify-end rounded-[10px] px-2.5 py-2 text-[12px] leading-4 text-[#0b52b1]"
                        >
                          <span className="flex shrink-0 items-center justify-end gap-[6px]">
                            <span className="whitespace-nowrap">Edit</span>
                            <Pencil className="size-[10px] shrink-0" strokeWidth={2} />
                          </span>
                        </button>
                      </div>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setShowNumberPicker(line.id)}
                      className="flex w-full items-center justify-center rounded-[4px] border border-[#0b52b1] px-4 py-2.5 text-[12px] leading-4 text-[#183060]"
                      data-node-id="1283:14257"
                    >
                      Pick your numbers
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex w-full items-center justify-center">
            <button
              type="button"
              onClick={handleIncrementLines}
              className="flex items-center gap-[6px] rounded-[10px] px-2.5 py-2 text-[12px] font-semibold leading-4 text-[#0b52b1]"
              data-node-id="1283:14259"
            >
              <span>Add line</span>
              <Plus className="size-[10px]" strokeWidth={2.2} />
            </button>
          </div>
        </div>

        {/* 2. Choose Your Draws */}
        <div
          className="flex flex-col gap-3 rounded-[8px] bg-white px-3 py-6 shadow-[0_0_6px_0_rgba(23,31,51,0.1)]"
          data-node-id="1283:14868"
        >
          <div className="flex h-7 w-full items-center gap-[30px] pb-2">
            <div className="flex min-w-0 flex-1 items-center gap-1.5">
              <h3 className="shrink-0 whitespace-nowrap text-[16px] font-semibold leading-5 text-[#183060]">
                2. Choose your draws ({drawsPerWeek})
              </h3>
            </div>
            <button
              type="button"
              onClick={handleClearAllDraws}
              className="flex shrink-0 items-center justify-end gap-[6px] rounded-[10px] py-2 pl-2.5 text-[#0b52b1]"
            >
              <span className="text-[12px] font-semibold leading-4">Clear all</span>
              <X className="size-[10px]" strokeWidth={2.4} />
            </button>
          </div>

          <div className="w-full py-3" data-node-id="1283:14881">
            <div
              className="flex w-full items-center gap-2 rounded-[4px] border border-[rgba(42,95,201,0.5)] bg-[rgba(235,241,255,0.5)] px-3 py-[14px] text-left"
              data-node-id="1283:14882"
            >
              <button
                type="button"
                onClick={() => setShowDrawsExplained(true)}
                className="flex min-w-0 flex-1 items-center gap-2 text-left"
              >
                <Info className="size-4 shrink-0 text-[#2a5fc9]" strokeWidth={1.8} />
                <span className="min-w-0 flex-1 text-[12px] leading-4 tracking-[0.048px] text-[#2a5fc9]">Draws explained</span>
              </button>
              <button
                type="button"
                onClick={() => setShowDrawsExplained(true)}
                className="shrink-0 text-[12px] leading-5 text-[#0b52b1]"
              >
                More info
              </button>
            </div>
          </div>

          <div className="rounded-[4px] bg-[#f8f9fa] p-3" data-node-id="1283:14890">
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center py-1">
                <p className="min-w-0 flex-1 text-[12px] font-semibold leading-4 text-[#183060]">Upcoming draws</p>
                <button
                  type="button"
                  onClick={handleSelectAllDraws}
                  className="shrink-0 text-[12px] font-semibold leading-4 text-[#0b52b1]"
                >
                  Select all
                </button>
              </div>

              <div
                className={`scrollbar-hide flex gap-2 overflow-x-auto overflow-y-hidden ${
                  activeTab === 'uk-49s' ? '-mr-3' : ''
                }`}
                data-node-id="1283:14899"
              >
                {draws.map((day, dayIndex) => {
                  const dayHasSelection = day.options.some((option) => day.selected[option.key]);
                  const cardWidthClass =
                    activeTab === 'french-lotto'
                      ? 'min-w-0 flex-1'
                      : activeTab === 'polish-lotto'
                      ? 'min-w-0 flex-1'
                      : activeTab === 'daily-millions'
                      ? 'w-[126px] shrink-0'
                      : activeTab === 'uk-49s'
                      ? 'w-[126px] shrink-0'
                      : usesSingleDrawCards && draws.length > 2
                      ? 'w-[143px] shrink-0'
                      : draws.length > 2
                      ? 'w-[93px] shrink-0'
                      : draws.length === 1
                      ? 'w-full min-w-0'
                      : 'min-w-0 flex-1';

                  return (
                    <div
                      key={day.id}
                      className={`flex ${cardWidthClass} flex-col gap-2 overflow-hidden rounded-[4px] bg-white px-2 py-3 transition-shadow ${
                        dayHasSelection ? 'shadow-[0_0_12px_1px_rgba(23,31,51,0.1)]' : ''
                      }`}
                      data-node-id={dayIndex === 0 ? '1283:14900' : '1283:14914'}
                    >
                      <div className="flex w-full flex-col items-center gap-2">
                        <div className="flex flex-col items-center gap-1.5">
	                          <div className="py-1">
	                            <p className="text-center text-[12px] font-semibold leading-4 text-[#183060]">{day.day}</p>
	                          </div>
	                          <p className="text-center text-[12px] leading-4 text-[#546d91]">{day.date}</p>
	                        </div>
	                        <div className="h-px w-full bg-[#e4e4e4]" />
	                      </div>

	                      <div className="flex w-full flex-col">
	                        {day.options.map((option) => {
	                          const selected = day.selected[option.key];

	                          return (
	                            <div key={option.key} className="flex h-10 w-full items-center justify-center px-1 py-1">
	                              <button
	                                type="button"
                                onClick={() => handleToggleDrawOption(dayIndex, option.key)}
                                className={`flex h-full w-full min-w-0 items-center justify-center rounded-[4px] border px-1 text-center text-[12px] leading-4 transition ${
                                  selected
                                    ? 'border-[#0b52b1] bg-[#0b52b1] text-white'
                                    : 'border-[#e4e4e4] bg-white text-[#546d91] hover:border-[#0b52b1] hover:text-[#0b52b1]'
                                }`}
                              >
                                <span className="whitespace-nowrap">{usesSingleDrawCards ? option.time : option.label}</span>
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 3. How Many Weeks */}
        <div
          data-node-id="1283:14928"
          className="flex flex-col items-start gap-3 overflow-hidden rounded-[8px] bg-white px-3 py-[22px] shadow-[0_0_6px_1px_rgba(23,31,51,0.1)]"
        >
          <div className="flex h-7 w-full items-center gap-[30px] pb-2" data-node-id="1283:14929">
            <div className="flex min-w-0 flex-1 items-center gap-1.5">
              <h3 className="shrink-0 whitespace-nowrap text-[16px] font-semibold leading-5 text-[#183060]">3. How many weeks?</h3>
              <p className="text-[16px] font-semibold leading-5 text-[#183060]">({weeks})</p>
            </div>
            <div className="flex h-full w-[99px] shrink-0 items-center justify-end" data-node-id="1283:14935">
              <button
                type="button"
                onClick={() => setWeeks(1)}
                className="flex w-[99px] items-center justify-center gap-[6px] rounded-[10px] py-2 pl-2.5 text-[#0b52b1]"
                data-node-id="1283:14936"
              >
                <span className="text-[12px] font-semibold leading-4">Clear all</span>
                <X className="size-[10px]" strokeWidth={2.4} />
              </button>
            </div>
          </div>

          <div
            ref={weeksScrollerRef}
            className="scrollbar-hide flex w-full items-center overflow-x-auto overflow-y-hidden rounded-[4px] bg-[#f8f9fa] p-3"
            data-node-id="1299:12802"
          >
            {weekOptions.map((w) => {
              const selected = weeks === w;

              return (
                <div
                  key={w}
                  ref={selected ? selectedWeekRef : undefined}
                  className="flex h-10 w-[52px] shrink-0 items-center justify-center px-1 py-1"
                  data-node-id={selected ? '1299:12865' : undefined}
                >
                  <button
                    type="button"
                    onClick={() => setWeeks(w)}
                    className={`flex h-full w-full min-w-0 items-center justify-center rounded-[4px] py-1 text-center text-[12px] font-normal leading-4 transition ${
                      selected
                        ? 'bg-[#0b52b1] text-white'
                        : 'border border-[#e4e4e4] bg-white text-[#546d91] hover:border-[#0b52b1] hover:text-[#0b52b1]'
                    }`}
                  >
                    {w}w
                  </button>
                </div>
              );
            })}
          </div>

          <div className="flex w-full items-center justify-center" data-node-id="1283:14948">
            <button
              type="button"
              onClick={() => setWeeks((currentWeeks) => Math.min(20, currentWeeks + 1))}
              className="flex items-center gap-[6px] rounded-[10px] px-2.5 py-2 text-[12px] font-semibold leading-4 text-[#0b52b1]"
              data-node-id="1283:14949"
            >
              <span>Add weeks</span>
              <Plus className="size-[10px]" strokeWidth={2.2} />
            </button>
          </div>
        </div>

        <div className="flex w-full flex-col items-start px-3" data-node-id="1356:23332">
          <button
            type="button"
            onClick={handleAddToBetslip}
            disabled={!canPlaceBet}
            className="flex w-full items-start justify-center rounded-[4px] border border-[#0b52b1] px-4 py-2.5 text-center text-[12px] font-normal leading-4 text-[#183060] transition hover:bg-white disabled:cursor-not-allowed disabled:border-[#c7d7f7] disabled:text-[#9ba9c1]"
            data-node-id="1356:23333"
          >
            Add to betslip
          </button>
        </div>

        {isBetslipExpanded && (
          <button
            type="button"
            aria-label="Collapse betslip"
            onClick={() => setIsBetslipExpanded(false)}
            className="fixed inset-0 z-[25] bg-[#0b173c]/25"
          />
        )}

        {globalBetslipCount > 0 && (
        <div
          className={`fixed bottom-[58px] left-1/2 z-40 w-full max-w-[375px] -translate-x-1/2 overflow-hidden rounded-t-[12px] ${
            isBetslipExpanded
              ? 'max-h-[calc(100vh-58px)] overflow-y-auto bg-[#f8f9fa] shadow-[0_-8px_28px_rgba(23,31,51,0.18)]'
              : ''
          }`}
        >
        {/* Betslip Summary */}
        <div
          className="overflow-hidden rounded-t-[12px] bg-[#f8f9fa] shadow-[0_0_6px_1px_rgba(23,31,51,0.1)]"
          data-node-id="1297:12729"
        >
          <div
            className="flex flex-col gap-2 rounded-t-[12px] border-b border-[#e4e4e4] bg-white px-3 pb-3 pt-2"
            data-node-id={isBetslipExpanded ? '1297:12798' : '1297:12701'}
          >
            <div className="flex w-full justify-center">
              <div className="h-1 w-9 rounded-[29px] bg-[#546d91]" />
            </div>
            <div className="flex w-full items-end gap-2">
              <div className="flex flex-col items-start gap-1">
                <p className="text-[16px] font-semibold leading-5 text-[#183060]">Betslip</p>
                <div className="flex items-center gap-1">
                  <span className="flex size-4 items-center justify-center rounded-[4px] bg-[#546d91] text-[10px] font-bold leading-3 text-white">
                    {globalBetslipCount}
                  </span>
                  <span className="text-[12px] leading-4 text-[#546d91]">Selection</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsBetslipExpanded((isExpanded) => !isExpanded)}
                aria-expanded={isBetslipExpanded}
                aria-controls="irish-lottery-betslip-content"
                className="flex min-w-0 flex-1 items-center justify-end self-stretch text-[#183060]"
              >
                {isBetslipExpanded ? (
                  <ChevronUp className="size-4" strokeWidth={2.4} />
                ) : (
                  <ChevronDown className="size-4" strokeWidth={2.4} />
                )}
              </button>
            </div>
          </div>

          <div
            id="irish-lottery-betslip-content"
            className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
              isBetslipExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="min-h-0 overflow-hidden">
          <div className="flex w-full flex-col items-start gap-4 px-3 pb-6 pt-4" data-node-id="1297:12731">
            <p className="w-full text-[16px] font-semibold leading-5 text-[#183060]" data-node-id="1297:12732">
              Lotteries
            </p>
            <div className="w-full overflow-hidden rounded-[4px] border border-[#e4e4e4]" data-node-id="1297:12733">
              {entries.length === 0 ? (
                <div className="bg-white px-3 py-6 text-center text-[12px] font-semibold leading-4 text-[#546d91]">
                  Add selections from any lotto to see them here
                </div>
              ) : (
                entries.flatMap((entry) => {
                  const entryDrawsCount = getEntryDrawsCount(entry);
                  const entryDrawLines = formatEntryDraws(entry);

                  if (entry.type === 'quick-pick') {
                    const entryTotal = entry.lines * entry.stake * entryDrawsCount * entry.duration;

                    return (
                      <div
                        key={entry.id}
                        className="flex w-full items-start gap-2 border-b border-[#e4e4e4] bg-white p-3 last:border-b-0"
                      >
                        <div className="flex h-[73px] shrink-0 items-center">
                          <button
                            type="button"
                            onClick={() => removeEntry(entry.id)}
                            className="flex size-[14px] items-center justify-center rounded-full border border-[#546d91] text-[#546d91]"
                            aria-label={`Remove ${entry.lottery} quick pick`}
                          >
                            <X className="size-[9px]" strokeWidth={2} />
                          </button>
                        </div>
                        <div className="flex min-w-0 flex-1 flex-col gap-3">
                          <div className="flex w-full items-start">
                            <p className="min-w-0 flex-1 whitespace-nowrap text-[14px] font-bold leading-4 text-[#183060]">
                              {entry.lottery}
                            </p>
                            <p className="shrink-0 text-right text-[14px] font-bold leading-4 text-[#183060]">Quick pick</p>
                          </div>
                          <div className="flex w-full min-w-0 items-start gap-[3px]">
                            <div className="flex min-w-0 flex-1 flex-col items-start gap-1 text-[#546d91]">
                              <p className="w-full text-[12px] font-normal leading-4">
                                {entry.lines} quick pick {entry.lines === 1 ? 'line' : 'lines'}
                              </p>
                              <p className="w-full text-[12px] font-normal leading-4">Draws:</p>
                              {entryDrawLines.map((drawLine) => (
                                <p key={drawLine} className="w-full text-[10px] font-semibold leading-3">
                                  {drawLine}
                                </p>
                              ))}
                              <p className="w-full text-[12px] font-normal leading-4">Duration:</p>
                              <p className="w-full text-[10px] font-semibold leading-3">{getEntryDurationLabel(entry)}</p>
                            </div>
                            <div className="flex w-[87px] shrink-0 flex-col items-end gap-1">
                              <div className="flex w-full items-center justify-between rounded-[4px] border border-[#e4e4e4] bg-white px-3 py-[14px]">
                                <span className="text-[12px] leading-4 text-[#546d91]">£</span>
                                <span className="text-[12px] leading-4 text-[#546d91]">{entry.stake.toFixed(2)}</span>
                              </div>
                              <div className="flex items-center gap-0.5 whitespace-nowrap text-right text-[10px] leading-3">
                                <span className="font-semibold text-[#546d91]">Returns:</span>
                                <span className="font-bold text-[#147d47]">-</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex w-full min-w-0 flex-wrap items-center justify-end gap-x-0.5 gap-y-1 text-right text-[10px] leading-3">
                            <span className="font-semibold text-[#546d91]">
                              Total stake ({entryDrawsCount} draws x {entry.duration} weeks):
                            </span>
                            <span className="font-bold text-[#183060]">£{entryTotal.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return entry.lines
                    .map((line, lineIndex) => ({ line, lineIndex }))
                    .filter(({ line }) => line.numbers.length > 0)
                    .map(({ line, lineIndex }, index) => {
                      const lineOdds = getEntryLineOdds(entry, line);
                      const lineTotal = line.stake * entryDrawsCount * entry.duration;
                      const returns = line.stake * (lineOdds?.value ?? 0);

                      return (
                        <div
                          key={`${entry.id}-${index}`}
                          className="flex w-full items-start gap-2 border-b border-[#e4e4e4] bg-white p-3 last:border-b-0"
                          data-node-id={index === 0 ? '1297:12734' : '1297:12764'}
                        >
                          <div className="flex h-[73px] shrink-0 items-center">
                            <button
                              type="button"
                              onClick={() => removeEntryLine(entry.id, lineIndex)}
                              className="flex size-[14px] items-center justify-center rounded-full border border-[#546d91] text-[#546d91]"
                              aria-label={`Remove ${entry.lottery} line ${index + 1}`}
                            >
                              <X className="size-[9px]" strokeWidth={2} />
                            </button>
                          </div>

                          <div className="flex min-w-0 flex-1 flex-col gap-3">
                            <div className="flex w-full items-start">
                              <p className="min-w-0 flex-1 whitespace-nowrap text-[14px] font-bold leading-4 text-[#183060]">
                                {entry.lottery}
                              </p>
                              <p className="shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right text-[14px] font-bold leading-4 text-[#183060]">
                                {lineOdds?.label ?? '-'}
                              </p>
                            </div>

                            <div className="flex w-full min-w-0 items-start gap-[3px]">
                              <div className="flex min-w-0 flex-1 flex-col items-start gap-1 text-[#546d91]">
                                <p className="w-full text-[12px] font-normal leading-4">
                                  {formatEntryLineNumbers(entry, line, index + 1)}
                                </p>
                                <p className="w-full text-[12px] font-normal leading-4">Draws:</p>
                                {entryDrawLines.map((drawLine) => (
                                  <p key={drawLine} className="w-full text-[10px] font-semibold leading-3">
                                    {drawLine}
                                  </p>
                                ))}
                                <p className="w-full text-[12px] font-normal leading-4">Duration:</p>
                                <p className="w-full text-[10px] font-semibold leading-3">
                                  {getEntryDurationLabel(entry)}
                                </p>
                              </div>

                              <div className="flex w-[87px] shrink-0 flex-col items-start gap-[3px]">
                                <div className="flex w-[87px] flex-col items-end gap-1">
                                  <div className="flex w-full items-center justify-between rounded-[4px] border border-[#e4e4e4] bg-white px-3 py-[14px]">
                                    <span className="text-[12px] leading-4 text-[#546d91]">£</span>
                                    <span className="text-[12px] leading-4 text-[#546d91]">{line.stake.toFixed(2)}</span>
                                  </div>
                                  <div className="flex items-center gap-0.5 whitespace-nowrap text-right text-[10px] leading-3">
                                    <span className="font-semibold text-[#546d91]">Returns:</span>
                                    <span className="font-bold text-[#147d47]">{returns ? formatPrize(returns) : '-'}</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="flex w-full min-w-0 flex-wrap items-center justify-end gap-x-0.5 gap-y-1 text-right text-[10px] leading-3">
                              <span className="font-semibold text-[#546d91]">
                                Total stake ({entryDrawsCount} draws x {entry.duration} weeks):
                              </span>
                              <span className="font-bold text-[#183060]">£{lineTotal.toFixed(2)}</span>
                            </div>
                          </div>
                        </div>
                      );
                    });
                })
              )}
            </div>

            <div className="flex w-full flex-wrap items-center justify-center gap-x-2 gap-y-2 pt-2 text-[#0b52b1]" data-node-id="1297:12794">
              <button
                type="button"
                onClick={clearAll}
                className="flex items-center gap-1 text-[12px] font-bold leading-4"
              >
                <span className="size-[10px] rounded-[2px] border border-dotted border-current" />
                <span>Clear Betslip</span>
              </button>
              <div className="h-4 w-px bg-[#e4e4e4]" />
              <button type="button" className="flex items-center gap-1 text-[12px] font-bold leading-4">
                <span className="size-[10px] rounded-[2px] border border-dotted border-current" />
                <span>Edit Odds Format & More</span>
              </button>
            </div>
          </div>
            </div>
          </div>
        </div>

        {/* Place Bet CTA */}
        <div
          className={`${isBetslipExpanded ? 'flex' : 'hidden'} items-center justify-center bg-[#f8f9fa] px-3 pb-6 pt-3`}
          data-node-id="1073:40880"
        >
          <button
            type="button"
            onClick={handleAddToBetslip}
            disabled={globalBetslipCount === 0 && !canPlaceBet}
            className="flex h-9 w-[200px] items-start justify-center rounded-[4px] border border-[#0b52b1] px-4 py-2.5 text-center text-[12px] font-normal leading-4 text-[#183060] transition hover:bg-white disabled:cursor-not-allowed disabled:border-[#c7d7f7] disabled:text-[#9ba9c1]"
            data-node-id="1073:40881"
          >
            Place bet
          </button>
        </div>
        </div>
        )}
      </div>

      <BottomNav betslipCountOverride={globalBetslipCount} />

      {/* Number Picker Modal */}
      {showNumberPicker && (
        <NumberPickerModal
          isOpen={!!showNumberPicker}
          onClose={() => setShowNumberPicker(null)}
          onConfirm={(numbers, bonusBall, action) => handleNumbersPicked(showNumberPicker, numbers, bonusBall, action)}
          selectedNumbers={lines.find((l) => l.id === showNumberPicker)?.numbers || []}
          selectedBonusBall={lines.find((l) => l.id === showNumberPicker)?.bonusBall}
          requiredCount={5}
          maxNumber={activeLotterySchedule.ballCount}
          lineNumber={parseInt(showNumberPicker)}
          selectedBallColor={selectedBallColor}
          lotteryId={activeTab}
          supportsBonus={activeLotterySchedule.supportsBonus}
        />
      )}

      {showDrawsExplained && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/35 px-9 ${
            isDrawsExplainedExiting ? 'pointer-events-none' : ''
          }`}
          role="presentation"
          onClick={closeDrawsExplained}
        >
          <div
            className={`max-h-[88vh] w-full max-w-[375px] overflow-hidden rounded-t-[12px] bg-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out ${
              isDrawsExplainedEntered && !isDrawsExplainedExiting ? 'translate-y-0' : 'translate-y-[110vh]'
            }`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="draws-explained-title"
            data-node-id="1268:13463"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className="flex items-start gap-0 rounded-t-[12px] border-b border-[#e4e4e4] bg-white pb-[13px] pl-3 pr-0 pt-6"
              data-node-id="1006:29555"
            >
              <p
                id="draws-explained-title"
                className="h-[22px] min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-[18px] font-semibold leading-[22px] text-[#183060]"
              >
                Draws explained
              </p>
              <ModalCloseButton onClick={closeDrawsExplained} />
            </div>

            <div className="max-h-[calc(88vh-59px)] overflow-y-auto p-3" data-node-id="1268:13465">
              <div className="flex flex-col gap-3 py-3" data-node-id="1268:13466">
                <h3 className="text-[16px] font-bold leading-5 text-[#183060]">How draws work</h3>
                <div className="text-[12px] font-normal leading-4 text-[#546d91]">
                  {activeLotteryConfig.explanation.drawTimes ? (
                    <>
                      <p>
                        <span>{activeLotteryConfig.explanation.drawTimesIntro ?? '49’s Lotto draws take place '}</span>
                        <span className="font-semibold text-[#546d91]">
                          {activeLotteryConfig.explanation.introStrong ?? 'every day four times at:'}
                        </span>
                      </p>
                      <ul className="ml-[18px] list-disc">
                        {activeLotteryConfig.explanation.drawTimes.map((drawTime) => (
                          <li key={drawTime}>{drawTime}</li>
                        ))}
                      </ul>
                      <p className="mt-4">{activeLotteryConfig.explanation.how[1]}</p>
                    </>
                  ) : activeLotteryConfig.explanation.introStrong ? (
                    <>
                      <p>
                        <span>{activeLotteryConfig.explanation.how[0]}</span>
                        <span className="font-semibold text-[#546d91]">
                          {activeLotteryConfig.explanation.introStrong}
                        </span>
                      </p>
                      <p className="mt-4">{activeLotteryConfig.explanation.how[1]}</p>
                      {activeLotteryConfig.explanation.gameBullets && (
                        <ul className="ml-[18px] list-disc">
                          {activeLotteryConfig.explanation.gameBullets.map((game) => (
                            <li key={game}>{game}</li>
                          ))}
                        </ul>
                      )}
                      {activeLotteryConfig.explanation.finalStrong && (
                        <p className="mt-4 font-semibold text-[#546d91]">
                          {activeLotteryConfig.explanation.finalStrong}
                        </p>
                      )}
                    </>
                  ) : (
                    activeLotteryConfig.explanation.how.map((paragraph) => (
                      <p key={paragraph} className="mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-[#e4e4e4] py-3" data-node-id="1268:13469">
                <h3 className="text-[16px] font-bold leading-5 text-[#183060]">What this means for your bet</h3>
                <ul className="ml-[18px] list-disc text-[12px] font-normal leading-4 text-[#546d91]">
                  {activeLotteryConfig.explanation.means.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {activeLotteryConfig.explanation.note && (
                <div className="border-t border-[#e4e4e4] py-3" data-node-id="1268:13472">
                  <p className="text-[12px] font-normal leading-4 text-[#546d91]">
                    {activeLotteryConfig.explanation.note}
                  </p>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      <PreviousResultsModal
        isOpen={showPreviousResults}
        onClose={() => setShowPreviousResults(false)}
        lotteryId={activeTab}
        supportsBonus={activeLotterySchedule.supportsBonus}
        drawLabels={previousResultsDrawLabels}
      />
    </div>
  );
}

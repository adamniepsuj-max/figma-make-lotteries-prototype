import {
  ChevronRight,
  Clock,
} from 'lucide-react';
import { useEffect, useMemo, useState, type KeyboardEvent, type MouseEvent, type ReactNode } from 'react';
import { useNavigate } from 'react-router';
import svgPaths from '../../imports/Frame1410092536/svg-i6srpt92hf';
import favFilledIcon from '../assets/fav-filled.svg';
import favOutlineIcon from '../assets/fav-outline.svg';
import { useBetslip } from '../contexts/BetslipContext';
import {
  allDrawWeekdays,
  formatDrawDate,
  formatHomeDrawCopy,
  formatCountdownToDraw,
  getDisplayDraw,
  getFirstDrawForDay,
  getTodayWeekday,
  longWeekdayByShort,
  lotteryRunsOnDay,
  lotterySchedules,
  type DrawWeekday,
  type LotterySchedule,
  type LotteryTabId,
} from '../lotteryData';
import {
  AustraliaFlag,
  CanadaFlag,
  DailyMillionsIcon,
  FortyNinesIcon,
  FranceFlag,
  GermanyFlag,
  IrelandFlag,
  NewYorkIcon,
  PolandFlag,
} from './LotteryFlags';
import { BottomNav } from './BottomNav';
import { NumberPickerModal } from './NumberPickerModal';

type Lottery = LotterySchedule & {
  icon: ReactNode;
};

type WeekdayFilter = 'All' | 'Today' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
type SortFilter = 'Draw Time' | 'Popular' | 'Favourite' | 'UK' | 'International';
type DatePickerDay = {
  key: WeekdayFilter;
  label: string;
  dateNumber?: string;
};

const filters: SortFilter[] = ['Draw Time', 'Popular', 'Favourite', 'UK', 'International'];
const lotteryIcons: Record<LotteryTabId, ReactNode> = {
  'irish-lotto': <IrelandFlag />,
  'uk-49s': <FortyNinesIcon />,
  'ny-lotto': <NewYorkIcon />,
  'french-lotto': <FranceFlag />,
  'australian-lotto': <AustraliaFlag />,
  'daily-millions': <DailyMillionsIcon />,
  'german-lotto': <GermanyFlag />,
  'canadian-lotto': <CanadaFlag />,
  'polish-lotto': <PolandFlag />,
};

const lotteries: Lottery[] = Object.values(lotterySchedules).map((lottery) => ({
  ...lottery,
  icon: lotteryIcons[lottery.tabId],
}));

const initialFavoriteIds = new Set(['2', '1']);

const compareByDisplayDraw = (activeDay: WeekdayFilter, from: Date) => (a: Lottery, b: Lottery) =>
  (getSortDraw(a, activeDay, from)?.date.getTime() ?? Number.MAX_SAFE_INTEGER) -
  (getSortDraw(b, activeDay, from)?.date.getTime() ?? Number.MAX_SAFE_INTEGER);

const getSortDraw = (lottery: Lottery, activeDay: WeekdayFilter, from: Date) => {
  if (activeDay === 'All' || activeDay === 'Today') return getDisplayDraw(lottery, activeDay, from);
  if (activeDay === getTodayWeekday(from)) return getDisplayDraw(lottery, activeDay, from);
  return getFirstDrawForDay(lottery, activeDay, from);
};

const formatStartingSoonDrawCopy = (draw?: { weekday: DrawWeekday; time: string; date: Date }, from = new Date()) => {
  if (!draw) return 'Next draw: TBC';

  const isToday = draw.date.toDateString() === from.toDateString();
  const isTomorrow = draw.date.toDateString() === new Date(from.getFullYear(), from.getMonth(), from.getDate() + 1).toDateString();
  const drawDayCopy = isToday ? 'Today' : isTomorrow ? 'Tomorrow' : `${draw.weekday}, ${formatDrawDate(draw.date)}`;

  return `Next draw: ${drawDayCopy} ${draw.time}`;
};

const formatCompactCountdown = (countdown?: string) =>
  countdown?.replace(/^Starts in\s+/i, '');

const getDatePickerDays = (from: Date): DatePickerDay[] => [
  { key: 'All', label: 'All' },
  ...Array.from({ length: 7 }, (_, index) => {
    const date = new Date(from.getFullYear(), from.getMonth(), from.getDate() + index);
    const weekday = allDrawWeekdays[(date.getDay() + 6) % 7];

    return {
      key: index === 0 ? 'Today' : weekday,
      label: index === 0 ? 'Today' : weekday,
      dateNumber: String(date.getDate()).padStart(2, '0'),
    };
  }),
];

function MobileHeaderBar() {
  return (
    <div className="flex h-11 w-full items-center gap-2 bg-[#060a2a]">
      <div className="flex h-full shrink-0 items-center px-3">
        <div className="relative size-6 p-[2.25px]">
          <svg className="block size-[19.5px]" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p27336a00} fill="white" />
          </svg>
        </div>
      </div>

      <div className="flex h-full w-[97px] shrink-0 items-center justify-center">
        <div className="relative h-5 w-[97px] overflow-hidden">
          <div className="absolute inset-[12.25%_0_13.96%_92.6%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.17076 14.7587">
              <path d={svgPaths.p18c74b40} fill="white" />
            </svg>
          </div>
          <div className="absolute inset-[12.25%_17.46%_13.96%_78.21%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.2003 14.7587">
              <path d={svgPaths.pe593f00} fill="white" />
            </svg>
          </div>
          <div className="absolute inset-[12.25%_8.46%_13.96%_84.14%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.17075 14.7587">
              <path d={svgPaths.p3b151900} fill="white" />
            </svg>
          </div>
          <div className="absolute inset-[12.25%_23.39%_13.96%_65.82%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4739 14.7587">
              <path d={svgPaths.p1518fb70} fill="white" />
            </svg>
          </div>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97 20">
            <path d={svgPaths.p2fc4aa00} fill="url(#home-wordmark-gradient)" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="home-wordmark-gradient" x1="46.4383" x2="50.8551" y1="-4.74508" y2="26.5186">
                <stop stopColor="#BFAD7B" />
                <stop offset="0.01" stopColor="#BFAD7B" />
                <stop offset="0.71" stopColor="#FAE0A9" />
                <stop offset="1" stopColor="#FAE0A9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="relative flex h-full min-w-0 flex-1 items-center justify-end gap-1 overflow-hidden px-3">
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-3 bg-gradient-to-r from-[#060a2a] to-[rgba(0,20,60,0)]" />
        <button className="flex h-7 shrink-0 items-center justify-center rounded bg-[#fce1a4] px-3 text-[12px] leading-4 text-[#183060]">
          Deposit
        </button>
        <button className="flex h-7 shrink-0 items-center justify-center gap-1 rounded border border-[#fce1a4] px-3 text-[12px] leading-4 text-white">
          <svg className="size-3.5 shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p35653300} fill="white" />
          </svg>
          £32.98
        </button>
        <div className="flex h-full shrink-0 items-center justify-center px-1">
          <svg className="size-3.5" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p2a654300} fill="white" />
          </svg>
        </div>
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-3 bg-gradient-to-r from-[rgba(0,20,60,0)] to-[#060a2a]" />
      </div>
    </div>
  );
}

function TopHeader({
  activeDay,
  onDayChange,
  currentTime,
}: {
  activeDay: WeekdayFilter;
  onDayChange: (day: WeekdayFilter) => void;
  currentTime: Date;
}) {
  const datePickerDays = useMemo(() => getDatePickerDays(currentTime), [currentTime]);

  return (
    <div className="bg-[#060a2a] text-white">
      <MobileHeaderBar />

      <div className="px-3 pb-3 pt-4">
        <button className="flex items-center gap-2 text-[12px] leading-5 text-[#9ba9c1]">
          <span className="text-[18px] leading-none">←</span>
          <span>Home | Lotteries</span>
        </button>
        <div className="mt-3 flex items-center justify-between gap-3">
          <h1 className="text-[18px] font-semibold leading-[22px]">Lotteries</h1>
        </div>
      </div>

      <div className="scrollbar-hide flex h-[68px] items-center gap-2 overflow-x-auto bg-white px-3 py-3">
        {datePickerDays.map((day) => (
          <button
            type="button"
            key={`${day.key}-${day.dateNumber ?? 'all'}`}
            aria-pressed={activeDay === day.key}
            onClick={() => onDayChange(day.key)}
            className={`flex h-11 w-12 shrink-0 flex-col items-center justify-center rounded border text-center ${
              activeDay === day.key
                ? 'border-[#0b52b1] bg-[#0b52b1] text-white'
                : 'border-[#e4e4e4] bg-white text-[#546d91]'
            }`}
          >
            <span className={`leading-3 ${day.dateNumber ? 'text-[10px]' : 'text-[13px]'}`}>{day.label}</span>
            {day.dateNumber && <span className="mt-[2px] text-[16px] font-semibold leading-[18px]">{day.dateNumber}</span>}
          </button>
        ))}
      </div>
    </div>
  );
}

function FilterTabs({
  activeFilter,
  onFilterChange,
}: {
  activeFilter: SortFilter;
  onFilterChange: (filter: SortFilter) => void;
}) {
  return (
    <div className="scrollbar-hide flex h-[53px] items-center gap-2 overflow-x-auto bg-white px-3">
      {filters.map((filter) => (
        <button
          type="button"
          key={filter}
          aria-pressed={activeFilter === filter}
          onClick={() => onFilterChange(filter)}
          className={`h-6 shrink-0 rounded-full border px-3 text-[10px] leading-3 ${
            activeFilter === filter
              ? 'border-[#0b52b1] text-[#0b52b1]'
              : 'border-[#e4e4e4] text-[#546d91]'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

function FavoriteStarButton({
  isSelected,
  label,
  onClick,
}: {
  isSelected: boolean;
  label: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={isSelected}
      onClick={onClick}
      className="flex size-3.5 shrink-0 items-center justify-center rounded-full"
    >
      <img
        src={isSelected ? favFilledIcon : favOutlineIcon}
        alt=""
        className="block size-3.5"
        data-node-id="1335:31275"
      />
    </button>
  );
}

function LotteryRow({
  lottery,
  drawTime,
  countdown,
  startingSoonDrawTime,
  isStartingSoonHighlighted,
  isFavorite,
  onClick,
  onPickNumbers,
  onToggleFavorite,
}: {
  lottery: Lottery;
  drawTime: string;
  countdown?: string;
  startingSoonDrawTime?: string;
  isStartingSoonHighlighted?: boolean;
  isFavorite: boolean;
  onClick: () => void;
  onPickNumbers: (event: MouseEvent<HTMLButtonElement>) => void;
  onToggleFavorite: (event: MouseEvent<HTMLButtonElement>) => void;
}) {
  const compactCountdown = formatCompactCountdown(countdown);
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick();
    }
  };

  if (compactCountdown && isStartingSoonHighlighted) {
    return (
      <div
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        data-node-id="1335:31103"
        className="flex w-full max-w-[350px] flex-col items-start justify-center overflow-hidden rounded-[8px] bg-white px-3 py-4 text-left shadow-[0_0_12px_1px_rgba(23,31,51,0.1)]"
      >
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full items-start gap-3">
            <div className="flex self-stretch items-start pt-3">
              <FavoriteStarButton
                isSelected={isFavorite}
                label={`Toggle ${lottery.title} favourite`}
                onClick={onToggleFavorite}
              />
            </div>

            <div className="flex size-9 shrink-0 items-center justify-center">
              {lottery.icon}
            </div>

            <div className="flex min-w-0 flex-1 flex-col items-start gap-1">
              <div className="flex w-full min-w-0 items-center gap-2">
                <h3 className="min-w-0 flex-1 truncate text-[14px] font-semibold leading-4 text-[#183060]">{lottery.title}</h3>
                <div className="flex h-[18px] max-w-[112px] shrink-0 items-center gap-1 rounded-[2px] bg-[#b24e18] px-1 py-0.5 text-white">
                  <Clock className="size-3 shrink-0" strokeWidth={2.2} />
                  <span className="truncate text-[12px] font-semibold leading-4">{compactCountdown}</span>
                </div>
              </div>
              <p className="w-full truncate text-[12px] font-normal leading-4 text-[#546d91]">
                {startingSoonDrawTime ?? drawTime}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onPickNumbers}
            className="flex h-9 w-full items-center justify-center rounded-[4px] border border-[#0b52b1] px-4 text-center text-[12px] font-normal leading-4 text-[#183060] transition hover:bg-[#f8fbff]"
          >
            Pick your numbers
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      data-node-id={
        lottery.id === '1'
          ? '1044:20159'
          : lottery.id === '3'
            ? '1044:20181'
            : lottery.id === '6'
              ? '1044:20247'
              : lottery.id === '5'
                ? '1044:20293'
              : undefined
      }
      className="flex min-h-20 w-full max-w-[350px] items-center gap-3 rounded-[8px] bg-white px-3 py-5 text-left shadow-[0_0_12px_1px_rgba(23,31,51,0.1)]"
    >
      <div className="flex h-full items-center">
        <FavoriteStarButton
          isSelected={isFavorite}
          label={`Toggle ${lottery.title} favourite`}
          onClick={onToggleFavorite}
        />
      </div>
      <div className="flex shrink-0 items-center">
        {lottery.icon}
      </div>
      <div className="flex h-full min-w-0 flex-1 flex-col items-start justify-center gap-1">
        <div className="flex w-full min-w-0 items-center gap-2">
          <h3 className="min-w-0 flex-1 truncate text-[14px] font-semibold leading-4 text-[#183060]">{lottery.title}</h3>
          {compactCountdown && (
            <div className="flex min-w-0 shrink items-center gap-1 text-[#b24e18]">
              <Clock className="size-3 shrink-0" />
              <span className="truncate text-[12px] leading-4">{compactCountdown}</span>
            </div>
          )}
        </div>
        <p className="mt-1 truncate text-[12px] leading-4 text-[#546d91]">{drawTime}</p>
      </div>
      <div className="flex h-full min-w-[14px] flex-col items-center justify-center">
        <ChevronRight className="size-4 shrink-0 text-[#183060]" strokeWidth={2.4} />
      </div>
    </div>
  );
}

export function LotteriesHomeScreen() {
  const navigate = useNavigate();
  const { addEntry } = useBetslip();
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(() => new Set(initialFavoriteIds));
  const [activeDay, setActiveDay] = useState<WeekdayFilter>('All');
  const [activeFilter, setActiveFilter] = useState<SortFilter>('Draw Time');
  const [currentTime, setCurrentTime] = useState(() => new Date());
  const [numberPickerLotteryId, setNumberPickerLotteryId] = useState<string | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const sortedLotteries = useMemo(
    () => {
      const visibleLotteries = lotteries
        .filter((lottery) => {
          return lotteryRunsOnDay(lottery, activeDay, currentTime);
        })
        .filter((lottery) => {
          if (activeFilter === 'Favourite') return favoriteIds.has(lottery.id);
          if (activeFilter === 'UK') return lottery.region === 'uk';
          if (activeFilter === 'International') return lottery.region === 'international';
          return true;
        });

      if (activeFilter === 'Popular') {
        return [...visibleLotteries].sort((a, b) => a.popularityRank - b.popularityRank || compareByDisplayDraw(activeDay, currentTime)(a, b));
      }

      return [...visibleLotteries].sort(compareByDisplayDraw(activeDay, currentTime));
    },
    [activeDay, activeFilter, favoriteIds, currentTime],
  );

  const highlightedLotteryId = useMemo(() => {
    return sortedLotteries.reduce<{ id?: string; time: number }>(
      (soonest, lottery) => {
        const draw = getDisplayDraw(lottery, activeDay, currentTime);
        const countdown = draw ? formatCountdownToDraw(draw, currentTime) : undefined;
        const drawTime = draw?.date.getTime() ?? Number.MAX_SAFE_INTEGER;

        if (!countdown || drawTime >= soonest.time) return soonest;

        return { id: lottery.id, time: drawTime };
      },
      { time: Number.MAX_SAFE_INTEGER },
    ).id;
  }, [activeDay, currentTime, sortedLotteries]);

  const toggleFavorite = (lotteryId: string) => (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setFavoriteIds((currentIds) => {
      const nextIds = new Set(currentIds);

      if (nextIds.has(lotteryId)) {
        nextIds.delete(lotteryId);
      } else {
        nextIds.add(lotteryId);
      }

      return nextIds;
    });
  };

  const activeNumberPickerLottery = numberPickerLotteryId
    ? lotteries.find((lottery) => lottery.id === numberPickerLotteryId)
    : undefined;

  const getLotteryAbbrev = (title: string) =>
    title
      .split(' ')
      .map((word) => word[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

  const handlePickNumbersClick = (lottery: Lottery) => (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setNumberPickerLotteryId(lottery.id);
  };

  const handleHomeNumbersPicked = (
    numbers: number[],
    bonusBall?: number,
    action: 'confirm' | 'play-next-draw' = 'confirm',
  ) => {
    if (!activeNumberPickerLottery) return;

    const draw = getDisplayDraw(activeNumberPickerLottery, 'All', currentTime);

    if (action === 'play-next-draw') {
      addEntry({
        id: `manual-home-${Date.now()}`,
        type: 'manual',
        lottery: activeNumberPickerLottery.title,
        lotteryAbbrev: getLotteryAbbrev(activeNumberPickerLottery.title),
        lines: [
          {
            numbers,
            bonusBall: activeNumberPickerLottery.supportsBonus ? bonusBall : undefined,
            stake: 1,
          },
        ],
        draws: draw
          ? [
              {
                day: longWeekdayByShort[draw.weekday],
                label: draw.time,
                options: [draw.time],
              },
            ]
          : [],
        duration: 1,
      });
      setNumberPickerLotteryId(null);
      return;
    }

    window.sessionStorage.setItem(
      `lotteries:pending-line:${activeNumberPickerLottery.tabId}`,
      JSON.stringify({
        numbers,
        bonusBall: activeNumberPickerLottery.supportsBonus ? bonusBall : undefined,
      }),
    );
    setNumberPickerLotteryId(null);
    navigate(activeNumberPickerLottery.route);
  };

  return (
    <div className="relative flex h-screen w-[375px] flex-col overflow-hidden bg-white">
      <TopHeader activeDay={activeDay} onDayChange={setActiveDay} currentTime={currentTime} />
      <FilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      <main className="scrollbar-hide flex-1 overflow-y-auto bg-[#f8f9fa] px-3 pb-[72px] pt-3">
        <div className="flex flex-col items-center gap-3">
          {sortedLotteries.map((lottery) => (
            (() => {
              const draw = getDisplayDraw(lottery, activeDay, currentTime);
              const countdown = draw ? formatCountdownToDraw(draw, currentTime) : undefined;
              const isStartingSoonHighlighted = lottery.id === highlightedLotteryId;

              return (
                <LotteryRow
                  key={lottery.id}
                  lottery={lottery}
                  drawTime={formatHomeDrawCopy(lottery, activeDay, currentTime)}
                  countdown={countdown}
                  startingSoonDrawTime={formatStartingSoonDrawCopy(draw, currentTime)}
                  isStartingSoonHighlighted={isStartingSoonHighlighted}
                  isFavorite={favoriteIds.has(lottery.id)}
                  onClick={() => setNumberPickerLotteryId(lottery.id)}
                  onPickNumbers={handlePickNumbersClick(lottery)}
                  onToggleFavorite={toggleFavorite(lottery.id)}
                />
              );
            })()
          ))}
        </div>
        {sortedLotteries.length === 0 && (
          <div className="rounded-[8px] bg-white px-4 py-6 text-center text-[12px] leading-4 text-[#546d91] shadow-[0_0_12px_1px_rgba(23,31,51,0.1)]">
            No lotteries for this selection
          </div>
        )}
      </main>

      <BottomNav />
      {activeNumberPickerLottery && (
        <NumberPickerModal
          isOpen={Boolean(activeNumberPickerLottery)}
          onClose={() => setNumberPickerLotteryId(null)}
          onConfirm={handleHomeNumbersPicked}
          selectedNumbers={[]}
          requiredCount={5}
          maxNumber={activeNumberPickerLottery.ballCount}
          lotteryId={activeNumberPickerLottery.tabId}
          supportsBonus={activeNumberPickerLottery.supportsBonus}
        />
      )}
    </div>
  );
}

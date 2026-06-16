import { useEffect, useRef, useState } from 'react';
import favOutlineIcon from '../assets/fav-outline.svg';
import { getLotteryBallTheme } from '../lotteryBallStyles';
import { ModalCloseButton } from './ModalCloseButton';

type PreviousResultsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  lotteryId: string;
  supportsBonus: boolean;
  drawLabels: string[];
};

type ResultRow = {
  label: string;
  numbers: number[];
  bonus?: number;
};

type ResultGroup = {
  date: string;
  rows: ResultRow[];
};

const modalTransitionMs = 280;

function ResultBall({ number, color }: { number: number; color: string }) {
  return (
    <span
      className="flex size-7 shrink-0 items-center justify-center rounded-full text-[12px] font-bold leading-4 text-white"
      style={{ backgroundImage: color }}
    >
      {number}
    </span>
  );
}

function BonusBall({ number }: { number: number }) {
  return (
    <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-[#183060] bg-white text-[12px] font-bold leading-4 text-[#183060]">
      {number}
    </span>
  );
}

function FavoriteStar() {
  return <img src={favOutlineIcon} alt="" className="block size-3 shrink-0" data-node-id="1335:31275" />;
}

const fortyNinesResultRows: ResultRow[] = [
  { label: '17:49 Teatime draw', numbers: [8, 3, 7, 5, 9], bonus: 8 },
  { label: '16:49 Drivetime draw', numbers: [15, 12, 42, 40, 2], bonus: 5 },
  { label: '12:49 Lunchtime draw', numbers: [15, 12, 42, 40, 2], bonus: 5 },
  { label: '11:49 Brunchtime draw', numbers: [15, 12, 18, 37, 4], bonus: 13 },
];

const fortyNinesResultGroups: ResultGroup[] = [
  { date: 'Wednesday 13th Apr (Yesterday)', rows: fortyNinesResultRows },
  { date: 'Tuesday 12th Apr', rows: fortyNinesResultRows },
  { date: 'Monday 11th Apr', rows: fortyNinesResultRows },
];

const previousResultsByLottery: Record<string, ResultGroup[]> = {
  'irish-lotto': [
    {
      date: 'Wednesday 13th Apr (Yesterday)',
      rows: [
        { label: '20:00 Main draw', numbers: [5, 19, 25, 36, 42], bonus: 8 },
        { label: '20:03 Plus 1 draw', numbers: [6, 11, 31, 13, 44], bonus: 2 },
        { label: '20:05 Plus 2 draw', numbers: [15, 12, 18, 37, 4], bonus: 13 },
      ],
    },
    {
      date: 'Saturday 9th Apr',
      rows: [
        { label: '20:00 Main draw', numbers: [8, 3, 7, 5, 9], bonus: 16 },
        { label: '20:03 Plus 1 draw', numbers: [15, 12, 42, 40, 2], bonus: 5 },
        { label: '20:05 Plus 2 draw', numbers: [6, 19, 25, 36, 42], bonus: 8 },
      ],
    },
    {
      date: 'Wednesday 6th Apr',
      rows: [
        { label: '20:00 Main draw', numbers: [4, 11, 18, 27, 35], bonus: 46 },
        { label: '20:03 Plus 1 draw', numbers: [2, 10, 14, 31, 39], bonus: 7 },
        { label: '20:05 Plus 2 draw', numbers: [9, 16, 22, 33, 45], bonus: 12 },
      ],
    },
  ],
  'uk-49s': fortyNinesResultGroups,
  'ny-lotto': [
    {
      date: 'Thursday 14th Apr',
      rows: [{ label: '12:15', numbers: [8, 3, 7, 5, 9], bonus: 8 }],
    },
    {
      date: 'Sunday 10th Apr',
      rows: [{ label: '12:15', numbers: [8, 3, 7, 5, 9], bonus: 8 }],
    },
    {
      date: 'Thursday 14th Apr',
      rows: [{ label: '12:15', numbers: [8, 3, 7, 5, 9], bonus: 8 }],
    },
    {
      date: 'Sunday 10th Apr',
      rows: [{ label: '12:15', numbers: [8, 3, 7, 5, 9], bonus: 8 }],
    },
  ],
  'daily-millions': [
    {
      date: 'Wednesday 13th Apr (Yesterday)',
      rows: [
        { label: '13:55 Main draw', numbers: [5, 19, 25, 36, 38], bonus: 8 },
        { label: '20:55 Plus draw', numbers: [15, 12, 34, 30, 2], bonus: 5 },
      ],
    },
    {
      date: 'Tuesday 12th Apr',
      rows: [
        { label: '13:55 Main draw', numbers: [6, 11, 31, 13, 37], bonus: 4 },
        { label: '20:55 Plus draw', numbers: [8, 3, 7, 5, 9], bonus: 16 },
      ],
    },
    {
      date: 'Monday 11th Apr',
      rows: [
        { label: '13:55 Main draw', numbers: [4, 18, 22, 33, 39], bonus: 12 },
        { label: '20:55 Plus draw', numbers: [10, 14, 21, 28, 35], bonus: 6 },
      ],
    },
  ],
  'australian-lotto': [
    {
      date: 'Saturday 9th Apr',
      rows: [{ label: '01:00 Main draw', numbers: [5, 19, 25, 36, 42] }],
    },
    {
      date: 'Saturday 2nd Apr',
      rows: [{ label: '01:00 Main draw', numbers: [15, 12, 40, 2, 5] }],
    },
    {
      date: 'Saturday 26th Mar',
      rows: [{ label: '01:00 Main draw', numbers: [6, 11, 31, 13, 44] }],
    },
  ],
  'canadian-lotto': [
    {
      date: 'Thursday 14th Apr',
      rows: [{ label: '02:15 Main draw', numbers: [5, 19, 25, 36, 42], bonus: 8 }],
    },
    {
      date: 'Sunday 10th Apr',
      rows: [{ label: '02:15 Main draw', numbers: [15, 12, 40, 2, 5], bonus: 9 }],
    },
    {
      date: 'Thursday 7th Apr',
      rows: [{ label: '02:15 Main draw', numbers: [6, 11, 31, 13, 44], bonus: 16 }],
    },
  ],
  'french-lotto': [
    {
      date: 'Wednesday 13th Apr (Yesterday)',
      rows: [{ label: '18:25 Main draw', numbers: [5, 19, 25, 36, 42] }],
    },
    {
      date: 'Monday 11th Apr',
      rows: [{ label: '18:25 Main draw', numbers: [15, 12, 40, 2, 5] }],
    },
    {
      date: 'Saturday 9th Apr',
      rows: [{ label: '18:25 Main draw', numbers: [6, 11, 31, 13, 44] }],
    },
  ],
  'german-lotto': [
    {
      date: 'Wednesday 13th Apr (Yesterday)',
      rows: [{ label: '16:25', numbers: [8, 3, 7, 5, 9] }],
    },
    {
      date: 'Saturday 10th Apr',
      rows: [{ label: '17:25', numbers: [8, 3, 7, 5, 9] }],
    },
    {
      date: 'Saturday 1st Apr',
      rows: [{ label: '17:25', numbers: [8, 3, 7, 5, 9] }],
    },
    {
      date: 'Wednesday 28th March',
      rows: [{ label: '16:25', numbers: [8, 3, 7, 5, 9] }],
    },
  ],
  'polish-lotto': [
    {
      date: 'Thursday 14th Apr',
      rows: [{ label: '19:15 Main draw', numbers: [5, 19, 25, 36, 42] }],
    },
    {
      date: 'Tuesday 12th Apr',
      rows: [{ label: '19:15 Main draw', numbers: [15, 12, 40, 2, 5] }],
    },
    {
      date: 'Saturday 9th Apr',
      rows: [{ label: '19:15 Main draw', numbers: [6, 11, 31, 13, 44] }],
    },
  ],
};

const buildResultGroups = (lotteryId: string, drawLabels: string[], supportsBonus: boolean): ResultGroup[] => {
  const configuredGroups = previousResultsByLottery[lotteryId];

  if (configuredGroups) {
    return configuredGroups.map((group) => ({
      ...group,
      rows: group.rows.map((row) => ({
        ...row,
        bonus: supportsBonus ? row.bonus : undefined,
      })),
    }));
  }

  const labels = drawLabels.length > 0 ? drawLabels : ['Main'];
  const rows = labels.map((label) => ({
    label,
    numbers: [5, 19, 25, 36, 42],
    bonus: supportsBonus ? 8 : undefined,
  }));

  return [{ date: 'Wednesday 13th Apr (Yesterday)', rows }];
};

export function PreviousResultsModal({
  isOpen,
  onClose,
  lotteryId,
  supportsBonus,
  drawLabels,
}: PreviousResultsModalProps) {
  const [isEntered, setIsEntered] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof window.setTimeout> | null>(null);
  const ballTheme = getLotteryBallTheme(lotteryId);
  const resultGroups = buildResultGroups(lotteryId, drawLabels, supportsBonus);

  useEffect(() => {
    if (!isOpen) return;

    setIsExiting(false);
    setIsEntered(false);

    const frame = window.requestAnimationFrame(() => setIsEntered(true));

    return () => window.cancelAnimationFrame(frame);
  }, [isOpen]);

  useEffect(() => () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
    }
  }, []);

  const runExitTransition = () => {
    if (isExiting) return;

    setIsExiting(true);
    setIsEntered(false);

    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
    }

    closeTimeoutRef.current = window.setTimeout(() => {
      closeTimeoutRef.current = null;
      onClose();
      setIsExiting(false);
    }, modalTransitionMs);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0b173c]/60 px-3 py-6 ${
        isExiting ? 'pointer-events-none' : ''
      }`}
      role="presentation"
      onClick={runExitTransition}
    >
      <div
        className={`flex max-h-[calc(100vh-48px)] w-full max-w-[375px] flex-col overflow-hidden rounded-t-[12px] bg-white shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out ${
          isEntered && !isExiting ? 'translate-y-0' : 'translate-y-[110vh]'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="previous-results-title"
        data-node-id="1396:32314"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start gap-0 rounded-t-[12px] border-b border-[#e4e4e4] bg-white pb-[13px] pl-3 pr-0 pt-6">
          <h3
            id="previous-results-title"
            className="h-[22px] min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-[18px] font-semibold leading-[22px] text-[#183060]"
          >
            Previous results
          </h3>
          <ModalCloseButton onClick={runExitTransition} />
        </div>

        <div className="min-h-0 overflow-y-auto p-3">
          <div className="flex flex-col gap-3">
            {resultGroups.map((group) => (
              <section key={group.date} className="flex w-full flex-col gap-3 rounded-[4px] bg-[#f8f9fa] p-3">
                <p className="text-[12px] font-semibold leading-4 text-[#183060]">{group.date}</p>
                <div className="h-px w-full bg-[#e4e4e4]" />
                <div className="flex flex-col gap-3">
                  {group.rows.map((row, rowIndex) => (
                    <div key={`${group.date}-${row.label}`} className="flex flex-col gap-1.5">
                      <p className="text-[12px] font-normal leading-4 text-[#183060]">{row.label}</p>
                      <div className="flex min-w-0 items-start gap-2">
                        <div className="flex min-w-0 flex-1 items-center gap-1.5">
                          {row.numbers.map((number, numberIndex) => (
                            <ResultBall
                              key={`${row.label}-${number}-${numberIndex}`}
                              number={number}
                              color={ballTheme.gradient}
                            />
                          ))}
                        </div>
                        {row.bonus !== undefined && (
                          <div className="flex w-[50px] shrink-0 items-center">
                            <BonusBall number={row.bonus} />
                          </div>
                        )}
                        <div className="flex h-7 shrink-0 items-center">
                          <FavoriteStar />
                        </div>
                      </div>
                      {rowIndex < group.rows.length - 1 && <div className="mt-1.5 h-px w-full bg-[#e4e4e4]" />}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

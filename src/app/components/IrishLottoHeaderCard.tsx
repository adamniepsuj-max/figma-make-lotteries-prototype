import { ChevronDown, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';
import { AustraliaFlag, CanadaFlag, DailyMillionsIcon, FortyNinesHeaderIcon, FranceFlag, GermanyFlag, IrelandFlag, NewYorkIcon, PolandFlag } from './LotteryFlags';
import { getOddsRows, getPrizeSummary } from '../lotteryOdds';
import { formatCountdownToDraw, formatNextDrawCopy, getNextDraw, lotterySchedules } from '../lotteryData';

export type HeaderVariant =
  | 'irish-lotto'
  | 'uk-49s'
  | 'ny-lotto'
  | 'australian-lotto'
  | 'french-lotto'
  | 'german-lotto'
  | 'canadian-lotto'
  | 'daily-millions'
  | 'polish-lotto';

const headerContent: Record<HeaderVariant, {
  title: string;
  icon: () => JSX.Element;
}> = {
  'irish-lotto': {
    title: 'Irish Lotto',
    icon: IrelandFlag,
  },
  'uk-49s': {
    title: '49’s Lotto',
    icon: FortyNinesHeaderIcon,
  },
  'ny-lotto': {
    title: 'New York Lotto',
    icon: NewYorkIcon,
  },
  'australian-lotto': {
    title: 'Australian Lotto',
    icon: AustraliaFlag,
  },
  'german-lotto': {
    title: 'German Lotto',
    icon: GermanyFlag,
  },
  'french-lotto': {
    title: 'French Lotto',
    icon: FranceFlag,
  },
  'canadian-lotto': {
    title: 'Canadian Lotto',
    icon: CanadaFlag,
  },
  'daily-millions': {
    title: 'Daily Millions Lotto',
    icon: DailyMillionsIcon,
  },
  'polish-lotto': {
    title: 'Polish Lotto',
    icon: PolandFlag,
  },
};

function StatusTag({ label }: { label: string }) {
  return (
    <div
      className="flex w-fit items-center justify-center gap-[6px] rounded-[2px] bg-[#b24e18] px-1 py-0.5"
      data-node-id="1303:13168"
    >
      <Clock className="size-3 shrink-0 text-white" strokeWidth={1.8} />
      <span className="whitespace-nowrap text-[12px] font-semibold leading-4 text-white">{label}</span>
    </div>
  );
}

type IrishLottoHeaderCardProps = {
  variant?: HeaderVariant;
  onResultsClick?: () => void;
};

export function IrishLottoHeaderCard({ variant = 'irish-lotto', onResultsClick }: IrishLottoHeaderCardProps) {
  const [showOdds, setShowOdds] = useState(false);
  const [currentTime, setCurrentTime] = useState(() => new Date());
  const content = headerContent[variant];
  const HeaderIcon = content.icon;
  const prizeSummary = getPrizeSummary(variant);
  const oddsRows = getOddsRows(variant);
  const nextDrawDetails = getNextDraw(lotterySchedules[variant], currentTime);
  const nextDraw = formatNextDrawCopy(nextDrawDetails, currentTime);
  const countdown = nextDrawDetails ? formatCountdownToDraw(nextDrawDetails, currentTime) : undefined;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div>
      <div
        className="overflow-hidden rounded-[8px] bg-white p-3 shadow-[0_0_6px_1px_rgba(23,31,51,0.1)]"
        data-node-id="1283:14736"
      >
        <div className="flex gap-3">
          <div className="flex flex-1 flex-col gap-3">
            <div className="flex items-start gap-3">
              <div className="flex shrink-0 items-start py-1.5">
                <HeaderIcon />
              </div>

              <div className={`flex min-w-0 flex-1 flex-col py-1.5 ${countdown ? 'gap-6' : 'gap-0'}`}>
                <div className="flex flex-col gap-1">
                  <h2 className="truncate text-[18px] font-bold leading-[22px] text-[#183060]">{content.title}</h2>
                  <p className="truncate text-[12px] leading-4 text-[#546d91]">{nextDraw}</p>
                </div>

                {countdown && <StatusTag label={countdown} />}
              </div>

              <div className="flex shrink-0 flex-col items-end">
                <button
                  type="button"
                  onClick={onResultsClick}
                  className="flex h-9 items-center justify-center gap-1 rounded-[6px] bg-[#f8f9fa] px-3 text-[12px] leading-4 text-[#0b52b1] hover:bg-[#eef4ff]"
                >
                  <Clock className="size-3" strokeWidth={1.75} />
                  <span>Results</span>
                </button>
              </div>
            </div>

            <div className="h-px w-full bg-[#ededed]" />

            <div className="flex w-full flex-col">
              <div className="flex items-center gap-3">
                <p className="min-w-0 flex-1 text-[12px] leading-4 text-[#183060]">{prizeSummary}</p>
                <button
                  type="button"
                  aria-expanded={showOdds}
                  onClick={() => setShowOdds((isOpen) => !isOpen)}
                  className="flex w-[78px] shrink-0 items-center justify-end gap-1.5 text-[#0b52b1] hover:text-[#073f86]"
                >
                  <span className="block whitespace-nowrap text-right text-[12px] font-semibold leading-4">
                    {showOdds ? 'See less' : 'See more'}
                  </span>
                  <ChevronDown className={`size-[10px] transition-transform ${showOdds ? 'rotate-180' : ''}`} strokeWidth={2.3} />
                </button>
              </div>

              {showOdds && (
                <div className="mt-[10px] flex flex-col gap-[8px]" data-name="Odds/format">
                  {oddsRows.map((row) => (
                    <p key={row} className="text-[10px] leading-3 text-[#546d91]">
                      {row}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

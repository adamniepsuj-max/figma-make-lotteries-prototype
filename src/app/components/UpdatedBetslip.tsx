import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { type BetslipEntry } from '../contexts/BetslipContext';
import { lotterySchedules, type LotteryTabId } from '../lotteryData';
import { formatWinAmount, getOddsForMatch } from '../lotteryOdds';

type UpdatedBetslipProps = {
  entries: BetslipEntry[];
  isExpanded: boolean;
  onExpandedChange: (isExpanded: boolean) => void;
  onRemoveEntry: (entryId: string) => void;
  onRemoveEntryLine: (entryId: string, lineIndex: number) => void;
  onClearAll: () => void;
  bottomOffset?: number;
};

const lotteryTabIdByTitle = Object.values(lotterySchedules).reduce<Record<string, LotteryTabId>>(
  (accumulator, lottery) => {
    accumulator[lottery.title] = lottery.tabId;
    return accumulator;
  },
  {},
);

const getEntryLineCount = (entry: BetslipEntry) =>
  entry.type === 'quick-pick'
    ? entry.lines
    : entry.lines.filter((line) => line.numbers.length > 0).length;

export const getBetslipSelectionCount = (entries: BetslipEntry[]) =>
  entries.reduce((count, entry) => count + getEntryLineCount(entry), 0);

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
  const lotteryTabId = lotteryTabIdByTitle[entry.lottery] ?? 'irish-lotto';
  const supportsEntryBonus = lotterySchedules[lotteryTabId]?.supportsBonus ?? false;
  return getOddsForMatch(lotteryTabId, Math.min(line.numbers.length, 5), Boolean(line.bonusBall) && supportsEntryBonus);
};

export function UpdatedBetslip({
  entries,
  isExpanded,
  onExpandedChange,
  onRemoveEntry,
  onRemoveEntryLine,
  onClearAll,
  bottomOffset = 58,
}: UpdatedBetslipProps) {
  const selectionCount = getBetslipSelectionCount(entries);

  if (selectionCount === 0) return null;

  return (
    <>
      {isExpanded && (
        <button
          type="button"
          aria-label="Collapse betslip"
          onClick={() => onExpandedChange(false)}
          className="fixed inset-0 z-[25] bg-[#0b173c]/25"
        />
      )}

      <div
        className={`fixed left-1/2 z-40 w-full max-w-[375px] -translate-x-1/2 overflow-hidden rounded-t-[12px] ${
          isExpanded
            ? 'max-h-[calc(100vh-58px)] overflow-y-auto bg-[#f8f9fa] shadow-[0_-8px_28px_rgba(23,31,51,0.18)]'
            : ''
        }`}
        style={{ bottom: `${bottomOffset}px` }}
      >
        <div className="overflow-hidden rounded-t-[12px] bg-[#f8f9fa] shadow-[0_0_6px_1px_rgba(23,31,51,0.1)]">
          <div className="flex flex-col gap-2 rounded-t-[12px] border-b border-[#e4e4e4] bg-white px-3 pb-3 pt-2">
            <div className="flex w-full justify-center">
              <div className="h-1 w-9 rounded-[29px] bg-[#546d91]" />
            </div>
            <div className="flex w-full items-end gap-2">
              <div className="flex flex-col items-start gap-1">
                <p className="text-[16px] font-semibold leading-5 text-[#183060]">Betslip</p>
                <div className="flex items-center gap-1">
                  <span className="flex size-4 items-center justify-center rounded-[4px] bg-[#546d91] text-[10px] font-bold leading-3 text-white">
                    {selectionCount}
                  </span>
                  <span className="text-[12px] leading-4 text-[#546d91]">Selection</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onExpandedChange(!isExpanded)}
                aria-expanded={isExpanded}
                aria-controls="updated-betslip-content"
                className="flex min-w-0 flex-1 items-center justify-end self-stretch text-[#183060]"
              >
                {isExpanded ? (
                  <ChevronUp className="size-4" strokeWidth={2.4} />
                ) : (
                  <ChevronDown className="size-4" strokeWidth={2.4} />
                )}
              </button>
            </div>
          </div>

          <div
            id="updated-betslip-content"
            className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
              isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="flex w-full flex-col items-start gap-4 px-3 pb-6 pt-4">
                <p className="w-full text-[16px] font-semibold leading-5 text-[#183060]">Lotteries</p>
                <div className="w-full overflow-hidden rounded-[4px] border border-[#e4e4e4]">
                  {entries.flatMap((entry) => {
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
                              onClick={() => onRemoveEntry(entry.id)}
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
                              <p className="shrink-0 text-right text-[14px] font-bold leading-4 text-[#183060]">
                                Quick pick
                              </p>
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
                          >
                            <div className="flex h-[73px] shrink-0 items-center">
                              <button
                                type="button"
                                onClick={() => onRemoveEntryLine(entry.id, lineIndex)}
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
                                    {formatEntryLineNumbers(line, index + 1)}
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
                                      <span className="font-bold text-[#147d47]">
                                        {returns ? formatWinAmount(returns) : '-'}
                                      </span>
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
                  })}
                </div>

                <div className="flex w-full flex-wrap items-center justify-center gap-x-2 gap-y-2 pt-2 text-[#0b52b1]">
                  <button
                    type="button"
                    onClick={onClearAll}
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

        <div className={`${isExpanded ? 'flex' : 'hidden'} items-center justify-center bg-[#f8f9fa] px-3 pb-6 pt-3`}>
          <button
            type="button"
            className="flex h-9 w-[200px] items-start justify-center rounded-[4px] border border-[#0b52b1] px-4 py-2.5 text-center text-[12px] font-normal leading-4 text-[#183060] transition hover:bg-white"
          >
            Place bet
          </button>
        </div>
      </div>
    </>
  );
}

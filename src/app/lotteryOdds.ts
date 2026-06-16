export type LotteryOddsId =
  | 'irish-lotto'
  | 'uk-49s'
  | 'ny-lotto'
  | 'daily-millions'
  | 'australian-lotto'
  | 'canadian-lotto'
  | 'french-lotto'
  | 'german-lotto'
  | 'polish-lotto';

export type OddsEntry = {
  label: string;
  value: number | null;
};

type OddsSet = Partial<Record<number, OddsEntry>>;

type LotteryOddsConfig = {
  withoutBonus: OddsSet;
  withBonus?: OddsSet;
};

const odds = (value: number, label?: string): OddsEntry => ({
  label: label ?? `${value.toLocaleString('en-GB')}/1`,
  value,
});

const tbc = (): OddsEntry => ({ label: 'TBC', value: null });

const hasResolvedOddsSet = (set?: OddsSet) => Boolean(set && Object.values(set).some((entry) => entry?.value !== null));

export const lotteryOdds: Record<LotteryOddsId, LotteryOddsConfig> = {
  'irish-lotto': {
    withoutBonus: {
      1: odds(6),
      2: odds(60),
      3: odds(610),
      4: odds(8500),
      5: odds(150000),
    },
    withBonus: {
      1: odds(5),
      2: odds(40),
      3: odds(350),
      4: odds(4000),
      5: odds(50000),
    },
  },
  'uk-49s': {
    withoutBonus: {
      1: odds(6),
      2: odds(57),
      3: odds(625),
      4: odds(8500, '8,500/1'),
      5: odds(160000),
    },
    withBonus: {
      1: odds(5),
      2: odds(40),
      3: odds(350),
      4: odds(5000),
      5: odds(50000),
    },
  },
  'ny-lotto': {
    withoutBonus: {
      1: odds(7),
      2: odds(85),
      3: odds(1250),
      4: odds(17000),
      5: odds(150000),
    },
    withBonus: {
      1: odds(6),
      2: odds(55),
      3: odds(600),
      4: odds(7500),
      5: odds(75000),
    },
  },
  'daily-millions': {
    withoutBonus: {
      1: odds(5),
      2: odds(40),
      3: odds(350),
      4: odds(4000),
      5: odds(66000),
    },
    withBonus: {
      1: tbc(),
      2: tbc(),
      3: tbc(),
      4: tbc(),
      5: tbc(),
    },
  },
  'australian-lotto': {
    withoutBonus: {
      1: odds(6),
      2: odds(55),
      3: odds(550),
      4: odds(7000),
      5: odds(100000),
    },
  },
  'canadian-lotto': {
    withoutBonus: {
      1: odds(6.5, '13/2'),
      2: odds(65),
      3: odds(700),
      4: odds(10000),
      5: odds(150000),
    },
    withBonus: {
      1: tbc(),
      2: tbc(),
      3: tbc(),
      4: tbc(),
      5: tbc(),
    },
  },
  'french-lotto': {
    withoutBonus: {
      1: odds(8),
      2: odds(95),
      3: odds(1250),
      4: odds(30000),
    },
  },
  'german-lotto': {
    withoutBonus: {
      1: odds(6.5, '13/2'),
      2: odds(65),
      3: odds(700),
      4: odds(10000),
      5: odds(150000),
    },
  },
  'polish-lotto': {
    withoutBonus: {
      1: odds(6.5, '13/2'),
      2: odds(65),
      3: odds(700),
      4: odds(10000),
      5: odds(150000),
    },
  },
};

export const normalizeLotteryOddsId = (lotteryId: string): LotteryOddsId =>
  lotteryId in lotteryOdds ? (lotteryId as LotteryOddsId) : 'irish-lotto';

export const getOddsSet = (lotteryId: string, includeBonus: boolean) => {
  const config = lotteryOdds[normalizeLotteryOddsId(lotteryId)];
  return includeBonus && hasResolvedOddsSet(config.withBonus) ? config.withBonus! : config.withoutBonus;
};

export const hasBonusOdds = (lotteryId: string) => hasResolvedOddsSet(lotteryOdds[normalizeLotteryOddsId(lotteryId)].withBonus);

export const getOddsForMatch = (lotteryId: string, matchCount: number, includeBonus: boolean) => {
  const count = Math.min(matchCount, 5);
  return getOddsSet(lotteryId, includeBonus)[count];
};

export const getDisplayOddsEntries = (lotteryId: string, includeBonus: boolean) =>
  [1, 2, 3, 4, 5]
    .map((match) => {
      const entry = getOddsSet(lotteryId, includeBonus)[match];
      return entry ? { match, ...entry } : undefined;
    })
    .filter((entry): entry is { match: number; label: string; value: number } => Boolean(entry && entry.value !== null));

export const formatWinAmount = (amount: number) => {
  if (amount >= 1000) {
    const thousands = amount / 1000;
    return `£${Number.isInteger(thousands) ? thousands.toFixed(0) : thousands.toFixed(1)}k`;
  }

  if (Number.isInteger(amount)) return `£${amount.toFixed(0)}`;

  return `£${amount.toFixed(2)}`;
};

export const getPrizeSummary = (lotteryId: string, includeBonus = false) => {
  const entries = getDisplayOddsEntries(lotteryId, includeBonus);
  const maxValue = entries.reduce((max, entry) => Math.max(max, entry.value), 0);

  return maxValue > 0 ? `£1 bet = up to ${formatWinAmount(maxValue)}` : '£1 bet';
};

export const getOddsRows = (lotteryId: string, includeBonus = false) =>
  getDisplayOddsEntries(lotteryId, includeBonus).map((entry) => {
    return `Match ${entry.match}${includeBonus ? ' + bonus ball' : ''} (${entry.label})→ Win ${formatWinAmount(entry.value)}`;
  });

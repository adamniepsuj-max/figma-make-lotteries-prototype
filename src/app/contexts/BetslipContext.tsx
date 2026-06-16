import { createContext, useContext, useState, ReactNode } from 'react';

export type QuickPickEntry = {
  id: string;
  type: 'quick-pick';
  lottery: string;
  lotteryAbbrev: string;
  lines: number;
  draws: Array<{
    day: string;
    label: string;
    options: string[];
  }>;
  duration: number;
  stake: number;
};

export type ManualEntry = {
  id: string;
  type: 'manual';
  lottery: string;
  lotteryAbbrev: string;
  lines: Array<{
    numbers: number[];
    bonusBall?: number;
    stake: number;
  }>;
  draws: Array<{
    day: string;
    label: string;
    options: string[];
  }>;
  duration: number;
};

export type BetslipEntry = QuickPickEntry | ManualEntry;

type BetslipContextType = {
  entries: BetslipEntry[];
  addEntry: (entry: BetslipEntry) => void;
  removeEntry: (id: string) => void;
  removeEntryLine: (id: string, lineIndex: number) => void;
  clearAll: () => void;
};

const BetslipContext = createContext<BetslipContextType | undefined>(undefined);

export function BetslipProvider({ children }: { children: ReactNode }) {
  const [entries, setEntries] = useState<BetslipEntry[]>([]);

  const addEntry = (entry: BetslipEntry) => {
    setEntries((prev) => [...prev, entry]);
  };

  const removeEntry = (id: string) => {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  };

  const removeEntryLine = (id: string, lineIndex: number) => {
    setEntries((prev) =>
      prev.flatMap((entry) => {
        if (entry.id !== id) return [entry];
        if (entry.type === 'quick-pick') return [];

        const nextLines = entry.lines.filter((_, index) => index !== lineIndex);
        return nextLines.length > 0 ? [{ ...entry, lines: nextLines }] : [];
      })
    );
  };

  const clearAll = () => {
    setEntries([]);
  };

  return (
    <BetslipContext.Provider
      value={{
        entries,
        addEntry,
        removeEntry,
        removeEntryLine,
        clearAll,
      }}
    >
      {children}
    </BetslipContext.Provider>
  );
}

export function useBetslip() {
  const context = useContext(BetslipContext);
  if (context === undefined) {
    throw new Error('useBetslip must be used within a BetslipProvider');
  }
  return context;
}

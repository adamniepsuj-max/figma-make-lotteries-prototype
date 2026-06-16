import { X } from 'lucide-react';
import { useState } from 'react';
import { SelectedNumberBall } from './SelectedNumberBall';

type NumberSelectionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (numbers: number[], bonusBall?: number) => void;
  requiredCount?: number;
  maxNumber?: number;
  allowBonus?: boolean;
  title?: string;
};

export function NumberSelectionModal({
  isOpen,
  onClose,
  onConfirm,
  requiredCount = 5,
  maxNumber = 49,
  allowBonus = true,
  title = 'Select Numbers',
}: NumberSelectionModalProps) {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [bonusBall, setBonusBall] = useState<number | null>(null);
  const [isSelectingBonus, setIsSelectingBonus] = useState(false);

  if (!isOpen) return null;

  const allNumbers = Array.from({ length: maxNumber }, (_, i) => i + 1);
  const isMainSelectionComplete = selectedNumbers.length === requiredCount;
  const canSelectBonus = allowBonus;
  const noBonusOddsByMatch: Record<number, string> = {
    1: '6/1',
    2: '60/1',
    3: '610/1',
    4: '8,500/1',
    5: '150,000/1',
  };
  const bonusOddsByMatch: Record<number, string> = {
    1: '5/1',
    2: '40/1',
    3: '350/1',
    4: '4,000/1',
    5: '50,000/1',
  };
  const currentMatchCount = Math.min(selectedNumbers.length, 5);
  const noBonusOdds = noBonusOddsByMatch[currentMatchCount];
  const bonusOdds = bonusOddsByMatch[currentMatchCount];
  const numberCountWords: Record<number, string> = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
  };
  const selectionStatus =
    selectedNumbers.length > 0
      ? `${numberCountWords[selectedNumbers.length] ?? selectedNumbers.length} ${
          selectedNumbers.length === 1 ? 'number' : 'numbers'
        } selected`
      : 'Select up to five numbers';

  const handleNumberClick = (num: number) => {
    // Toggle main number
    if (selectedNumbers.includes(num)) {
      setSelectedNumbers(selectedNumbers.filter((n) => n !== num));
    } else if (selectedNumbers.length < requiredCount) {
      setSelectedNumbers([...selectedNumbers, num]);
    }
  };

  const handleClear = () => {
    setSelectedNumbers([]);
    setBonusBall(null);
    setIsSelectingBonus(false);
  };

  const handleConfirm = () => {
    if (selectedNumbers.length === requiredCount) {
      onConfirm(selectedNumbers, bonusBall || undefined);
      handleClear();
    }
  };

  const handleToggleBonusMode = () => {
    if (!canSelectBonus) return;
    setIsSelectingBonus(!isSelectingBonus);
    if (isSelectingBonus) {
      setBonusBall(null);
    }
  };

  const getNumberStyle = (num: number) => {
    const isSelected = selectedNumbers.includes(num);
    const isDisabled = selectedNumbers.length >= requiredCount && !isSelected;

    if (isSelected) {
      return 'bg-gradient-to-br from-blue-600 to-blue-700 text-white border-2 border-blue-600 shadow-md font-bold';
    }
    if (isDisabled) {
      return 'bg-gray-100 text-gray-400 border-2 border-gray-200 cursor-not-allowed';
    }
    return 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 font-semibold';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[375px] max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-4 flex items-center justify-between">
          <h3 className="text-white font-bold text-lg">{title}</h3>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-lg p-1 transition"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Bonus Ball Toggle */}
        {allowBonus && (
          <div className="px-4 pt-3 pb-2">
            <button
              onClick={handleToggleBonusMode}
              disabled={!canSelectBonus}
              className="flex gap-3 items-center px-6 py-2 w-full hover:bg-gray-50 transition rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <p className="flex-1 font-bold leading-[15px] text-[#155dfc] text-[14px] tracking-[0.1172px]">
                Include bonus ball
              </p>
              <div
                className={`flex h-[21px] items-center p-[2px] rounded-[10px] shrink-0 w-[40px] transition-colors ${
                  isSelectingBonus ? 'bg-[#155dfc]' : 'bg-[#d6d6d6]'
                }`}
              >
                <div
                  className={`shrink-0 size-[16px] rounded-full bg-white border border-[#c0c0c0] transition-transform ${
                    isSelectingBonus ? 'translate-x-[19px]' : 'translate-x-0'
                  }`}
                />
              </div>
            </button>
          </div>
        )}

        {/* Content */}
        <div className="p-4 overflow-y-auto flex-1">
          {/* Status Card */}
          <div className="bg-[#eff6ff] border-2 border-[#bedbff] rounded-xl p-4 mb-4">
            <div className="flex items-start justify-between mb-2">
              <p className="text-xs text-gray-700 font-normal">
                {selectionStatus}
              </p>
              {selectedNumbers.length > 0 && (
                <div className="text-right">
                  {isSelectingBonus && noBonusOdds && (
                    <p className="text-[10px] text-gray-500 line-through mb-0.5">Was {noBonusOdds}</p>
                  )}
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] text-gray-600">M{selectedNumbers.length}</span>
                    <span className="text-xs font-bold text-gray-900">
                      {isSelectingBonus ? bonusOdds : noBonusOdds}
                    </span>
                  </div>
                </div>
              )}
            </div>
            {selectedNumbers.length > 0 && (
              <div className="flex gap-1.5 flex-wrap items-center">
                {selectedNumbers.map((num, idx) => (
                  <SelectedNumberBall
                    key={idx}
                    number={num}
                    onClick={() => handleNumberClick(num)}
                    ariaLabel={`Remove number ${num}`}
                  />
                ))}
                {Array.from({ length: requiredCount - selectedNumbers.length }).map((_, idx) => (
                  <div
                    key={`empty-${idx}`}
                    className="w-7 h-7 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center text-gray-400 text-xs"
                  >
                    ?
                  </div>
                ))}
                {isSelectingBonus && selectedNumbers.length > 0 && (
                  <div className="flex items-center gap-1 ml-1">
                    <div className="w-7 h-7 bg-gradient-to-br from-[#ff9500] to-[#ff6b00] rounded-full flex items-center justify-center font-bold text-white text-xs shadow-sm">
                      +1
                    </div>
                    <span className="text-xs font-semibold text-[#ff9500]">Bonus</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Number Grid */}
          <div className="grid grid-cols-7 gap-2">
            {allNumbers.map((num) => (
              <button
                key={num}
                onClick={() => handleNumberClick(num)}
                disabled={
                  selectedNumbers.length >= requiredCount &&
                  !selectedNumbers.includes(num)
                }
                className={`aspect-square rounded-lg text-sm transition-all ${getNumberStyle(num)}`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-gray-200 flex gap-3">
          <button
            onClick={handleClear}
            className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-bold text-sm hover:bg-gray-200 transition"
          >
            Clear
          </button>
          <button
            onClick={handleConfirm}
            disabled={selectedNumbers.length !== requiredCount}
            className={`flex-1 py-3 rounded-xl font-bold text-sm transition ${
              selectedNumbers.length === requiredCount
                ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg hover:shadow-xl'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            ✓ Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

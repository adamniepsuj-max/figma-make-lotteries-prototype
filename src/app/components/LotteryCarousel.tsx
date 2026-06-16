type Lottery = {
  id: string;
  name: string;
  abbreviation: string;
};

type LotteryCarouselProps = {
  lotteries: Lottery[];
  selectedId: string;
  onSelect: (id: string) => void;
};

export function LotteryCarousel({ lotteries, selectedId, onSelect }: LotteryCarouselProps) {
  return (
    <div className="w-full overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <style>{`
        .lottery-carousel::-webkit-scrollbar { display: none; }
      `}</style>
      <div className="flex gap-2 px-4 py-3 lottery-carousel">
        {lotteries.map((lottery) => {
          const isSelected = lottery.id === selectedId;
          return (
            <button
              key={lottery.id}
              onClick={() => onSelect(lottery.id)}
              className={`flex-shrink-0 rounded-xl px-4 py-3 transition-all shadow-md ${
                isSelected
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-105 shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg'
              }`}
            >
              <div className="flex flex-col items-center gap-1 min-w-[56px]">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-gradient-to-br from-blue-500 to-purple-600 text-white'
                  }`}
                >
                  {lottery.abbreviation}
                </div>
                <span className={`text-[10px] font-semibold whitespace-nowrap ${
                  isSelected ? 'text-white' : 'text-gray-700'
                }`}>
                  {lottery.name}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
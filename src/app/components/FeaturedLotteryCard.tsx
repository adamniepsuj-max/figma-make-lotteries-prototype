import { Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import favFilledIcon from '../assets/fav-filled.svg';
import favOutlineIcon from '../assets/fav-outline.svg';

type FeaturedLotteryCardProps = {
  name: string;
  icon: string | React.ReactNode;
  drawTime: string;
  drawTimeMinutes: number;
  onPlayNow: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
  selectionBorder?: {
    backgroundColor: string;
    borderColor: string;
  };
};

export function FeaturedLotteryCard({
  name,
  icon,
  drawTime,
  drawTimeMinutes,
  onPlayNow,
  isFavorite = false,
  onToggleFavorite,
  selectionBorder,
}: FeaturedLotteryCardProps) {
  const [timeLeft, setTimeLeft] = useState(drawTimeMinutes);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const cardContent = (
    <div className="bg-white rounded-[8px] shadow-[0px_0px_18px_0px_rgba(23,31,51,0.1)] px-[18px] py-3 flex flex-col gap-4 w-[157px] h-[184px] relative">
      {/* Icon */}
      <div className="flex items-center justify-between">
        {typeof icon === 'string' ? (
          <div className="w-[50px] h-[50px] bg-gradient-to-br from-button-primary-default to-purple-accent rounded-full flex items-center justify-center shadow-md">
            <span className="text-text-inverted font-bold text-lg">{icon}</span>
          </div>
        ) : (
          icon
        )}

        {/* Favorite Star */}
        {onToggleFavorite && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite();
            }}
            className="w-[18px] h-[18px] flex items-center justify-center"
          >
            <img src={isFavorite ? favFilledIcon : favOutlineIcon} alt="" className="block size-[18px]" />
          </button>
        )}
      </div>

      {/* Title & Next Draw */}
      <div className="flex flex-col gap-0.5">
        <h3 className="text-text-primary font-semibold text-sm leading-4">
          {name}
        </h3>
        <p className="text-text-secondary text-[10px] leading-3">
          Next draw: {drawTime}
        </p>
      </div>

      {/* Countdown & Button */}
      <div className="flex flex-col gap-2 mt-auto">
        {/* Countdown */}
        <div className="flex items-center gap-1.5 h-4">
          <Clock className="size-3 text-[#F54900]" strokeWidth={2} />
          <p className="text-[#F54900] text-[10px] leading-3">
            Draw in {timeLeft} min
          </p>
        </div>

        {/* Play Now Button */}
        <button
          onClick={onPlayNow}
          className="bg-[#0b52b1] text-white rounded px-3 py-1.5 text-xs leading-4 font-normal hover:bg-[#094a9e] transition w-full"
        >
          Play now
        </button>
      </div>
    </div>
  );

  if (selectionBorder) {
    return (
      <div
        className="p-[6px] rounded-[10px] relative"
        style={{ backgroundColor: selectionBorder.backgroundColor }}
      >
        <div
          className="absolute inset-0 pointer-events-none rounded-[10px] border-2"
          style={{ borderColor: selectionBorder.borderColor }}
        />
        {cardContent}
      </div>
    );
  }

  return cardContent;
}

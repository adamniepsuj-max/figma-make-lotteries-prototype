import { ChevronRight, Clock } from 'lucide-react';
import favFilledIcon from '../assets/fav-filled.svg';
import favOutlineIcon from '../assets/fav-outline.svg';

type LotteryListItemProps = {
  icon: string | React.ReactNode;
  name: string;
  drawTime: string;
  timeUntilDraw?: string;
  isFavorite?: boolean;
  onClick: () => void;
  onToggleFavorite?: () => void;
};

export function LotteryListItem({
  icon,
  name,
  drawTime,
  timeUntilDraw,
  isFavorite = false,
  onClick,
  onToggleFavorite,
}: LotteryListItemProps) {
  return (
    <div
      className="bg-background-01 h-[70px] rounded-lg shadow-[0px_0px_18px_0px_rgba(23,31,51,0.1)] w-full cursor-pointer hover:shadow-lg transition"
      onClick={onClick}
    >
      <div className="flex items-center h-full px-3 py-2 gap-3">
        {/* Star Icon */}
        {onToggleFavorite && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite();
            }}
            className="shrink-0 w-[18px] h-[18px] flex items-center justify-center"
          >
            <img src={isFavorite ? favFilledIcon : favOutlineIcon} alt="" className="block size-[18px]" />
          </button>
        )}

        {/* Lottery Icon */}
        {typeof icon === 'string' ? (
          <div className="w-9 h-9 bg-gradient-to-br from-button-primary-default to-purple-accent rounded-full flex items-center justify-center shadow-md shrink-0">
            <span className="text-text-inverted font-bold text-base">{icon}</span>
          </div>
        ) : (
          <div className="shrink-0">{icon}</div>
        )}

        {/* Text Block */}
        <div className="flex-1 min-w-0 flex flex-col gap-1.5">
          {/* Title */}
          <h3 className="text-text-primary font-semibold text-sm leading-4 truncate">
            {name}
          </h3>

          {/* Subtitle */}
          <div className="flex items-center gap-1.5 h-4">
            <Clock className="size-3 text-text-secondary shrink-0" />
            {timeUntilDraw ? (
              <p className="text-text-secondary text-[10px] leading-3">
                {timeUntilDraw}
              </p>
            ) : (
              <p className="text-text-secondary text-[10px] leading-3">
                {drawTime}
              </p>
            )}
          </div>
        </div>

        {/* Chevron Icon */}
        <div className="shrink-0 w-3.5 h-3.5">
          <ChevronRight className="size-3.5 text-text-primary" />
        </div>
      </div>
    </div>
  );
}

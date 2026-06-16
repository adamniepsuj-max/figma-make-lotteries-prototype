import { ChevronRight, Clock } from 'lucide-react';
import favFilledIcon from '../assets/fav-filled.svg';
import favOutlineIcon from '../assets/fav-outline.svg';

/**
 * Unified Lottery Item component with support for multiple states:
 *
 * Variants:
 * - default: List row with chevron, neutral background, grey star (if not favorite)
 * - selected: Featured row with "Play now" button, gold border, gold star
 *
 * States:
 * - Live/Urgent: Controlled by countdown prop - shows countdown row with warning color
 *
 * Usage:
 * - Use variant="default" for list items
 * - Use variant="selected" for highlighted/featured item
 * - Add countdown prop to show live countdown (applies to both variants)
 */
type LotteryItemProps = {
  variant?: 'default' | 'selected';
  icon: React.ReactNode;
  name: string;
  drawTime: string;
  countdown?: string;
  isFavorite?: boolean;
  onClick: () => void;
  onToggleFavorite?: () => void;
};

export function LotteryItem({
  variant = 'default',
  icon,
  name,
  drawTime,
  countdown,
  isFavorite = false,
  onClick,
  onToggleFavorite,
}: LotteryItemProps) {
  const isSelected = variant === 'selected';
  const hasCountdown = !!countdown;

  return (
    <div
      className={`${
        isSelected
          ? 'bg-[rgba(255,162,2,0.07)] rounded-[10px] p-[6px] relative'
          : ''
      }`}
    >
      {isSelected && (
        <div
          aria-hidden="true"
          className="absolute border-2 border-[rgba(255,162,2,0.4)] border-solid inset-0 pointer-events-none rounded-[10px]"
        />
      )}
      <div
        className={`bg-white ${
          isSelected ? 'h-[80px]' : 'h-[70px]'
        } rounded-lg shadow-[0px_0px_18px_0px_rgba(23,31,51,0.1)] w-full cursor-pointer hover:shadow-lg transition`}
        onClick={onClick}
      >
        <div
          className={`flex items-start h-full gap-3 ${
            isSelected ? 'px-[8px] py-[12px]' : 'px-3 py-2'
          }`}
        >
          {/* Star Icon */}
          {onToggleFavorite && (
            <div className="flex items-start pt-[18px] shrink-0">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleFavorite();
                }}
                className="shrink-0 w-[14px] h-[14px] flex items-center justify-center"
              >
                <img src={isFavorite ? favFilledIcon : favOutlineIcon} alt="" className="block size-[14px]" />
              </button>
            </div>
          )}

          {/* Lottery Icon */}
          <div className="flex items-start pt-[6px] pb-[8px] shrink-0">
            {icon}
          </div>

          {/* Text Block */}
          <div className={`flex-1 min-w-0 flex flex-col ${isSelected ? 'justify-end gap-[6px]' : 'justify-center gap-1.5'}`}>
            <div className="flex flex-col gap-[2px]">
              {/* Title */}
              <h3 className="text-[#183060] font-semibold text-[14px] leading-4">
                {name}
              </h3>

              {/* Subtitle */}
              <p className="text-[#546d91] text-[10px] leading-3">
                {drawTime}
              </p>
            </div>

            {/* Countdown (Live state) */}
            {hasCountdown && (
              <div className="flex items-center gap-[6px] h-4">
                <Clock className="size-3 text-[#F54900]" />
                <p className="text-[#F54900] font-semibold text-[10px] leading-3">
                  {countdown}
                </p>
              </div>
            )}
          </div>

          {/* Right Element: Chevron or Button */}
          {isSelected ? (
            <div className="flex items-center justify-center shrink-0 w-[101px]">
              <div className="rounded-[4px] border border-[#0b52b1] px-[12px] py-[6px]">
                <p className="text-[#183060] text-[12px] leading-4 text-center whitespace-nowrap">
                  Play now
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center shrink-0 w-3.5 h-full">
              <ChevronRight className="size-3.5 text-text-primary" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

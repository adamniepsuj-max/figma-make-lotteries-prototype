import { Clock, Info } from 'lucide-react';

type LotteryCardProps = {
  icon: string;
  name: string;
  drawTime: string;
  timeUntilDraw?: string;
  onPlay: () => void;
  onInfo?: () => void;
};

export function LotteryCard({
  icon,
  name,
  drawTime,
  timeUntilDraw,
  onPlay,
  onInfo,
}: LotteryCardProps) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition border border-gray-100">
      <div className="flex items-center justify-between">
        {/* Left: Icon + Info */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {/* Icon */}
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
            <span className="text-white font-bold text-base">{icon}</span>
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-1">
              <h3 className="font-bold text-base text-gray-900 truncate">
                {name}
              </h3>
              {onInfo && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onInfo();
                  }}
                  className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center transition"
                >
                  <Info className="size-3 text-blue-600" />
                </button>
              )}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-600">
              <Clock className="size-3" />
              {timeUntilDraw ? (
                <span className="font-semibold text-orange-600">{timeUntilDraw}</span>
              ) : (
                <span>{drawTime}</span>
              )}
            </div>
          </div>
        </div>

        {/* Right: CTA */}
        <div className="ml-3 flex-shrink-0">
          <button
            onClick={onPlay}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition min-w-[68px]"
          >
            Play
          </button>
        </div>
      </div>
    </div>
  );
}
import { Clock } from 'lucide-react';

type DrawTimeCardProps = {
  label: string;
  time: string;
  main: boolean;
  plus1: boolean;
  plus2: boolean;
  onToggleMain: () => void;
  onTogglePlus1: () => void;
  onTogglePlus2: () => void;
};

export function DrawTimeCard({
  label,
  time,
  main,
  plus1,
  plus2,
  onToggleMain,
  onTogglePlus1,
  onTogglePlus2,
}: DrawTimeCardProps) {
  // Check if any option is selected to highlight parent card
  const hasSelection = main || plus1 || plus2;

  return (
    <div className="flex flex-col w-full min-w-0">
      {/* Unified Card Container */}
      <div
        className={`rounded-lg transition-all ${
          hasSelection
            ? 'bg-blue-50/70 ring-1 ring-blue-300/60'
            : 'bg-white ring-1 ring-gray-200'
        }`}
      >
        {/* Time Slot Header - Dominant */}
        <div className="px-2.5 pt-3 pb-2.5">
          <div className="text-center space-y-1">
            <h4
              className={`font-semibold text-xs leading-tight transition-colors ${
                hasSelection ? 'text-gray-900' : 'text-gray-700'
              }`}
            >
              {label}
            </h4>
            <div className="flex items-center justify-center gap-1">
              <Clock
                className={`w-2.5 h-2.5 transition-colors ${
                  hasSelection ? 'text-blue-600' : 'text-gray-400'
                }`}
              />
              <p
                className={`text-[10px] font-medium transition-colors ${
                  hasSelection ? 'text-blue-600' : 'text-gray-500'
                }`}
              >
                {time}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mx-2" />

        {/* Selection Options - Subordinate */}
        <div className="px-2 py-2.5 space-y-1.5">
          {/* Main */}
          <button
            onClick={onToggleMain}
            className={`w-full h-8 rounded-md transition-all flex items-center justify-center gap-1 ${
              main
                ? 'bg-blue-600 ring-1 ring-blue-600'
                : 'bg-white ring-1 ring-gray-200 hover:ring-blue-300 hover:bg-blue-50/40'
            }`}
          >
            <span
              className={`text-[10px] font-semibold transition-colors ${
                main ? 'text-white' : 'text-gray-700'
              }`}
            >
              Main
            </span>
            {main && (
              <svg
                className="w-2.5 h-2.5"
                fill="none"
                viewBox="0 0 12 12"
              >
                <path
                  d="M2.5 6.5L4.5 8.5L9.5 3.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>

          {/* +1 */}
          <button
            onClick={onTogglePlus1}
            className={`w-full h-8 rounded-md transition-all flex items-center justify-center gap-1 ${
              plus1
                ? 'bg-blue-600 ring-1 ring-blue-600'
                : 'bg-white ring-1 ring-gray-200 hover:ring-blue-300 hover:bg-blue-50/40'
            }`}
          >
            <span
              className={`text-[10px] font-semibold transition-colors ${
                plus1 ? 'text-white' : 'text-gray-700'
              }`}
            >
              +1
            </span>
            {plus1 && (
              <svg
                className="w-2.5 h-2.5"
                fill="none"
                viewBox="0 0 12 12"
              >
                <path
                  d="M2.5 6.5L4.5 8.5L9.5 3.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>

          {/* +2 */}
          <button
            onClick={onTogglePlus2}
            className={`w-full h-8 rounded-md transition-all flex items-center justify-center gap-1 ${
              plus2
                ? 'bg-blue-600 ring-1 ring-blue-600'
                : 'bg-white ring-1 ring-gray-200 hover:ring-blue-300 hover:bg-blue-50/40'
            }`}
          >
            <span
              className={`text-[10px] font-semibold transition-colors ${
                plus2 ? 'text-white' : 'text-gray-700'
              }`}
            >
              +2
            </span>
            {plus2 && (
              <svg
                className="w-2.5 h-2.5"
                fill="none"
                viewBox="0 0 12 12"
              >
                <path
                  d="M2.5 6.5L4.5 8.5L9.5 3.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
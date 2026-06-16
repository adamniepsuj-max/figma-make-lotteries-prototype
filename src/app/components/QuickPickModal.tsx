import { X, Check } from 'lucide-react';
import { useState } from 'react';

type QuickPickModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onPlayPackage: (packageId: string) => void;
  onEditPackage: (packageId: string) => void;
};

type SavedPackage = {
  id: string;
  lottery: string;
  lotteryAbbrev: string;
  lines: number;
  draws: Array<{
    day: string;
    time: string;
    label: string;
    options: string[];
  }>;
  duration: number;
  stake: number;
  isRecommended?: boolean;
};

export function QuickPickModal({
  isOpen,
  onClose,
  onPlayPackage,
  onEditPackage,
}: QuickPickModalProps) {
  const [selectedPackageId, setSelectedPackageId] = useState<string>('rec-1');

  if (!isOpen) return null;

  // Sample recommended package
  const recommendedPackage: SavedPackage = {
    id: 'rec-1',
    lottery: 'Irish Lotto 6 ball',
    lotteryAbbrev: 'IL',
    lines: 2,
    draws: [
      { day: 'Wed', time: '12:49', label: 'Lunch', options: ['Main', '+1'] },
    ],
    duration: 1,
    stake: 1,
    isRecommended: true,
  };

  // Sample saved packages
  const savedPackages: SavedPackage[] = [
    {
      id: 'saved-1',
      lottery: "49's Lotto",
      lotteryAbbrev: '49',
      lines: 3,
      draws: [
        { day: 'Wednesday', time: '11:49', label: 'Brunch', options: ['Main'] },
        { day: 'Wednesday', time: '16:49', label: 'Drive', options: ['Main', '+1'] },
      ],
      duration: 2,
      stake: 1,
    },
    {
      id: 'saved-2',
      lottery: 'Irish Lotto 6 ball',
      lotteryAbbrev: 'IL',
      lines: 1,
      draws: [
        { day: 'Saturday', time: '12:49', label: 'Lunch', options: ['Main', '+1', '+2'] },
      ],
      duration: 4,
      stake: 2,
    },
  ];

  const handlePlayThis = () => {
    if (selectedPackageId) {
      onPlayPackage(selectedPackageId);
      onClose();
    }
  };

  const handleEditFirst = () => {
    if (selectedPackageId) {
      onEditPackage(selectedPackageId);
      onClose();
    }
  };

  const PackageCard = ({ pkg, isSelected }: { pkg: SavedPackage; isSelected: boolean }) => (
    <button
      onClick={() => setSelectedPackageId(pkg.id)}
      className={`w-full text-left rounded-[10px] p-3 border-2 transition-all ${
        isSelected
          ? 'bg-blue-50 border-blue-500 shadow-md'
          : 'bg-white border-gray-200 hover:border-gray-300'
      }`}
    >
      {/* Selection Indicator */}
      {isSelected && (
        <div className="absolute top-3 right-3 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
          <Check className="size-3 text-white" />
        </div>
      )}

      {/* Package Header */}
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center border border-gray-200">
          <span className="font-bold text-sm text-[#155dfc]">{pkg.lotteryAbbrev}</span>
        </div>
        <p className="font-bold text-xs text-gray-900">{pkg.lottery}</p>
      </div>

      {/* Package Details */}
      <div className="space-y-1.5 text-[11px]">
        {/* Lines */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-500 min-w-[60px]">Lines:</span>
          <span className="font-bold text-gray-900">{pkg.lines} line{pkg.lines > 1 ? 's' : ''}</span>
        </div>

        {/* Draws */}
        <div className="flex items-start gap-2">
          <span className="font-semibold text-gray-500 min-w-[60px]">Draws:</span>
          <div className="flex-1 space-y-1">
            {pkg.draws.map((draw, idx) => (
              <div key={idx} className="flex items-center gap-1 flex-wrap">
                <span className="font-semibold text-gray-700">{draw.day} • {draw.label}</span>
                {draw.options.map((opt, optIdx) => (
                  <span
                    key={optIdx}
                    className="inline-flex items-center px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded text-[9px] font-semibold border border-blue-200"
                  >
                    {opt}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-500 min-w-[60px]">Duration:</span>
          <span className="font-bold text-gray-900">{pkg.duration} week{pkg.duration > 1 ? 's' : ''}</span>
        </div>

        {/* Stake */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-500 min-w-[60px]">Stake:</span>
          <span className="font-bold text-gray-900">£{pkg.stake} per line</span>
        </div>
      </div>
    </button>
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-end bg-black/50 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[375px] mx-auto bg-white rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] animate-in slide-in-from-bottom duration-300 max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#155dfc] to-[#9810fa] px-4 py-3 sticky top-0 z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="size-4" fill="white" viewBox="0 0 16 16">
              <path d="M8 1L10.1 5.3L15 6L11.5 9.4L12.2 14.3L8 12.1L3.8 14.3L4.5 9.4L1 6L5.9 5.3L8 1Z" />
            </svg>
            <div>
              <h3 className="font-bold text-base text-white leading-tight">Quick Pick</h3>
              <p className="text-[10px] text-white/80">Use your recent or saved play</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-white/10 transition"
          >
            <X className="size-4 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="px-4 py-4 space-y-3">
          {/* Recommended Package */}
          <div>
            <div className="bg-yellow-400 rounded-full px-2 py-1 inline-flex items-center gap-1 mb-2">
              <svg className="size-2.5" fill="currentColor" viewBox="0 0 12 12">
                <path d="M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.5L6 8.885L2.91 10.5L3.5 7.07L1 4.635L4.455 4.13L6 1Z" />
              </svg>
              <span className="text-[9px] font-bold text-gray-900 leading-none">RECOMMENDED</span>
            </div>
            <div className="relative">
              <PackageCard pkg={recommendedPackage} isSelected={selectedPackageId === recommendedPackage.id} />
            </div>

            {/* Action Buttons for Recommended */}
            {selectedPackageId === recommendedPackage.id && (
              <div className="flex gap-2 mt-2">
                <button
                  onClick={handleEditFirst}
                  className="flex-1 bg-white border-2 border-gray-300 rounded-[10px] py-2 font-semibold text-xs text-gray-700 hover:bg-gray-50 transition"
                >
                  Edit first
                </button>
                <button
                  onClick={handlePlayThis}
                  className="flex-1 bg-gradient-to-r from-[#00c950] to-[#00a63e] rounded-[10px] py-2 shadow-lg font-semibold text-xs text-white hover:shadow-xl transition flex items-center justify-center gap-1"
                >
                  <Check className="size-3" />
                  Play this
                </button>
              </div>
            )}
          </div>

          {/* Saved Plays */}
          <div>
            <h4 className="font-bold text-xs text-gray-900 mb-2">Your saved plays</h4>
            <div className="space-y-2">
              {savedPackages.map((pkg) => (
                <div key={pkg.id} className="relative">
                  <PackageCard pkg={pkg} isSelected={selectedPackageId === pkg.id} />

                  {/* Action Buttons for Selected Saved Package */}
                  {selectedPackageId === pkg.id && (
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={handleEditFirst}
                        className="flex-1 bg-white border-2 border-gray-300 rounded-[10px] py-2 font-semibold text-xs text-gray-700 hover:bg-gray-50 transition"
                      >
                        Edit first
                      </button>
                      <button
                        onClick={handlePlayThis}
                        className="flex-1 bg-gradient-to-r from-[#00c950] to-[#00a63e] rounded-[10px] py-2 shadow-lg font-semibold text-xs text-white hover:shadow-xl transition flex items-center justify-center gap-1"
                      >
                        <Check className="size-3" />
                        Play this
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Alternative Action */}
          <button
            onClick={onClose}
            className="w-full bg-gray-100 text-gray-700 py-2.5 rounded-[10px] font-semibold text-xs hover:bg-gray-200 transition"
          >
            Choose different setup
          </button>
        </div>
      </div>
    </div>
  );
}

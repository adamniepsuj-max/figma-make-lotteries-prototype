import { X } from 'lucide-react';
import { useState } from 'react';
import { StepIndicator } from './StepIndicator';

type OnboardingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  lotteryName: string;
};

export function OnboardingModal({ isOpen, onClose, lotteryName }: OnboardingModalProps) {
  const [onboardingStep, setOnboardingStep] = useState(1);

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
    setOnboardingStep(1);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end bg-black/50 animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-[375px] mx-auto bg-white rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] animate-in slide-in-from-bottom duration-300 max-h-[85vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#155dfc] to-[#9810fa] px-4 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-lg text-white leading-tight">
              About {lotteryName}
            </h3>
            <button
              onClick={handleClose}
              className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/10 transition"
            >
              <X className="size-5 text-white" />
            </button>
          </div>

          {/* Step Indicator */}
          <StepIndicator
            totalSteps={3}
            currentStep={onboardingStep}
            labels={['How to Play', 'Draw Times', 'Prizes']}
          />
        </div>

        {/* Content */}
        <div className="p-4">
          {onboardingStep === 1 && (
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-gray-900">How to Play</h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                Pick 5 numbers from 1-49, plus an optional bonus ball. Match numbers to win prizes based on odds.
              </p>

              {/* Two Entry Paths */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 border border-blue-200">
                <p className="text-xs font-semibold text-gray-900 mb-2">Two ways to play:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <p className="text-xs text-gray-800">
                      <span className="font-semibold">Quick Pick</span> — Use a pre-configured package for instant play
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <p className="text-xs text-gray-800">
                      <span className="font-semibold">Play now</span> — Build your entry from scratch with full control
                    </p>
                  </div>
                </div>
              </div>

              {/* Number Selection Methods */}
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <p className="text-xs font-semibold text-blue-900 mb-2">Number selection methods:</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-blue-800">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                    <span>Manual pick</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                    <span>Favourite</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                    <span>Re-use</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                    <span>Lucky dip</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {onboardingStep === 2 && (
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-gray-900">Draw Times</h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                Each day has multiple time slots. Select as many as you want.
              </p>

              {/* Time Slots */}
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                <p className="text-xs font-semibold text-gray-900 mb-2">Time slots:</p>
                <div className="grid grid-cols-2 gap-2">
                  {['11:49 Brunch', '12:49 Lunch', '16:49 Drive', '17:49 Tea'].map((time) => (
                    <div
                      key={time}
                      className="bg-white rounded-lg p-2 border border-gray-300 text-center"
                    >
                      <p className="text-xs font-semibold text-gray-900">{time}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Draw Options */}
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <p className="text-xs font-semibold text-blue-900 mb-2">Options per time slot:</p>
                <div className="space-y-2 text-xs text-blue-800">
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <p><span className="font-semibold">Main</span> — Standard entry for that draw</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <p><span className="font-semibold">+1</span> — One additional play for same draw</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <p><span className="font-semibold">+2</span> — Two additional plays for same draw</p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-600 italic">
                💡 You can select multiple time slots and multiple options per slot
              </p>
            </div>
          )}

          {onboardingStep === 3 && (
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-gray-900">Prizes & Odds</h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                Match all 5 numbers for the top prize. Smaller prizes available for matching fewer numbers.
              </p>
              <div className="space-y-2">
                {[
                  { match: 5, odds: '50,000/1', prize: '£50,000' },
                  { match: 4, odds: '4,000/1', prize: '£4,000' },
                  { match: 3, odds: '350/1', prize: '£350' },
                  { match: 2, odds: '40/1', prize: '£40' },
                  { match: 1, odds: '5/1', prize: '£5' },
                ].map((item) => (
                  <div
                    key={item.match}
                    className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-2 border border-blue-200"
                  >
                    <span className="text-xs font-semibold text-gray-900">
                      Match {item.match}
                    </span>
                    <span className="text-xs text-gray-600">{item.odds}</span>
                    <span className="text-xs font-bold text-blue-600">{item.prize}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 flex gap-2">
          {onboardingStep > 1 && (
            <button
              onClick={() => setOnboardingStep(onboardingStep - 1)}
              className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-[14px] font-semibold text-sm hover:bg-gray-200 transition"
            >
              Back
            </button>
          )}
          <button
            onClick={() => {
              if (onboardingStep < 3) {
                setOnboardingStep(onboardingStep + 1);
              } else {
                handleClose();
              }
            }}
            className={`${
              onboardingStep === 1 ? 'flex-1' : 'flex-1'
            } bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-[14px] font-semibold text-sm hover:shadow-lg transition`}
          >
            {onboardingStep < 3 ? 'Next' : 'Got it'}
          </button>
        </div>
      </div>
    </div>
  );
}

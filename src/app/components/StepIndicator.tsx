type StepIndicatorProps = {
  totalSteps: number;
  currentStep: number;
  labels?: string[];
};

export function StepIndicator({ totalSteps, currentStep, labels }: StepIndicatorProps) {
  return (
    <div className="w-full">
      {/* Step Circles and Lines */}
      <div className="flex items-center justify-between mb-2">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
          <div key={step} className="flex items-center flex-1">
            {/* Circle */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                step < currentStep
                  ? 'bg-blue-600 text-white'
                  : step === currentStep
                  ? 'bg-blue-600 text-white ring-4 ring-blue-100'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {step}
            </div>
            {/* Line */}
            {step < totalSteps && (
              <div
                className={`flex-1 h-1 mx-2 transition-colors ${
                  step < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Labels */}
      {labels && (
        <div className="flex justify-between text-[10px] font-bold">
          {labels.map((label, i) => (
            <span
              key={i}
              className={`transition-all ${
                i + 1 === currentStep ? 'text-white' : 'text-white/60'
              }`}
            >
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

import svgPaths from "./svg-xairdaqpuj";

export default function Lotto() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center pl-[12px] pr-[8px] py-[8px] relative rounded-[8px] shadow-[0px_0px_18px_0px_rgba(23,31,51,0.1)] h-[70px] w-full" data-name="Lotto">
      <div className="relative shrink-0">
        <div className="content-stretch flex items-center relative">
          <div className="relative shrink-0 size-[14px]" data-name="favs">
            <div className="absolute inset-[2.5%_0]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 13.3">
                <path d={svgPaths.p326ec300} fill="var(--fill-0, #F9BF5B)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0">
        <div className="relative rounded-[50px] shrink-0 size-[36px]" data-name="france">
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute inset-[-16.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                <g filter="url(#filter0_d_233_1225)" id="Vector">
                  <path d={svgPaths.p3289ce00} fill="var(--fill-0, white)" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="48" id="filter0_d_233_1225" width="48" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="3" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0901961 0 0 0 0 0.121569 0 0 0 0 0.2 0 0 0 0.1 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_233_1225" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_233_1225" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="absolute inset-[3.11%_0_3.11%_67.39%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7392 33.7609">
                <path d={svgPaths.p10efc4c0} fill="var(--fill-0, #F83D49)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[3.11%_67.39%_3.11%_0]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7392 33.7608">
                <path d={svgPaths.p7243a00} fill="var(--fill-0, #183060)" id="Vector" />
              </svg>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ededed] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[50px]" />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 flex-1">
        <div className="content-stretch flex flex-col gap-[4px] items-start relative w-full">
            <div className="content-stretch flex flex-col gap-[2px] items-center justify-center relative shrink-0 w-full" data-name="title-content">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="leading-icon+title">
                <p className="flex-[1_0_0] font-['SF_Pro:Semi_Bold',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#183060] text-[14px]">French Lotto</p>
              </div>
            </div>
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
            <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#546d91] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Next draw: Saturday 14:10, 22nd Apr `}</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0">
        <div className="relative shrink-0 size-[14px]" data-name="arrow-right">
          <div className="absolute inset-[0_20.85%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.1625 14">
              <path d={svgPaths.p2b8f34c0} fill="var(--fill-0, #183060)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
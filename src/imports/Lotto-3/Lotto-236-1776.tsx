import svgPaths from "./svg-ck9czoa1kj";

function Frame3() {
  return (
    <div className="h-full relative shrink-0">
      <div className="content-stretch flex items-start pt-[18px] relative size-full">
        <div className="relative shrink-0 size-[14px]" data-name="favs">
          <div className="absolute inset-[2.5%_0]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 13.3">
              <path d={svgPaths.p326ec300} fill="var(--fill-0, #F9BF5B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-full relative shrink-0">
      <div className="content-stretch flex items-start pb-[8px] pt-[6px] relative size-full">
        <div className="relative rounded-[50px] shrink-0 size-[36px]" data-name="ireland">
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute inset-[-16.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                <g filter="url(#filter0_d_236_1759)" id="Vector">
                  <path d={svgPaths.p3289ce00} fill="var(--fill-0, white)" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="48" id="filter0_d_236_1759" width="48" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="3" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0901961 0 0 0 0 0.121569 0 0 0 0 0.2 0 0 0 0.1 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_236_1759" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_236_1759" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="absolute inset-[3.11%_0_3.11%_67.39%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7392 33.7609">
                <path d={svgPaths.p767e900} fill="var(--fill-0, #FFC35C)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[3.11%_67.39%_3.11%_0]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7392 33.7608">
                <path d={svgPaths.p6a72700} fill="var(--fill-0, #4EB280)" id="Vector" />
              </svg>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ededed] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[50px]" />
        </div>
      </div>
    </div>
  );
}

function LeadingIconTitle() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="leading-icon+title">
      <p className="flex-[1_0_0] font-['SF_Pro:Semi_Bold',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#183060] text-[14px]">Irish Lotto</p>
    </div>
  );
}

function TitleContent() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center justify-center relative shrink-0 w-full" data-name="title-content">
      <LeadingIconTitle />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#546d91] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Next draw: Today 12:49
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <TitleContent />
      <Container />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_202_1069)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_202_1069">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[6px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon />
      <p className="font-['SF_Pro:Semi_Bold',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#f54900] text-[10px] whitespace-nowrap">Starts in 38m 15s</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start justify-end min-h-px min-w-px relative w-full">
      <Frame4 />
      <Container1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative">
      <Frame1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0 w-[101px]">
      <div className="relative rounded-[4px] shrink-0 w-[101px]" data-name="button-collection / primary-button">
        <div className="content-stretch flex items-start justify-center overflow-clip px-[12px] py-[6px] relative rounded-[inherit] size-full">
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#183060] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Play now
          </p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#0b52b1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function LottoTile() {
  return (
    <div className="bg-white h-[80px] relative rounded-[8px] shadow-[0px_0px_18px_0px_rgba(23,31,51,0.1)] shrink-0 w-full" data-name="lotto tile">
      <div className="content-stretch flex gap-[12px] items-start px-[8px] py-[12px] relative size-full">
        <Frame3 />
        <Frame2 />
        <Frame />
        <Frame5 />
      </div>
    </div>
  );
}

export default function Lotto() {
  return (
    <div className="bg-[rgba(255,162,2,0.07)] content-stretch flex flex-col items-start p-[6px] relative rounded-[10px] size-full" data-name="Lotto">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,162,2,0.4)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <LottoTile />
    </div>
  );
}
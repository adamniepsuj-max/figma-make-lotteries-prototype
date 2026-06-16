import svgPaths from "./svg-syd5rgs8qs";
import imgImg02031 from "./c3600b8a078fc7b88a3f1fad3bbd48eeeea0c3f0.png";

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="relative rounded-[50px] shrink-0 size-[50px]" data-name="ireland">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute inset-[-12%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 62">
              <g filter="url(#filter0_d_203_2550)" id="Vector">
                <path d={svgPaths.p3c133780} fill="var(--fill-0, white)" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="62" id="filter0_d_203_2550" width="62" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="3" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0901961 0 0 0 0 0.121569 0 0 0 0 0.2 0 0 0 0.1 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_203_2550" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_203_2550" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="absolute inset-[3.11%_0_3.11%_67.39%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3044 46.8901">
              <path d={svgPaths.p12d400} fill="var(--fill-0, #FFC35C)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[3.11%_67.39%_3.11%_0]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3044 46.89">
              <path d={svgPaths.p200e4400} fill="var(--fill-0, #4EB280)" id="Vector" />
            </svg>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#ededed] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      </div>
    </div>
  );
}

function LeadingIconTitle() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="leading-icon+title">
      <p className="flex-[1_0_0] font-['SF_Pro:Semi_Bold',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#183060] text-[14px]">{`Irish Lotto `}</p>
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
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] min-h-px min-w-px relative text-[#546d91] text-[10px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Next draw: Today, 13:00
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center justify-center relative shrink-0 w-full">
      <TitleContent />
      <Container />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
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
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#f54900] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Draw in 18 min
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full">
      <Container1 />
      <div className="bg-[#0b52b1] relative rounded-[4px] shrink-0 w-full" data-name="button-collection / primary-button">
        <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-start justify-center px-[12px] py-[6px] relative w-full">
            <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Play now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EpicBoost() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] h-[184px] items-start justify-center px-[18px] py-[12px] relative rounded-[8px] shadow-[0px_0px_18px_0px_rgba(23,31,51,0.1)] shrink-0 w-[157px]" data-name="Epic boost">
      <Frame5 />
      <Frame />
      <Frame6 />
      <div className="absolute left-[131.75px] size-[18px] top-[11px]" data-name="favs">
        <div className="absolute inset-[2.5%_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17.1">
            <path d={svgPaths.p20ad3380} fill="var(--fill-0, #F9BF5B)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LottoTile() {
  return (
    <div className="bg-[rgba(78,178,128,0.1)] content-stretch flex items-center justify-center p-[6px] relative rounded-[10px] shrink-0" data-name="Lotto tile">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(78,178,128,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <EpicBoost />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="relative rounded-[50px] shrink-0 size-[50px]" data-name="IMG_0203 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[50px]">
          <img alt="" className="absolute h-[2850%] left-[-61.7%] max-w-none top-[-1713.04%] w-[1282.98%]" src={imgImg02031} />
        </div>
      </div>
      <div className="absolute h-[17.1px] left-[110.5px] top-0 w-[18px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17.1">
          <path d={svgPaths.p20ad3380} fill="var(--fill-0, #F9BF5B)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function LeadingIconTitle1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="leading-icon+title">
      <p className="flex-[1_0_0] font-['SF_Pro:Semi_Bold',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#183060] text-[14px]">49’s Lotto</p>
    </div>
  );
}

function TitleContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center justify-center relative shrink-0 w-full" data-name="title-content">
      <LeadingIconTitle1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#546d91] text-[10px] w-[147px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Next draw: Today, 14:30
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center justify-center relative shrink-0 w-[147px]">
      <TitleContent1 />
      <Container2 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
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

function Container3() {
  return (
    <div className="content-stretch flex gap-[6px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon1 />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#f54900] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Draw in 38 min
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full">
      <Container3 />
      <div className="bg-[#0b52b1] relative rounded-[4px] shrink-0 w-full" data-name="button-collection / primary-button">
        <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-start justify-center px-[12px] py-[6px] relative w-full">
            <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Play now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="relative shrink-0 size-[16px]" data-name="favs">
        <div className="absolute inset-[2.5%_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15.2">
            <path d={svgPaths.p35aa7300} fill="url(#paint0_linear_203_2548)" id="Vector" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_203_2548" x1="0" x2="16" y1="7.6" y2="7.6">
                <stop stopColor="#DCC58E" />
                <stop offset="1" stopColor="#FCE1A4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-center left-[182px] top-[17px]">
      <Frame2 />
    </div>
  );
}

function EpicBoost1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] h-[184px] items-start justify-center px-[18px] py-[12px] relative rounded-[8px] shadow-[0px_0px_18px_0px_rgba(23,31,51,0.1)] shrink-0 w-[169.5px]" data-name="Epic boost">
      <Frame7 />
      <Frame1 />
      <Frame8 />
      <Frame3 />
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
      <LottoTile />
      <EpicBoost1 />
    </div>
  );
}
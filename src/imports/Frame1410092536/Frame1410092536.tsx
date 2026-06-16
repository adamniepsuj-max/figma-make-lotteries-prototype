import svgPaths from "./svg-i6srpt92hf";

function MenuContainer() {
  return (
    <div className="content-stretch flex h-full items-center px-[12px] relative shrink-0" data-name="menu-container">
      <div className="content-between flex flex-wrap items-center justify-center p-[2.25px] relative shrink-0 size-[24px]" data-name="Menu CTA">
        <div className="flex-[1_0_0] h-[19.5px] min-h-px min-w-px relative" data-name="hlx-wh / hamburger-nav">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <g clipPath="url(#clip0_203_4108)" id="System / hamburger_menu">
              <path d={svgPaths.p27336a00} fill="var(--fill-0, white)" id="Vector" />
            </g>
            <defs>
              <clipPath id="clip0_203_4108">
                <rect fill="white" height="19.5" width="19.5" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function LogoContainer() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0 w-[97px]" data-name="logo-container">
      <div className="h-[20px] overflow-clip relative shrink-0 w-[97px]" data-name="William Hill Wordmark">
        <div className="absolute inset-[12.25%_0_13.96%_92.6%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.17076 14.7587">
            <path d={svgPaths.p18c74b40} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[12.25%_17.46%_13.96%_78.21%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.2003 14.7587">
            <path d={svgPaths.pe593f00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[12.25%_8.46%_13.96%_84.14%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.17075 14.7587">
            <path d={svgPaths.p3b151900} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[12.25%_23.39%_13.96%_65.82%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4739 14.7587">
            <path d={svgPaths.p1518fb70} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97 20">
          <path d={svgPaths.p2fc4aa00} fill="url(#paint0_linear_203_4079)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_203_4079" x1="46.4383" x2="50.8551" y1="-4.74508" y2="26.5186">
              <stop stopColor="#BFAD7B" />
              <stop offset="0.01" stopColor="#BFAD7B" />
              <stop offset="0.71" stopColor="#FAE0A9" />
              <stop offset="1" stopColor="#FAE0A9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function MenuLogo() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="menu+logo">
      <MenuContainer />
      <LogoContainer />
    </div>
  );
}

function CtaContainer() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="cta-container">
      <div className="bg-[#fce1a4] content-stretch flex items-start justify-center overflow-clip px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Deposit CTA">
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#183060] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Deposit
        </p>
      </div>
    </div>
  );
}

function CtaContainer1() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="cta-container">
      <div className="relative rounded-[4px] shrink-0" data-name="Funds CTA">
        <div className="content-stretch flex gap-[4px] items-start justify-center overflow-clip px-[12px] py-[6px] relative rounded-[inherit]">
          <div className="content-stretch flex flex-wrap items-center justify-center p-px relative shrink-0 size-[16px]" data-name="Account Icon">
            <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="hlx-wh / account">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <g clipPath="url(#clip0_203_4076)" id="Account / account">
                  <path d={svgPaths.p35653300} fill="var(--fill-0, white)" id="Vector" />
                </g>
                <defs>
                  <clipPath id="clip0_203_4076">
                    <rect fill="white" height="14" width="14" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            £32.98
          </p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#fce1a4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function SearchContainer() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[4px] relative shrink-0" data-name="search-container">
      <div className="content-stretch flex items-center relative shrink-0 size-[14px]" data-name="Search Icon">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="hlx-wh / search">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g clipPath="url(#clip0_203_4102)" id="System / search">
              <path d={svgPaths.p2a654300} fill="var(--fill-0, white)" id="Vector" />
            </g>
            <defs>
              <clipPath id="clip0_203_4102">
                <rect fill="white" height="14" width="14" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center overflow-clip relative shrink-0" data-name="breadcrumb">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#9ba9c1] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Home
      </p>
    </div>
  );
}

function Breadcrumb1() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center overflow-clip relative shrink-0" data-name="breadcrumb">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#9ba9c1] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lotteries
      </p>
    </div>
  );
}

function NagivationContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px overflow-clip relative" data-name="nagivation-container">
      <div className="content-stretch flex gap-[4px] items-center overflow-clip py-[2px] relative shrink-0" data-name="Breadcrumb Item 01">
        <Breadcrumb />
        <div className="bg-[#9ba9c1] h-[12px] shrink-0 w-px" data-name="separator" />
      </div>
      <div className="content-stretch flex gap-[4px] items-center overflow-clip py-[2px] relative shrink-0" data-name="Breadcrumb Item 02">
        <Breadcrumb1 />
      </div>
      <div className="content-stretch flex h-[20px] items-center overflow-clip py-[2px] shrink-0 w-[88px]" data-name="Breadcrumb Item 03" />
    </div>
  );
}

function HeaderDetails() {
  return (
    <div className="relative shrink-0 w-full" data-name="header-details">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] min-h-px min-w-px overflow-hidden relative text-[18px] text-ellipsis text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Lotteries
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <div className="bg-[#060a2a] content-stretch flex gap-[8px] h-[44px] items-center relative shrink-0 w-full" data-name="header-collection / utilities / mobile">
        <MenuLogo />
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="CTA Overlay Alignment">
          <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center justify-end px-[12px] relative size-full">
              <CtaContainer />
              <CtaContainer1 />
              <SearchContainer />
              <div className="absolute bg-gradient-to-r bottom-0 from-[#060a2a] left-0 to-[rgba(0,20,60,0)] top-0 w-[12px]" data-name="Left Overlay" />
              <div className="absolute bg-gradient-to-r bottom-0 from-[rgba(0,20,60,0)] right-0 to-[#060a2a] top-0 w-[12px]" data-name="Right Overlay" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#060a2a] content-stretch flex flex-col gap-[12px] items-start justify-center overflow-x-auto overflow-y-clip pb-[12px] pt-[16px] relative shrink-0 w-full" data-name="page-title-collection / page-title">
        <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] relative shrink-0 w-[320px]" data-name="breadcrumb">
          <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="helix / icon">
            <div className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" data-name="hlx-wh / arrow-alt-left">
              <div className="absolute inset-[18.75%_0]" data-name="arrow-alt-left">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 10">
                  <path d={svgPaths.p8b8aa80} fill="var(--fill-0, #9BA9C1)" id="arrow-alt-left" />
                </svg>
              </div>
            </div>
          </div>
          <NagivationContainer />
        </div>
        <HeaderDetails />
      </div>
    </div>
  );
}
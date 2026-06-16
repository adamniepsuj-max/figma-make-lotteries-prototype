import svgPaths from "./svg-au0oobbn1e";

function LeadingIconTitle() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="leading-icon+title">
      <p className="font-['SF_Pro:Semi_Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#183060] text-[14px] w-[179px]">{`Irish Lotto `}</p>
    </div>
  );
}

function TitleContent() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0 w-full" data-name="title-content">
      <LeadingIconTitle />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_203_1893)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #546D91)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, #546D91)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_203_1893">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Icon />
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#546d91] text-[10px] w-[207px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Next draw: 14:00, Wednesday 15th April `}</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Container1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start justify-center min-h-px min-w-px relative">
      <TitleContent />
      <Container />
    </div>
  );
}

function EpicBoost() {
  return (
    <div className="bg-white h-[70px] relative rounded-[8px] shadow-[0px_0px_18px_0px_rgba(23,31,51,0.1)] shrink-0 w-full" data-name="Epic boost">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pb-[8px] pt-[12px] px-[12px] relative size-full">
          <div className="relative shrink-0 size-[18px]" data-name="favs">
            <div className="absolute inset-[2.5%_0]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17.1">
                <path d={svgPaths.p20ad3380} fill="var(--fill-0, #F9BF5B)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="relative rounded-[50px] shrink-0 size-[36px]" data-name="ireland">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[-16.67%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                  <g filter="url(#filter0_d_203_1934)" id="Vector">
                    <path d={svgPaths.p3289ce00} fill="var(--fill-0, white)" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="48" id="filter0_d_203_1934" width="48" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="3" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.0901961 0 0 0 0 0.121569 0 0 0 0 0.2 0 0 0 0.1 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_203_1934" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_203_1934" mode="normal" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="absolute inset-[3.11%_0_3.11%_67.39%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7392 33.7609">
                  <path d={svgPaths.p767e900} fill="var(--fill-0, #FFC35C)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[3.11%_67.39%_3.11%_0]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7392 33.7608">
                  <path d={svgPaths.p6a72700} fill="var(--fill-0, #4EB280)" id="Vector" />
                </svg>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-[#ededed] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[50px]" />
          </div>
          <Frame />
          <div className="relative shrink-0 size-[14px]" data-name="arrow-right">
            <div className="absolute inset-[0_20.85%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.1625 14">
                <path d={svgPaths.p2b8f34c0} fill="var(--fill-0, #183060)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadingIconTitle1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="leading-icon+title">
      <p className="font-['SF_Pro:Semi_Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#183060] text-[14px] w-[179px]">Australian Lotto 6 balls</p>
    </div>
  );
}

function TitleContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0 w-full" data-name="title-content">
      <LeadingIconTitle1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#546d91] text-[10px] w-[86px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Next draw: 16:30
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start justify-center min-h-px min-w-px relative">
      <TitleContent1 />
      <Container2 />
    </div>
  );
}

function EpicBoost1() {
  return (
    <div className="bg-white h-[70px] relative rounded-[8px] shadow-[0px_0px_18px_0px_rgba(23,31,51,0.1)] shrink-0 w-full" data-name="Epic boost">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pb-[8px] pt-[12px] px-[12px] relative size-full">
          <div className="relative shrink-0 size-[18px]" data-name="favs">
            <div className="absolute inset-[2.5%_0]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17.1">
                <path d={svgPaths.p20ad3380} fill="var(--fill-0, #ACADB6)" fillOpacity="0.4" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="relative rounded-[50px] shrink-0 size-[36px]" data-name="australia">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
                <path d={svgPaths.p38ea8480} fill="var(--fill-0, #183060)" id="vector" />
              </svg>
              <div className="absolute bottom-full left-[49.99%] right-1/2 top-0" data-name="vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.00223414 3.125e-05">
                  <path d={svgPaths.p91f40c0} fill="var(--fill-0, white)" id="vector" />
                </svg>
              </div>
              <div className="absolute bottom-1/2 left-[49.87%] right-1/2 top-[49.87%]" data-name="vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.048163 0.048163">
                  <path d={svgPaths.p2da08a00} fill="var(--fill-0, white)" id="vector" />
                </svg>
              </div>
              <div className="absolute bottom-1/2 left-0 right-1/2 top-0" data-name="vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0001 17.9999">
                  <path d={svgPaths.p2cfceb00} fill="var(--fill-0, white)" id="vector" />
                </svg>
              </div>
              <div className="absolute bottom-1/2 left-[6.52%] right-1/2 top-[6.52%]" data-name="vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6522 15.6522">
                  <path d={svgPaths.p3aa28380} fill="var(--fill-0, #F83D49)" id="vector" />
                </svg>
              </div>
              <div className="absolute bottom-1/2 left-[26.09%] right-1/2 top-[26.09%]" data-name="vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.60864 8.6086">
                  <path d={svgPaths.p1b240e00} fill="var(--fill-0, #F83D49)" id="vector" />
                </svg>
              </div>
              <div className="absolute inset-[58.7%_58.7%_19.57%_19.01%]" data-name="vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.0273 7.82606">
                  <path d={svgPaths.p16c4cf40} fill="var(--fill-0, white)" id="vector" />
                </svg>
              </div>
              <div className="absolute inset-[69.57%_19.57%_19.57%_69.29%]" data-name="vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.01365 3.91303">
                  <path d={svgPaths.pa34b00} fill="var(--fill-0, white)" id="vector" />
                </svg>
              </div>
              <div className="absolute bottom-1/2 left-[56.52%] right-[32.33%] top-[39.13%]" data-name="vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.01364 3.91303">
                  <path d={svgPaths.p7df1c0} fill="var(--fill-0, white)" id="vector" />
                </svg>
              </div>
              <div className="absolute inset-[21.74%_19.57%_67.39%_69.29%]" data-name="vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.01358 3.91311">
                  <path d={svgPaths.p32b10300} fill="var(--fill-0, white)" id="vector" />
                </svg>
              </div>
              <div className="absolute inset-[34.78%_8.42%_54.35%_80.43%]" data-name="vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.01365 3.91303">
                  <path d={svgPaths.p2a62e00} fill="var(--fill-0, white)" id="vector" />
                </svg>
              </div>
              <div className="absolute bottom-[41.3%] left-[73.47%] right-[17.39%] top-1/2" data-name="vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.29161 3.13045">
                  <path d={svgPaths.p2b0d4280} fill="var(--fill-0, white)" id="vector" />
                </svg>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-[#ededed] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[50px]" />
          </div>
          <Frame1 />
          <div className="relative shrink-0 size-[14px]" data-name="arrow-right">
            <div className="absolute inset-[0_20.85%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.1625 14">
                <path d={svgPaths.p2b8f34c0} fill="var(--fill-0, #183060)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[19px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[-0.49px] not-italic text-[12px] text-white top-0 tracking-[-0.3125px] whitespace-nowrap">DM</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#7d7d7d] content-stretch flex items-center justify-center pl-[17px] pr-[17.016px] relative rounded-[33554400px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 size-[36px]" data-name="Container">
      <Text />
    </div>
  );
}

function LeadingIconTitle2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="leading-icon+title">
      <p className="font-['SF_Pro:Semi_Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#183060] text-[14px] w-[179px]">Daily Millions 6 balls</p>
    </div>
  );
}

function TitleContent2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0 w-full" data-name="title-content">
      <LeadingIconTitle2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#546d91] text-[10px] w-[86px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Next draw: 16:30
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start justify-center min-h-px min-w-px relative">
      <TitleContent2 />
      <Container4 />
    </div>
  );
}

function EpicBoost2() {
  return (
    <div className="bg-white h-[70px] relative rounded-[8px] shadow-[0px_0px_18px_0px_rgba(23,31,51,0.1)] shrink-0 w-full" data-name="Epic boost">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pb-[8px] pt-[12px] px-[12px] relative size-full">
          <div className="relative shrink-0 size-[18px]" data-name="favs">
            <div className="absolute inset-[2.5%_0]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17.1">
                <path d={svgPaths.p20ad3380} fill="var(--fill-0, #ACADB6)" fillOpacity="0.4" id="Vector" />
              </svg>
            </div>
          </div>
          <Container3 />
          <Frame2 />
          <div className="relative shrink-0 size-[14px]" data-name="arrow-right">
            <div className="absolute inset-[0_20.85%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.1625 14">
                <path d={svgPaths.p2b8f34c0} fill="var(--fill-0, #183060)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadingIconTitle3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="leading-icon+title">
      <p className="font-['SF_Pro:Semi_Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#183060] text-[14px] w-[179px]">German Lotto 5 balls</p>
    </div>
  );
}

function TitleContent3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0 w-full" data-name="title-content">
      <LeadingIconTitle3 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_203_1893)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #546D91)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, #546D91)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_203_1893">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[6px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon1 />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#546d91] text-[10px] w-[86px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        18:00
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start justify-center min-h-px min-w-px relative">
      <TitleContent3 />
      <Container5 />
    </div>
  );
}

function EpicBoost3() {
  return (
    <div className="bg-white h-[70px] relative rounded-[8px] shadow-[0px_0px_18px_0px_rgba(23,31,51,0.1)] shrink-0 w-full" data-name="Epic boost">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pb-[8px] pt-[12px] px-[12px] relative size-full">
          <div className="relative shrink-0 size-[18px]" data-name="favs">
            <div className="absolute inset-[2.5%_0]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17.1">
                <path d={svgPaths.p20ad3380} fill="var(--fill-0, #ACADB6)" fillOpacity="0.4" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="relative rounded-[50px] shrink-0 size-[36px]" data-name="germany">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[63.04%_3.11%_0_3.11%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.7608 13.3043">
                  <path d={svgPaths.p8c19100} fill="var(--fill-0, #FFC35C)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[0_3.11%_63.04%_3.11%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.7608 13.3043">
                  <path d={svgPaths.p9311080} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[32.61%_0]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 12.5217">
                  <path d={svgPaths.p2915c090} fill="var(--fill-0, #F83D49)" id="Vector" />
                </svg>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-[#ededed] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[50px]" />
          </div>
          <Frame3 />
          <div className="relative shrink-0 size-[14px]" data-name="arrow-right">
            <div className="absolute inset-[0_20.85%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.1625 14">
                <path d={svgPaths.p2b8f34c0} fill="var(--fill-0, #183060)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[4.96%_0]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.0002 32.4278">
        <g id="Group">
          <path d={svgPaths.p3de8e880} fill="var(--fill-0, #F83D49)" id="Vector" />
          <path d={svgPaths.p25911700} fill="var(--fill-0, #F83D49)" id="Vector_2" />
          <path d={svgPaths.p320a3100} fill="var(--fill-0, #F83D49)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function LeadingIconTitle4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="leading-icon+title">
      <p className="font-['SF_Pro:Semi_Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#183060] text-[14px] w-[179px]">Canadian Lotto 6 balls</p>
    </div>
  );
}

function TitleContent4() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0 w-full" data-name="title-content">
      <LeadingIconTitle4 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_203_1893)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #546D91)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, #546D91)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_203_1893">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[6px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon2 />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#546d91] text-[10px] w-[86px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        20:30
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start justify-center min-h-px min-w-px relative">
      <TitleContent4 />
      <Container6 />
    </div>
  );
}

function EpicBoost4() {
  return (
    <div className="bg-white h-[70px] relative rounded-[8px] shadow-[0px_0px_18px_0px_rgba(23,31,51,0.1)] shrink-0 w-full" data-name="Epic boost">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pb-[8px] pt-[12px] px-[12px] relative size-full">
          <div className="relative shrink-0 size-[18px]" data-name="favs">
            <div className="absolute inset-[2.5%_0]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17.1">
                <path d={svgPaths.p20ad3380} fill="var(--fill-0, #ACADB6)" fillOpacity="0.4" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="relative rounded-[50px] shrink-0 size-[36px]" data-name="canada">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
                <path d={svgPaths.p11f24a00} fill="var(--fill-0, white)" id="Vector" />
              </svg>
              <Group />
            </div>
            <div aria-hidden="true" className="absolute border-[#ededed] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[50px]" />
          </div>
          <Frame4 />
          <div className="relative shrink-0 size-[14px]" data-name="arrow-right">
            <div className="absolute inset-[0_20.85%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.1625 14">
                <path d={svgPaths.p2b8f34c0} fill="var(--fill-0, #183060)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadingIconTitle5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="leading-icon+title">
      <p className="font-['SF_Pro:Semi_Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#183060] text-[14px] w-[179px]">Polish Lotto 6 balls</p>
    </div>
  );
}

function TitleContent5() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0 w-full" data-name="title-content">
      <LeadingIconTitle5 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_203_1893)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #546D91)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, #546D91)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_203_1893">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Icon3 />
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#546d91] text-[10px] w-[207px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Next draw: 14:00, Wednesday 15th April `}</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Container8 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start justify-center min-h-px min-w-px relative">
      <TitleContent5 />
      <Container7 />
    </div>
  );
}

function EpicBoost5() {
  return (
    <div className="bg-white h-[70px] relative rounded-[8px] shadow-[0px_0px_18px_0px_rgba(23,31,51,0.1)] shrink-0 w-full" data-name="Epic boost">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pb-[8px] pt-[12px] px-[12px] relative size-full">
          <div className="relative shrink-0 size-[18px]" data-name="favs">
            <div className="absolute inset-[2.5%_0]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17.1">
                <path d={svgPaths.p20ad3380} fill="var(--fill-0, #ACADB6)" fillOpacity="0.4" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="relative rounded-[50px] shrink-0 size-[36px]" data-name="poland">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
                <path d={svgPaths.p11f24a00} fill="var(--fill-0, white)" id="Vector" />
              </svg>
              <div className="absolute bottom-0 left-0 right-0 top-1/2" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 18">
                  <path d={svgPaths.p3c3dfe80} fill="var(--fill-0, #F83D49)" id="Vector" />
                </svg>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-[#ededed] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[50px]" />
          </div>
          <Frame5 />
          <div className="relative shrink-0 size-[14px]" data-name="arrow-right">
            <div className="absolute inset-[0_20.85%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.1625 14">
                <path d={svgPaths.p2b8f34c0} fill="var(--fill-0, #183060)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PromoCarousel() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center pb-[24px] px-[12px] relative size-full" data-name="Promo carousel">
      <EpicBoost />
      <EpicBoost1 />
      <EpicBoost2 />
      <EpicBoost3 />
      <EpicBoost4 />
      <EpicBoost5 />
    </div>
  );
}
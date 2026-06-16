import svgPaths from "./svg-0qp63wxxor";

function Paragraph() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Paragraph">
      <ol className="absolute block font-['SF_Pro:Semi_Bold',sans-serif] leading-[0] left-0 not-italic text-[#183060] text-[16px] top-[-2px] w-[304px]" start="3">
        <li className="ms-[24px]">
          <span className="leading-[20px]">Choose your draws</span>
        </li>
      </ol>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading">
      <div className="content-stretch flex flex-col items-start pr-[2.531px] relative size-full">
        <Paragraph />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0 w-[144px]" data-name="Paragraph">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#546d91] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Select days and times
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <Paragraph2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] h-[41px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Heading />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[41px] items-start relative shrink-0 w-[307px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute left-0 size-[14px] top-[3.5px]" data-name="calendar-schedule">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p28b9cf00} fill="var(--fill-0, #183060)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] left-[21px] text-[#183060] text-[14px] top-[3px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          All draws / week
        </p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="Container">
      <Text />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start justify-center px-[12px] py-[4px] relative shrink-0 w-[259px]">
      <Container3 />
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['SF_Pro:Semi_Bold',sans-serif] leading-[16px] left-0 not-italic text-[#183060] text-[14px] top-[3.5px] whitespace-nowrap">{`Upcoming `}</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[41.266px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-[283px]" data-name="Container">
      <Container5 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['SF_Pro:Semi_Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] text-center whitespace-nowrap">Wednesday</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[12px]" data-name="calendar-schedule">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p36c92000} fill="var(--fill-0, #546D91)" id="Vector" />
        </svg>
      </div>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#546d91] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        22nd Apr 8pm
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center py-[4px] relative shrink-0">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start py-[8px] relative shrink-0 w-full">
      <div className="bg-white h-[30px] relative rounded-[16px] shrink-0 w-full" data-name="Sort">
        <div aria-hidden="true" className="absolute border border-[#f3f3f3] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[6px] relative size-full">
            <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#546d91] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[16px]">Main</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[30px] relative rounded-[16px] shrink-0 w-full" data-name="Sort">
        <div aria-hidden="true" className="absolute border border-[#f3f3f3] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[6px] relative size-full">
            <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#546d91] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[16px]">+1</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[30px] relative rounded-[16px] shrink-0 w-full" data-name="Sort">
        <div aria-hidden="true" className="absolute border border-[#f3f3f3] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[6px] relative size-full">
            <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#546d91] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[16px]">+2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Brunch() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Brunch">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center px-[8px] py-[12px] relative size-full">
          <Frame3 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 122 1">
                <line id="Line 187" stroke="var(--stroke-0, #E4E4E4)" strokeLinecap="round" x1="0.5" x2="121.5" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['SF_Pro:Semi_Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] text-center whitespace-nowrap">Saturday</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[12px]" data-name="calendar-schedule">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p36c92000} fill="var(--fill-0, #1890FF)" id="Vector" />
        </svg>
      </div>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1890ff] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        25th Apr 8pm
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center py-[4px] relative shrink-0">
      <Frame5 />
      <Frame8 />
    </div>
  );
}

function Sort() {
  return (
    <div className="bg-[rgba(24,144,255,0.05)] h-[30px] relative rounded-[16px] shrink-0 w-full" data-name="Sort">
      <div aria-hidden="true" className="absolute border border-[rgba(24,144,255,0.4)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#546d91] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Main</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start py-[8px] relative shrink-0 w-full">
      <Sort />
      <div className="bg-[rgba(24,144,255,0.05)] h-[30px] relative rounded-[16px] shrink-0 w-full" data-name="Sort">
        <div aria-hidden="true" className="absolute border border-[rgba(24,144,255,0.4)] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[6px] relative size-full">
            <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#546d91] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[16px]">+1</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[30px] relative rounded-[16px] shrink-0 w-full" data-name="Sort">
        <div aria-hidden="true" className="absolute border border-[#f3f3f3] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[6px] relative size-full">
            <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#546d91] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[16px]">+2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Lunch() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Lunch">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center px-[8px] py-[12px] relative size-full">
          <Frame4 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 122 1">
                <line id="Line 187" stroke="var(--stroke-0, #183060)" strokeLinecap="round" x1="0.5" x2="121.5" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[286px]">
      <Brunch />
      <Lunch />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <Container4 />
      <Frame6 />
    </div>
  );
}

function DayDraws() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex items-center p-[12px] relative rounded-[12px] shrink-0" data-name="Day draws">
      <div aria-hidden="true" className="absolute border border-[#f3f3f3] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame7 />
    </div>
  );
}

function ButtonCollectionPrimaryButton() {
  return (
    <div className="bg-[#fff9f0] relative rounded-[8px] shrink-0 w-full" data-name="button-collection / primary-button">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex font-['SF_Pro:Semi_Bold',sans-serif] gap-[4px] items-center leading-[16px] not-italic p-[12px] relative size-full text-[#183060] text-[12px]">
          <p className="flex-[1_0_0] min-h-px min-w-px relative">3 draws/week</p>
          <p className="relative shrink-0 text-center whitespace-nowrap">(9 total)</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ffe3b5] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[16px] items-center relative shrink-0 w-[86px]" data-name="Paragraph">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#183060] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Clear all draws
      </p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute contents inset-[8.33%_12.5%]" data-name="Icon">
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.5px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 1">
            <path d="M0.5 0.5H9.5" id="Vector" stroke="var(--stroke-0, #183060)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.83%] top-1/4" data-name="Vector_2">
        <div className="absolute inset-[-6.25%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 9">
            <path d={svgPaths.p1aa5b500} id="Vector_2" stroke="var(--stroke-0, #183060)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector_3">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 3">
            <path d={svgPaths.p16eb4200} id="Vector_3" stroke="var(--stroke-0, #183060)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]" data-name="Vector_4">
        <div className="absolute inset-[-16.67%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 4">
            <path d="M0.5 0.5V3.5" id="Vector_4" stroke="var(--stroke-0, #183060)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]" data-name="Vector_5">
        <div className="absolute inset-[-16.67%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 4">
            <path d="M0.5 0.5V3.5" id="Vector_4" stroke="var(--stroke-0, #183060)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[12px]" data-name="Icon">
      <Icon1 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center justify-end left-[153px] px-[13px] py-[8px] rounded-[10px] top-0 w-[154px]" data-name="Button">
      <Paragraph3 />
      <Icon />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[32px] relative shrink-0 w-[307px]" data-name="Container">
      <Button />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start px-[18px] py-[22px] relative rounded-[10px] shadow-[0px_0px_6px_0px_rgba(23,31,51,0.1)] size-full" data-name="Container">
      <Container1 />
      <div className="bg-white content-stretch flex items-center py-[4px] relative rounded-[8px] shrink-0 w-[307px]" data-name="all draws">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <Frame10 />
        <div className="h-[24px] relative shrink-0 w-[36px]" data-name="Toggle 🟠">
          <div className="absolute bg-[#acadb6] inset-0 rounded-[75px]" />
          <div className="absolute inset-[12.5%_41.67%_12.5%_8.33%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <circle cx="9" cy="9" fill="var(--fill-0, white)" id="Ellipse 4" r="9" />
            </svg>
          </div>
        </div>
      </div>
      <DayDraws />
      <ButtonCollectionPrimaryButton />
      <Container6 />
    </div>
  );
}
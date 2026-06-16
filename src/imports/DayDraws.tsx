import svgPaths from "./svg-9i78dbshc2";

function Text() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['SF_Pro:Semi_Bold',sans-serif] leading-[16px] left-0 not-italic text-[#183060] text-[14px] top-[3.5px] whitespace-nowrap">{`Upcoming `}</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[41.266px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-[283px]" data-name="Container">
      <Container1 />
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

function Deselected() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Deselected">
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

function Frame6() {
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
      <Frame6 />
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

function Frame8() {
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

function Selected() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Selected">
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
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function UpcomingDrawTimes() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[286px]" data-name="Upcoming draw times">
      <Deselected />
      <Selected />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <Container />
      <UpcomingDrawTimes />
    </div>
  );
}

export default function DayDraws() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex items-center p-[12px] relative rounded-[12px] size-full" data-name="Day draws">
      <div aria-hidden="true" className="absolute border border-[#f3f3f3] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame7 />
    </div>
  );
}
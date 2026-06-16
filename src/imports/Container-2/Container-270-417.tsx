import svgPaths from "./svg-4ajsjvjurz";

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

function AllDraws() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[8px] h-[32px] items-center justify-center min-h-px min-w-px relative rounded-[16px]" data-name="All draws">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="relative shrink-0 size-[10px]" data-name="calendar-schedule">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.ped1a800} fill="var(--fill-0, #183060)" id="Vector" />
        </svg>
      </div>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#183060] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        All draws / week
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['SF_Pro:Semi_Bold',sans-serif] leading-[16px] left-0 not-italic text-[#183060] text-[14px] top-[3.5px] whitespace-nowrap">Wednesday</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[41.266px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-white relative rounded-[33554400px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[6px] relative size-full">
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#6a7282] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Today
        </p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-[283px]" data-name="Container">
      <Container4 />
      <Text1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['SF_Pro:Semi_Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] text-center whitespace-nowrap">Brunch</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[10px]" data-name="time-v-2">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <g id="Vector">
            <path d={svgPaths.p15cfa000} fill="var(--fill-0, #546D91)" />
            <path d={svgPaths.p1c082680} fill="var(--fill-0, #546D91)" />
            <path d={svgPaths.p327434f0} fill="var(--fill-0, #546D91)" />
          </g>
        </svg>
      </div>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#546d91] text-[10px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        11:49
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
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center px-[8px] py-[12px] relative rounded-[10px] shrink-0 w-[64px]" data-name="Brunch">
      <Frame3 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 1">
            <line id="Line 187" stroke="var(--stroke-0, #E4E4E4)" strokeLinecap="round" x1="0.5" x2="47.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['SF_Pro:Semi_Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] text-center whitespace-nowrap">Lunch</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[10px]" data-name="time-v-2">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <g id="Vector">
            <path d={svgPaths.p15cfa000} fill="var(--fill-0, #546D91)" />
            <path d={svgPaths.p1c082680} fill="var(--fill-0, #546D91)" />
            <path d={svgPaths.p327434f0} fill="var(--fill-0, #546D91)" />
          </g>
        </svg>
      </div>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#546d91] text-[10px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:49
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

function Frame9() {
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

function Lunch() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center px-[8px] py-[12px] relative rounded-[10px] shrink-0 w-[64px]" data-name="Lunch">
      <Frame4 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 1">
            <line id="Line 187" stroke="var(--stroke-0, #E4E4E4)" strokeLinecap="round" x1="0.5" x2="47.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame9 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['SF_Pro:Semi_Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] text-center whitespace-nowrap">Drive</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[10px]" data-name="time-v-2">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <g id="Vector">
            <path d={svgPaths.p15cfa000} fill="var(--fill-0, #546D91)" />
            <path d={svgPaths.p1c082680} fill="var(--fill-0, #546D91)" />
            <path d={svgPaths.p327434f0} fill="var(--fill-0, #546D91)" />
          </g>
        </svg>
      </div>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#546d91] text-[10px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        16:49
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center py-[4px] relative shrink-0">
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Frame13() {
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

function Drive() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center px-[8px] py-[12px] relative rounded-[10px] shrink-0 w-[64px]" data-name="Drive">
      <Frame10 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 1">
            <line id="Line 187" stroke="var(--stroke-0, #E4E4E4)" strokeLinecap="round" x1="0.5" x2="47.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame13 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['SF_Pro:Semi_Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] text-center whitespace-nowrap">Tea</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[10px]" data-name="time-v-2">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <g id="Vector">
            <path d={svgPaths.p15cfa000} fill="var(--fill-0, #546D91)" />
            <path d={svgPaths.p1c082680} fill="var(--fill-0, #546D91)" />
            <path d={svgPaths.p327434f0} fill="var(--fill-0, #546D91)" />
          </g>
        </svg>
      </div>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#546d91] text-[10px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        17:49
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center py-[4px] relative shrink-0">
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame17() {
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

function Drive1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center px-[8px] py-[12px] relative rounded-[10px] shrink-0 w-[64px]" data-name="Drive">
      <Frame14 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 1">
            <line id="Line 187" stroke="var(--stroke-0, #E4E4E4)" strokeLinecap="round" x1="0.5" x2="47.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame17 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Brunch />
      <Lunch />
      <Drive />
      <Drive1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <Container3 />
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

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['SF_Pro:Semi_Bold',sans-serif] leading-[16px] left-0 not-italic text-[#183060] text-[14px] top-[3.5px] whitespace-nowrap">Saturday</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[41.266px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-white h-[19px] relative rounded-[33554400px] shrink-0 w-[45.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[8px] not-italic text-[#6a7282] text-[10px] top-[2px] tracking-[0.1172px] whitespace-nowrap">22 Apr</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-[283px]" data-name="Container">
      <Container6 />
      <Text3 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['SF_Pro:Semi_Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] text-center whitespace-nowrap">Brunch</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[10px]" data-name="time-v-2">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <g id="Vector">
            <path d={svgPaths.p15cfa000} fill="var(--fill-0, #546D91)" />
            <path d={svgPaths.p1c082680} fill="var(--fill-0, #546D91)" />
            <path d={svgPaths.p327434f0} fill="var(--fill-0, #546D91)" />
          </g>
        </svg>
      </div>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#546d91] text-[10px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        11:49
      </p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center py-[4px] relative shrink-0">
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Frame23() {
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

function Brunch1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center px-[8px] py-[12px] relative rounded-[10px] shrink-0 w-[64px]" data-name="Brunch">
      <Frame20 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 1">
            <line id="Line 187" stroke="var(--stroke-0, #E4E4E4)" strokeLinecap="round" x1="0.5" x2="47.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame23 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['SF_Pro:Semi_Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] text-center whitespace-nowrap">Lunch</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[10px]" data-name="time-v-2">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <g id="Vector">
            <path d={svgPaths.p15cfa000} fill="var(--fill-0, #546D91)" />
            <path d={svgPaths.p1c082680} fill="var(--fill-0, #546D91)" />
            <path d={svgPaths.p327434f0} fill="var(--fill-0, #546D91)" />
          </g>
        </svg>
      </div>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#546d91] text-[10px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:49
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center py-[4px] relative shrink-0">
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Frame27() {
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

function Lunch1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center px-[8px] py-[12px] relative rounded-[10px] shrink-0 w-[64px]" data-name="Lunch">
      <Frame24 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 1">
            <line id="Line 187" stroke="var(--stroke-0, #E4E4E4)" strokeLinecap="round" x1="0.5" x2="47.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame27 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['SF_Pro:Semi_Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] text-center whitespace-nowrap">Drive</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[10px]" data-name="time-v-2">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <g id="Vector">
            <path d={svgPaths.p15cfa000} fill="var(--fill-0, #546D91)" />
            <path d={svgPaths.p1c082680} fill="var(--fill-0, #546D91)" />
            <path d={svgPaths.p327434f0} fill="var(--fill-0, #546D91)" />
          </g>
        </svg>
      </div>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#546d91] text-[10px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        16:49
      </p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center py-[4px] relative shrink-0">
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function Frame31() {
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

function Drive2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center px-[8px] py-[12px] relative rounded-[10px] shrink-0 w-[64px]" data-name="Drive">
      <Frame28 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 1">
            <line id="Line 187" stroke="var(--stroke-0, #E4E4E4)" strokeLinecap="round" x1="0.5" x2="47.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame31 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['SF_Pro:Semi_Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] text-center whitespace-nowrap">Tea</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[10px]" data-name="time-v-2">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <g id="Vector">
            <path d={svgPaths.p15cfa000} fill="var(--fill-0, #546D91)" />
            <path d={svgPaths.p1c082680} fill="var(--fill-0, #546D91)" />
            <path d={svgPaths.p327434f0} fill="var(--fill-0, #546D91)" />
          </g>
        </svg>
      </div>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#546d91] text-[10px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        17:49
      </p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center py-[4px] relative shrink-0">
      <Frame33 />
      <Frame34 />
    </div>
  );
}

function Frame35() {
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

function Drive3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center px-[8px] py-[12px] relative rounded-[10px] shrink-0 w-[64px]" data-name="Drive">
      <Frame32 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 1">
            <line id="Line 187" stroke="var(--stroke-0, #E4E4E4)" strokeLinecap="round" x1="0.5" x2="47.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame35 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Brunch1 />
      <Lunch1 />
      <Drive2 />
      <Drive3 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <Container5 />
      <Frame19 />
    </div>
  );
}

function DayDraws1() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex items-center p-[12px] relative rounded-[12px] shrink-0" data-name="Day draws">
      <div aria-hidden="true" className="absolute border border-[#f3f3f3] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame18 />
    </div>
  );
}

function ButtonCollectionPrimaryButton() {
  return (
    <div className="bg-[#f8f9fa] relative rounded-[8px] shrink-0 w-full" data-name="button-collection / primary-button">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex font-['SF_Pro:Semi_Bold',sans-serif] gap-[4px] items-center leading-[16px] not-italic p-[12px] relative size-full text-[#183060] text-[12px]">
          <p className="flex-[1_0_0] min-h-px min-w-px relative">0 draws/week</p>
          <p className="relative shrink-0 text-center whitespace-nowrap">(0 total)</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f3f3] border-solid inset-0 pointer-events-none rounded-[8px]" />
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

function Container7() {
  return (
    <div className="h-[32px] relative shrink-0 w-[307px]" data-name="Container">
      <Button />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start p-[18px] relative rounded-[12px] shadow-[0px_0px_6px_0px_rgba(23,31,51,0.1)] size-full" data-name="Container">
      <Container1 />
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[307px]" data-name="all draws">
        <AllDraws />
        <div className="h-[24px] relative shrink-0 w-[36px]" data-name="Toggle 🟠">
          <div className="absolute bg-[#acadb6] inset-0 rounded-[75px]" />
          <div className="absolute inset-[12.5%_41.67%_12.5%_8.33%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <circle cx="9" cy="9" fill="var(--fill-0, white)" id="Ellipse 9" r="9" />
            </svg>
          </div>
        </div>
      </div>
      <DayDraws />
      <DayDraws1 />
      <ButtonCollectionPrimaryButton />
      <Container7 />
    </div>
  );
}
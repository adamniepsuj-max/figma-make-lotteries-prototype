import svgPaths from "./svg-4r5fypasma";

function Paragraph() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Paragraph">
      <ol className="absolute block font-['SF_Pro:Semi_Bold',sans-serif] leading-[0] left-0 not-italic text-[#183060] text-[16px] top-[-2px] w-[304px]" start="2">
        <li className="ms-[24px]">
          <span className="leading-[20px]">How many weeks?</span>
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

function Paragraph1() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] left-0 text-[#546d91] text-[10px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Play duration
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[41px] relative shrink-0 w-[161.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Heading />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[31.563px] h-[41px] items-start relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <div className="bg-white max-w-[200px] min-w-[111px] relative rounded-[16px] shrink-0" data-name="Counter">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center max-w-[inherit] min-w-[inherit] p-[2px] relative size-full">
          <div className="bg-white content-stretch flex gap-[10px] items-center p-[8px] relative rounded-[36px] shrink-0" data-name="Icon Button 🟠">
            <div className="relative shrink-0 size-[12px]" data-name="Size=12px">
              <div className="absolute inset-[43.75%_0]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 1.5">
                  <path d={svgPaths.p42daa00} fill="var(--fill-0, #1890FF)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['SF_Pro:Bold',sans-serif] font-bold leading-[16px] min-h-px min-w-px relative text-[#183060] text-[14px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
            3
          </p>
          <div className="bg-white content-stretch flex gap-[10px] items-center justify-end p-[8px] relative rounded-[36px] shrink-0" data-name="Icon Button 🟠">
            <div className="relative shrink-0 size-[12px]" data-name="Size=12px">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <path d={svgPaths.p10006ec0} fill="var(--fill-0, #1890FF)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SortByTabs() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[295px]" data-name="Sort by tabs">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[16px]" data-name="Sort">
          <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[10px] py-[6px] relative size-full">
              <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#546d91] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[16px]">1w</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[16px]" data-name="Sort">
          <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[10px] py-[6px] relative size-full">
              <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#546d91] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[16px]">2w</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="bg-[rgba(24,144,255,0.05)] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[16px]" data-name="Sort">
          <div aria-hidden="true" className="absolute border border-[rgba(24,144,255,0.4)] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[14px] py-[6px] relative size-full">
              <div className="flex flex-col font-['SF_Pro:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">
                <p className="leading-[16px]">3w</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Sort">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[6px] relative size-full">
            <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#546d91] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[16px]">4w</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Sort">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[6px] relative size-full">
            <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#546d91] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[16px]">5w</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[18px] relative size-full">
          <SortByTabs />
        </div>
      </div>
    </div>
  );
}

function Weeks() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="weeks">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[12px] py-[8px] relative size-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start p-[18px] relative rounded-[12px] shadow-[0px_0px_6px_0px_rgba(23,31,51,0.1)] size-full" data-name="Container">
      <Container1 />
      <Weeks />
    </div>
  );
}
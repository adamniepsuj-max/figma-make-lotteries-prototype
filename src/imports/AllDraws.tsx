import svgPaths from "./svg-1h1dhsyqny";

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

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="Container">
      <Text />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start justify-center px-[12px] py-[4px] relative shrink-0 w-[259px]">
      <Container />
    </div>
  );
}

export default function AllDraws() {
  return (
    <div className="bg-white content-stretch flex items-center py-[4px] relative rounded-[8px] size-full" data-name="all draws">
      <div aria-hidden="true" className="absolute border border-[rgba(24,144,255,0.4)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame />
      <div className="h-[24px] relative shrink-0 w-[36px]" data-name="Toggle 🟠">
        <div className="absolute bg-[#1890ff] inset-0 rounded-[75px]" />
        <div className="absolute inset-[12.5%_8.33%_12.5%_41.67%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <circle cx="9" cy="9" fill="var(--fill-0, white)" id="Ellipse 4" r="9" />
          </svg>
        </div>
      </div>
    </div>
  );
}
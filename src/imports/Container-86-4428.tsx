import svgPaths from "./svg-olsz0y03ud";

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pea6a680} id="Vector" stroke="var(--stroke-0, #FFDF20)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3155f180} id="Vector_2" stroke="var(--stroke-0, #FFDF20)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-white top-px whitespace-nowrap">Jackpot</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[68.266px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Icon />
        <Text />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[82.766px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#ffdf20] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">£125,000</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Text1 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[rgba(253,199,0,0.2)] content-stretch flex flex-col items-start pb-px pt-[11px] px-[11px] relative rounded-[10px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(253,199,0,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container1 />
    </div>
  );
}
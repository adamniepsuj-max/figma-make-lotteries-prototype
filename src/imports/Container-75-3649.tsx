import svgPaths from "./svg-vdpwxyg5le";

function Icon() {
  return (
    <div className="absolute left-[43.52px] size-[12px] top-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M1.5 3H10.5" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3ba57a00} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p36919d00} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 5.5V8.5" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 5.5V8.5" id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[32px] relative rounded-[10px] shrink-0 w-[150px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[98.52px] not-italic text-[#e7000b] text-[12px] text-center top-[8px] whitespace-nowrap">Clear all lines</p>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex items-center justify-end relative size-full" data-name="Container">
      <Button />
    </div>
  );
}
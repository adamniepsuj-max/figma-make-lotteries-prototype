function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[91.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#1c398e] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Select up to five numbers:</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[201.156px] relative size-full">
          <Text />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#155dfc] relative rounded-[33554400px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">5</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#155dfc] relative rounded-[33554400px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">19</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#155dfc] relative rounded-[33554400px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">25</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[6px] h-[32px] items-center relative shrink-0 w-[257px]" data-name="Container">
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[195px]">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-[6.5px] not-italic text-[#1c398e] text-[9px] text-center top-0 tracking-[0.167px] whitespace-nowrap">M3</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[13.5px] items-start left-[6px] opacity-80 pl-[19.742px] pr-[19.383px] top-[6px] w-[51.797px]" data-name="Container4">
      <Paragraph />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[15px] left-[24.33px] top-[19.5px] w-[15.594px]" data-name="Container5">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[8.5px] not-italic text-[#1c398e] text-[10px] text-center top-0 tracking-[0.1172px] whitespace-nowrap">700/1</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] h-[40.5px] relative rounded-[10px] shrink-0 w-[63.797px]" data-name="Container3">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-end min-h-px min-w-px relative">
      <Container6 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#eff6ff] content-stretch flex flex-col items-start p-[12px] relative rounded-[14px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Frame />
    </div>
  );
}
import imgContainer from "./ea3640a129ce270ab3d996f2fc1318e8dcdaaa96.png";

function Container1() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[28px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[33554400px] size-full" src={imgContainer} />
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">5</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[28px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[33554400px] size-full" src={imgContainer} />
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">19</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[28px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[33554400px] size-full" src={imgContainer} />
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">25</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[28px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[33554400px] size-full" src={imgContainer} />
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">36</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[28px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[33554400px] size-full" src={imgContainer} />
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">42</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[6px] h-[32px] items-center relative shrink-0 w-[165px]" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative size-full">
      <Container />
    </div>
  );
}
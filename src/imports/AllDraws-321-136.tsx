import imgContainer from "figma:asset/ea3640a129ce270ab3d996f2fc1318e8dcdaaa96.png";

function Container1() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[28px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[33554400px] size-full" src={imgContainer} />
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">5</p>
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
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">19</p>
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
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">25</p>
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
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">36</p>
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
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">42</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[6px] h-[32px] items-center relative shrink-0" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0">
      <p className="font-['SF_Pro:Semi_Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1890ff] text-[12px] text-center whitespace-nowrap">+</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0">
      <p className="font-['SF_Pro:Semi_Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1890ff] text-[12px] text-center whitespace-nowrap">Bonus ball</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
      <Container />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[246px]">
      <Frame1 />
    </div>
  );
}

export default function AllDraws() {
  return (
    <div className="bg-white content-stretch flex items-center p-[12px] relative rounded-[12px] size-full" data-name="All draws">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame />
    </div>
  );
}
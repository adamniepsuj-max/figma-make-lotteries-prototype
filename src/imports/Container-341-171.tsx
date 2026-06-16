function Frame() {
  return (
    <div className="content-stretch flex font-['SF_Pro:Semi_Bold',sans-serif] gap-[12px] items-start leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] w-full">
      <p className="flex-[1_0_0] min-h-px min-w-px relative">2 draws/week</p>
      <p className="relative shrink-0 text-center whitespace-nowrap">(6 total)</p>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#fff9f0] content-stretch flex flex-col items-start px-[18px] py-[22px] relative rounded-[12px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#ffe3b5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame />
    </div>
  );
}
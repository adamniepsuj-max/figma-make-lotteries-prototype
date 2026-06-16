export default function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[8px] relative size-full">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[15px] min-h-px min-w-px not-italic relative text-[#155dfc] text-[14px] tracking-[0.1172px]">Include bonus ball</p>
      <div className="bg-[#d6d6d6] content-stretch flex h-[21px] items-center p-[2px] relative rounded-[10px] shrink-0 w-[40px]" data-name="Component 3">
        <div className="relative shrink-0 size-[16px]">
          <div className="absolute inset-[-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <circle cx="9" cy="9" fill="var(--fill-0, white)" id="Ellipse 2" r="8.5" stroke="var(--stroke-0, #C0C0C0)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
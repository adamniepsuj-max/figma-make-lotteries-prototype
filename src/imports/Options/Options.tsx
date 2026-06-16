function SortByTabs() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Sort by tabs">
      <div className="bg-white content-stretch flex items-center px-[14px] py-[6px] relative rounded-[20px] shrink-0" data-name="Sort">
        <div aria-hidden="true" className="absolute border border-[#0b52b1] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0b52b1] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[12px]">Favourite</p>
        </div>
      </div>
      <div className="content-stretch flex items-center px-[14px] py-[6px] relative rounded-[20px] shrink-0" data-name="Sort">
        <div aria-hidden="true" className="absolute border border-[#0b52b1] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0b52b1] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[12px]">Draw Time</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex items-center px-[10px] py-[6px] relative rounded-[20px] shrink-0" data-name="Sort">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#546d91] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[12px]">{`Popular `}</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[20px] shrink-0 w-[39px]" data-name="Sort">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#546d91] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[12px]">UK</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex items-center px-[10px] py-[6px] relative rounded-[20px] shrink-0" data-name="Sort">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#546d91] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[12px]">International</p>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-center pr-[18px] relative shrink-0 w-[363px]" data-name="content">
      <SortByTabs />
    </div>
  );
}

export default function Options() {
  return (
    <div className="bg-white content-stretch flex items-center pb-[13px] pl-[12px] pt-[12px] relative size-full" data-name="Options">
      <Content />
    </div>
  );
}
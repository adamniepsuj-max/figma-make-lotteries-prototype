import svgPaths from "./svg-548rprucot";
import imgContainer from "./ea3640a129ce270ab3d996f2fc1318e8dcdaaa96.png";

function Heading() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#183060] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Select Numbers
        </p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <path d={svgPaths.p354ab980} id="Vector" stroke="var(--stroke-0, #183060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <path d={svgPaths.p2a4db200} id="Vector" stroke="var(--stroke-0, #183060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <button className="cursor-pointer relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[6px] relative size-full">
        <Icon />
      </div>
    </button>
  );
}

function Container() {
  return (
    <div className="bg-gradient-to-r from-[rgba(255,162,2,0.7)] h-[64px] relative shrink-0 to-[rgba(245,165,123,0.6)] w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <Heading />
          <Button />
        </div>
      </div>
    </div>
  );
}

function SortByTabs() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] h-[40px] items-center min-h-px min-w-px relative" data-name="Sort by tabs">
      <div className="bg-white flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="Sort">
        <div aria-hidden="true" className="absolute border border-[#546d91] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[6px] relative size-full">
            <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[16px]">{`Pick new `}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fff9f0] flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="Sort">
        <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[14px] py-[6px] relative size-full">
            <div className="flex flex-col font-['SF_Pro:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">
              <p className="leading-[16px]">Favourites</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="Sort">
        <div aria-hidden="true" className="absolute border border-[#546d91] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[6px] relative size-full">
            <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#546d91] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p>
                <span className="leading-[16px] text-[#183060]">Re-use</span>
                <span className="leading-[16px]">{` `}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="Sort">
        <div aria-hidden="true" className="absolute border border-[#546d91] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[6px] relative size-full">
            <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#546d91] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p>
                <span className="leading-[16px] text-[#183060]">Lucky dip</span>
                <span className="leading-[16px]">{` `}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-center pr-[12px] relative shrink-0 w-[363px]" data-name="content">
      <SortByTabs />
    </div>
  );
}

function Options() {
  return (
    <div className="bg-white content-stretch flex items-center pb-[13px] pl-[12px] pt-[12px] relative shrink-0 w-[375px]" data-name="Options">
      <Content />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] left-[6.5px] text-[#546d91] text-[10px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Match 1
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col h-[13.5px] items-start opacity-80 pl-[19.742px] pr-[19.383px] relative shrink-0 w-[51.797px]" data-name="Container4">
      <Paragraph />
    </div>
  );
}

function Container5() {
  return <div className="h-[15px] shrink-0 w-[15.594px]" data-name="Container5" />;
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-center justify-center left-0 top-0 w-[50px]">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] left-[6.5px] text-[#546d91] text-[10px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Match 1
      </p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col h-[13.5px] items-start opacity-80 pl-[19.742px] pr-[19.383px] relative shrink-0 w-[51.797px]" data-name="Container4">
      <Paragraph1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[15px] relative shrink-0 w-[15.594px]" data-name="Container5">
      <p className="-translate-x-1/2 absolute font-['SF_Pro:Semi_Bold',sans-serif] leading-[12px] left-[8.5px] not-italic text-[#1890ff] text-[10px] text-center top-[3px] whitespace-nowrap">5/1</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-center justify-center left-0 top-0 w-[50px]">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] left-[6.5px] text-[#546d91] text-[10px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Match 2
      </p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col h-[13.5px] items-start opacity-80 pl-[19.742px] pr-[19.383px] relative shrink-0 w-[51.797px]" data-name="Container4">
      <Paragraph2 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[15px] relative shrink-0 w-[15.594px]" data-name="Container5">
      <p className="-translate-x-1/2 absolute font-['SF_Pro:Semi_Bold',sans-serif] leading-[12px] left-[8px] not-italic text-[#1890ff] text-[10px] text-center top-[3px] whitespace-nowrap">40/1</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-center justify-center left-[66px] top-0 w-[50px]">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] left-[6.5px] text-[#546d91] text-[10px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Match 2
      </p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col h-[13.5px] items-start opacity-80 pl-[19.742px] pr-[19.383px] relative shrink-0 w-[51.797px]" data-name="Container4">
      <Paragraph3 />
    </div>
  );
}

function Container11() {
  return <div className="h-[15px] shrink-0 w-[24px]" data-name="Container5" />;
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-center justify-center left-[66px] top-0 w-[50px]">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] left-[6.5px] text-[#546d91] text-[10px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Match 3
      </p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col h-[13.5px] items-start opacity-80 pl-[19.742px] pr-[19.383px] relative shrink-0 w-[51.797px]" data-name="Container4">
      <Paragraph4 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[15px] relative shrink-0 w-[15.594px]" data-name="Container5">
      <p className="-translate-x-1/2 absolute font-['SF_Pro:Semi_Bold',sans-serif] leading-[12px] left-[8px] not-italic text-[#1890ff] text-[10px] text-center top-[3px] whitespace-nowrap">375/1</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-center justify-center left-[132px] top-0 w-[50px]">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] left-[6.5px] text-[#546d91] text-[10px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Match 4
      </p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col h-[13.5px] items-start opacity-80 pl-[19.742px] pr-[19.383px] relative shrink-0 w-[51.797px]" data-name="Container4">
      <Paragraph5 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[15px] relative shrink-0 w-[15.594px]" data-name="Container5">
      <p className="-translate-x-1/2 absolute font-['SF_Pro:Semi_Bold',sans-serif] leading-[12px] left-[8px] not-italic text-[#1890ff] text-[10px] text-center top-[3px] whitespace-nowrap">3,800/1</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-center justify-center left-[198px] top-0 w-[50px]">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] left-[6.5px] text-[#546d91] text-[10px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Match 5
      </p>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col h-[13.5px] items-start opacity-80 pl-[19.742px] pr-[19.383px] relative shrink-0 w-[51.797px]" data-name="Container4">
      <Paragraph6 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[15px] relative shrink-0 w-[15.594px]" data-name="Container5">
      <p className="-translate-x-1/2 absolute font-['SF_Pro:Semi_Bold',sans-serif] leading-[12px] left-[8px] not-italic text-[#1890ff] text-[10px] text-center top-[3px] whitespace-nowrap">40,000/1</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-center justify-center left-[264px] top-0 w-[50px]">
      <Container16 />
      <Container17 />
    </div>
  );
}

function OddsComponnet() {
  return (
    <div className="h-[31px] relative shrink-0 w-full" data-name="Odds componnet">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame7 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div className="bg-[#f8f9fa] content-stretch flex flex-col gap-[12px] items-start p-[12px] relative rounded-[12px] shrink-0 w-[351px]" data-name="odds">
          <div aria-hidden="true" className="absolute border border-[#f3f3f3] border-solid inset-0 pointer-events-none rounded-[12px]" />
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Toggle + Label 🟠">
            <p className="flex-[1_0_0] font-['SF_Pro:Semi_Bold',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#183060] text-[14px]">Include bonus ball</p>
            <div className="h-[24px] relative shrink-0 w-[36px]" data-name="Toggle 🟠">
              <div className="absolute bg-[#1890ff] inset-0 rounded-[75px]" />
              <div className="absolute inset-[12.5%_8.33%_12.5%_41.67%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <circle cx="9" cy="9" fill="var(--fill-0, white)" id="Ellipse 9" r="9" />
                </svg>
              </div>
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 327 2">
                <line id="Line 188" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" x1="1" x2="326" y1="1" y2="1" />
              </svg>
            </div>
          </div>
          <OddsComponnet />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="relative shrink-0 size-[12px]" data-name="plus">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p10006ec0} fill="var(--fill-0, #183060)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-end px-[4px] relative rounded-[10px] self-stretch shrink-0" data-name="Button">
      <Frame21 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Button1 />
      <p className="flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#183060] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Add new number `}</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame20 />
    </div>
  );
}

function Container3() {
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

function Container18() {
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

function Container19() {
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

function Container20() {
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

function Container21() {
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

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] h-[32px] items-center min-h-px min-w-px relative" data-name="Container">
      <Container3 />
      <Container18 />
      <Container19 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative">
      <Container2 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center relative self-stretch shrink-0">
      <div className="relative shrink-0 size-[20px]" data-name="tick">
        <div className="absolute inset-[13.75%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14.5">
            <path d={svgPaths.p17a8870} fill="var(--fill-0, #183060)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-start min-h-px min-w-px relative">
      <Frame11 />
      <Frame24 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center py-[8px] relative shrink-0 w-full">
      <Frame23 />
    </div>
  );
}

function Container22() {
  return (
    <div className="col-1 relative rounded-[33554400px] row-1 shrink-0 size-[34px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="col-2 relative rounded-[33554400px] row-1 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="col-3 relative rounded-[33554400px] row-1 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">3</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="col-4 relative rounded-[33554400px] row-1 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">4</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="col-5 opacity-20 relative rounded-[33554400px] row-1 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">5</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="col-6 relative rounded-[33554400px] row-1 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">6</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="col-7 relative rounded-[33554400px] row-1 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">7</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="col-1 relative rounded-[33554400px] row-2 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">8</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="col-2 relative rounded-[33554400px] row-2 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">9</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="col-3 relative rounded-[33554400px] row-2 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">10</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="col-4 relative rounded-[33554400px] row-2 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">11</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="col-5 relative rounded-[33554400px] row-2 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">12</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="col-6 relative rounded-[33554400px] row-2 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">13</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="col-7 relative rounded-[33554400px] row-2 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">14</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="col-1 relative rounded-[33554400px] row-3 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">15</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="col-2 relative rounded-[33554400px] row-3 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">16</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="col-3 relative rounded-[33554400px] row-3 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">17</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="col-4 relative rounded-[33554400px] row-3 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">18</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="col-5 opacity-20 relative rounded-[33554400px] row-3 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">19</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="col-6 relative rounded-[33554400px] row-3 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">20</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="col-7 relative rounded-[33554400px] row-3 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">21</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="col-1 relative rounded-[33554400px] row-4 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">22</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="col-2 relative rounded-[33554400px] row-4 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">23</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="col-3 relative rounded-[33554400px] row-4 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">24</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="col-4 opacity-20 relative rounded-[33554400px] row-4 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">25</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="col-5 relative rounded-[33554400px] row-4 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">26</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="col-6 relative rounded-[33554400px] row-4 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">27</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="col-7 relative rounded-[33554400px] row-4 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">28</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="col-1 relative rounded-[33554400px] row-5 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">29</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="col-2 relative rounded-[33554400px] row-5 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">30</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="col-3 relative rounded-[33554400px] row-5 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">31</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="col-4 relative rounded-[33554400px] row-5 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">32</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="col-5 relative rounded-[33554400px] row-5 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">33</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="col-6 relative rounded-[33554400px] row-5 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">34</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="col-7 relative rounded-[33554400px] row-5 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">35</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="col-1 opacity-20 relative rounded-[33554400px] row-6 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">36</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="col-2 relative rounded-[33554400px] row-6 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">37</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="col-3 relative rounded-[33554400px] row-6 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">38</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="col-4 relative rounded-[33554400px] row-6 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">39</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="col-5 relative rounded-[33554400px] row-6 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">40</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="col-6 relative rounded-[33554400px] row-6 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">41</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="col-7 opacity-20 relative rounded-[33554400px] row-6 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">42</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="col-1 relative rounded-[33554400px] row-7 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">43</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="col-2 relative rounded-[33554400px] row-7 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">44</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="col-3 relative rounded-[33554400px] row-7 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">45</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="col-4 relative rounded-[33554400px] row-7 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">45</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="col-5 relative rounded-[33554400px] row-7 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">47</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="col-6 relative rounded-[33554400px] row-7 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">48</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="col-7 relative rounded-[33554400px] row-7 shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#183060] text-[12px] whitespace-nowrap">49</p>
      </div>
    </div>
  );
}

function NumbersSelectionGrid() {
  return (
    <div className="backdrop-blur-[6px] gap-x-[12px] gap-y-[12px] grid-cols-[repeat(7,fit-content(100%))] grid-rows-[repeat(7,fit-content(100%))] inline-grid py-[16px] relative rounded-[10px] shrink-0" data-name="numbers selection grid">
      <Container22 />
      <Container23 />
      <Container24 />
      <Container25 />
      <Container26 />
      <Container27 />
      <Container28 />
      <Container29 />
      <Container30 />
      <Container31 />
      <Container32 />
      <Container33 />
      <Container34 />
      <Container35 />
      <Container36 />
      <Container37 />
      <Container38 />
      <Container39 />
      <Container40 />
      <Container41 />
      <Container42 />
      <Container43 />
      <Container44 />
      <Container45 />
      <Container46 />
      <Container47 />
      <Container48 />
      <Container49 />
      <Container50 />
      <Container51 />
      <Container52 />
      <Container53 />
      <Container54 />
      <Container55 />
      <Container56 />
      <Container57 />
      <Container58 />
      <Container59 />
      <Container60 />
      <Container61 />
      <Container62 />
      <Container63 />
      <Container64 />
      <Container65 />
      <Container66 />
      <Container67 />
      <Container68 />
      <Container69 />
      <Container70 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative">
      <Frame9 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 299 1">
            <line id="Line 189" stroke="var(--stroke-0, #E4E4E4)" strokeLinecap="round" x1="0.5" x2="298.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame10 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 299 1">
            <line id="Line 189" stroke="var(--stroke-0, #E4E4E4)" strokeLinecap="round" x1="0.5" x2="298.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <NumbersSelectionGrid />
    </div>
  );
}

function AllDraws() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[323px]" data-name="All draws">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame22 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col items-center py-[12px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f3f3f3] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <AllDraws />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-end relative shrink-0" data-name="Paragraph">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#183060] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Edit
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-end relative rounded-[10px] shrink-0" data-name="Button">
      <Paragraph7 />
      <div className="relative shrink-0 size-[12px]" data-name="edit">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p34f57100} fill="var(--fill-0, #183060)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#183060] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Favourite 1
      </p>
      <Button2 />
    </div>
  );
}

function Container72() {
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

function Container73() {
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

function Container74() {
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

function Container75() {
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

function Container76() {
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

function Container71() {
  return (
    <div className="content-stretch flex gap-[6px] h-[32px] items-center relative shrink-0 w-[165px]" data-name="Container">
      <Container72 />
      <Container73 />
      <Container74 />
      <Container75 />
      <Container76 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Container71 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame14 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start justify-center min-h-px min-w-px relative">
      <Frame25 />
      <Frame13 />
    </div>
  );
}

function AllDraws1() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[323px]" data-name="All draws">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame12 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-end relative shrink-0" data-name="Paragraph">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#183060] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Edit
      </p>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-end relative rounded-[10px] shrink-0" data-name="Button">
      <Paragraph8 />
      <div className="relative shrink-0 size-[12px]" data-name="edit">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p34f57100} fill="var(--fill-0, #183060)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#183060] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Favourite 2
      </p>
      <Button3 />
    </div>
  );
}

function Container78() {
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

function Container79() {
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

function Container80() {
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

function Container77() {
  return (
    <div className="content-stretch flex gap-[6px] h-[32px] items-center relative shrink-0 w-[165px]" data-name="Container">
      <Container78 />
      <Container79 />
      <Container80 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Container77 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame17 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start justify-center min-h-px min-w-px relative">
      <Frame26 />
      <Frame16 />
    </div>
  );
}

function AllDraws2() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[323px]" data-name="All draws">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame15 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-end relative shrink-0" data-name="Paragraph">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#183060] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Edit
      </p>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-end relative rounded-[10px] shrink-0" data-name="Button">
      <Paragraph9 />
      <div className="relative shrink-0 size-[12px]" data-name="edit">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p34f57100} fill="var(--fill-0, #183060)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#183060] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Favourite 3
      </p>
      <Button4 />
    </div>
  );
}

function Container82() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[28px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[33554400px] size-full" src={imgContainer} />
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">14</p>
      </div>
    </div>
  );
}

function Container83() {
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

function Container84() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[28px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[33554400px] size-full" src={imgContainer} />
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">31</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[28px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[33554400px] size-full" src={imgContainer} />
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">13</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex gap-[6px] h-[32px] items-center relative shrink-0 w-[165px]" data-name="Container">
      <Container82 />
      <Container83 />
      <Container84 />
      <Container85 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Container81 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame30 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start justify-center min-h-px min-w-px relative">
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function AllDraws3() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[323px]" data-name="All draws">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame27 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-end relative shrink-0" data-name="Paragraph">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#183060] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Edit
      </p>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-end relative rounded-[10px] shrink-0" data-name="Button">
      <Paragraph10 />
      <div className="relative shrink-0 size-[12px]" data-name="edit">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p34f57100} fill="var(--fill-0, #183060)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#183060] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Favourite 4
      </p>
      <Button5 />
    </div>
  );
}

function Container87() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[28px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[33554400px] size-full" src={imgContainer} />
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">22</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[28px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[33554400px] size-full" src={imgContainer} />
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">11</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[28px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[33554400px] size-full" src={imgContainer} />
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">44</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[28px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[33554400px] size-full" src={imgContainer} />
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">55</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[28px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[33554400px] size-full" src={imgContainer} />
      <div aria-hidden="true" className="absolute border border-[#ffa202] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">33</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex gap-[6px] h-[32px] items-center relative shrink-0 w-[165px]" data-name="Container">
      <Container87 />
      <Container88 />
      <Container89 />
      <Container90 />
      <Container91 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Container86 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame34 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start justify-center min-h-px min-w-px relative">
      <Frame32 />
      <Frame33 />
    </div>
  );
}

function AllDraws4() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[323px]" data-name="All draws">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame31 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col gap-[12px] h-[388px] items-center py-[12px] relative rounded-[12px] shrink-0 w-[351px]">
      <div aria-hidden="true" className="absolute border border-[#f3f3f3] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <AllDraws1 />
      <AllDraws2 />
      <AllDraws3 />
      <AllDraws4 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex items-center justify-center p-[12px] relative shrink-0 w-[375px]">
      <div className="content-stretch flex h-[36px] items-start justify-center px-[16px] py-[10px] relative rounded-[4px] shrink-0 w-[200px]" data-name="button-collection / primary-button">
        <div aria-hidden="true" className="absolute border border-[#0b52b1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#183060] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Confirm
        </p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center px-[12px] relative size-full">
          <Frame19 />
          <Frame18 />
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

export default function FavouriteSelectedBb() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative rounded-tl-[30px] rounded-tr-[30px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Favourite selected +bb">
      <Container />
      <Options />
      <Frame6 />
      <Container1 />
    </div>
  );
}
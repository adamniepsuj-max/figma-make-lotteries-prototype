import svgPaths from "./svg-0e8bkw6zge";

function Icon() {
  return (
    <div className="absolute left-0 size-[20px] top-[4px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3a2fa580} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <Icon />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-[28px] not-italic text-[18px] text-white top-0 tracking-[-0.879px] whitespace-nowrap">Quick Pick</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">Use your recent or saved play</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[46px] relative shrink-0 w-[168.078px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M15 5L5 15" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M5 5L15 15" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[6px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Button />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(90deg, rgb(21, 93, 252) 0%, rgb(45, 90, 252) 7.1429%, rgb(60, 87, 252) 14.286%, rgb(72, 84, 252) 21.429%, rgb(83, 81, 251) 28.571%, rgb(92, 78, 251) 35.714%, rgb(100, 74, 251) 42.857%, rgb(108, 70, 251) 50%, rgb(115, 65, 251) 57.143%, rgb(122, 60, 251) 64.286%, rgb(128, 55, 251) 71.429%, rgb(135, 48, 250) 78.571%, rgb(141, 41, 250) 85.714%, rgb(146, 31, 250) 92.857%, rgb(152, 16, 250) 100%)" }}>
      <div className="content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p29474700} fill="var(--fill-0, #0A0A0A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[10px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[10px] left-0 not-italic text-[#101828] text-[10px] top-0 tracking-[0.1172px] whitespace-nowrap">RECOMMENDED</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#fdc700] h-[20px] relative rounded-[33554400px] shrink-0 w-[114.953px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
        <Icon2 />
        <Text />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Container7 />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[15.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#155dfc] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">IL</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white relative rounded-[33554400px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16.266px] py-[2px] relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[17.5px] min-h-px min-w-px not-italic relative text-[#101828] text-[14px] tracking-[-0.1504px]">Irish Lotto 6 ball</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#4a5565] text-[12px]">Based on your play history</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="flex-[247_0_0] h-[35.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[64px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Lines:</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[39.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#101828] text-[12px] whitespace-nowrap">2 lines</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[64px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Draws:</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[2.5px] w-[116.703px]" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Wednesday • Lunch</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute bg-[#dbeafe] content-stretch flex h-[21px] items-center left-[122.7px] px-[7px] py-[3px] rounded-[4px] top-0 w-[38.063px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#1447e6] text-[10px] tracking-[0.1172px] whitespace-nowrap">Main</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute bg-[#dbeafe] content-stretch flex h-[21px] items-center left-[166.77px] px-[7px] py-[3px] rounded-[4px] top-0 w-[25.781px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#1447e6] text-[10px] tracking-[0.1172px] whitespace-nowrap">+1</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <Text5 />
      <Text6 />
      <Text7 />
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[2.5px] w-[85.969px]" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Saturday • Tea</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute bg-[#dbeafe] content-stretch flex h-[21px] items-center left-[91.97px] px-[7px] py-[3px] rounded-[4px] top-0 w-[38.063px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#1447e6] text-[10px] tracking-[0.1172px] whitespace-nowrap">Main</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute bg-[#dbeafe] content-stretch flex h-[21px] items-center left-[136.03px] px-[7px] py-[3px] rounded-[4px] top-0 w-[27.125px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#1447e6] text-[10px] tracking-[0.1172px] whitespace-nowrap">+2</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <Text8 />
      <Text9 />
      <Text10 />
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[235_0_0] h-[46px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[8px] h-[46px] items-start relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Container14 />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[16px] relative shrink-0 w-[64px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Duration:</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[16px] relative shrink-0 w-[40.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#101828] text-[12px] whitespace-nowrap">1 week</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Text11 />
      <Text12 />
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[16px] relative shrink-0 w-[64px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Stake:</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[16px] relative shrink-0 w-[62.328px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#101828] text-[12px] whitespace-nowrap">£1 per line</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Text13 />
      <Text14 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[118px] items-start relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container13 />
      <Container17 />
      <Container18 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white flex-[151.5_0_0] h-[40px] min-h-px min-w-px relative rounded-[14px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[2px] py-[12px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#364153] text-[12px] text-center">Edit first</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[38.63px] size-[14px] top-[13px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="flex-[147.5_0_0] h-[40px] min-h-px min-w-px relative rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" data-name="Button" style={{ backgroundImage: "linear-gradient(90deg, rgb(0, 201, 80) 0%, rgb(0, 198, 78) 9.0909%, rgb(0, 195, 77) 18.182%, rgb(0, 191, 75) 27.273%, rgb(0, 188, 73) 36.364%, rgb(0, 185, 72) 45.455%, rgb(0, 182, 70) 54.545%, rgb(0, 179, 68) 63.636%, rgb(0, 175, 67) 72.727%, rgb(0, 172, 65) 81.818%, rgb(0, 169, 64) 90.909%, rgb(0, 166, 62) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon3 />
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[83.63px] not-italic text-[12px] text-center text-white top-[12px] whitespace-nowrap">Play this</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function PackageCard() {
  return (
    <div className="h-[266px] relative rounded-[14px] shrink-0 w-full" data-name="PackageCard" style={{ backgroundImage: "linear-gradient(142.206deg, rgb(239, 246, 255) 0%, rgb(250, 245, 255) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[2px] pt-[18px] px-[18px] relative size-full">
        <Container8 />
        <Container11 />
        <Container19 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[294px] items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <PackageCard />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Your saved plays</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[28px] relative shrink-0 w-[23.734px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#155dfc] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">49</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-white relative rounded-[33554400px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[12.125px] pr-[12.141px] py-[2px] relative size-full">
        <Text15 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="flex-[1_0_0] h-[17.5px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[17.5px] min-h-px min-w-px not-italic relative text-[#101828] text-[14px] tracking-[-0.1504px]">{`49's Lotto`}</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Paragraph3 />
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[16px] relative shrink-0 w-[64px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Lines:</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[16px] relative shrink-0 w-[39.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#101828] text-[12px] whitespace-nowrap">3 lines</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Text16 />
      <Text17 />
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[16px] relative shrink-0 w-[64px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Draws:</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[2.5px] w-[122.844px]" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Wednesday • Brunch</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute bg-[#dbeafe] content-stretch flex h-[21px] items-center left-[128.84px] px-[7px] py-[3px] rounded-[4px] top-0 w-[38.063px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#1447e6] text-[10px] tracking-[0.1172px] whitespace-nowrap">Main</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <Text19 />
      <Text20 />
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[2.5px] w-[111.453px]" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Wednesday • Drive</p>
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute bg-[#dbeafe] content-stretch flex h-[21px] items-center left-[117.45px] px-[7px] py-[3px] rounded-[4px] top-0 w-[38.063px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#1447e6] text-[10px] tracking-[0.1172px] whitespace-nowrap">Main</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute bg-[#dbeafe] content-stretch flex h-[21px] items-center left-[161.52px] px-[7px] py-[3px] rounded-[4px] top-0 w-[25.781px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#1447e6] text-[10px] tracking-[0.1172px] whitespace-nowrap">+1</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <Text21 />
      <Text22 />
      <Text23 />
    </div>
  );
}

function Container27() {
  return (
    <div className="flex-[235_0_0] h-[46px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container28 />
        <Container29 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[8px] h-[46px] items-start relative shrink-0 w-full" data-name="Container">
      <Text18 />
      <Container27 />
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[16px] relative shrink-0 w-[64px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Duration:</p>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[16px] relative shrink-0 w-[48.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#101828] text-[12px] whitespace-nowrap">2 weeks</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Text24 />
      <Text25 />
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[16px] relative shrink-0 w-[64px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Stake:</p>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[16px] relative shrink-0 w-[62.328px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#101828] text-[12px] whitespace-nowrap">£1 per line</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Text26 />
      <Text27 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[118px] items-start relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container26 />
      <Container30 />
      <Container31 />
    </div>
  );
}

function PackageCard1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[226px] items-start left-0 pb-[2px] pt-[18px] px-[18px] rounded-[14px] top-0 w-[343px]" data-name="PackageCard">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container22 />
      <Container24 />
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[226px] relative shrink-0 w-full" data-name="Button">
      <PackageCard1 />
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[28px] relative shrink-0 w-[15.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#155dfc] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">IL</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-white relative rounded-[33554400px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16.266px] py-[2px] relative size-full">
        <Text28 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="flex-[1_0_0] h-[17.5px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[17.5px] min-h-px min-w-px not-italic relative text-[#101828] text-[14px] tracking-[-0.1504px]">Irish Lotto 6 ball</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Paragraph4 />
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[16px] relative shrink-0 w-[64px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Lines:</p>
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[16px] relative shrink-0 w-[30.969px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#101828] text-[12px] whitespace-nowrap">1 line</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Text29 />
      <Text30 />
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[16px] relative shrink-0 w-[64px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Draws:</p>
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[2.5px] w-[101.359px]" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Saturday • Lunch</p>
    </div>
  );
}

function Text33() {
  return (
    <div className="absolute bg-[#dbeafe] content-stretch flex h-[21px] items-center left-[107.36px] px-[7px] py-[3px] rounded-[4px] top-0 w-[38.063px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#1447e6] text-[10px] tracking-[0.1172px] whitespace-nowrap">Main</p>
    </div>
  );
}

function Text34() {
  return (
    <div className="absolute bg-[#dbeafe] content-stretch flex h-[21px] items-center left-[151.42px] px-[7px] py-[3px] rounded-[4px] top-0 w-[25.781px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#1447e6] text-[10px] tracking-[0.1172px] whitespace-nowrap">+1</p>
    </div>
  );
}

function Text35() {
  return (
    <div className="absolute bg-[#dbeafe] content-stretch flex h-[21px] items-center left-[183.2px] px-[7px] py-[3px] rounded-[4px] top-0 w-[27.125px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#1447e6] text-[10px] tracking-[0.1172px] whitespace-nowrap">+2</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text32 />
        <Text33 />
        <Text34 />
        <Text35 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[8px] h-[21px] items-start relative shrink-0 w-full" data-name="Container">
      <Text31 />
      <Container37 />
    </div>
  );
}

function Text36() {
  return (
    <div className="h-[16px] relative shrink-0 w-[64px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Duration:</p>
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="h-[16px] relative shrink-0 w-[49.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#101828] text-[12px] whitespace-nowrap">4 weeks</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Text36 />
      <Text37 />
    </div>
  );
}

function Text38() {
  return (
    <div className="h-[16px] relative shrink-0 w-[64px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Stake:</p>
      </div>
    </div>
  );
}

function Text39() {
  return (
    <div className="h-[16px] relative shrink-0 w-[63.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#101828] text-[12px] whitespace-nowrap">£2 per line</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Text38 />
      <Text39 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[93px] items-start relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Container36 />
      <Container38 />
      <Container39 />
    </div>
  );
}

function PackageCard2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[201px] items-start left-0 pb-[2px] pt-[18px] px-[18px] rounded-[14px] top-0 w-[343px]" data-name="PackageCard">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container32 />
      <Container34 />
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[201px] relative shrink-0 w-full" data-name="Button">
      <PackageCard2 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[435px] items-start relative shrink-0 w-full" data-name="Container">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[463px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container21 />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#f3f4f6] h-[44px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[171.5px] not-italic text-[#364153] text-[14px] text-center top-[12px] tracking-[-0.1504px] whitespace-nowrap">Choose different setup</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[865px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[16px] px-[16px] relative size-full">
        <Container5 />
        <Container20 />
        <Button5 />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Container">
      <Container1 />
      <Container4 />
    </div>
  );
}
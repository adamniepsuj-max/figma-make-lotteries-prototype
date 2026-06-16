function Heading() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-full" data-name="Heading 2">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] tracking-[-0.3125px] whitespace-nowrap">1. Add your lines</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#4a5565] text-[10px] top-0 tracking-[0.1172px] whitespace-nowrap">Choose numbers for each line</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[41px] relative shrink-0 w-[143.891px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 1.33333">
            <path d="M0.666667 0.666667H10" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white flex-[1_0_0] h-[34px] min-h-px min-w-px opacity-50 relative rounded-[10px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[9px] px-[9px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[28px] relative shrink-0 w-[32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-[16.67px] not-italic text-[#101828] text-[20px] text-center top-0 tracking-[-0.4492px] whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 1.33333">
            <path d="M0.666667 0.666667H10" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 10.6667">
            <path d="M0.666667 0.666667V10" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#155dfc] relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[34px] relative shrink-0 w-[114px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Button />
        <Text />
        <Button1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[41px] items-center justify-between relative shrink-0 w-[307px]" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Line 1</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[39.422px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[239.578px] relative size-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[29px] py-[8px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#1447e6] text-[10px] text-center tracking-[0.1172px] whitespace-nowrap">Pick your numbers</p>
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[15px] relative shrink-0 w-[28.391px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[#4a5565] text-[10px] top-0 tracking-[0.1172px] whitespace-nowrap">Stake:</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0 w-[30px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2a49bf] text-[12px] text-center tracking-[-0.1504px] whitespace-nowrap">£1</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0 w-[30px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2a49bf] text-[12px] text-center tracking-[-0.1504px] whitespace-nowrap">£5</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0 w-[30px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2a49bf] text-[12px] text-center tracking-[-0.1504px] whitespace-nowrap">£10</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative w-full">
        <Button3 />
        <Button4 />
        <Button5 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[10px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.42px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 0.833333">
            <path d="M0.416667 0.416667H6.25" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="opacity-50 relative rounded-[4px] shrink-0 size-[20px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16.36px] not-italic text-[#101828] text-[14px] text-center top-0 tracking-[-0.1504px] whitespace-nowrap">£1</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[10px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.42px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 0.833333">
            <path d="M0.416667 0.416667H6.25" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-0.42px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.833333 6.66667">
            <path d="M0.416667 0.416667V6.25" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[20px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[84px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Button6 />
        <Text3 />
        <Button7 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Frame />
      <Container9 />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white h-[38px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[9px] px-[9px] relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col gap-[8px] items-start p-[14px] relative rounded-[10px] shrink-0 w-[307px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container5 />
      <Button2 />
      <Container7 />
    </div>
  );
}

function Text4() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Line 2</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[39.422px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text4 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[239.578px] relative size-full">
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[29px] py-[8px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#1447e6] text-[10px] text-center tracking-[0.1172px] whitespace-nowrap">Pick your numbers</p>
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[15px] relative shrink-0 w-[28.391px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[#4a5565] text-[10px] top-0 tracking-[0.1172px] whitespace-nowrap">Stake:</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0 w-[30px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2a49bf] text-[12px] text-center tracking-[-0.1504px] whitespace-nowrap">£1</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0 w-[30px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2a49bf] text-[12px] text-center tracking-[-0.1504px] whitespace-nowrap">£5</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0 w-[30px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2a49bf] text-[12px] text-center tracking-[-0.1504px] whitespace-nowrap">£10</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative w-full">
        <Button9 />
        <Button10 />
        <Button11 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[10px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.42px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 0.833333">
            <path d="M0.416667 0.416667H6.25" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="opacity-50 relative rounded-[4px] shrink-0 size-[20px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16.36px] not-italic text-[#101828] text-[14px] text-center top-0 tracking-[-0.1504px] whitespace-nowrap">£1</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[10px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.42px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 0.833333">
            <path d="M0.416667 0.416667H6.25" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-0.42px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.833333 6.66667">
            <path d="M0.416667 0.416667V6.25" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[20px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[84px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Button12 />
        <Text6 />
        <Button13 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Text5 />
      <Frame1 />
      <Container15 />
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-white h-[38px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[9px] px-[9px] relative size-full">
        <Container14 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col gap-[8px] items-start p-[14px] relative rounded-[10px] shrink-0 w-[307px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container11 />
      <Button8 />
      <Container13 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start p-[18px] relative rounded-[14px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <Container1 />
      <Container4 />
      <Container10 />
    </div>
  );
}
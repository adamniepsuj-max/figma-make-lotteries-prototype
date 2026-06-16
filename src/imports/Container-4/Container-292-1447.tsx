import svgPaths from "./svg-b8v4zjp3tb";

function Paragraph() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Paragraph">
      <ol className="absolute block font-['SF_Pro:Semi_Bold',sans-serif] leading-[0] left-0 not-italic text-[#183060] text-[16px] top-[-2px] whitespace-nowrap" start="1">
        <li className="ms-[24px]">
          <span className="leading-[20px]">Add your lines</span>
        </li>
      </ol>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col h-[21px] items-start pr-[2.531px] relative shrink-0 w-[116px]" data-name="Heading">
      <Paragraph />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0 w-[144px]" data-name="Paragraph">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#546d91] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Choose numbers for each line
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <Paragraph2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[41px] relative shrink-0 w-[143.891px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Heading />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[49.109px] h-[41px] items-start relative shrink-0 w-[307px]" data-name="Container">
      <Container2 />
      <div className="bg-white max-w-[200px] min-w-[111px] relative rounded-[16px] shrink-0" data-name="Counter">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center max-w-[inherit] min-w-[inherit] p-[2px] relative size-full">
          <div className="bg-white content-stretch flex gap-[10px] items-center p-[8px] relative rounded-[36px] shrink-0" data-name="Icon Button 🟠">
            <div className="relative shrink-0 size-[12px]" data-name="Size=12px">
              <div className="absolute inset-[43.75%_0]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 1.5">
                  <path d={svgPaths.p42daa00} fill="var(--fill-0, #1890FF)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['SF_Pro:Bold',sans-serif] font-bold leading-[16px] min-h-px min-w-px relative text-[#546d91] text-[14px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
            2
          </p>
          <div className="bg-white content-stretch flex gap-[10px] items-center justify-end p-[8px] relative rounded-[36px] shrink-0" data-name="Icon Button 🟠">
            <div className="relative shrink-0 size-[12px]" data-name="Size=12px">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <path d={svgPaths.p10006ec0} fill="var(--fill-0, #1890FF)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 w-[48px]">
      <p className="font-['SF_Pro:Semi_Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#183060] text-[14px] whitespace-nowrap">Line 1</p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-end pt-[4px] px-[4px] relative rounded-[4px] shrink-0 w-[34px]" data-name="Button">
      <div className="relative shrink-0 size-[16px]" data-name="remove">
        <div className="absolute inset-[0_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 16">
            <path d={svgPaths.p322d8100} fill="var(--fill-0, #183060)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex gap-[22px] items-center p-[12px] relative rounded-[8px] shrink-0 w-[307px]">
      <div aria-hidden="true" className="absolute border border-[#f3f3f3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame />
      <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="button-collection / primary-button">
        <div aria-hidden="true" className="absolute border border-[#0b52b1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center px-[16px] py-[10px] relative size-full">
            <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#183060] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Pick your numbers
            </p>
          </div>
        </div>
      </div>
      <Button />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 w-[48px]">
      <p className="font-['SF_Pro:Semi_Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#183060] text-[14px] whitespace-nowrap">Line 2</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-end pt-[4px] px-[4px] relative rounded-[4px] shrink-0 w-[34px]" data-name="Button">
      <div className="relative shrink-0 size-[16px]" data-name="remove">
        <div className="absolute inset-[0_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 16">
            <path d={svgPaths.p322d8100} fill="var(--fill-0, #183060)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex gap-[22px] items-center p-[12px] relative rounded-[8px] shrink-0 w-[307px]">
      <div aria-hidden="true" className="absolute border border-[#f3f3f3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame3 />
      <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="button-collection / primary-button">
        <div aria-hidden="true" className="absolute border border-[#0b52b1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center px-[16px] py-[10px] relative size-full">
            <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#183060] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Pick your numbers
            </p>
          </div>
        </div>
      </div>
      <Button1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[43.52px] size-[12px] top-[10px]" data-name="Icon">
      <div className="relative shrink-0 size-[12px]" data-name="remove">
        <div className="absolute inset-[0_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 12">
            <path d={svgPaths.p20038800} fill="var(--fill-0, #183060)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-center left-[59.91px] top-[8px] w-[77.203px]" data-name="Paragraph">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#183060] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Clear all lines
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[32px] left-[153px] rounded-[10px] top-0 w-[150px]" data-name="Button">
      <Icon />
      <Paragraph3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[32px] relative shrink-0 w-[307px]" data-name="Container">
      <Button2 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start px-[18px] py-[22px] relative rounded-[12px] shadow-[0px_0px_6px_0px_rgba(23,31,51,0.1)] size-full" data-name="Container">
      <Container1 />
      <Frame1 />
      <Frame2 />
      <Container3 />
    </div>
  );
}
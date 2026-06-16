type ModalCloseButtonProps = {
  onClick: () => void;
  ariaLabel?: string;
};

export function ModalCloseButton({ onClick, ariaLabel = 'Close modal' }: ModalCloseButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex self-stretch items-center justify-end pl-3 pr-[18px] text-[#183060]"
      aria-label={ariaLabel}
      data-node-id="1006:29510"
    >
      <svg className="size-3 shrink-0" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M2 2L10 10M10 2L2 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </button>
  );
}

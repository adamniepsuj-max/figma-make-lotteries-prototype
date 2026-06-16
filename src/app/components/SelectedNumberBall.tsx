type SelectedNumberBallProps = {
  number: number;
  className?: string;
  color?: string;
  onClick?: () => void;
  ariaLabel?: string;
};

export function SelectedNumberBall({
  number,
  className = '',
  color = 'linear-gradient(135deg, #136d4a 0%, #165453 52%, #173f5a 100%)',
  onClick,
  ariaLabel,
}: SelectedNumberBallProps) {
  const content = (
    <>
      <span className="text-[12px] font-bold leading-4 text-white">{number}</span>
    </>
  );

  const ballClassName = `flex size-7 shrink-0 items-center justify-center rounded-full ${className}`;
  const ballStyle = color.includes('gradient(') ? { backgroundImage: color } : { backgroundColor: color };

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={ballClassName} style={ballStyle} aria-label={ariaLabel ?? `Remove ${number}`}>
        {content}
      </button>
    );
  }

  return (
    <span className={ballClassName} style={ballStyle}>
      {content}
    </span>
  );
}

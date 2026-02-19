import { HiArrowRight } from 'react-icons/hi2';

interface CtaButtonProps {
  size?: 'small' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function CtaButton({ size = 'small', children, onClick, href, type = 'button', disabled = false }: CtaButtonProps) {
  const textClass = size === 'large' ? 'text-body-lg' : 'text-small';
  const paddingSize = size === 'large' ? 'px-6 py-2.5 lg:px-7 lg:py-2.5' : 'px-5 py-2 lg:px-7 lg:py-2.5';
  const iconSize = size === 'large' ? 14 : 12;

  const className = `bg-metalic-red shine-effect relative flex w-fit items-center gap-1.5 lg:gap-2 overflow-hidden rounded-[30px] ${paddingSize} ${textClass} font-noto font-bold text-white transition-transform ${
    disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
  }`;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <HiArrowRight className="relative z-10 lg:w-4.5 lg:h-4.5" size={iconSize} />
    </>
  );

  if (href) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} type={type} disabled={disabled} className={className}>
      {content}
    </button>
  );
}

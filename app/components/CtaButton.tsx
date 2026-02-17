import { HiArrowRight } from 'react-icons/hi2';

interface CtaButtonProps {
  size?: 'small' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
}

export default function CtaButton({ size = 'small', children, onClick }: CtaButtonProps) {
  const textClass = size === 'large' ? 'text-body-lg' : 'text-small';
  const paddingSize = size === 'large' ? 'px-6 py-2.5 lg:px-7 lg:py-2.5' : 'px-5 py-2 lg:px-7 lg:py-2.5';
  const iconSize = size === 'large' ? 14 : 12;

  return (
    <button
      onClick={onClick}
      className={`bg-metalic-red shine-effect relative flex w-fit items-center gap-1.5 lg:gap-2 overflow-hidden rounded-[30px] ${paddingSize} ${textClass} font-noto font-bold text-white transition-transform hover:scale-105`}
    >
      <span className="relative z-10">{children}</span>
      <HiArrowRight className="relative z-10 lg:w-4.5 lg:h-4.5" size={iconSize} />
    </button>
  );
}

import { HiArrowRight } from 'react-icons/hi2';

interface CtaButtonProps {
  size?: 'small' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
}

export default function CtaButton({ size = 'small', children, onClick }: CtaButtonProps) {
  const textSize = size === 'large' ? 'text-sm lg:text-lg' : 'text-xs lg:text-sm';
  const paddingSize = size === 'large' ? 'px-6 py-2.5 lg:px-7 lg:py-2.5' : 'px-5 py-2 lg:px-7 lg:py-2.5';
  const iconSize = size === 'large' ? 14 : 12;

  return (
    <button
      onClick={onClick}
      className={`shine-effect relative flex w-fit items-center gap-1.5 lg:gap-2 overflow-hidden rounded-[30px] ${paddingSize} ${textSize} font-bold text-white transition-transform hover:scale-105`}
      style={{
        background:
          'linear-gradient(90deg, #8B0000 0%, #E50012 45%, #FF7F7F 50%, #F24049 55%, #8B0000 100%)',
      }}
    >
      <span className="relative z-10">{children}</span>
      <HiArrowRight className="relative z-10 lg:w-4.5 lg:h-4.5" size={iconSize} />
    </button>
  );
}

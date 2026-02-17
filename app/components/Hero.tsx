import Image from 'next/image';
import CtaButton from './CtaButton';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-white py-8 lg:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 lg:flex-row justify-center">
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-8 lg:max-w-xl">
            {/* Titles */}
            <div className="flex flex-col gap-1 text-center lg:text-left">
              <h2 className="text-hero-subtitle font-noto font-medium leading-tight">
                その挑戦を
              </h2>
              <h1 className="text-display font-noto font-bold leading-tight">
                <span className="text-primary-red">世界</span>が信じる形へ
              </h1>
            </div>

            {/* Description */}
            <p className="text-body-lg font-noto font-medium leading-snug text-center lg:text-left">
              共に創り、共に走るパートナー
              <br />
              起業家・スタートアップのためのWebサイト制作
            </p>

            {/* CTA Button */}
            <CtaButton size="large">まずは話を聞いてみる</CtaButton>
          </div>

          {/* Right Image */}
          <div className="relative size-70 lg:size-110">
            <Image
              src="/svgs/hero-image.svg"
              fill
              alt="Sidekick Services"
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

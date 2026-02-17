import Image from 'next/image';
import CtaButton from './CtaButton';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:py-16">
        <div className="flex flex-col items-center gap-6 lg:flex-row justify-center">
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-8 lg:max-w-xl">
            {/* Titles */}
            <div className="flex flex-col gap-1 text-center lg:text-left">
              <h2
                className="text-2xl lg:text-[48px] font-medium leading-tight"
                style={{ fontFamily: 'var(--font-noto-sans-jp)' }}
              >
                その挑戦を
              </h2>
              <h1
                className="text-3xl lg:text-[80px] font-bold leading-tight"
                style={{ fontFamily: 'var(--font-noto-sans-jp)' }}
              >
                <span className="text-[#E50012]">世界</span>が信じる形へ
              </h1>
            </div>

            {/* Description */}
            <p
              className="text-xs lg:text-lg font-normal leading-snug text-center lg:text-left"
              style={{ fontFamily: 'var(--font-noto-sans-jp)' }}
            >
              共に創り、共に走るパートナー
              <br />
              起業家・スタートアップのためのWebサイト制作
            </p>

            {/* CTA Button */}
            <CtaButton size="large">まずは話を聞いてみる</CtaButton>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src="/svgs/hero-image.svg"
              width={600}
              height={588}
              alt="Sidekick Services"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

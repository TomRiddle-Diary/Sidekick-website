'use client';

import Image from 'next/image';
import CtaButton from './CtaButton';

export default function BusinessOverview() {
  return (
    <section id="service-overview" aria-labelledby="service-overview-heading" className="bg-deep-pink py-8 px-6 lg:py-16 lg:px-20">
      {/* Section Title */}
      <h2
        id="service-overview-heading"
        className="text-h1 font-lato font-bold text-white text-start mb-6 lg:mb-8"
      >
        SERVICE
      </h2>

      {/* Content Box */}
      <div className="bg-white rounded-xl px-6 py-8 lg:px-20 lg:py-12 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Service Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/service-image1.png"
            width={500}
            height={500}
            alt="Webサイト制作サービス"
            className="object-contain"
            priority
          />
        </div>
        {/* Service Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6 lg:gap-10">
          <h3 className="text-h3 font-lato font-bold text-main text-center lg:text-left">
            Webサイト制作
          </h3>
          <p className="text-body-lg font-noto font-medium text-main text-center lg:text-left leading-[2.5]">
            Sidekickは、IT活用に課題を抱える長崎・佐世保の経営者様のためのWebサイト制作事業です。
            採用・集客・信頼の基盤となるWebサイトを制作し、日々の運用まで一貫してサポートします
          </p>
          <CtaButton size="large" href="#service">詳しく見る</CtaButton>
        </div>
      </div>
    </section>
  );
}

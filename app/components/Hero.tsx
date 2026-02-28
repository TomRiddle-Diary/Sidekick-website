'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import CtaButton from './CtaButton';

export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="relative overflow-hidden bg-white py-8 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-12 lg:gap-6 lg:flex-row justify-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start gap-7 lg:gap-9 lg:max-w-xl"
          >
            {/* Titles */}
            <div className="flex flex-col gap-1 text-center lg:text-left">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-hero-subtitle font-noto font-medium leading-tight"
              >
                長崎・佐世保の事業を
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                id="hero-heading"
                className="text-display font-noto font-bold leading-tight"
              >
                Webの力で<span className="text-primary-red">次世代へ</span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-body-lg font-noto font-medium text-center lg:text-left leading-relaxed"
            >
              地域の事業に寄り添うパートナー 
              <br />
              Webサイト制作・運用管理
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <CtaButton size="large" href="#contact">まずは話を聞いてみる</CtaButton>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative size-70 lg:size-110"
          >
            <Image
              src="/svgs/hero-image.svg"
              fill
              alt="長崎の起業家・スタートアップ向けWeb制作サービス Sidekick"
              priority
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

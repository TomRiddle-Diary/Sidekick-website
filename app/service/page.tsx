'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Service from '../components/Service';
import Pricing from '../components/Pricing';
import CtaButton from '../components/CtaButton';

export default function ServicePage() {
  return (
    <main>
      <Header />
      
      {/* ページタイトルセクション */}
      <section className="bg-white pt-20 pb-8 lg:pt-32 lg:pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-2 text-center"
          >
            <h1 className="text-h2 font-lato font-bold text-main">
              SERVICE
            </h1>
            <p className="text-section-subtitle font-noto font-medium text-main">
              事業内容
            </p>
          </motion.div>
        </div>
      </section>

      

      {/* サービス詳細セクション */}
      <section className="bg-light-pink py-8 px-6 lg:py-16 lg:px-20">

        {/* Section Title */}
      <motion.h2
        id="service-overview-heading"
        className="text-h1 font-lato font-bold text-white text-start mb-6 lg:mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        SERVICE
      </motion.h2>

        {/* Content Box 1 - Webサイト制作 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl px-6 py-8 lg:px-20 lg:py-14 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
        >
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
              Sidekickは、IT活用に課題を抱える経営者、個人事業主のためのWebサイト制作事業です。
              採用・集客・信頼の基盤となるWebサイトを制作し、日々の運用まで一貫してサポートします。サイトのリニューアルも大歓迎です。
            </p>
          </div>
        </motion.div>

        {/* Content Box 2 - その他サービス */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl px-6 py-8 lg:px-20 lg:py-14 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mt-8 lg:mt-16"
        >
          {/* Service Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/images/service-other.png"
              width={500}
              height={500}
              alt="その他サービス"
              className="object-contain"
            />
          </div>
          {/* Service Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6 lg:gap-10">
            <h3 className="text-h3 font-lato font-bold text-main text-center lg:text-left">
              その他サービス
            </h3>
            <p className="text-body-lg font-noto font-medium text-main text-center lg:text-left leading-[2.5]">
              Webサイト制作に留まらず、LP・漫画LP・チラシ・名刺・ロゴ制作まで幅広く対応します。言葉では伝えにくい事業の魅力を「漫画」で分かりやすく可視化。複数の業者に依頼する手間を省き、窓口一つで御社のブランド価値を最大化します。
            </p>
          </div>
        </motion.div>
      </section>

      {/* 料金プランセクション */}
      <Pricing />

      {/* サービスセクション */}
      <Service />

      <Footer />
    </main>
  );
}

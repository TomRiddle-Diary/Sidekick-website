'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';

export default function AboutPage() {
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
              ABOUT US
            </h1>
            <p className="text-section-subtitle font-noto font-medium text-main">
              Sidekickについて
            </p>
          </motion.div>
        </div>
      </section>

      {/* MVVセクション */}
      <section className="relative overflow-hidden bg-white py-8 lg:py-16">
        {/* 背景画像＋オーバーレイ */}
        <div className="absolute inset-0 w-full h-full" style={{zIndex:0, pointerEvents:'none'}}>
          <Image
            src="/images/mvv-background.jpeg"
            alt="MVV背景"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 w-full h-full bg-white opacity-20" style={{zIndex:1, pointerEvents:'none'}} />
        </div>

        {/* コンテンツ */}
        <div className="mx-auto max-w-5xl px-6 relative" style={{zIndex:2}}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="rounded-xl px-6 py-12 lg:px-20 lg:py-20 backdrop-blur-[20px] bg-linear-to-b from-[#FFF5F5]/60 to-[#F8F5FF]/60"
            style={{ backgroundBlendMode: 'normal' }}
          >
            <div className="flex flex-col items-center gap-12 lg:gap-16 text-center">
              {/* MVVタイトル */}
              <h2 className="text-h1 font-lato font-bold leading-tight">
                <span style={{color: '#B5454D'}}>M</span>
                <span style={{color: '#E04B7C'}}>V</span>
                <span style={{color: '#FF8989'}}>V</span>
              </h2>

              {/* Mission */}
              <div className="flex flex-col gap-4 lg:gap-6">
                <h2 className="text-[32px] lg:text-[40px] font-lato font-bold leading-tight" style={{color: '#B5454D'}}>
                  Mission
                </h2>
                <p className="text-[18px] lg:text-[24px] font-noto font-medium text-main leading-loose">
                  一つでも多くの挑戦を<br />
                  一人でも多くの人に届けたい
                </p>
              </div>

              {/* Vision */}
              <div className="flex flex-col gap-4 lg:gap-6">
                <h2 className="text-[32px] lg:text-[40px] font-lato font-bold leading-tight" style={{color: '#E04B7C'}}>
                  Vision
                </h2>
                <p className="text-[18px] lg:text-[24px] font-noto font-medium text-main leading-loose">
                  長崎・佐世保の素晴らしい事業が、 <br />
                  Webサイトを通じて正しく評価され、<br />
                  次世代へと活気が受け継がれる未来
                </p>
              </div>

              {/* Value */}
              <div className="flex flex-col gap-4 lg:gap-6">
                <h2 className="text-[32px] lg:text-[40px] font-lato font-bold leading-tight" style={{color: '#FF8989'}}>
                  Value
                </h2>
                <p className="text-[18px] lg:text-[24px] font-noto font-medium text-main leading-loose">
                  対話を通じて事業への熱意を汲み取り、<br className='hidden lg:inline' />
                  技術を通じて正しく届ける、<br />
                  作って終わらないITパートナーとして共に歩む
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 自己紹介セクション */}
      <About />

      <Footer />
    </main>
  );
}

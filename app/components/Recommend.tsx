'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const recommendItems = [
  '新しく事業を始める方',
  '忙しくてサイト制作が後回しになっている方',
  '何年も更新が止まったサイトを刷新したい方',
  '若手採用に力を入れ、人手不足を解消したい方',
  '高単価なサービスや、BtoB事業',
  'ITが苦手で、誰に相談すればいいか迷っている方',
];

export default function Recommend() {
  return (
    <section id="recommend" aria-labelledby="recommend-heading" className="relative overflow-hidden bg-white py-8 lg:py-16">
      {/* 背景画像＋オーバーレイ */}
      <div className="absolute inset-0 w-full h-full" style={{zIndex:0, pointerEvents:'none'}}>
        <Image
          src="/images/recommend-background.jpeg"
          alt="おすすめ背景"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 w-full h-full bg-white opacity-20" style={{zIndex:1, pointerEvents:'none'}} />
      </div>
      <div className="mx-auto max-w-6xl px-6 relative" style={{zIndex:2}}>
        <div className="flex flex-col items-center gap-4 lg:gap-8">
          {/* セクションタイトル */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-2 text-center"
          >
            <h2 className="text-h2 font-lato font-bold text-main" id="recommend-heading">
              RECOMMEND
            </h2>
            <p className="text-section-subtitle font-noto font-medium text-main">
              こんな方におすすめ
            </p>
          </motion.div>

          {/* グラスモーフィズムカード */}
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
            {recommendItems.map((text, idx) => (
              <motion.div
                key={idx}
                className="recommend-card flex items-center justify-center text-center text-section-card font-noto font-medium text-main p-3 lg:p-4 rounded-full aspect-square w-58 lg:w-62"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {text}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

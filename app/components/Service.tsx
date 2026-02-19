'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import CtaButton from './CtaButton';

const services = [
  {
    icon: '/svgs/tactics.svg',
    title: 'Strategic UX Design',
    description: '事業モデルを深く読み解き、ユーザーとビジネスの両方を満たす体験を構築。 独自のブランド価値を最大化します。',
  },
  {
    icon: '/svgs/engeneering.svg',
    title: 'Agile Web Engineering',
    description: '柔軟な技術スタックで、高速かつ拡張性の高いサイトを実現。 市場の変化にすぐ対応できる基盤をお届けします。',
  },
  {
    icon: '/svgs/finance.svg',
    title: 'Financial Insight Integration',
    description: '会計・金融の視点を取り入れ、事業の数字が映えるサイト体験をデザイン。 投資家や顧客に信頼できる事業として伝わる基盤を築きます。',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Service() {
  return (
    <section id="service" aria-labelledby="service-heading" className="relative overflow-hidden bg-white py-8 lg:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-4 lg:gap-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-2 text-center"
          >
            <h2 className="text-h2 font-lato font-bold text-main" id="service-heading">
              SERVICE
            </h2>
            <p className="text-section-subtitle font-noto font-medium text-main">
              起業家・新規事業のためのWebサイト制作
            </p>
          </motion.div>

          {/* Service Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center gap-4 rounded-xl bg-white lg:p-6 text-center"
              >
                <Image
                  src={service.icon}
                  width={100}
                  height={100}
                  alt={`${service.title} - スタートアップ向けWeb制作サービス`}
                  className="object-contain"
                />
                <h3 className="text-section-card font-noto font-semibold text-main">
                  {service.title}
                </h3>
                <p className="text-body font-noto font-medium text-main opacity-85 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CtaButton size="large" href="#contact">無料で相談してみる</CtaButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

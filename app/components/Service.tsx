'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import CtaButton from './CtaButton';

const services = [
  {
    icon: '/svgs/figma.svg',
    title: 'Strategic Branding',
    description: '単なる見た目の良さではなく、事業モデルと起業家の想いを深く読み解き、その事業が市場でどう見られるべきかをデザインに落とし込みます。Figmaをはじめとする最新ツールを駆使し、ターゲットの感性に響きつつ、メッセージが直感的に伝わる「独自のブランド体験」を構築します。',
  },
  {
    icon: '/svgs/copilot.svg',
    title: 'AI & Architecture',
    description: '最新のAI技術を開発プロセスに組み込むことで、コーディング時間を大幅に効率化。その分、創業者との対話や要件定義、デザインの細部に至るまで、人間が思考すべき「本質的な品質向上」に時間を投資します。モダンな技術スタックを採用し、事業成長に伴う機能追加にも柔軟に応える高い拡張性を担保します。',
  },
  {
    icon: '/svgs/partnership.svg',
    title: 'Sidekick Strategy & Trust',
    description: '単なるWeb制作者ではなく、会計・財務の視点を持つ「事業の伴走者」として関わります。創業期の起業家と同じ目線でビジネスモデルを解釈し、マーケットに対してその価値を正しく、かつ力強く示す基盤を作成していきます。',
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
                  width={120}
                  height={120}
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
            <CtaButton size="large" href="#contact">料金プランを見る</CtaButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

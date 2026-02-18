'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import CtaButton from './CtaButton';

const flowSteps = [
  {
    icon: '/svgs/contact.svg',
    title: '無料相談・お問い合わせ',
    description:
      'まずはフォームよりお気軽にご連絡ください。30分程度のオンライン相談で、事業の想いや現状の課題を伺います。「まだ何も決まっていない」状態でも大歓迎です。',
  },
  {
    icon: '/svgs/interview.svg',
    title: 'ヒアリング調査・要件定義',
    description:
      '初回相談で興味を持っていただけましたら、1時間程度の詳細なヒアリングを行います（無料）。「誰に、何を、どのように伝えるか」を徹底的に整理し、事業の本質を言語化します。',
  },
  {
    icon: '/svgs/proposal.svg',
    title: 'ご提案・お見積もり',
    description:
      'ヒアリング内容を基に、最適なサイト構成案と詳細な見積もりを作成・提示します。提案内容・金額にご納得いただけましたら、正式なご契約・着手金のお支払いへと進みます。',
  },
  {
    icon: '/svgs/design.svg',
    title: 'デザイン・実装',
    description:
      'Figmaで理想を100%形にした「完成図」を作成し、ご確認いただいた後に実装へと移ります。スマホ対応やアニメーションなど、細部までこだわり抜いて動くサイトへ組み上げます。進捗状況はその都度お知らせいたします。',
  },
  {
    icon: '/svgs/launch.svg',
    title: '最終確認・公開',
    description:
      'テスト環境で最終チェックを行い、問題がなければ本番サーバーへ公開します。ドメイン取得やサーバー設定などの技術的な作業はすべて代行します。',
  },
  {
    icon: '/svgs/celebrate.svg',
    title: '納品・最終お支払い',
    description:
      'サイト公開をもって納品完了となります。内容を最終確認いただいた後、残金（制作費の50%）のお支払いをお願いしております。納品後も、事業の成長に合わせた改修など、お気軽にご相談ください。',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function Flow() {
  return (
    <section id="flow" className="relative overflow-hidden bg-white py-8 lg:py-16">
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
            <h2 className="text-h2 font-lato font-bold text-main">
              FLOW
            </h2>
            <p className="text-section-subtitle font-noto font-medium text-main">
              制作の流れ
            </p>
          </motion.div>

          {/* Flow Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-4"
          >
            {flowSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center gap-4 rounded-xl bg-white lg:p-6 text-center h-full"
              >
                {/* Icon Container with fixed height */}
                <div className="h-[100px] flex items-center justify-center">
                  <Image
                    src={step.icon}
                    width={100}
                    height={100}
                    alt={step.title}
                    className="object-contain"
                  />
                </div>
                
                <h3 className="text-section-card font-noto font-semibold text-main">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-body font-noto font-medium text-main opacity-85 leading-relaxed">
                  {step.description}
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
            <CtaButton size="large" href="#contact">まずは無料相談</CtaButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

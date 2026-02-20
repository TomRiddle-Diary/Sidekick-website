'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CtaButton from './CtaButton';

interface PricingFeature {
  text: string;
}

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  duration: string;
  features: PricingFeature[];
  warning: string;
  ctaText: string;
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'MVP Launch プラン',
    description: 'アイデアを素早く形にし、市場での検証を最優先に進めたい方向けのプラン。',
    price: '55,000円',
    duration: '納期：2週間～1か月',
    features: [
      { text: 'オリジナルデザイン' },
      { text: '1ページ完結（ロングLP）' },
      { text: 'スマホ対応' },
      { text: 'SEO基本設定' },
      { text: 'お問い合わせフォーム' },
      { text: 'アクセス解析導入（GA4/Search Console）'},
      { text: 'ドメイン・サーバー設定' },
    ],
    warning: '※ 創業前・創業直後の起業家の方におすすめ',
    ctaText: 'まずは無料相談',
  },
  {
    name: 'Business Growth プラン',
    description: '投資家や銀行、顧客への信頼を確立し、さらなる事業拡大を加速させたい方向けのプラン。',
    price: '110,000円',
    duration: '納期：1か月～2か月',
    features: [
      { text: 'MVPの全機能' },
      { text: '複数ページ構成（3～5p）' },
      { text: 'CMS（お知らせ・ブログの更新環境）' },
      { text: '多言語対応（英語など）' },
      { text: 'ブログ・SNS・外部ツール連携' },
    ],
    warning: '※ 創業から数年経過し、事業が安定してきている起業家の方におすすめ',
    ctaText: 'まずは無料相談',
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="bg-deep-pink py-8 px-6 lg:py-16 lg:px-20">
      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        id="pricing-heading"
        className="text-h1 font-lato font-bold text-white text-start mb-6 lg:mb-8"
      >
        PRICING
      </motion.h2>

      {/* Pricing Cards Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-end">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`bg-linear-to-r from-[#8B0000] via-[#E50012] to-[#8B0000] p-1.5 rounded-3xl shadow-lg ${
              index === 1 ? 'lg:scale-90 lg:origin-bottom' : ''
            }`}
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 flex flex-col gap-3 h-full">
            {/* Header Section */}
            <div className="flex flex-col gap-2">
              {/* Plan Name */}
              <h3 className="text-h4 font-noto font-bold text-metalic-red w-fit">
                {plan.name}
              </h3>

              {/* Description */}
              <p className="text-body-lg font-noto font-medium text-main">
                {plan.description}
              </p>
            </div>

            {/* Price Section */}
            <div className="flex flex-col gap-2">
              {/* Price */}
              <div>
                <span className="text-h3 font-noto font-bold text-main">
                  {plan.price}
                </span>
                <span className="text-body-lg font-noto font-medium text-main ml-2">（税込み）</span>
              </div>

              {/* Duration */}
              <p className="text-small font-noto font-medium text-main opacity-85">{plan.duration}</p>
            </div>

            {/* Features List */}
            <ul className="flex flex-col gap-3 grow">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-main">
                  <span className="text-h5 font-noto font-medium shrink-0">✓</span>
                  <span className="text-h5 font-noto font-medium">{feature.text}</span>
                </li>
              ))}
            </ul>

            {/* Warning */}
            <p className="text-small font-noto font-medium text-main leading-relaxed opacity-85">
              {plan.warning}
            </p>

            {/* CTA Button */}
            <CtaButton size="large" href="#contact">{plan.ctaText}</CtaButton>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;

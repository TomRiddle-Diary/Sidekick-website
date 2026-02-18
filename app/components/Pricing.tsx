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
    name: 'スタンダードプラン',
    description: '起業・新規事業の立ち上げに必要な、本格的なWebサイトを構築したい方向けのプラン',
    price: '55,000円',
    duration: '納期：2週間～2か月',
    features: [
      { text: 'オリジナルデザイン' },
      { text: '複数ページ構成（3～5p）' },
      { text: 'スマホ対応（レスポンシブ）' },
      { text: 'SEO基本設定' },
      { text: 'お問い合わせフォーム' },
      { text: '各種初期設定完了' },
    ],
    warning: '※ 上記以外の機能追加やページ数増加など、お気軽にご相談ください',
    ctaText: 'まずは無料相談',
  },
  {
    name: '学生応援プラン',
    description: '在学中の起業・新規事業チャレンジを特別価格で応援する学生限定プラン',
    price: '33,000円',
    duration: '納期：2週間～2か月',
    features: [
      { text: 'スタンダードプランの全機能が利用可能' },
      { text: '学生証の提示で40%OFF' },
      { text: '在学中の起業・事業活動が対象' },
      { text: '柔軟な支払いスケジュール対応' },
    ],
    warning: '※学生証のご提示が必要です',
    ctaText: 'まずは無料相談',
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="bg-deep-pink py-8 px-6 lg:py-16 lg:px-20">
      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
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
              index === 1 ? 'lg:scale-85 lg:origin-bottom' : ''
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

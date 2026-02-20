'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

// **text** を太字に変換する関数
const parseAnswerText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-bold text-black">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const faqData: FAQItem[] = [
  {
    question: '納品後のサポートや保守運用はお願いできますか？',
    answer:
      '**はい、用意しています。**起業家の方が本来の事業に100%集中できるよう、**月額5,500円（税込）の保守運用プラン**をご用意しております。面倒なサーバー・ドメインの維持管理から、日々の軽微なサイト更新、緊急時の復旧対応まで、あなたの「Sidekick」として継続的にサポートいたします。',
  },
  {
    question: '月額5,500円の保守運用プランでは何をしてくれますか？',
    answer: 'ドメイン・サーバーの維持管理（費用込み）から、月3回までのテキスト・画像修正、緊急時の復旧対応まで、Webサイトの**健康状態**を維持するためのすべてを代行します。'
  },
  {
    question: '事業の成長に合わせて柔軟に対応していくことは可能ですか？',
    answer:
      '**はい、大歓迎です。**シード期のスタートアップにおいて、市場の反応を見た上でのピボットや事業拡大は不可欠だと考えています。弊社のプランは、後からのページを追加したり、新しい機能をつけられるように拡張性の高いモダンな設計を前提としています。追加費用やスケジュールについては、変更の規模（文言の微調整レベルなのか、大幅なデザイン刷新や機能追加なのか）によって大きく異なります。まずは事業の壁打ちを兼ねてお気軽にご相談いただき、最適な進め方と費用を一緒にすり合わせて決めていきましょう。',
  },
  {
    question: '制作期間はどのくらいかかりますか？',
    answer:
      'ヒアリング調査終了後、**2週間〜2ヶ月程度** を目安としています（要件定義：10時間、デザイン：30時間、開発：15時間程度）。プロジェクトの規模や内容によって変動しますが、事前にスケジュールをお伝えいたします。お急ぎの場合は、Agile開発手法を用いて最低限必要なページと機能を優先的に公開し、その後段階的に完成させていくことも可能です。柔軟な対応が可能ですので、納期についてもお気軽にご相談ください。',
  },
  {
    question: 'お支払い方法と支払いタイミングを教えてください',
    answer:
      'お支払い方法は、指定の口座への**銀行振込**となります。お支払いのタイミングは、**ご契約時に見積金額の50%**をお支払いいただき、**納品完了後に残りの50%**をお支払いいただく形を予定しております。詳細につきましては、初回のお打ち合わせ時にご相談させていただき、お客様のご状況に合わせて柔軟に対応させていただきます。',
  },
  {
    question: 'スマホ・タブレット対応は含まれていますか？',
    answer:
      '**はい、標準で対応しております。**スマートフォン、タブレット、デスクトップなど、あらゆる端末で快適にご覧いただけるレスポンシブデザインで制作いたします。画面サイズに応じて最適なレイアウトに自動調整されるため、ユーザー体験を損なうことなく、すべてのデバイスで美しく表示されます。',
  },
  {
    question: '写真や文章が用意できていなくても制作できますか？',
    answer:
      '**はい、可能です。**写真に関しては、簡単なもので構いませんのでスマートフォンで撮影いただくか、フリー素材を活用することもできます。必要に応じて、画像編集ソフト（Photopea、Figma）を使用して調整・編集いたします。文章については、お客様と一緒に考えたり、AIツールを活用したりしながら、最適なコンテンツを作成していきます。素材の準備が難しい場合でも、柔軟にサポートいたしますのでご安心ください。',
  },
  {
    question: 'サーバーやドメインの契約はどうなりますか？',
    answer:
      '基本的には、**お客様ご自身**でサーバーやドメインのご契約をお願いしております（クレジットカード決済が必要となるため）。推奨サービスや契約方法については詳しくご案内いたしますので、初めての方でも安心してご利用いただけます。保守運用サポートプランをご契約いただく場合は、こちらで費用の支払い及び管理代行することも可能ですので、ご希望に応じてご相談ください。',
  },
  {
    question: '納品後に自分で内容を更新することはできますか？',
    answer:
      '**はい、可能です。**Business Growthプランでは、ブログや実績を簡単に更新できるCMS（管理画面）を無料で導入することができます。MVP Launchプランの場合は、オプションでの追加も可能です。なお、月額5,500円の保守プランをご利用いただければ、月3回までの更新を私が直接代行します。事業に集中したい方におすすめです。',
  },
  {
    question: '打ち合わせはどのように行いますか？',
    answer:
      '**対面またはオンライン**でのお打ち合わせに対応しております。私自身、様々な**起業家の方と直接お会い**して、お話を伺いながら信頼関係を築いていきたいと考えておりますので、可能な限りお会いしてお打ち合わせさせていただきます。もちろん、遠方の方やオンラインをご希望の方にも柔軟に対応いたしますので、お気軽にご相談ください。',
  },
  {
    question: '起業家以外や個人でも依頼できますか？',
    answer:
      '**もちろん可能です！**何か新しいことに挑戦している方、夢や目標に向かって頑張っている方であれば、どなたでも大歓迎です。個人事業主、学生、副業を始める方など、あらゆる「挑戦する人」を最大限サポートさせていただきます。まずはお気軽にご相談ください。',
  },
  {
    question: 'どうやってウェブサイトを作っているんですか？',
    answer:
      '最新のAI技術を駆使しながら、**速く・安く・高品質**に作っています！\n\n🎨 デザイン → Figma, Photopea, その他いろいろ\n💻 AI開発 → GitHub Copilot (Claude）\n🧑‍💻 プログラミング → React, Next.js, TypeScript, Framer Motion\n☁️ ホスティング → Vercel, Netlify',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative overflow-hidden bg-white py-8 lg:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-2 text-center"
          >
            <h2 className="text-h2 font-lato font-bold text-main" id="faq-heading">
              FAQ
            </h2>
            <p className="text-section-subtitle font-noto font-medium text-main">
              よくある質問
            </p>
          </motion.div>

          {/* FAQ List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full max-w-3xl border border-gray-600 rounded-3xl overflow-hidden lg:px-16 lg:py-4"
          >
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.5 }}
                className={`hover:bg-gray-50 ${
                  index !== faqData.length - 1 ? 'border-b border-gray-300' : ''
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-start gap-4 p-6 text-left hover:bg-gray-50"
                >
                  <span className="text-faq-question font-noto font-medium text-main shrink-0">
                    Q
                  </span>
                  <span className="text-faq-question font-noto font-semibold text-main flex-1">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-main shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 pt-0 flex items-start gap-4">
                      <span className="text-faq-question font-noto font-medium text-primary-red shrink-0">
                        A
                      </span>
                      <p className="text-body font-noto font-medium text-main opacity-85 leading-relaxed whitespace-pre-line flex-1">
                        {parseAnswerText(faq.answer)}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

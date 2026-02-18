'use client';

import { useState } from 'react';

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

const faqData: FAQItem[] = [
  {
    question: '制作費用の総額はいくらですか？追加費用は発生しますか？',
    answer:
      '制作費用は、Starter Planの場合**55,000円（税込み）**、Student Launch Planの場合**33,000円（税込み）**となります。基本的にはこの料金内で完結しますが、カスタムドメインの取得や有料サーバーの利用をご希望される場合は、別途月額料金が発生する可能性があります。できる限り無料のサービスを活用し、コストを抑えたご提案をさせていただきます。また、納品後の保守・運用サポートをご希望の場合は、別途オプションプランをご用意しておりますので、お気軽にご相談ください。',
  },
  {
    question: '制作期間はどのくらいかかりますか？',
    answer:
      'ヒアリング調査終了後、**2週間〜2ヶ月程度** を目安としています（要件定義：5時間、デザイン：30時間、開発：15時間程度）。プロジェクトの規模や内容によって変動しますが、事前にスケジュールをお伝えいたします。お急ぎの場合は、Agile開発手法を用いて最低限必要なページと機能を優先的に公開し、その後段階的に完成させていくことも可能です。柔軟な対応が可能ですので、納期についてもお気軽にご相談ください。',
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
      '基本的には、**お客様ご自身**でサーバーやドメインのご契約をお願いしております（クレジットカード決済が必要となるため）。推奨サービスや契約方法については詳しくご案内いたしますので、初めての方でも安心してご利用いただけます。保守・運用サポートプランをご契約いただく場合は、こちらで管理代行することも可能ですので、ご希望に応じてご相談ください。',
  },
  {
    question: '納品後に自分で内容を更新することはできますか？',
    answer:
      '**はい、可能です。**ご希望に応じてCMS（コンテンツ管理システム）を導入することで、専門知識がなくてもテキストや画像の更新ができるようになります。また、簡単な修正であれば、直接ご連絡いただければ対応させていただきます。更新頻度が高い場合や、継続的なサポートをご希望の場合はお気軽にご相談ください。',
  },
  {
    question: '公開後の保守・運用サポートはありますか？費用は？',
    answer:
      '現在、保守・運用サポートプランを**検討中**です。サイト公開後の修正対応や定期的なメンテナンス、コンテンツ更新などをサポートする内容を予定しております。詳細が決まり次第、お知らせいたしますので、ご興味がございましたらお問い合わせください。',
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
    question: '基本の機能以外にどのような機能を追加できますか？',
    answer:
      '**柔軟に対応できます。**ビジネスの成長に合わせて、必要なタイミングで機能を追加していくことをおすすめしています。\n\n• ページ数の追加（採用ページ、実績紹介、メンバー紹介など）\n• CMS（お知らせ・ブログ機能）\n• Google Analytics（アクセス解析）\n• 予約システム\n• SNS連携（Instagram、Twitter等）\n• 多言語対応（英語・中国語など）',
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
    <section id="faq" className="relative overflow-hidden bg-white py-8 lg:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-h2 font-lato font-bold text-main">
              FAQ
            </h2>
            <p className="text-section-subtitle font-noto font-medium text-main">
              よくある質問
            </p>
          </div>

          {/* FAQ List */}
          <div className="w-full max-w-3xl border border-gray-600 rounded-3xl overflow-hidden lg:px-16 lg:py-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`transition-all duration-300 hover:bg-gray-50 ${
                  index !== faqData.length - 1 ? 'border-b border-gray-300' : ''
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-start gap-4 p-6 text-left transition-colors hover:bg-gray-50"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

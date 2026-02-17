import Image from 'next/image';
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

export default function Service() {
  return (
    <section id="service" className="relative overflow-hidden bg-white py-10 lg:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-2 text-center">
            <h2
              className="text-4xl lg:text-[70px] font-normal text-[#B31A1C]"
              style={{ fontFamily: 'var(--font-lato)' }}
            >
              SERVICE
            </h2>
            <p
              className="text-xl lg:text-[30px] font-medium text-[#1A202C]"
              style={{ fontFamily: 'var(--font-noto-sans-jp)' }}
            >
              起業家・新規事業のためのWebサイト制作
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4.25 rounded-xl bg-white p-6 text-center"
              >
                <Image
                  src={service.icon}
                  width={100}
                  height={100}
                  alt={service.title}
                  className="object-contain"
                />
                <h3
                  className="text-[24px] font-semibold text-[#1A202C]"
                  style={{ fontFamily: 'var(--font-noto-sans-jp)' }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-[15px] font-normal leading-relaxed text-[#1A202C] opacity-85"
                  style={{ fontFamily: 'var(--font-noto-sans-jp)' }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <CtaButton size="large">無料で相談してみる</CtaButton>
        </div>
      </div>
    </section>
  );
}

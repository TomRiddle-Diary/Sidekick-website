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
    <section id="service" className="relative overflow-hidden bg-white py-8 lg:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-h2 font-lato font-regular text-dark-red">
              SERVICE
            </h2>
            <p className="text-h5 font-noto font-medium text-main">
              起業家・新規事業のためのWebサイト制作
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 rounded-xl bg-white p-6 text-center"
              >
                <Image
                  src={service.icon}
                  width={100}
                  height={100}
                  alt={service.title}
                  className="object-contain"
                />
                <h3 className="text-h5 font-noto font-semibold text-main">
                  {service.title}
                </h3>
                <p className="text-body font-noto font-medium text-main opacity-85 leading-relaxed">
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

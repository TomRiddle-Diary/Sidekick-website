import Image from 'next/image';

const aboutContent = [
  {
    heading: '世の中には、まだ見ぬ面白い挑戦があふれている',
    text: '大学2年から独学でプログラミングを始め、初めて制作した株式会社北村製茶様のウェブサイト。そこで目の当たりにしたのは、世界へお茶を輸出する誇らしい事業と、ITの不在によるあまりにも大きな機会損失でした。面白い挑戦をしている人を、もっと世の中に知ってもらいたい。それが、私の活動の原点です。',
  },
  {
    heading: 'Web制作の枠を超えて、ステークホルダーに響く言葉を届ける',
    text: '大学では経営学やコーポレートファイナンスを専攻し、スタートアップのエコシステムを研究しています。単に綺麗なサイトを作るだけではありません。投資家、銀行、そして顧客といったステークホルダーに対し、その事業の価値をどう伝えるべきか。経営と技術、両方の観点から、あなたの事業を一緒に本気で考えます。',
  },
  {
    heading: '学生最後の年、2026年を共創に捧げる',
    text: 'これまで北村製茶様や洋食屋ヒーローズ様など、一歩踏み出す方々の顔を作ってきました。 来春からは新規事業開発のプロフェッショナル集団である株式会社Relicにエンジニアとして参画します。個人事業主として全力で動けるこの1年間、一人でも多くの起業家と共創し、社会に価値ある足跡を残したいと考えています。',
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-dark-red py-8 lg:py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Title */}
        <h2 className="text-h1 font-lato font-bold text-white text-start mb-6 lg:mb-8">
          ABOUT
        </h2>

        {/* Content */}
        <div className="rounded-xl bg-white px-6 py-8 lg:px-20 lg:py-12">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-28">
            {/* Left Content */}
            <div className="flex flex-col items-start gap-4">
              {/* Profile Image */}
              <div className="size-60 overflow-hidden rounded-full lg:size-80 relative">
                <Image
                  src="/images/about-image.png"
                  fill
                  alt="KEIJI UCHIDA"
                  className="object-cover"
                />
              </div>

              {/* Name Section */}
              <div className="flex flex-col items-start">
                <p className="text-small font-noto font-medium text-main opacity-80">
                  うちだ けいじ
                </p>
                <h3 className="text-h3 font-lato font-semibold text-main">
                  KEIJI UCHIDA
                </h3>
              </div>

              {/* Affiliation */}
              <p className="text-h5 font-noto font-medium text-main">
                長崎県立大学 / 経営学部4年
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3 lg:gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon flex items-center justify-center bg-white size-8 lg:size-12"
                >
                  <Image src="/svgs/instagram-icon.svg" width={40} height={40} alt="Instagram" className="w-6 h-6 lg:w-10 lg:h-10" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon flex items-center justify-center bg-white size-8 lg:size-12"
                >
                  <Image src="/svgs/facebook-icon.svg" width={40} height={40} alt="Facebook" className="w-6 h-6 lg:w-10 lg:h-10" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon flex items-center justify-center bg-white size-8 lg:size-12"
                >
                  <Image src="/svgs/linkdein-icon.svg" width={40} height={40} alt="LinkedIn" className="w-6 h-6 lg:w-10 lg:h-10" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon flex items-center justify-center bg-white size-8 lg:size-12"
                >
                  <Image src="/svgs/github-icon.svg" width={40} height={40} alt="GitHub" className="w-6 h-6 lg:w-10 lg:h-10" />
                </a>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex w-full max-w-2xl flex-col gap-8 text-main">
              {aboutContent.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h4 className="text-h4 font-noto font-bold leading-tight">
                    {item.heading}
                  </h4>
                  <p className="text-body font-noto font-medium leading-relaxed opacity-85">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

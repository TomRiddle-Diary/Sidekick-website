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
    <section id="about" className="relative overflow-hidden bg-[#E50012] py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Title */}
        <h2
          className="mb-12 text-center text-6xl font-bold text-white lg:mb-16 lg:text-[128px]"
          style={{ fontFamily: 'var(--font-lato)' }}
        >
          ABOUT
        </h2>

        {/* Content */}
        <div className="rounded-xl bg-white px-6 py-8 lg:px-20 lg:py-12">
          <div className="flex flex-col items-start gap-4 lg:flex-row lg:gap-28">
            {/* Left Content */}
            <div className="flex flex-col items-start gap-4">
              {/* Profile Image */}
              <div className="size-[280px] overflow-hidden rounded-full lg:size-[400px]">
                <Image
                  src="/images/about-image.png"
                  width={400}
                  height={400}
                  alt="KEIJI UCHIDA"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Name Section */}
              <div className="flex flex-col items-start">
                <p
                  className="text-[20px] font-normal text-[#1A202C] opacity-80"
                  style={{ fontFamily: 'var(--font-noto-sans-jp)' }}
                >
                  うちだ けいじ
                </p>
                <h3
                  className="text-[40px] font-semibold text-[#1A202C]"
                  style={{ fontFamily: 'var(--font-lato)' }}
                >
                  KEIJI UCHIDA
                </h3>
              </div>

              {/* Affiliation */}
              <p
                className="text-[24px] font-normal text-[#1A202C]"
                style={{ fontFamily: 'var(--font-noto-sans-jp)' }}
              >
                長崎県立大学 / 経営学部4年
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon flex items-center justify-center bg-white"
                >
                  <Image src="/svgs/instagram-icon.svg" width={40} height={40} alt="Instagram" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon flex items-center justify-center bg-white"
                >
                  <Image src="/svgs/facebook-icon.svg" width={40} height={40} alt="Facebook" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon flex items-center justify-center bg-white"
                >
                  <Image src="/svgs/linkdein-icon.svg" width={40} height={40} alt="LinkedIn" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon flex items-center justify-center bg-white"
                >
                  <Image src="/svgs/github-icon.svg" width={40} height={40} alt="GitHub" />
                </a>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex w-full max-w-2xl flex-col gap-10 text-[#1A202C]">
              {aboutContent.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h4
                    className="text-[32px] font-bold leading-tight"
                    style={{ fontFamily: 'var(--font-noto-sans-jp)' }}
                  >
                    {item.heading}
                  </h4>
                  <p
                    className="text-[15px] font-normal leading-relaxed opacity-85"
                    style={{ fontFamily: 'var(--font-noto-sans-jp)' }}
                  >
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

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const aboutContent = [
  {
    heading: '世の中には、まだ見ぬ面白い挑戦があふれている',
    text: '大学2年から独学でプログラミングの勉強を始め、初めて制作した北村製茶様のwebサイト。そこで目の当たりにしたのは、世界へお茶を輸出する素晴らしい事業と、ITの不在によるあまりにも大きな機会損失でした。面白い挑戦をしている人を、もっと世の中に知ってもらいたい。それが、私の活動の原点です。',
  },
  {
    heading: '起業家と共に創る、未来への共創デザイン',
    text: '大学ではコーポレートファイナンスやアントレプレナーシップを専攻し、スタートアップの研究をしています。私は、最も不確実性の高い領域に挑む起業家の姿に強く憧れており、そんな挑戦者たちと共に歩み、その挑戦に少しでも力になりたい。その思いを胸に、経営と技術の両面から本気で事業を支えます。'
  },
  {
    heading: '学生最後の年、2026年を共創に捧げる',
    text: (
      <>
        これまで北村製茶様や洋食屋ヒーローズ様など、一歩踏み出す方々の顔を作ってきました。
        来春からは新規事業開発のプロフェッショナル集団である
        <a 
          href="https://relic.co.jp/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-800 underline hover:opacity-80 transition-opacity"
        >
          株式会社Relic
        </a>
        にエンジニアとして参画します。個人事業主として全力で動けるこの1年間、一人でも多くの起業家と共創し、社会に価値ある足跡を残したいと考えています。もっと自分のことを知りたい人はぜひSNSを見てください！
      </>
    ),
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative overflow-hidden bg-dark-red py-8 lg:py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          id="about-heading"
          className="text-h1 font-lato font-bold text-white text-start mb-6 lg:mb-8"
        >
          ABOUT
        </motion.h2>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-xl bg-white px-6 py-8 lg:px-20 lg:py-12"
        >
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-28">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col items-start gap-4"
            >
              {/* Profile Image */}
              <div className="size-60 overflow-hidden rounded-full lg:size-80 relative">
                <Image
                  src="/images/about-image.png"
                  fill
                  alt="打田圭志 - Sidekick代表、長崎でスタートアップ支援を行うWebデベロッパー"
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
            </motion.div>

            {/* Right Content */}
            <div className="flex w-full max-w-2xl flex-col gap-8 text-main">
              {aboutContent.map((item, index) => (
                <motion.div
                  key={index}
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex flex-col gap-2"
                >
                  <h4 className="text-h4 font-noto font-bold leading-tight">
                    {item.heading}
                  </h4>
                  <p className="text-body font-noto font-medium leading-relaxed opacity-85">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

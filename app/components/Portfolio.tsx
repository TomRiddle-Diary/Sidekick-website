'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CtaButton from './CtaButton';
import ProjectModal, { ProjectDetails } from './ProjectModal';

interface PortfolioItem {
  name: string;
  image: string;
  tags: string[];
  url?: string;
  details: ProjectDetails;
}

const portfolioItems: PortfolioItem[] = [
  {
    name: 'Sidekick',
    image: '/images/sidekick.png',
    tags: ['2026/2','個人事業主', 'webデザイン'],
    url: 'https://www.sidekick-design.com/',
    details: {
      name: 'Sidekick',
      url: 'https://www.sidekick-design.com/',
      heroImage: '/images/sidekick.png',
      overview: '自身の実績やサービスの概要を伝えるコーポレートサイト。\n地域事業の高齢化・人手不足による機会損失をITの力でゼロにしたい。',
      challenge: '長崎や佐世保などの地域事業は、\n高齢化や人手不足によってITをうまく活用できず、\n素晴らしい取り組みや事業が世に伝わりきっていない。',
      target: '地域で事業を営む方\n高齢化・人手不足に悩む事業者\nITに不慣れでWeb制作の相談先がわからない方',
      purpose: '地域事業の想いや取り組みをWebで発信し、\n高齢化・人手不足による機会損失をゼロにすること。',
      design: '情熱・信頼・共創が伝わるようにデザインしました。\n統一感を重視し、文字やスペースの大きさにこだわっています。',
      screenshots: ['/images/sidekick-desktop1.png', '/images/sidekick-mobile.png'],
    },
  },
  {
    name: "Dining your Hero's",
    image: '/images/heros.png',
    tags: ['2025/12','個人事業主', '洋食レストラン'],
    url: 'https://diningyourheros.com/',
    details: {
      name: "Dining your Hero's",
      url: 'https://diningyourheros.com/',
      heroImage: '/images/heros.png',
      overview: '佐世保市の洋食レストランのホームページ制作。\n多種多様な料理と温かい雰囲気を伝えることを重視。',
      challenge: '誰もが名前は聞いたことはあるお店なのにインターネット上に情報がなく、\nお店の魅力やメニュー、マスターの人柄が伝わっていない。',
      target: '子連れの家族\n近隣の大学生\n飲み会や忘年会を開催したい人',
      purpose: 'レストランの雰囲気やメニューを伝え、来店してもらうこと。\nインスタグラムも始めたので、もっと詳しく知りたい人の受け皿にする。',
      design: 'お店の雰囲気やロゴに合わせて配色しました。\nまた料理の美味しさが伝わる写真を大きく配置し、ボリューム満点さを強調しました。',
      screenshots: ['/images/heros-desktop.png', '/images/heros-mobile.png'],
    },
  },
  {
    name: '北村製茶',
    image: '/images/kitamuraseicha.png',
    tags: ['2025/7','法人', 'お茶農家'],
    url: 'https://kitamura-seicha.jp/',
    details: {
      name: '北村製茶',
      url: 'https://kitamura-seicha.jp/',
      heroImage: '/images/kitamuraseicha.png',
      overview: '長崎県で有機栽培茶を生産しているお茶農家さんのホームページ制作。\n茶葉の栽培から生産、加工、販売まですべて一貫して行っており、全世界に茶葉を輸出している。',
      challenge: 'インターネット上に情報が一切なく、興味を持ってくれた消費者や取引相手を失ってしまう（機会損失）。\nその他にも高齢化や人手不足、海外需要によって多忙を極めており、\n本来もっとも力を入れたい商品開発に取り組めずいる。',
      target: '茶葉の仕入れ担当者・卸業者\n取引先企業\nパートナー契約を希望する事業者（茶葉を使った商品開発など）\n講演会やセミナー依頼を検討している方',
      purpose: 'インターネット上に情報を掲載し、潜在顧客へ問い合わせを促す。',
      design: '北村製茶が最も大切にしている「人とのつながり」が感じられるようなデザインを意識しました。\n制作当時（2025/7）、大学講義の一環として行われていたことや要件定義の甘さ、自分の技術力の低さによって、\n北村製茶が抱えている問題を到底解決できるものではないため、リニューアルを進めていく予定です。',
      screenshots: ['/images/kitamura-desktop.png', '/images/kitamura-mobile.png'],
    },
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

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: ProjectDetails) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <section id="portfolio" aria-labelledby="portfolio-heading" className="bg-light-pink py-8 px-6 lg:py-16 lg:px-20">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          id="portfolio-heading"
          className="text-h1 font-lato font-bold text-white text-start mb-6 lg:mb-8"
        >
          WORKS
        </motion.h2>

        {/* Portfolio Cards Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl px-6 py-8 lg:px-20 lg:py-14"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap justify-center gap-8 lg:gap-12"
          >
            {portfolioItems.map((item, index) => {
              const content = (
                <>
                  {/* Portfolio Image */}
                  <div className="w-full h-[200px] lg:h-[280px] relative">
                    <Image
                      src={item.image}
                      fill
                      alt={item.name}
                      className="object-contain"
                    />
                  </div>

                  {/* Portfolio Name */}
                  <h3 className="text-h4 font-lato font-bold text-main text-center">
                    {item.name}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1.5 bg-gray-100 text-main text-tag font-noto font-medium rounded-full opacity-70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              );

              return (
                <motion.button
                  key={index}
                  variants={cardVariants}
                  transition={{ duration: 0.25 }}
                  whileHover={{ opacity: 0.8, y: 8 }}
                  onClick={() => openModal(item.details)}
                  className="flex flex-col items-center lg:items-start gap-4 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] cursor-pointer text-left"
                >
                  {content}
                </motion.button>
              );
            })}
          </motion.div>
          {/* CTA Button: もっと見る */}
          <div className="flex justify-center mt-8 lg:mt-16">
            <CtaButton size="large" href="#portfolio">もっと見る</CtaButton>
          </div>
        </motion.div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </>
  );
}

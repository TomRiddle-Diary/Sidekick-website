'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface PortfolioItem {
  name: string;
  image: string;
  tags: string[];
  url?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    name: 'Sidekick',
    image: '/images/sidekick.png',
    tags: ['個人事業主', 'webデザイン'],
    url: '#',
  },
  {
    name: "Dining your Hero's",
    image: '/images/heros.png',
    tags: ['個人事業主', '洋食レストラン'],
    url: 'https://diningyourheros.com/',
  },
  {
    name: '北村製茶',
    image: '/images/kitamuraseicha.png',
    tags: ['法人', 'お茶農家'],
    url: 'https://kitamura-seicha.jp/',
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
  return (
    <section id="portfolio" className="bg-light-pink py-8 px-6 lg:py-16 lg:px-20">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-h1 font-lato font-bold text-white text-start mb-6 lg:mb-8"
      >
        PORTFOLIO
      </motion.h2>

      {/* Portfolio Cards Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-xl px-6 py-8 lg:px-20 lg:py-12"
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

            return item.url ? (
              <motion.a
                key={index}
                variants={cardVariants}
                transition={{ duration: 0.6 }}
                whileHover={{ opacity: 0.8, y: 4 }}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-start gap-4 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)]"
              >
                {content}
              </motion.a>
            ) : (
              <motion.div
                key={index}
                variants={cardVariants}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-start gap-4 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)]"
              >
                {content}
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

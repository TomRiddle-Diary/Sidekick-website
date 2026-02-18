import Image from 'next/image';

interface PortfolioItem {
  name: string;
  image: string;
  tags: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    name: 'Sidekick',
    image: '/images/sidekick.png',
    tags: ['個人事業主', 'webデザイン'],
  },
  {
    name: "Dining your Hero's",
    image: '/images/heros.png',
    tags: ['個人事業主', '洋食レストラン'],
  },
  {
    name: '北村製茶',
    image: '/images/kitamuraseicha.png',
    tags: ['法人', 'お茶農家'],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-light-pink py-8 px-6 lg:py-16 lg:px-20">
      {/* Section Title */}
      <h2 className="text-h1 font-lato font-bold text-white text-start mb-6 lg:mb-8">
        PORTFOLIO
      </h2>

      {/* Portfolio Cards Container */}
      <div className="bg-white rounded-xl px-6 py-8 lg:px-20 lg:py-12">
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {portfolioItems.map((item, index) => (
            <div key={index} className="flex flex-col items-start gap-4 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] transition-all duration-300 hover:opacity-80 hover:translate-y-1 cursor-pointer">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

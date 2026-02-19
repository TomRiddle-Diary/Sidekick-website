'use client';

import { useState, useEffect } from 'react';
import CtaButton from './CtaButton';

const menuItems = [
  { en: 'Service', jp: '事業内容', href: '/#service' },
  { en: 'About', jp: '自己紹介', href: '/#about' },
  { en: 'Pricing', jp: '料金プラン', href: '/#pricing' },
  { en: 'Portfolio', jp: '制作実績', href: '/#portfolio' },
  { en: 'Flow', jp: '制作の流れ', href: '/#flow' },
  { en: 'FAQ', jp: 'よくある質問', href: '/#faq' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // スクロール位置が10px以上かチェック
      setIsScrolled(currentScrollY > 10);
      
      // スクロール方向を判定
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // 下にスクロール & 100px以上スクロールしている → ヘッダーを隠す
        setIsVisible(false);
      } else {
        // 上にスクロール or トップ付近 → ヘッダーを表示
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 z-50 h-20 w-full bg-white transition-all duration-300 ${
        isScrolled ? 'bg-opacity-95 shadow-md' : 'bg-opacity-100'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <div className="p-2.5">
          <a
            href="/"
            className="inline-block text-h5 font-medium text-primary-red transition-all duration-300 hover:scale-110 hover:rotate-3"
            style={{ fontFamily: 'var(--font-alfa-slab-one)' }}
          >
            Sidekick
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 lg:flex">
          {/* Menu Items */}
          <nav className="flex items-center gap-10">
            {menuItems.map((item) => (
              <a
                key={item.en}
                href={item.href}
                className="relative flex flex-col items-center gap-1 transition-all duration-300 hover:text-primary-red hover:-translate-y-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-red after:transition-all after:duration-300 hover:after:w-full"
              >
                <span className="text-nav font-lato font-bold">
                  {item.en}
                </span>
                <span className="text-xs-custom font-noto font-semibold opacity-80">
                  {item.jp}
                </span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <CtaButton size="small" href="/#contact">無料相談</CtaButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-main transition-transform ${
              isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-main transition-opacity ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-main transition-transform ${
              isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-20 w-full bg-white shadow-lg lg:hidden">
          <nav className="flex flex-col gap-4 p-6">
            {menuItems.map((item) => (
              <a
                key={item.en}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative flex flex-col gap-1 border-b border-gray-100 pb-4 transition-all duration-300 hover:text-primary-red hover:-translate-y-1 after:absolute after:bottom-3 after:left-0 after:h-0.5 after:w-0 after:bg-primary-red after:transition-all after:duration-300 hover:after:w-full"
              >
                <span className="text-nav font-lato font-bold">
                  {item.en}
                </span>
                <span className="text-xs-custom font-noto font-medium opacity-60">
                  {item.jp}
                </span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

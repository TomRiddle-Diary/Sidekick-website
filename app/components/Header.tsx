'use client';

import { useState, useEffect } from 'react';
import CtaButton from './CtaButton';

const menuItems = [
  { en: 'Service', jp: '事業内容', href: '#service' },
  { en: 'About', jp: '自己紹介', href: '#about' },
  { en: 'Pricing', jp: '料金プラン', href: '#pricing' },
  { en: 'Portfolio', jp: '制作実績', href: '#portfolio' },
  { en: 'Flow', jp: '制作の流れ', href: '#flow' },
  { en: 'FAQ', jp: 'よくある質問', href: '#faq' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 h-20 bg-white transition-all duration-300 ${
        isScrolled ? 'bg-opacity-95 shadow-md' : 'bg-opacity-100'
      }`}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <div className="p-2.5">
          <a
            href="#"
            className="text-xl lg:text-[28px] font-normal text-[#E50012]"
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
                className="flex flex-col items-center gap-1 transition-colors hover:text-[#E50012]"
              >
                <span className="text-base font-normal" style={{ fontFamily: 'var(--font-lato)' }}>
                  {item.en}
                </span>
                <span className="text-[10px] font-normal opacity-80" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>
                  {item.jp}
                </span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <CtaButton size="small">無料相談</CtaButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-[#1A202C] transition-transform ${
              isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-[#1A202C] transition-opacity ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-[#1A202C] transition-transform ${
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
                className="flex flex-col gap-1 border-b border-gray-100 pb-4 transition-colors hover:text-[#E50012]"
              >
                <span className="text-base font-normal" style={{ fontFamily: 'var(--font-lato)' }}>
                  {item.en}
                </span>
                <span className="text-[10px] font-normal opacity-60" style={{ fontFamily: 'var(--font-noto-sans-jp)' }}>
                  {item.jp}
                </span>
              </a>
            ))}
            <div className="mt-2">
              <CtaButton size="small">無料相談</CtaButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

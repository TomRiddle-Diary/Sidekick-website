import Link from 'next/link';
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiEnvelope, HiMapPin } from 'react-icons/hi2';

export default function Footer() {
  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Service', href: '#service' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: FaInstagram, href: '#', color: 'hover:text-[#E4405F]' },
    { name: 'Facebook', icon: FaFacebook, href: '#', color: 'hover:text-[#1877F2]' },
    { name: 'LinkedIn', icon: FaLinkedin, href: '#', color: 'hover:text-[#0A66C2]' },
    { name: 'GitHub', icon: FaGithub, href: '#', color: 'hover:text-white' },
  ];

  return (
    <footer className="bg-main py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#"
              className="text-h5 font-bold text-primary-red"
              style={{ fontFamily: 'var(--font-alfa-slab-one)' }}
            >
              Sidekick
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-h5 font-lato font-medium text-white/80 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white/70 transition-colors ${social.color}`}
                  aria-label={social.name}
                >
                  <Icon size={36} />
                </a>
              );
            })}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="flex items-center gap-2 text-body font-noto font-medium text-white/80">
              <HiEnvelope size={18} />
              <a href="mailto:bb123021@sun.ac.jp" className="hover:text-white transition-colors">
                bb123021@sun.ac.jp
              </a>
            </div>
            <div className="flex items-center gap-2 text-body font-noto font-medium text-white/80">
              <HiMapPin size={18} />
              <span>長崎県佐世保市</span>
            </div>
            <p className="text-body font-noto font-medium text-white/70">
              長崎県立大学 / 経営学部 / 馬場晋一研究室
            </p>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-white/20"></div>

          {/* Copyright */}
          <p className="text-small font-noto font-medium text-white/60">
            © 2026 Sidekick. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

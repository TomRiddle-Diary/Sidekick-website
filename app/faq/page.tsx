'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';

export default function FAQPage() {
  return (
    <main>
      <Header />
      
      {/* ページタイトルセクション */}
      <section className="bg-white pt-20 lg:pt-32">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-2 text-center"
          >
            <h1 className="text-h2 font-lato font-bold text-main">
              FAQ
            </h1>
            <p className="text-section-subtitle font-noto font-medium text-main">
              よくある質問
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQセクション */}
      <FAQ showHeader={false} />

      <Footer />
    </main>
  );
}

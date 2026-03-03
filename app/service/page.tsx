'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ServicePage() {
  return (
    <main>
      <Header />
      
      {/* ページタイトルセクション */}
      <section className="bg-white pt-20 pb-8 lg:pt-32 lg:pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-2 text-center"
          >
            <h1 className="text-h2 font-lato font-bold text-main">
              SERVICE
            </h1>
            <p className="text-section-subtitle font-noto font-medium text-main">
              事業内容
            </p>
          </motion.div>
        </div>
      </section>

      {/* プレースホルダーセクション */}
      <section className="bg-white py-16 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6 text-center"
          >
            <p className="text-h3 font-noto font-semibold text-main">
              準備中
            </p>
            <p className="text-body font-noto font-medium text-main opacity-85">
              完成までしばらくお待ちください
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

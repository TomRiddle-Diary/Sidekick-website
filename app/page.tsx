'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Service from "./components/Service";
import BusinessOverview from "./components/Business-overview";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Portfolio from "./components/Portfolio";
import Flow from "./components/Flow";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Recommend from "./components/Recommend";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 3秒後にローディングを終了
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loading key="loading" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Header />
          <main className="min-h-screen pt-20">
            {/* Hero Section */}
            <Hero />

            {/* Portfolio Section */}
            <Portfolio />

            {/* Business Overview Section */}
            <BusinessOverview />

            {/* Recommend Section */}
            <Recommend />

            {/* Service Section */}
            <Service />

            {/* About Section */}
            <About />

            {/* Pricing Section */}
            <Pricing />

            {/* Flow Section */}
            <Flow />

            {/* FAQ Section */}
            <FAQ />

            {/* Contact Section */}
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </>
      )}
    </>
  );
}

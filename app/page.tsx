'use client';

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
import Recommend from "./components/Recommend";

export default function Home() {
  return (
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
  );
}

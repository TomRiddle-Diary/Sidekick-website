import Header from "./components/Header";
import Hero from "./components/Hero";
import Service from "./components/Service";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Portfolio from "./components/Portfolio";
import Flow from "./components/Flow";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <Hero />

        {/* Service Section */}
        <Service />

        {/* About Section */}
        <About />

        {/* Pricing Section */}
        <Pricing />

        {/* Portfolio Section */}
        <Portfolio />

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

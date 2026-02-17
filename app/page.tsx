import Header from "./components/Header";
import Hero from "./components/Hero";
import Service from "./components/Service";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <Hero />

        {/* Service Section */}
        <Service />

        {/* About Section */}
        <About />

        {/* Other Sections - Placeholders */}
        <section id="pricing" className="flex h-screen items-center justify-center">
          <h2 className="text-3xl">Pricing Section</h2>
        </section>

        <section id="portfolio" className="flex h-screen items-center justify-center bg-gray-50">
          <h2 className="text-3xl">Portfolio Section</h2>
        </section>

        <section id="flow" className="flex h-screen items-center justify-center">
          <h2 className="text-3xl">Flow Section</h2>
        </section>

        <section id="faq" className="flex h-screen items-center justify-center bg-gray-50">
          <h2 className="text-3xl">FAQ Section</h2>
        </section>

        <section id="contact" className="flex h-screen items-center justify-center">
          <h2 className="text-3xl">Contact Section</h2>
        </section>
      </main>
    </>
  );
}

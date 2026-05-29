import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Collections from "../components/Collections";
import Gallery from "../components/Gallery";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <Hero />
      <About />
      <Collections />
      <Gallery />
      <WhyChooseUs />
      <Contact />
      <Footer />

      <a
        href="https://wa.me/918460797050"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#16a34a] text-xl font-bold text-white shadow-2xl shadow-green-700/30 ring-8 ring-green-500/20 transition hover:scale-105"
      >
        <span className="absolute h-full w-full animate-ping rounded-full bg-green-500/35" />
        <span className="relative">WA</span>
      </a>
    </main>
  );
}

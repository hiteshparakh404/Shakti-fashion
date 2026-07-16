import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Collections from "../components/Collections";
import Gallery from "../components/Gallery";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ContactForm from "../components/forms/ContactForm";

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
      <ContactForm />
      <Footer />

      <a
        href="https://wa.me/919824570190"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-4 right-3 z-50 grid h-12 w-12 place-items-center rounded-full bg-[#16a34a] text-lg font-bold text-white shadow-2xl shadow-green-700/30 ring-4 ring-green-500/20 transition hover:scale-105 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14 sm:text-xl sm:ring-8"
      >
        <span className="absolute h-full w-full animate-ping rounded-full bg-green-500/35" />
        <span className="relative">WA</span>
      </a>
    </main>
  );
}



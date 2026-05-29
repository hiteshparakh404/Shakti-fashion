import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="premium-gradient overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Image
            src="/logo.png"
            alt="Shiv Shakti Fashion logo"
            width={390}
            height={200}
            className="mb-8 h-auto w-64 sm:w-80"
            priority
          />
          <p className="section-label">Premium Fashion Showroom in Surat</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-black leading-none text-[#0d2f57] sm:text-6xl lg:text-7xl">
            Fashion for every celebration.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            Discover kids wear, men wear, ethnic outfits, festive looks and wedding-ready styles at Shiv Shakti Fashion.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/918460797050"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#d62828] px-7 py-4 text-center font-bold text-white shadow-xl shadow-red-700/20 transition hover:-translate-y-0.5 hover:bg-[#b91c1c]"
            >
              Shop on WhatsApp
            </a>
            <a
              href="#collections"
              className="rounded-full border border-[#1f78b8]/30 bg-white px-7 py-4 text-center font-bold text-[#0d2f57] shadow-xl shadow-blue-900/10 transition hover:-translate-y-0.5 hover:border-[#1f78b8]"
            >
              View Collections
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-[#1f78b8]/10 blur-2xl" />
          <div className="soft-card relative overflow-hidden rounded-[1.75rem] p-4">
            <Image
              src="/men-shirts.png"
              alt="Premium men shirts at Shiv Shakti Fashion"
              width={1400}
              height={1180}
              className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
            />
            <div className="absolute bottom-7 left-7 right-7 rounded-2xl bg-white/92 p-5 shadow-lg backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d62828]">
                New styles arriving
              </p>
              <p className="mt-2 text-2xl font-black text-[#0d2f57]">
                Kids, men and festive wear under one roof.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

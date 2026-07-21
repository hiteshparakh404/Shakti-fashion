"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Mail, MapPin, Phone } from "lucide-react";

const whatsappUrl = "https://wa.me/919824570190";

const contactItems = [
  {
    icon: MapPin,
    label: "Address",
    value: "Plot No. 6, Near Nijdham Ashram, Ram Nagar, Rander Road, Surat"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98245 70190"
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@shivshaktifashion.shop, hitesh@shivshaktifashion.shop"
  }
];

const heroImages = [
  {
    src: "/hero-shirts.webp",
    alt: "Men shirts collection at Shiv Shakti Fashion",
    position: "50% 50%"
  },
  {
    src: "/kids-footwear.jpg",
    alt: "Kids footwear at Shiv Shakti Fashion",
    position: "50% 50%"
  }
];

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  const showPrevious = () => {
    setActiveImage((current) => (current - 1 + heroImages.length) % heroImages.length);
  };

  const showNext = () => {
    setActiveImage((current) => (current + 1) % heroImages.length);
  };

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
          <p className="section-label">Premium Fashion &amp; Footwear Showroom in Surat</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-none text-[#0d2f57] sm:text-6xl lg:text-7xl">
            Fashion for every celebration.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            Discover kids wear, men wear, ethnic outfits, festive looks and wedding-ready styles at Shiv Shakti Fashion.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="min-h-11 rounded-full bg-[#d62828] px-7 py-4 text-center font-bold text-white shadow-xl shadow-red-700/20 transition hover:-translate-y-0.5 hover:bg-[#b91c1c]"
            >
              Shop on WhatsApp
            </a>
            <a
              href="#collections"
              className="min-h-11 rounded-full border border-[#1f78b8]/30 bg-white px-7 py-4 text-center font-bold text-[#0d2f57] shadow-xl shadow-blue-900/10 transition hover:-translate-y-0.5 hover:border-[#1f78b8]"
            >
              View Collections
            </a>
          </div>

        </div>

        <div className="relative space-y-5">
          <div className="absolute -inset-4 rounded-[2rem] bg-[#1f78b8]/10 blur-2xl" />
          <div className="relative rounded-3xl border border-blue-100 bg-white/80 p-5 shadow-xl shadow-blue-900/10 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/10">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-[#d62828]">
              Contact Information
            </p>
            <div className="divide-y divide-blue-100">
              {contactItems.map(({ icon: Icon, label, value }) => (
                <div key={label} className="group py-5 first:pt-1 last:pb-1">
                  <div className="flex min-w-0 items-center gap-4 rounded-2xl p-3 transition hover:-translate-y-1 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-900/10">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#d62828] text-white shadow-lg shadow-red-700/20 transition group-hover:scale-105">
                      <Icon size={20} strokeWidth={2.2} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-black uppercase tracking-[0.14em] text-[#0d2f57]">
                        {label}
                      </span>
                      <span className="mt-1 block break-words text-sm leading-6 text-slate-600">{value}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="soft-card relative overflow-hidden rounded-[1.75rem] p-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-white">
              {heroImages.map((image, index) => (
                <Image
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  width={1400}
                  height={1180}
                  priority={index === 0}
                  loading={index === 0 ? undefined : "lazy"}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  style={{ objectPosition: image.position }}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${index === activeImage ? "opacity-100" : "opacity-0"
                    }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous image"
              className="absolute left-7 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-[#0d2f57] shadow-lg backdrop-blur transition hover:-translate-x-0.5 hover:bg-white"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Next image"
              className="absolute right-7 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-[#0d2f57] shadow-lg backdrop-blur transition hover:translate-x-0.5 hover:bg-white"
            >
              <ChevronRight size={22} />
            </button>
            <div className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 gap-2 rounded-full bg-white/90 px-4 py-3 shadow-lg backdrop-blur">
              {heroImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`Show image ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${index === activeImage ? "w-8 bg-[#d62828]" : "w-2.5 bg-[#1f78b8]/30 hover:bg-[#1f78b8]/60"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}





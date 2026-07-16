import Image from "next/image";

const gallery = [
  { src: "/girls-dress.png", title: "Kids Wear", alt: "Girls floral dress at Shiv Shakti Fashion" },
  { src: "/boys-casual.png", title: "Boys Casual Wear", alt: "Boys casual shirts at Shiv Shakti Fashion" },
  { src: "/boys-ethnic.png", title: "Boys Ethnic Wear", alt: "Boys ethnic wear at Shiv Shakti Fashion" },
  { src: "/men-shirts.png", title: "Men Wear", alt: "Men shirts collection at Shiv Shakti Fashion" }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="section-label">Gallery</p>
            <h2 className="section-title">A glimpse of Shiv Shakti Fashion.</h2>
          </div>
          <a href="#contact" className="min-h-11 font-bold text-[#1f78b8] transition hover:text-[#d62828]">
            Visit our showroom
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item) => (
            <figure key={item.title} className="soft-card overflow-hidden rounded-3xl">
              <Image
                src={item.src}
                alt={item.alt}
                width={700}
                height={820}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-105"
              />
              <figcaption className="break-words p-5 text-xl font-black text-[#0d2f57]">{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

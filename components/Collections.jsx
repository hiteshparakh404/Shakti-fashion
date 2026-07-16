const collections = [
  {
    title: "Boys Wear",
    text: "Premium boys styles with clean finishes, smart colors and showroom-ready presentation."
  },
  {
    title: "Girls Western Wear",
    text: "Fresh western outfits for girls with comfortable fits and polished everyday style."
  },
  {
    title: "Mens Wear",
    text: "Smart men's fashion picks with refined colors, crisp details and versatile styling."
  },
  {
    title: "Boys Ethnic Wear",
    text: "Celebration-ready ethnic looks for boys with rich textures and elegant detailing."
  },
  {
    title: "Girls Ethnic Wear",
    text: "Festive girls ethnic wear with graceful patterns, color and premium presentation."
  },
  {
    title: "Kids Footwear",
    text: "Comfortable kids footwear styles for daily wear, outings and special occasions."
  }
];

export default function Collections() {
  return (
    <section id="collections" className="bg-slate-50 py-20">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="section-label">Collections</p>
          <h2 className="section-title">Curated styles for daily wear and big days.</h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((item, index) => (
            <article
              key={item.title}
              className="soft-card group flex h-full flex-col rounded-3xl p-7 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d62828] text-lg font-black text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-7 break-words text-2xl font-black text-[#0d2f57]">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


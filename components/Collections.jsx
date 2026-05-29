const collections = [
  "Kids Wear",
  "Men Wear",
  "Boys Ethnic Wear",
  "Wedding Collection",
  "Festive Wear",
  "Party Wear"
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
              key={item}
              className="soft-card group rounded-3xl p-7 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d62828] text-lg font-black text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-7 text-2xl font-black text-[#0d2f57]">{item}</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Premium picks with clean finishes, rich colors and showroom-ready presentation.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

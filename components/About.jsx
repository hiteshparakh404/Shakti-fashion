export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="section-label">About Us</p>
          <h2 className="section-title">A trusted local destination for occasion wear.</h2>
        </div>
        <div className="soft-card rounded-3xl p-7 sm:p-9">
          <p className="text-lg leading-8 text-slate-700">
            Shiv Shakti Fashion brings together everyday comfort and celebration-ready styling for families in Surat.
            From refined ethnic outfits to smart party wear, every collection is selected to feel polished, comfortable
            and easy to choose.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Fresh styles", "Family shopping", "Local service"].map((item) => (
              <div key={item} className="rounded-2xl bg-blue-50 p-4 text-center font-bold text-[#0d2f57]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

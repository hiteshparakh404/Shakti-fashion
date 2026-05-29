const reasons = [
  ["Premium Range", "A broad selection across kids, men, ethnic, festive and wedding wear."],
  ["Showroom Experience", "Clean display, easy browsing and helpful guidance for family shopping."],
  ["Surat Location", "Conveniently located near Nijdham Ashram on Rander Road."],
  ["WhatsApp Friendly", "Ask for styles, availability and directions directly on WhatsApp."]
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="premium-gradient py-20">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="section-label">Why Choose Us</p>
          <h2 className="section-title">Modern fashion shopping with a personal touch.</h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {reasons.map(([title, text]) => (
            <div key={title} className="soft-card rounded-3xl p-7">
              <h3 className="text-2xl font-black text-[#0d2f57]">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
        <div className="rounded-[2rem] bg-[#0d2f57] p-8 text-white shadow-2xl shadow-blue-950/20 sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-red-200">Contact</p>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">Visit Shiv Shakti Fashion.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-blue-50">
            Plot No. 6, Near Nijdham Ashram, Ram Nagar, Rander Road, Surat.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/919824570190"
              target="_blank"
              rel="noreferrer"
              className="min-h-11 rounded-full bg-[#d62828] px-7 py-4 text-center font-bold text-white shadow-lg shadow-red-950/20 transition hover:bg-[#b91c1c]"
            >
              WhatsApp +91 98245 70190
            </a>
            <a
              href="tel:+919824570190"
              className="min-h-11 rounded-full border border-white/30 px-7 py-4 text-center font-bold text-white transition hover:bg-white hover:text-[#0d2f57]"
            >
              Call Now
            </a>
          </div>
        </div>

        <div className="soft-card rounded-[2rem] p-8 sm:p-10">
          <p className="section-label">Showroom Details</p>
          <dl className="mt-7 space-y-6">
            <div>
              <dt className="font-black text-[#0d2f57]">Business Name</dt>
              <dd className="mt-1 text-slate-600">Shiv Shakti Fashion</dd>
            </div>
            <div>
              <dt className="font-black text-[#0d2f57]">Phone / WhatsApp</dt>
              <dd className="mt-1 text-slate-600">+91 98245 70190</dd>
            </div>
            <div>
              <dt className="font-black text-[#0d2f57]">Email</dt>
              <dd className="mt-1 break-words text-slate-600">shivshaktifashion3@gmail.com</dd>
            </div>
            <div>
              <dt className="font-black text-[#0d2f57]">Address</dt>
              <dd className="mt-1 text-slate-600">
                Plot No. 6, Near Nijdham Ashram, Ram Nagar, Rander Road, Surat.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}


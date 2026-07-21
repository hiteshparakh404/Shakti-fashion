import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-white py-8">
      <div className="section-shell grid items-center gap-5 text-center sm:grid-cols-[auto_1fr] sm:text-left">
        <Image
          src="/logo.png"
          alt="Shiv Shakti Fashion logo"
          width={170}
          height={88}
          className="mx-auto h-12 w-auto object-contain sm:mx-0"
        />
        <div className="min-w-0 text-sm leading-6 text-slate-500 sm:text-right">
          <p className="font-bold text-[#0d2f57]">Shiv Shakti Fashion, Surat.</p>
          <p>Phone: +91 98245 70190</p>
          <p className="break-words">Email: info@shivshaktifashion.shop, hitesh@shivshaktifashion.shop</p>
          <p className="break-words">Address: Plot No. 6, Near Nijdham Ashram, Ram Nagar, Rander Road, Surat.</p>
        </div>
      </div>
    </footer>
  );
}

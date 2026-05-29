import Image from "next/image";

const menuItems = [
  ["About", "#about"],
  ["Collections", "#collections"],
  ["Gallery", "#gallery"],
  ["Why Us", "#why-us"],
  ["Contact", "#contact"]
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-blue-100/80 bg-white/90 backdrop-blur-xl">
      <nav className="section-shell flex min-h-20 items-center justify-between gap-5">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Shiv Shakti Fashion logo"
            width={180}
            height={92}
            className="h-14 w-auto object-contain"
            priority
          />
        </a>

        <div className="hidden items-center gap-7 text-sm font-semibold text-slate-700 md:flex">
          {menuItems.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-[#d62828]">
              {label}
            </a>
          ))}
        </div>

        <a
          href="https://wa.me/918460797050"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[#d62828] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-700/20 transition hover:bg-[#b91c1c]"
        >
          WhatsApp
        </a>
      </nav>
    </header>
  );
}

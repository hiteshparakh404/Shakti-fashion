"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  ["About", "/#about"],
  ["Collections", "/#collections"],
  ["Gallery", "/#gallery"],
  ["Why Us", "/#why-us"],
  ["Contact", "/#contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-blue-100/80 bg-white/90 backdrop-blur-xl">
      <nav className="section-shell flex min-h-20 items-center justify-between gap-4">
        <Link href="/#home" className="flex min-w-0 items-center gap-3" onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt="Shiv Shakti Fashion logo"
            width={180}
            height={92}
            className="h-12 w-auto object-contain sm:h-14"
            priority
          />
        </Link>

        <div className="hidden items-center gap-7 text-sm font-semibold text-slate-700 md:flex">
          {menuItems.map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-[#d62828]">
              {label}
            </Link>
          ))}
          <Link
            href="/form"
            className={`transition hover:text-[#d62828] ${pathname === "/form" ? "text-[#d62828]" : ""}`}
          >
            Enquiry
          </Link>
        </div>

        <a
          href="https://wa.me/919824570190"
          target="_blank"
          rel="noreferrer"
          className="hidden min-h-11 rounded-full bg-[#d62828] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-700/20 transition hover:bg-[#b91c1c] sm:inline-flex sm:items-center"
        >
          WhatsApp
        </a>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid h-11 w-11 place-items-center rounded-full border border-blue-100 bg-white text-[#0d2f57] shadow-lg shadow-blue-900/10 transition hover:border-[#1f78b8] md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden border-t border-blue-100 bg-white/95 shadow-xl shadow-blue-950/10 backdrop-blur-xl transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="section-shell py-4">
          <div className="flex flex-col gap-2 text-base font-bold text-slate-700">
            {menuItems.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 transition hover:bg-blue-50 hover:text-[#d62828]"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/form"
              onClick={closeMenu}
              className={`rounded-2xl px-4 py-3 transition hover:bg-blue-50 hover:text-[#d62828] ${
                pathname === "/form" ? "text-[#d62828]" : ""
              }`}
            >
              Enquiry
            </Link>
            <a
              href="https://wa.me/919824570190"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="mt-2 min-h-11 rounded-full bg-[#d62828] px-5 py-3 text-center text-sm font-bold text-white shadow-lg shadow-red-700/20 transition hover:bg-[#b91c1c]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

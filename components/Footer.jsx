import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-white py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <Image
          src="/logo.png"
          alt="Shiv Shakti Fashion logo"
          width={170}
          height={88}
          className="h-12 w-auto object-contain"
        />
        <p className="text-sm text-slate-500">
          Shiv Shakti Fashion, Surat. Premium kids, men, wedding, festive and party wear.
        </p>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/claims", label: "Claims" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-6 z-50 flex items-center justify-between px-6 md:px-10 py-4 w-[95%] max-w-6xl mx-auto mt-6 bg-white/80 backdrop-blur-xl rounded-xl shadow-xl shadow-slate-900/5 transition-all duration-300">
      <Link href="/" className="flex items-center gap-2">
        <span className="text-xl font-black tracking-tighter text-navy-dark">
          BPP Insurance
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive
                  ? "text-gold border-b-2 border-gold pb-1 font-medium transition-all duration-300"
                  : "text-slate-600 hover:text-slate-900 font-medium transition-all duration-300"
              }
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <Link
        href="/contact"
        className="bg-linear-to-r from-gold to-gold-dark text-[#241a00] px-6 py-2.5 rounded-md font-semibold text-sm active:scale-95 transform transition-transform shadow-lg shadow-amber-600/20"
      >
        Get a Quote
      </Link>
    </nav>
  );
}

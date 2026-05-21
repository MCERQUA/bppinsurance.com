import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for cannot be found. Return to BPP Insurance home.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="max-w-4xl mx-auto px-8 py-32 text-center">
      <span className="inline-block text-gold text-sm tracking-[0.2em] uppercase mb-4 font-bold">
        Error 404
      </span>
      <h1 className="text-7xl md:text-9xl font-black text-navy-dark tracking-tighter leading-none mb-8">
        Page Not Found
      </h1>
      <p className="text-xl text-on-surface-variant max-w-xl mx-auto leading-relaxed mb-12">
        The page you are looking for has moved, been removed, or never existed.
        Let&apos;s get you back on track.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="bg-linear-to-r from-gold to-gold-dark text-[#241a00] px-8 py-4 rounded-md font-bold text-lg inline-block"
        >
          Return Home
        </Link>
        <Link
          href="/contact"
          className="px-8 py-4 rounded-md font-bold text-lg text-navy-dark border border-outline-variant/20 hover:bg-surface-low transition-all inline-block"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}

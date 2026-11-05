import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Get a fast, accurate insurance quote from BPP Insurance. Home, auto, life, and business coverage tailored to your needs.",
  alternates: { canonical: "/quote" },
  openGraph: {
    title: "Get a Quote | BPP Insurance",
    description:
      "Home, auto, life, and business insurance coverage tailored to your needs.",
    url: "/quote",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Quote | BPP Insurance",
    description:
      "Home, auto, life, and business insurance coverage tailored to your needs.",
  },
};

export default function QuotePage() {
  return (
    <>
      {/* Hero */}
      <header className="relative bg-navy-dark text-white pt-32 pb-48 px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-navy"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-end gap-6">
            <div className="w-full md:w-2/3">
              <span className="text-gold uppercase tracking-widest text-sm font-bold mb-4 block">
                Fast & Accurate
              </span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6">
                Get a Quote
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 font-light max-w-xl leading-relaxed">
                Tell us a bit about what you need covered and we&apos;ll get
                you a real quote &mdash; no phone call required to start.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-end">
              <div className="w-24 h-1 bg-gold mb-4"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Form */}
      <section className="max-w-7xl mx-auto px-8 -mt-24 mb-24 relative z-20">
        <div className="bg-white p-10 md:p-16 rounded-xl shadow-sm max-w-3xl">
          <h2 className="text-3xl font-bold text-navy-dark mb-10">
            Request Your Quote
          </h2>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}

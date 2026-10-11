import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about BPP Insurance — a family-owned agency providing trusted, personalized insurance since 1998.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About BPP Insurance",
    description:
      "Family-owned insurance agency since 1998.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About BPP Insurance",
    description:
      "Family-owned insurance agency since 1998.",
  },
};

const values = [
  {
    icon: "verified_user",
    title: "Integrity",
    description:
      "We operate with radical transparency. Our word is our bond, ensuring our clients always know exactly what their protection covers.",
  },
  {
    icon: "diversity_3",
    title: "Client-First Approach",
    description:
      "Our success is measured by your peace of mind. Every strategy we build starts and ends with your specific needs in focus.",
  },
  {
    icon: "location_city",
    title: "Community Commitment",
    description:
      "We aren't just in the community; we're part of it. We actively support local initiatives and organizations that make our neighborhoods stronger.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-32 overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-r from-surface to-transparent opacity-90 z-10"></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover"
            alt="Modern glass skyscraper reflecting a clear blue sky"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrPT9NrRRNzaI0UXE2b4HCeubWv2PyoGA6Ac-92yZ4yUoT8wvVQiEna03qQOMBlYs5y8m9kTlAFGE2ixxwv9DXi9SYW6AgKpgQvVIfLQq6EECXc8s7NmGJ1tA-t2atxlye2gejtamnRbu1mr7bpUjSNwoXxUJSs_UgqwK_SaDGmh7poQ2b91adVhifCi0Ut7F8G6_Rb1jNAnQ2khFBA1Sw190hiVN_HEWBrk5vmavpyVfZxE_rmoBQky1Ney71MR90iDWpRIfIXg"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-8">
          <div className="max-w-2xl">
            <span className="font-bold tracking-[0.2em] text-gold uppercase mb-4 block text-sm">
              Est. 1998
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-navy-dark tracking-tighter leading-none mb-6">
              About BPP Insurance
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed max-w-xl">
              Trusted protection since 1998. We redefine the guardian&apos;s role
              in a digital era.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-surface-low">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-navy-dark tracking-tight mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
              <p>
                Since our founding in 1998, BPP Insurance has been more than just
                a provider; we&apos;ve been a steadfast partner to families and
                businesses across the country. Our roots as a family-owned agency
                remain at the heart of everything we do.
              </p>
              <p>
                We believe that insurance is personal. It&apos;s about protecting
                the things that matter most — your home, your business, and your
                future. That&apos;s why we&apos;ve rejected the
                &ldquo;one-size-fits-all&rdquo; approach in favor of tailored,
                white-glove service.
              </p>
              <p>
                As we have grown, we&apos;ve integrated modern technology with
                our traditional values, ensuring our clients receive the most
                sophisticated coverage with a human touch that only decades of
                experience can provide.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full aspect-[4/5] object-cover"
                alt="Modern collaborative office space with natural wood accents"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYzPQWzynjwiUAFfsw27xud_NLACH3nAK8pADjPx5sitK3htM7bfPl7jljtwh6JG1f6u_5pM6jEoHTk0EVnbDFVQRSu8lUYxt1A34vf6mGmUONQhysYTWvlgwvmcakYcNnibKaxEKvrdPY77_APQSxJRn3stQOkhRSeZstxXPzqqJKPBd608AlVxhrulsFxYp0n_hi83nmU1sIjg2-k1q9Djm59Qat7MaFi0fczI1iAHOP1HvWVYLrPLIm0PxsNkcL_gBr27-mvA"
              />
              <div className="absolute inset-0 bg-navy/10 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-dark tracking-tight mb-4">
              Core Principles
            </h2>
            <div className="h-1 w-24 bg-gold mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-10 rounded-xl hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="w-16 h-16 bg-surface-container flex items-center justify-center rounded-full mb-8 group-hover:bg-gold transition-colors">
                  <span className="material-symbols-outlined text-navy text-3xl group-hover:text-white">
                    {value.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-navy-dark mb-4">
                  {value.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-8">
          <div className="bg-navy rounded-2xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight relative z-10">
              Ready to secure your future?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto relative z-10">
              Join the thousands of families who trust BPP Insurance to protect
              what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link
                href="/contact"
                className="bg-gold text-[#241a00] px-10 py-4 rounded-md font-bold text-lg hover:opacity-90 transition-opacity inline-block"
              >
                Get Your Quote
              </Link>
              <Link
                href="/contact"
                className="border border-white/30 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition-colors inline-block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

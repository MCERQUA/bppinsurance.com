import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive home, auto, life, and business insurance coverage tailored to your needs.",
};

const services = [
  {
    icon: "home",
    label: "Residential Protection",
    title: "Home Insurance",
    description:
      "Your home is more than just a structure; it's the foundation of your life. Our premium home insurance policies provide a safety net that adapts to your specific living situation, ensuring total peace of mind.",
    features: [
      "Dwelling coverage",
      "Personal property protection",
      "Liability coverage",
      "Additional living expenses",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1o8UkJaq29SstVpy1Z9wog7Jk65ncDLY51SH5Iy3tKU8z8BTsG8YnNirpkAuHq7bUEToAupeyQzvnjJCJxs7h0c3_m8jVxiIKaqOcbB1gEI9EKyyGkWK5J29SczS-9ZMbdq_ybiLWeSzh5LbD0kRyWxL6vHMaHBss_lS1JmlF3T-9z0mjmTXoyYAf1XLWHe46vF3Rq9r3TS0n8iizR-KzABMk5ZHxwDNWFS6BOsCg6jlyVtIj_vVRanRAvKQ-n0ZDMEPd1skJCg",
    imageAlt: "Luxury modern house architecture",
  },
  {
    icon: "directions_car",
    label: "Mobility Security",
    title: "Auto Insurance",
    description:
      "Experience freedom on the road without the weight of worry. Our auto policies go beyond the basics, offering sophisticated protection for you, your passengers, and your investment.",
    features: [
      "Collision & Comprehensive",
      "Liability protection",
      "Uninsured motorist coverage",
      "24/7 Roadside assistance",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBUtLHITgdh3om469rvcAJmOHB2veL4TU-AiAKJoTM4qUBUI6uEdG9F1SY1CPG1aVAth-31XtTRC_dCv2ZE4ei5kJGLNIq2R43__IYyDt4dQ37mxSx1tIZRR7svlShR668J8mQyR8q8GSQ5hFRSJwDSgYBFXaoc6v6wP91FtUrqXpnhuOE3yKgB7fCgpD5ULUcXsdQl8eOsQzvxKl9HNwgBPm1d6FwcIN_ucKIktsS884MWubtsoGqYPUrnIRhu8mTv7wWQmq2VSA",
    imageAlt: "Premium sedan driving on scenic highway",
  },
  {
    icon: "family_restroom",
    label: "Legacy Planning",
    title: "Life Insurance",
    description:
      "Secure your family's financial future with a plan as unique as your life's story. From short-term term life to permanent estate planning solutions, we help you build a lasting legacy.",
    features: [
      "Term life options",
      "Whole life policies",
      "Universal life flexibility",
      "Final expense coverage",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCim9IzKQuwF7zZ8QnnodBmWNr8UhDbvnzbxB7Oo_zneeusTLu4bXDpp3TaWj0RW87v1Z02zUNrxsokmWs0VVBXsyDusUmaaIKVkwLky15arv2kKY9SDpG6rPgCG2B4nvS-vLd-XumCj6ktN4bg_zr_sEZXjlq0c4KaEwgncnam2rnRVHlx0a2s4Zt-O6inIflJKEVnswIabUzceFBbko2jNNq2auM6NJXBew8gneyuDynr8Ab9T9CEQTBGMAmyiDuD0FkQlA2R9g",
    imageAlt: "Happy family walking through a meadow at sunset",
  },
  {
    icon: "business_center",
    label: "Enterprise Continuity",
    title: "Business Insurance",
    description:
      "Protect your enterprise from the unexpected. Our commercial risk solutions are designed for modern businesses that require agility, resilience, and comprehensive asset protection.",
    features: [
      "General liability",
      "Commercial property",
      "Workers compensation",
      "Professional liability",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC2ZBFOL2VH1c5aECf_jVGVpvqKIB9WxbXkNiJHXTWFqugjIKE7eUwl5d0f4tuV5NatDpMTsPKKovZzHNXGjXRyiEzq-nt9i_ggnN8o0RW_bcs3XzNBTtbBxdWM7uapeTNjnLwi9jWwldJHcHtfz2t5qJJ9anNO134vvkJQz52jfkM5mVxQKU9EUU66aRclDedxnaCZtqV5ZgUJVmgQ4X4ORd2p2veJTLxweeBtXWIurk7gLvXFiru7OdsQKf5ehMbwRa_uu4SX9w",
    imageAlt: "Modern minimalist corporate office interior",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 pt-32 pb-24 md:pb-32 relative overflow-hidden">
        <div className="absolute -right-20 top-0 w-1/2 h-full bg-linear-to-l from-surface-high/30 to-transparent -z-10 rounded-full blur-3xl"></div>
        <h1 className="text-6xl md:text-8xl font-black text-navy-dark tracking-tighter leading-none mb-8">
          Our Insurance <br />
          <span className="text-gold">Services</span>
        </h1>
        <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mb-12">
          Comprehensive coverage tailored to your needs. Protecting what matters
          most with editorial precision and unwavering commitment.
        </p>
        <div className="w-24 h-1.5 bg-gold rounded-full"></div>
      </section>

      {/* Services */}
      <div className="space-y-24 md:space-y-32 pb-32">
        {services.map((service, i) => {
          const imageFirst = i % 2 === 1;
          return (
            <section
              key={service.title}
              className="max-w-7xl mx-auto px-8 grid md:grid-cols-12 gap-12 items-center"
            >
              <div
                className={`md:col-span-5 ${imageFirst ? "md:order-2" : "order-2 md:order-1"}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-gold">
                    <span className="material-symbols-outlined text-3xl">
                      {service.icon}
                    </span>
                  </div>
                  <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
                    {service.label}
                  </span>
                </div>
                <h2 className="text-4xl font-extrabold text-navy-dark mb-6 tracking-tight">
                  {service.title}
                </h2>
                <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-10">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-navy-dark"
                    >
                      <span className="material-symbols-outlined text-gold text-sm">
                        check_circle
                      </span>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="bg-linear-to-r from-gold to-gold-dark text-[#241a00] px-8 py-4 rounded-md font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg inline-block"
                >
                  Request a Quote
                </Link>
              </div>
              <div
                className={`md:col-span-7 ${imageFirst ? "md:order-1" : "order-1 md:order-2"}`}
              >
                <div className="aspect-[16/10] bg-surface-container rounded-3xl overflow-hidden shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-full h-full object-cover"
                    alt={service.imageAlt}
                    src={service.image}
                  />
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="bg-navy-dark py-24 px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-8">
            Not sure what coverage you need?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Contact our expert agents for a free consultation and let us build a
            bespoke protection portfolio for your unique lifestyle.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-gold text-[#241a00] px-10 py-5 rounded-md font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">call</span>
              Book a Consultation
            </Link>
            <Link
              href="/contact"
              className="border border-white/20 text-white px-10 py-5 rounded-md font-bold text-lg hover:bg-white/5 transition-all inline-block"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

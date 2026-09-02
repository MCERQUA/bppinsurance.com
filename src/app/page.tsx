import Link from "next/link";

const services = [
  {
    icon: "home",
    title: "Home Insurance",
    description:
      "Protect your home and family with coverage that goes beyond the basics.",
  },
  {
    icon: "directions_car",
    title: "Auto Insurance",
    description:
      "Stay safe on every journey with premium roadside and collision protection.",
  },
  {
    icon: "volunteer_activism",
    title: "Life Insurance",
    description:
      "Secure your loved ones' future with flexible endowment and term plans.",
  },
  {
    icon: "business_center",
    title: "Business Insurance",
    description:
      "Tailored coverage for your business to mitigate risk and ensure growth.",
  },
];

const stats = [
  {
    icon: "award_star",
    title: "25+ Years Experience",
    description:
      "Decades of trusted insurance expertise, navigating through global market shifts with unwavering stability.",
  },
  {
    icon: "groups",
    title: "10,000+ Happy Clients",
    description:
      "Join our growing family of satisfied policyholders who value transparency and personalized care.",
  },
  {
    icon: "support_agent",
    title: "24/7 Claims Support",
    description:
      "Always here when you need us most. Our dedicated response team is active around the clock.",
  },
];

const testimonials = [
  {
    quote:
      "Switching to BPP Insurance was the best financial decision I've made this year. Their team explained complex policies in simple terms.",
    name: "James Wilson",
    role: "Small Business Owner",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDLxX_Kd-ffBI6QWMfWYaUrDqYFcBN6lGlxHG58mXF1E9U7mmap27ZIyYxglsSTmYv73b2jcUJ-Xcse1ionGv4qzQHINjqzRhgedhufJvDuD9n3VdBu3fQEU48fKY6WlZ_cSdAjS7bVxVRNpEXH_1YyxbkB7VkAliTc8jvPDbPKXc7UmpO2VGvf7temHwYjWzjDcGQCPIGzw-Z0j9_oJQ1ESFV-1lHuELL8byETGI4_msKDZIDc1UPe6UIRyu7XmMhi73pbaN_Y2Q",
  },
  {
    quote:
      "The claims process was seamless. I never thought I'd say this about insurance, but they actually care about their clients.",
    name: "Sarah Sterling",
    role: "Homeowner",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDmSy8WQs8LQAw6fi0Ym1XWueEPKR1rGfftPsRR9C5Pv2oHqdisXttMNNn5mceHV65ygRaVnqHuEmjfXBRAadalsvGXqvqgYVHyJpXJJrRX8r27569r5HAxEMxk_KGKpoxhwsIZX2YuBgrSqtfAzV5p1jXOD5ZzCarVJYTYRDB86tGXyPJlCMpaShOEl35ZhFrhtVoXJRmVzNdruVJmE0dN3OCOkZWfJLCgLrttfIVWDcXGnQnI-f4EV6I6ev7UiOEz60i-zPARw",
  },
  {
    quote:
      "Peace of mind is hard to buy, but BPP Insurance comes close. Their 24/7 support is remarkably fast and incredibly helpful.",
    name: "Michael Chen",
    role: "Fleet Manager",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCfmMSmXWxnGzUk-wQcD8YW5M1JGJ3tWHYE6QuVK-xAeYyVX6Vzew8vLuzY_kYG3q6LfuK7E4CKIIDgOcoLsnqHPNjpWiPo0sIjGHbQiq6Qcpm1Z0PFf-pnMU_EMg5lKt04sZ5UlXpqYK6RZ8KLgDYSiGDonrpfCP06p3zsUV0k51Jl4iuofQQ1OYIrasjnRHF95IolqA4Vh6gpv1fadSJ5YMs0sKvOC-c8AgIJUG0nDWZwT3Ec0ZajO0tc39O7Wb_1TfQJl83iJw",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative px-6 pt-24 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.1em] text-gold bg-surface-high rounded-full uppercase">
              Est. 1998 &bull; Professional Protection
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-navy-dark leading-[0.9] tracking-tight mb-8">
              Protecting <br />
              <span className="text-gold">What Matters</span> <br />
              Most
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
              Your trusted insurance partner for home, auto, life, and business
              coverage. We provide the modern sanctuary for your family&apos;s
              future.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-linear-to-r from-gold to-gold-dark text-[#241a00] px-8 py-4 rounded-md font-bold text-lg active:scale-95 transform transition-all hover:shadow-2xl hover:shadow-amber-600/30"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 rounded-md font-bold text-lg text-navy-dark border border-outline-variant/20 hover:bg-surface-low transition-all"
              >
                Our Services
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover"
                alt="Modern architectural house with clean lines and warm interior lighting during dusk"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAagFCZDPp7hS_0AG7AGr0aIhVP3_NEg7gWzwTfAi0Aq-7oNcIn9xGSf686FN2teNVkcpPz-JLOZwic4bPq1OniyzBdflMv7sFZLCQm7AwDSY7wTUgTtxqaOEJ0GBlSbqH21wVrbz31KuM3lNvvifLlhEQVdZ8fIwihL90KqJVyXDBtqeM1CKAGoJ39ANaev_8nwwswN5O_afXVkxqDH5A-KYuwxBZCQBMZkpmZ1tgd-8qGbjT1FXG3Vbil89v4NpWz5INvnvR_mw"
              />
              <div className="absolute inset-0 bg-navy-dark/5"></div>
            </div>
            <div className="absolute -bottom-6 -left-12 p-8 bg-white rounded-xl shadow-2xl max-w-xs hidden xl:block">
              <div className="flex items-center gap-4 mb-4">
                <span
                  className="material-symbols-outlined text-4xl text-gold"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified_user
                </span>
                <div>
                  <p className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">
                    A+ Rated
                  </p>
                  <p className="text-xl font-bold text-navy-dark">
                    Financial Security
                  </p>
                </div>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Securing over $4B in private and corporate assets.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-surface-low opacity-50 blur-3xl"></div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 bg-surface-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy-dark tracking-tight mb-6">
                Comprehensive Coverage
                <br />
                for Every Need
              </h2>
              <p className="text-lg text-on-surface-variant">
                Tailored solutions that adapt to your lifestyle. We don&apos;t
                just provide policies; we build lasting safety nets.
              </p>
            </div>
            <Link
              href="/services"
              className="text-gold font-bold flex items-center gap-2 hover:translate-x-1 transition-transform"
            >
              View All Services{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white p-10 rounded-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-lg bg-surface-container mb-8 flex items-center justify-center group-hover:bg-gold transition-colors">
                  <span className="material-symbols-outlined text-3xl text-navy-dark group-hover:text-white transition-colors">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-navy-dark mb-4">
                  {service.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed mb-8">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-sm font-bold tracking-widest uppercase text-gold hover:gap-3 transition-all"
                >
                  Learn More{" "}
                  <span className="material-symbols-outlined ml-2 text-lg">
                    chevron_right
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {stats.map((stat) => (
              <div key={stat.title} className="flex flex-col items-start">
                <div className="mb-6">
                  <span
                    className="material-symbols-outlined text-5xl text-gold"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {stat.icon}
                  </span>
                </div>
                <h4 className="text-3xl font-extrabold text-navy-dark mb-4">
                  {stat.title}
                </h4>
                <p className="text-on-surface-variant leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="bg-navy-dark rounded-3xl p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="relative z-10 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Ready to Secure Your Future?
            </h2>
            <p className="text-slate-300 text-lg">
              Speak with one of our specialized advisors today and receive a
              personalized coverage plan in under 10 minutes.
            </p>
          </div>
          <div className="relative z-10">
            <Link
              href="/contact"
              className="bg-linear-to-r from-gold to-gold-dark text-[#241a00] px-12 py-5 rounded-md font-bold text-xl active:scale-95 transform transition-all shadow-xl shadow-black/20 inline-block"
            >
              Get Started Now
            </Link>
          </div>
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-gold opacity-10 rounded-full blur-3xl"></div>
        </div>
      </section>
    </>
  );
}

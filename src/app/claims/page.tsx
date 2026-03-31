import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "File a Claim",
  description:
    "File an insurance claim online with BPP Insurance. Simple, stress-free claims process with 24/7 support.",
};

const steps = [
  {
    num: 1,
    title: "Report Your Claim",
    description:
      "Call us or submit online. Start the process instantly from any device.",
  },
  {
    num: 2,
    title: "Claim Review",
    description:
      "Our team reviews your case within 24 hours to ensure rapid response.",
  },
  {
    num: 3,
    title: "Assessment",
    description:
      "A licensed adjuster evaluates the damage with meticulous attention to detail.",
  },
  {
    num: 4,
    title: "Resolution",
    description:
      "Receive your settlement quickly through our streamlined payout system.",
  },
];

const faqs = [
  "How long does the average claim take?",
  "What documents do I need for my submission?",
  "Can I choose my own repair shop?",
  "How will I receive my settlement?",
];

export default function ClaimsPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 pt-32 mb-24">
        <div className="relative overflow-hidden rounded-3xl bg-surface-low min-h-[400px] flex items-center p-12 lg:p-24">
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Professional office setting"
              className="w-full h-full object-cover opacity-10 mix-blend-multiply"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-0Iz0_KPEWbV3DKjcBkwHR7yYrQVv0PFiQ8Ir1qO0ZaigJrU51DK1ZwYaaWdKCxmegCjt1aLw75N9njBURdUyhTDOGUJJCgYenFRORSLs3HA9fUt174MrXN974XHS0ET6KCoMpKsXBfTJ2jonnnMV2l_N8HIpDmirCG6MwiE_2PSMsKLAKfRSBkaSc_LmtAx9hXMi-zRCc7KjLBfehRIaf2u7DRsEHda_DlwFhazP2eVVB2agX2ytj_ARPA0-uvur98-4xxo2kg"
            />
          </div>
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block text-gold text-sm tracking-[0.2em] uppercase mb-4 font-bold">
              Resolution &amp; Recovery
            </span>
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter text-navy mb-6 leading-[0.9]">
              File a Claim
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-lg">
              We make the claims process simple and stress-free. Your protection
              is our priority, and our team is ready to support you through every
              step.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-navy mb-2">
            How It Works
          </h2>
          <div className="h-1 w-20 bg-gold"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group p-8 rounded-2xl bg-surface-low transition-all duration-300 hover:bg-white hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm border border-outline-variant/10 text-navy font-bold text-xl">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Emergency Sidebar */}
      <section className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row gap-16 mb-32">
        {/* Form */}
        <div className="lg:w-2/3">
          <div className="bg-white p-10 md:p-16 rounded-[2rem] shadow-sm border border-outline-variant/5">
            <h2 className="text-4xl font-extrabold tracking-tight text-navy mb-8">
              File a Claim Online
            </h2>
            <form
              name="claims"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              encType="multipart/form-data"
              className="space-y-8"
            >
              <input type="hidden" name="form-name" value="claims" />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out: <input name="bot-field" />
                </label>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Policy Number
                  </label>
                  <input
                    name="policy-number"
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant/20 focus:ring-0 focus:border-gold transition-all py-3 px-0 text-navy-dark placeholder:text-outline/40"
                    placeholder="BP-XXXX-XXXX"
                    type="text"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Claim Type
                  </label>
                  <select
                    name="claim-type"
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant/20 focus:ring-0 focus:border-gold transition-all py-3 px-0 text-navy-dark"
                  >
                    <option>Auto</option>
                    <option>Home</option>
                    <option>Life</option>
                    <option>Business</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  Date of Incident
                </label>
                <input
                  name="incident-date"
                  className="w-full bg-transparent border-0 border-b-2 border-outline-variant/20 focus:ring-0 focus:border-gold transition-all py-3 px-0 text-navy-dark"
                  type="date"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  Description of Incident
                </label>
                <textarea
                  name="description"
                  className="w-full bg-transparent border-0 border-b-2 border-outline-variant/20 focus:ring-0 focus:border-gold transition-all py-3 px-0 text-navy-dark resize-none placeholder:text-outline/40"
                  placeholder="Please provide details about what happened..."
                  rows={4}
                  required
                ></textarea>
              </div>
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  Upload Documents
                </label>
                <label className="border-2 border-dashed border-outline-variant/30 rounded-2xl p-8 flex flex-col items-center justify-center bg-surface-low transition-all hover:bg-surface-container hover:border-gold/40 group cursor-pointer">
                  <input
                    name="documents"
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="hidden"
                  />
                  <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2 group-hover:text-gold transition-colors">
                    upload_file
                  </span>
                  <p className="text-sm text-on-surface-variant">
                    Drag and drop files here or{" "}
                    <span className="text-gold font-semibold">browse</span>
                  </p>
                  <p className="text-[10px] text-outline mt-1">
                    PDF, JPG, PNG (Max 10MB)
                  </p>
                </label>
              </div>
              <button
                className="w-full md:w-auto px-12 py-4 bg-linear-to-r from-gold to-gold-dark text-[#241a00] font-bold rounded-lg shadow-xl shadow-gold/20 hover:scale-[1.02] transition-all duration-300"
                type="submit"
              >
                Submit Claim
              </button>
            </form>
          </div>
        </div>

        {/* Emergency Sidebar */}
        <div className="lg:w-1/3 space-y-8">
          <div className="bg-navy text-white p-10 rounded-[2rem] relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/5 rounded-full"></div>
            <div className="relative z-10">
              <span
                className="material-symbols-outlined text-4xl text-gold mb-6 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                emergency_share
              </span>
              <h3 className="text-2xl font-bold mb-4">
                24/7 Emergency Claims Hotline
              </h3>
              <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                Our immediate response team is available around the clock for
                urgent claims and emergency support.
              </p>
              <div className="text-3xl font-black tracking-tight mb-8">
                (555) 123-4568
              </div>
              <a
                href="tel:5551234568"
                className="w-full bg-gold text-[#241a00] py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gold/90 transition-colors"
              >
                <span className="material-symbols-outlined text-sm">call</span>
                Call Now
              </a>
            </div>
          </div>
          <div className="bg-surface-container p-8 rounded-[2rem] border border-outline-variant/10">
            <h4 className="font-bold text-navy mb-4">Need Help?</h4>
            <p className="text-sm text-on-surface-variant mb-6">
              Our claim specialists are standing by to guide you through the
              digital submission process.
            </p>
            <Link
              href="/contact"
              className="text-gold text-sm font-bold flex items-center gap-2 group"
            >
              Contact Support
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-extrabold tracking-tight text-navy leading-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-on-surface-variant">
              Common questions regarding our claims handling and timelines.
            </p>
          </div>
          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq}
                className="bg-surface-low rounded-2xl p-6 transition-all hover:bg-surface-container"
              >
                <button className="w-full flex justify-between items-center text-left">
                  <span className="font-bold text-navy">{faq}</span>
                  <span className="material-symbols-outlined text-gold">
                    add
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

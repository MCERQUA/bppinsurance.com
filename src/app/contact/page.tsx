import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with BPP Insurance. Request a quote, ask a question, or visit our Springfield office.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <header className="relative bg-navy-dark text-white pt-32 pb-48 px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-linear-to-br from-navy to-navy-dark"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-end gap-6">
            <div className="w-full md:w-2/3">
              <span className="text-gold uppercase tracking-widest text-sm font-bold mb-4 block">
                Personalized Assistance
              </span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 font-light max-w-xl leading-relaxed">
                We are here to help you find the right coverage. Experience the
                modern guardian of your future.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-end">
              <div className="w-24 h-1 bg-gold mb-4"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Form & Info */}
      <section className="max-w-7xl mx-auto px-8 -mt-24 mb-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-10 md:p-16 rounded-xl shadow-sm">
            <h2 className="text-3xl font-bold text-navy-dark mb-10">
              Send a Message
            </h2>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="space-y-8"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out: <input name="bot-field" />
                </label>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-b border-outline-variant/40 focus-within:border-b-2 focus-within:border-gold transition-all">
                  <label className="block text-xs uppercase tracking-wider text-on-surface-variant mb-1">
                    Full Name
                  </label>
                  <input
                    name="name"
                    className="w-full border-none bg-transparent px-0 py-2 focus:ring-0 text-navy-dark placeholder:text-outline-variant/50 font-medium"
                    placeholder="John Doe"
                    type="text"
                    required
                  />
                </div>
                <div className="border-b border-outline-variant/40 focus-within:border-b-2 focus-within:border-gold transition-all">
                  <label className="block text-xs uppercase tracking-wider text-on-surface-variant mb-1">
                    Email Address
                  </label>
                  <input
                    name="email"
                    className="w-full border-none bg-transparent px-0 py-2 focus:ring-0 text-navy-dark placeholder:text-outline-variant/50 font-medium"
                    placeholder="john@example.com"
                    type="email"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-b border-outline-variant/40 focus-within:border-b-2 focus-within:border-gold transition-all">
                  <label className="block text-xs uppercase tracking-wider text-on-surface-variant mb-1">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    className="w-full border-none bg-transparent px-0 py-2 focus:ring-0 text-navy-dark placeholder:text-outline-variant/50 font-medium"
                    placeholder="(555) 000-0000"
                    type="tel"
                  />
                </div>
                <div className="border-b border-outline-variant/40 focus-within:border-b-2 focus-within:border-gold transition-all">
                  <label className="block text-xs uppercase tracking-wider text-on-surface-variant mb-1">
                    Insurance Type
                  </label>
                  <select
                    name="insurance-type"
                    className="w-full border-none bg-transparent px-0 py-2 focus:ring-0 text-navy-dark font-medium appearance-none"
                  >
                    <option>Home</option>
                    <option>Auto</option>
                    <option>Life</option>
                    <option>Business</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="border-b border-outline-variant/40 focus-within:border-b-2 focus-within:border-gold transition-all">
                <label className="block text-xs uppercase tracking-wider text-on-surface-variant mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  className="w-full border-none bg-transparent px-0 py-2 focus:ring-0 text-navy-dark placeholder:text-outline-variant/50 font-medium resize-none"
                  placeholder="How can we help you today?"
                  rows={4}
                  required
                ></textarea>
              </div>
              <div className="pt-6">
                <button
                  className="bg-linear-to-r from-gold to-gold-dark text-[#241a00] px-10 py-4 rounded-xl font-bold text-sm tracking-widest uppercase hover:shadow-lg transition-all active:scale-95"
                  type="submit"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-surface-low p-10 rounded-xl">
              <h3 className="text-xl font-bold text-navy-dark mb-8">
                Our Presence
              </h3>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-gold shrink-0">
                    <span className="material-symbols-outlined">
                      location_on
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-on-surface-variant mb-2">
                      Office Address
                    </h4>
                    <p className="text-navy-dark font-medium leading-relaxed">
                      1234 Main Street, Suite 200
                      <br />
                      Springfield, IL 62701
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-gold shrink-0">
                    <span className="material-symbols-outlined">phone</span>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-on-surface-variant mb-2">
                      Phone
                    </h4>
                    <p className="text-navy-dark font-medium text-lg">
                      (555) 123-4567
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-gold shrink-0">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-on-surface-variant mb-2">
                      Email
                    </h4>
                    <p className="text-navy-dark font-medium underline underline-offset-4 decoration-gold">
                      info@bppinsurance.com
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-gold shrink-0">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-on-surface-variant mb-2">
                      Office Hours
                    </h4>
                    <div className="grid grid-cols-2 gap-x-4 text-navy-dark font-medium">
                      <span>Mon - Fri</span>
                      <span>8am - 6pm</span>
                      <span>Sat</span>
                      <span>9am - 1pm</span>
                      <span className="text-outline">Sun</span>
                      <span className="text-outline italic">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Card */}
            <div className="bg-navy p-10 rounded-xl relative overflow-hidden group">
              <div className="absolute -right-8 -bottom-8 text-[120px] text-gold/10 font-black select-none group-hover:scale-110 transition-transform duration-500">
                BPP
              </div>
              <p className="text-slate-300 italic text-lg leading-relaxed relative z-10 mb-6">
                &ldquo;Insurance isn&apos;t just about risk; it&apos;s about the
                freedom to build without fear.&rdquo;
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-10 h-10 rounded-full bg-gold"></div>
                <div>
                  <p className="text-white font-bold text-sm">
                    Marcus Sterling
                  </p>
                  <p className="text-gold text-xs uppercase tracking-widest">
                    Founder &amp; CEO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full bg-surface-low pt-24 pb-0">
        <div className="max-w-7xl mx-auto px-8 mb-12 flex items-baseline justify-between">
          <h2 className="text-4xl font-black text-navy-dark tracking-tight">
            Visit Our Springfield Office
          </h2>
          <div className="hidden md:block h-px grow mx-8 bg-outline-variant/30"></div>
          <span className="hidden md:block text-xs uppercase tracking-widest text-on-surface-variant font-bold">
            Directions &amp; Parking Available
          </span>
        </div>
        <div className="w-full h-[500px] grayscale contrast-125 hover:grayscale-0 transition-all duration-700 overflow-hidden">
          <div className="w-full h-full bg-surface-high relative flex items-center justify-center">
            <span
              className="material-symbols-outlined text-gold text-6xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              location_on
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

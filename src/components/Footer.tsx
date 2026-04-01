import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <span className="text-lg font-bold text-slate-900 block mb-6">
            BPP Insurance
          </span>
          <p className="text-sm leading-relaxed text-slate-500 mb-8 max-w-xs">
            The Modern Guardian of your future. Providing premium protection
            since 1998.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-gold hover:text-white transition-all"
            >
              <span className="material-symbols-outlined text-lg">public</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-gold hover:text-white transition-all"
            >
              <span className="material-symbols-outlined text-lg">
                rss_feed
              </span>
            </a>
            <a
              href="mailto:info@bppinsurance.com"
              className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-gold hover:text-white transition-all"
            >
              <span className="material-symbols-outlined text-lg">
                alternate_email
              </span>
            </a>
          </div>
        </div>

        <div>
          <h5 className="text-navy-dark font-bold mb-6">Quick Links</h5>
          <ul className="space-y-4">
            <li>
              <Link
                href="/about"
                className="text-slate-500 hover:text-gold underline-offset-4 hover:underline transition-all"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-slate-500 hover:text-gold underline-offset-4 hover:underline transition-all"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/claims"
                className="text-slate-500 hover:text-gold underline-offset-4 hover:underline transition-all"
              >
                Claims Support
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-slate-500 hover:text-gold underline-offset-4 hover:underline transition-all"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="text-slate-500 hover:text-gold underline-offset-4 hover:underline transition-all"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-navy-dark font-bold mb-6">Services</h5>
          <ul className="space-y-4">
            <li>
              <Link
                href="/services"
                className="text-slate-500 hover:text-gold underline-offset-4 hover:underline transition-all"
              >
                Home Insurance
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-slate-500 hover:text-gold underline-offset-4 hover:underline transition-all"
              >
                Auto Insurance
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-slate-500 hover:text-gold underline-offset-4 hover:underline transition-all"
              >
                Business Coverage
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-slate-500 hover:text-gold underline-offset-4 hover:underline transition-all"
              >
                Life Insurance
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-navy-dark font-bold mb-6">Contact Details</h5>
          <ul className="space-y-4 text-sm text-slate-500">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-gold">call</span>
              (555) 123-4567
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-gold">mail</span>
              info@bppinsurance.com
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-gold">
                location_on
              </span>
              <span>
                1234 Main Street, Suite 200
                <br />
                Springfield, IL 62701
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-400">
          &copy; {new Date().getFullYear()} BPP Insurance. The Modern Guardian
          of your future.
        </p>
        <span className="text-xs text-slate-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          Systems Operational
        </span>
      </div>
    </footer>
  );
}

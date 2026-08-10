import Image from "next/image";
import Link from "next/link";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/dr-rimsha-shahid-8a05b4352/";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/terms", label: "Terms & Policies" },
];

const services = [
  { href: "/services", label: "Medical Billing" },
  { href: "/services", label: "Denial Management" },
  { href: "/services", label: "Accounts Receivable" },
  { href: "/rcm", label: "Revenue Cycle" },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="inline-flex items-center gap-3 rounded-xl bg-white px-4 py-3">
              <Image
                src="/images/logo.png"
                alt="Dr. Rimsha Shahid Logo"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <p className="mt-4 text-sm font-semibold text-accent">MBBS</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/70">
              Medical Billing &amp; Revenue Cycle Management. Dedicated to
              maximizing your practice&apos;s revenue with accuracy and
              transparency.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {services.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Connect
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-4">
            Accepted Payments
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {/* Bank Transfer */}
            <div className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5">
              <svg className="h-4 w-4 text-white/70" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
              </svg>
              <span className="text-xs font-medium text-white/70">Bank Transfer</span>
            </div>
            {/* Visa */}
            <div className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5">
              <svg className="h-4 w-4 text-white/70" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.25 7.5c0-.966.784-1.75 1.75-1.75h12c.966 0 1.75.784 1.75 1.75v9c0 .966-.784 1.75-1.75 1.75H4a1.75 1.75 0 01-1.75-1.75v-9zM5.5 9.25a.75.75 0 000 1.5h4a.75.75 0 000-1.5h-4zm0 3a.75.75 0 000 1.5h4a.75.75 0 000-1.5h-4z" />
              </svg>
              <span className="text-xs font-medium text-white/70">Visa</span>
            </div>
            {/* MasterCard */}
            <div className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5">
              <svg className="h-4 w-4 text-white/70" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="9" cy="12" r="5" fillOpacity="0.7" />
                <circle cx="15" cy="12" r="5" fillOpacity="0.7" />
              </svg>
              <span className="text-xs font-medium text-white/70">MasterCard</span>
            </div>
            {/* Payoneer */}
            <div className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5">
              <svg className="h-4 w-4 text-white/70" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
              <span className="text-xs font-medium text-white/70">Payoneer</span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Dr. Rimsha Shahid. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

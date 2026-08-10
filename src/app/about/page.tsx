export const metadata = {
  title: "About Dr. Rimsha Shahid | MBBS Physician & Medical Billing Specialist",
  description:
    "Learn about Dr. Rimsha Shahid — MBBS physician, registered medical practitioner, and revenue cycle management specialist based in Lahore, Pakistan.",
};

import Image from "next/image";

const certifications = [
  { name: "[INSERT VERIFIED CERTIFICATION HERE]" },
  { name: "[INSERT VERIFIED CERTIFICATION HERE]" },
  { name: "[INSERT VERIFIED CERTIFICATION HERE]" },
  { name: "[INSERT VERIFIED CERTIFICATION HERE]" },
];

export default function AboutPage() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="bg-secondary py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/60">
              About
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              About Dr. Rimsha Shahid
            </h1>
            <p className="mt-4 text-lg text-white/80 sm:text-xl">
              Medical Professional. Revenue Cycle Specialist.
            </p>
          </div>
        </div>
      </section>

      {/* ─── PROFESSIONAL INTRODUCTION ─── */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
                Professional Introduction
              </h2>
              <div className="mt-2 h-[3px] w-12 rounded-full bg-primary" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-text-light">
                <p>
                  Dr. Rimsha Shahid is an MBBS-qualified physician and registered
                  medical practitioner with a strong foundation in clinical
                  medicine and a specialized focus on healthcare revenue cycle
                  management.
                </p>
                <p>
                  Based in Lahore, Pakistan, Dr. Rimsha bridges the gap between
                  clinical knowledge and medical billing &mdash; offering
                  healthcare practices a physician&apos;s understanding of medical
                  documentation paired with professional billing and revenue
                  cycle expertise.
                </p>
                <p>
                  With a commitment to accuracy, integrity, and practice-focused
                  support, Dr. Rimsha works with healthcare providers to streamline
                  billing workflows, reduce claim denials, and strengthen revenue
                  operations across practices of all sizes.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface/50 overflow-hidden">
              <Image
                src="/images/dr-rimsha.png"
                alt="Dr. Rimsha Shahid - MBBS Physician & Medical Billing Specialist"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── MEDICAL BACKGROUND ─── */}
      <section className="bg-surface/50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Medical Background
            </h2>
            <div className="mt-2 h-[3px] w-12 rounded-full bg-primary" />
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                ),
                title: "House Physician & Surgeon",
                body: "Served as a House Physician and Surgeon at Lahore General Hospital (LGH) and Punjab Institute of Neurosciences (PINS), gaining hands-on clinical experience in patient care, diagnostics, and surgical assistance.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                  </svg>
                ),
                title: "General Hospital Lahore",
                body: "Affiliated with General Hospital Lahore, one of the leading public teaching hospitals in Punjab, contributing to clinical services and patient management in a high-volume healthcare setting.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                ),
                title: "Clinical Expertise",
                body: "Extensive clinical experience in medicine and surgery provides a deep understanding of medical terminology, documentation standards, and the clinical context behind every claim — a critical advantage in medical billing.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-white p-6 sm:p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold text-text">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-light">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MEDICAL BILLING EXPERIENCE ─── */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl border border-border bg-surface/50 p-7 sm:p-8">
                <div className="space-y-6">
                  {[
                    {
                      title: "Professional Medical Billing",
                      desc: "Accurate claim preparation, submission, and follow-up backed by a physician's understanding of clinical documentation and medical codes.",
                    },
                    {
                      title: "Revenue Cycle Management",
                      desc: "End-to-end revenue cycle support — from patient registration and eligibility verification through claim management, denial resolution, and payment reconciliation.",
                    },
                    {
                      title: "Global Collaboration",
                      desc: "Working with healthcare providers across borders to deliver reliable billing solutions, leveraging digital tools and secure workflows for seamless collaboration.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-text">{item.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-text-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
                Medical Billing Experience
              </h2>
              <div className="mt-2 h-[3px] w-12 rounded-full bg-primary" />
              <p className="mt-6 text-base leading-relaxed text-text-light">
                Dr. Rimsha combines clinical expertise with professional medical
                billing knowledge to deliver revenue cycle solutions that understand
                the language of healthcare. Every claim, every denial, and every
                follow-up is handled with the precision that only a medical
                professional can bring.
              </p>
              <p className="mt-4 text-base leading-relaxed text-text-light">
                This unique combination of medicine and billing means fewer errors,
                cleaner claims, and a revenue cycle that works the way healthcare
                providers need it to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HEALTHCARE IT LEADERSHIP ─── */}
      <section className="bg-surface/50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
                Healthcare IT Leadership
              </h2>
              <div className="mt-2 h-[3px] w-12 rounded-full bg-primary" />
              <p className="mt-6 text-base leading-relaxed text-text-light">
                Beyond medical billing, Dr. Rimsha provides clinical leadership
                and domain expertise to a dedicated healthcare technology team
                delivering high-impact IT solutions worldwide.
              </p>
              <p className="mt-4 text-base leading-relaxed text-text-light">
                Under Dr. Rimsha&apos;s guidance, the team builds AI-driven
                automation tools, data science solutions, and custom healthcare
                software for providers, hospitals, and healthcare organizations.
                This collaboration bridges the gap between clinical knowledge and
                technology, ensuring every solution is built with real-world
                healthcare understanding.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-7 sm:p-8">
              <h3 className="text-lg font-bold text-text">
                Healthcare IT Services
              </h3>
              <div className="mt-6 space-y-4">
                {[
                  "AI & Machine Learning for Healthcare",
                  "Data Science & Predictive Analytics",
                  "Custom Healthcare Software Development",
                  "Revenue Cycle Automation Tools",
                  "HIPAA-Compliant Infrastructure",
                  "Process Optimization Consulting",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <p className="text-sm text-text-light">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ─── */}
      <section className="bg-surface/50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Certifications
            </h2>
            <div className="mt-2 h-[3px] w-12 rounded-full bg-primary" />
            <p className="mt-4 text-base text-text-light">
              Verified professional certifications and credentials.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-white p-6 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/8 text-primary">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                </div>
                <p className="mt-4 text-sm font-medium text-text-light">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LINKEDIN CTA ─── */}
      <section className="bg-primary py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Connect With Dr. Rimsha
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Follow Dr. Rimsha&apos;s professional journey and connect to discuss
            healthcare, medical billing, and revenue cycle management.
          </p>
          <div className="mt-8">
            <a
              href="https://www.linkedin.com/in/dr-rimsha-shahid-8a05b4352/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-secondary shadow-sm transition hover:bg-white/90"
            >
              Connect on LinkedIn
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


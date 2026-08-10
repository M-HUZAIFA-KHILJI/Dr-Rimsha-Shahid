export const metadata = {
  title: "Our Services | Medical Billing & Revenue Cycle Management",
  description:
    "Professional medical billing services including denial management, accounts receivable, insurance verification, and full revenue cycle management by Dr. Rimsha Shahid.",
};

const services = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Medical Billing",
    what: "The process of preparing, submitting, and following up on medical claims to insurance payers to receive payment for services rendered by a healthcare provider.",
    why: "Accurate billing is the foundation of a healthy revenue cycle. Errors in claim preparation lead to delays, denials, and lost revenue — directly impacting a practice's financial stability.",
    how: "Dr. Rimsha leverages clinical knowledge to ensure claims are accurately coded, properly documented, and submitted the first time — reducing rejections and accelerating reimbursement.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: "Denial Management",
    what: "A systematic approach to identifying, analyzing, and resolving claim denials — including root-cause investigation, appeal preparation, and resubmission of corrected claims.",
    why: "Unresolved denials represent revenue that has already been earned but not collected. Without a structured denial management process, practices leave significant income on the table.",
    how: "Dr. Rimsha investigates each denial to understand why it occurred, prepares compelling appeals with supporting documentation, and implements corrective measures to prevent repeat denials.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Accounts Receivable Management",
    what: "Proactive tracking and follow-up on outstanding claims and unpaid balances to ensure timely collection of all revenue owed to a practice.",
    why: "Aging accounts receivable ties up capital and creates cash flow problems. The longer claims go unpaid, the less likely they are to be collected at all.",
    how: "Dr. Rimsha implements systematic follow-up workflows, prioritizes aging claims, and works to resolve outstanding balances before they become uncollectible — keeping revenue flowing.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Insurance Verification",
    what: "Confirming a patient's insurance eligibility, coverage details, and benefits before services are rendered to ensure the practice knows what to expect from each payer.",
    why: "Treating patients without verifying their insurance coverage leads to unexpected claim rejections, patient billing disputes, and lost revenue that could have been prevented.",
    how: "Dr. Rimsha verifies patient eligibility and benefits prior to appointments, ensuring the practice has accurate information to make informed decisions about scheduling and treatment.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Revenue Cycle Management",
    what: "The complete end-to-end management of a practice's financial workflow — from patient registration and eligibility verification through charge capture, claim submission, payment posting, and denial resolution.",
    why: "A disjointed revenue cycle creates inefficiencies, increases denials, and delays payments. An integrated approach ensures no step in the process is overlooked.",
    how: "Dr. Rimsha manages the entire revenue cycle as a unified process, optimizing each stage to maximize clean claims, minimize denials, and accelerate time-to-payment.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "Healthcare Revenue Analytics",
    what: "Data-driven analysis of a practice's financial performance, including claim metrics, collection rates, denial trends, and payer performance — presented in clear, actionable reports.",
    why: "Without visibility into revenue cycle performance, practices operate blind. Analytics reveal where money is being lost and where improvements will have the greatest impact.",
    how: "Dr. Rimsha provides regular performance reports and strategic insights that help practice owners understand their numbers, identify problem areas, and make informed decisions.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="bg-secondary py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/60">
              What We Do
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Our Services
            </h1>
            <p className="mt-4 text-lg text-white/80 sm:text-xl">
              Professional Medical Billing &amp; Revenue Cycle Management
            </p>
          </div>
        </div>
      </section>

      {/* ─── SERVICES DETAIL ─── */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className={`grid items-start gap-10 lg:grid-cols-2 ${
                  idx % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      {service.icon}
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <div className={`space-y-5 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                      What It Is
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-light">
                      {service.what}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                      Why It Matters
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-light">
                      {service.why}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                      What Dr. Rimsha Does
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-light">
                      {service.how}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HEALTHCARE IT SERVICES ─── */}
      <section className="bg-surface/50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Healthcare IT Solutions
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Healthcare IT Services
            </h2>
            <div className="mt-2 h-[3px] w-12 rounded-full bg-primary" />
            <p className="mt-4 text-base leading-relaxed text-text-light">
              In collaboration with a dedicated technology team, Dr. Rimsha
              Shahid delivers high-impact healthcare IT solutions designed
              to modernize practices and drive revenue growth.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                ),
                title: "AI & Data Science Solutions",
                description:
                  "Machine learning models, predictive analytics, and data-driven insights tailored for healthcare — from patient outcome prediction to revenue optimization.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                ),
                title: "AI Automation for Healthcare",
                description:
                  "Intelligent automation of repetitive healthcare workflows — automated claim processing, eligibility checks, appointment scheduling, and patient communication systems.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                  </svg>
                ),
                title: "Custom Healthcare Software",
                description:
                  "Bespoke software solutions for healthcare providers — practice management systems, patient portals, telemedicine platforms, and EHR integrations.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                  </svg>
                ),
                title: "Revenue Cycle Analytics",
                description:
                  "Advanced dashboards and reporting systems that provide real-time visibility into claims, denials, collections, and payer performance — powered by data science.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                ),
                title: "HIPAA-Compliant Infrastructure",
                description:
                  "Secure, compliant cloud infrastructure and data storage solutions designed specifically for healthcare organizations handling sensitive patient data.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3 3v18" />
                  </svg>
                ),
                title: "Process Optimization Consulting",
                description:
                  "Strategic consulting to identify inefficiencies in healthcare operations and implement technology-driven solutions that reduce costs and improve patient outcomes.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="hover-lift rounded-2xl border border-border bg-white p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold text-text">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-secondary/20 bg-secondary/5 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3 3v18" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-text">
                  Healthcare IT Partner
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  Under Dr. Rimsha&apos;s clinical direction, our technology
                  team specializes in AI-powered automation, advanced data
                  science platforms, and purpose-built software for hospitals,
                  clinics, and healthcare organizations across the globe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA AFTER SERVICES ─── */}
      <section className="bg-surface/50 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Have questions about our medical billing services?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light">
            Connect with Dr. Rimsha on LinkedIn to start a professional
            conversation.
          </p>
          <div className="mt-8">
            <a
              href="https://www.linkedin.com/in/dr-rimsha-shahid-8a05b4352/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90"
            >
              Start a Conversation on LinkedIn
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ─── QUOTE CTA ─── */}
      <section className="bg-primary py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get a Custom Quote
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Whether you need medical billing support, revenue cycle management,
            or a custom healthcare IT solution, connect with Dr. Rimsha on
            LinkedIn to discuss your project, contract terms, and pricing.
          </p>
          <div className="mt-8">
            <a
              href="https://www.linkedin.com/in/dr-rimsha-shahid-8a05b4352/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-secondary shadow-sm transition hover:bg-white/90"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Request a Quote on LinkedIn
            </a>
          </div>
          <p className="mt-6 text-sm text-white/60">
            Projects, contracts, and medical billing quotes discussed via
            LinkedIn, Google Meet, or Zoom.
          </p>
        </div>
      </section>
    </main>
  );
}

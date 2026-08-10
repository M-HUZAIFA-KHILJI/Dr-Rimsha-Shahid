export const metadata = {
  title: "Revenue Cycle Management | Dr. Rimsha Shahid",
  description:
    "End-to-end revenue cycle management solutions by Dr. Rimsha Shahid. Streamline your practice's billing workflow, reduce denials, and maximize revenue.",
};

const workflowSteps = [
  {
    step: 1,
    title: "Practice Assessment",
    description:
      "A thorough evaluation of your current billing workflows, payer mix, denial patterns, and revenue cycle performance. This diagnostic phase identifies gaps, inefficiencies, and opportunities for immediate improvement.",
  },
  {
    step: 2,
    title: "Workflow Setup",
    description:
      "Tailored billing processes and systems are configured to align with your practice's unique requirements, payer contracts, and specialty-specific coding standards. Every workflow is designed for accuracy and efficiency.",
  },
  {
    step: 3,
    title: "Claim Management",
    description:
      "Clean, accurate claims are prepared and submitted on time with real-time tracking. Each claim is reviewed for completeness, correct coding, and compliance before submission — maximizing the chance of first-pass acceptance.",
  },
  {
    step: 4,
    title: "Denial & AR Follow-Up",
    description:
      "Swift denial resolution through root-cause analysis, appeal preparation, and resubmission. Proactive accounts receivable management ensures outstanding claims are followed up systematically and revenue keeps flowing.",
  },
  {
    step: 5,
    title: "Reporting & Optimization",
    description:
      "Regular performance reports provide visibility into key metrics — clean claim rates, denial trends, collection rates, and days in A/R. Data-driven insights drive continuous improvement of your revenue cycle.",
  },
];

const focusAreas = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "Clean Claim Rate Optimization",
    description: "Ensuring the highest percentage of claims are accepted on first submission through rigorous pre-submission review and quality checks.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Days in A/R Reduction",
    description: "Accelerating payment cycles by reducing the average number of days claims remain outstanding, improving practice cash flow.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: "Denial Rate Minimization",
    description: "Identifying and eliminating the root causes of claim denials to prevent revenue loss and reduce the cost of rework.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Net Collection Rate Improvement",
    description: "Maximizing the percentage of collected revenue against expected revenue through systematic follow-up and payer negotiations.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "Revenue Cycle Visibility",
    description: "Transparent reporting and analytics that give practice owners real-time insight into their financial performance.",
  },
];

const benefits = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Increased Revenue Capture",
    description: "More clean claims, fewer denials, and faster collections mean your practice captures the revenue it has earned.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Faster Payment Cycles",
    description: "Streamlined workflows and proactive follow-ups reduce the time between service delivery and payment received.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Reduced Administrative Burden",
    description: "Outsourcing RCM frees your staff to focus on patient care while billing experts handle the complexity of claims and collections.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "Actionable Financial Insights",
    description: "Clear, regular reports help you understand exactly where your revenue stands and where improvements are needed.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Physician-Informed Approach",
    description: "A medical professional who understands clinical context — ensuring every claim reflects the true nature of the services provided.",
  },
];

export default function RCMPage() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="bg-secondary py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/60">
              Revenue Cycle
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Revenue Cycle Management
            </h1>
            <p className="mt-4 text-lg text-white/80 sm:text-xl">
              End-to-End Revenue Cycle Solutions
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHAT IS RCM ─── */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
                What is Revenue Cycle Management?
              </h2>
              <div className="mt-2 h-[3px] w-12 rounded-full bg-primary" />
            </div>
            <div className="space-y-4 text-base leading-relaxed text-text-light">
              <p>
                Revenue Cycle Management (RCM) is the complete financial process
                that healthcare practices use to manage the administrative and
                clinical functions associated with claims processing, payment,
                and revenue generation.
              </p>
              <p>
                From the moment a patient schedules an appointment to the final
                reconciliation of payment, RCM encompasses every step that
                determines whether a practice collects the full revenue it has
                earned — accurately and on time.
              </p>
              <p>
                An effective RCM strategy reduces claim denials, accelerates
                reimbursement, minimizes accounts receivable aging, and provides
                the visibility needed to make informed financial decisions. For
                healthcare providers, this means less time chasing payments and
                more time focused on patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RCM WORKFLOW ─── */}
      <section className="bg-surface/50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Our RCM Workflow
            </h2>
            <div className="mt-2 h-[3px] w-12 rounded-full bg-primary" />
            <p className="mt-4 text-base text-text-light">
              A structured five-step process designed to optimize every stage of
              your revenue cycle.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {workflowSteps.map((step) => (
              <div
                key={step.step}
                className="flex gap-5 rounded-2xl border border-border bg-white p-6 sm:p-7"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── KEY FOCUS AREAS ─── */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Key Focus Areas
            </h2>
            <div className="mt-2 h-[3px] w-12 rounded-full bg-primary" />
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="flex gap-4 rounded-2xl border border-border bg-white p-5 sm:p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  {area.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-text">
                    {area.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-light">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ─── */}
      <section className="bg-surface/50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Benefits of Professional RCM
            </h2>
            <div className="mt-2 h-[3px] w-12 rounded-full bg-primary" />
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                  {benefit.icon}
                </div>
                <h3 className="mt-4 text-base font-bold text-text">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-primary py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Strengthen Your Revenue Cycle?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Connect with Dr. Rimsha on LinkedIn to discuss how a structured
            revenue cycle management approach can improve your practice&apos;s
            financial health.
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

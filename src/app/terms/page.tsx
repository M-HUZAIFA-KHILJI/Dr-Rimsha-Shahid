export const metadata = {
  title: "Terms & Policies | Dr. Rimsha Shahid - Medical Billing & RCM",
  description:
    "Professional terms, payment policies, and contract conditions for medical billing and revenue cycle management services.",
};

const paymentMethods = [
  {
    method: "Bank Wire Transfer (SWIFT)",
    description: "International wire transfer in USD. Available globally.",
    processingTime: "2-5 business days",
    fee: "Standard bank wire fees apply",
  },
  {
    method: "Visa / MasterCard",
    description: "Credit or debit card payment via secure payment link.",
    processingTime: "Immediate to 2 business days",
    fee: "Up to 3.99% processing fee",
  },
  {
    method: "Payoneer",
    description: "Global payment platform supporting 190+ countries. Pay via local bank transfer, ACH, or card.",
    processingTime: "1-3 business days",
    fee: "Up to 1% for local transfers",
  },
];

const policies = [
  {
    title: "Setup & Onboarding Fee",
    content:
      "A one-time setup fee of $500–$2,000 (based on practice size and complexity) is due upon signing the service agreement. This covers data migration, system integration, clearinghouse enrollment, workflow configuration, and initial training. The setup fee is non-refundable once onboarding has commenced.",
  },
  {
    title: "Monthly Service Fees",
    content:
      "Monthly billing fees are calculated as a percentage of net collected revenue (typically 5%–8%) or as an agreed flat monthly rate, as specified in the individual service agreement. Invoices are issued on the 1st of each month for the preceding month's services.",
  },
  {
    title: "Payment Due Date",
    content:
      "All invoices are due within fifteen (15) calendar days of the invoice date. Payments not received within this period are considered past due.",
  },
  {
    title: "Late Payment",
    content:
      "Accounts more than fifteen (15) days past due will accrue a late fee of 1.5% per month on the outstanding balance. Accounts more than thirty (30) days past due may result in suspension of services without further notice.",
  },
  {
    title: "Service Suspension for Non-Payment",
    content:
      "Dr. Rimsha Shahid reserves the right to immediately suspend all billing and RCM services if any invoice remains unpaid for more than thirty (30) calendar days. During suspension, no claims will be submitted, no follow-ups will be conducted, and no reports will be generated. Services will resume within two (2) business days of receiving full payment of all outstanding balances.",
  },
  {
    title: "Contract Termination",
    content:
      "Either party may terminate the service agreement with thirty (30) days' written notice. If the client terminates the agreement, all outstanding invoices become immediately due. If Dr. Rimsha terminates due to non-payment, the client has fourteen (14) calendar days from the date of written notice to cure the default. Failure to cure within this period results in automatic termination of the contract.",
  },
  {
    title: "Termination for Non-Payment",
    content:
      "If any individual or organization fails to clear Dr. Rimsha Shahid's payment within thirty (30) days of the due date, Dr. Rimsha has the right to suspend work on medical billing immediately. If payment is not received within fourteen (14) days of the suspension notice (maximum of 44 days from original due date), the contract will be terminated automatically. All outstanding amounts become immediately due and payable.",
  },
  {
    title: "Data & Records Upon Termination",
    content:
      "Upon termination, all client data and billing records will be made available in standard electronic format within thirty (30) days, provided all outstanding balances are paid in full. Dr. Rimsha reserves the right to retain copies for compliance and documentation purposes as required by law.",
  },
  {
    title: "Confidentiality",
    content:
      "All patient data, practice information, and business records are treated as strictly confidential. Dr. Rimsha adheres to HIPAA-aligned data protection practices and will never share, sell, or disclose client information to any third party without explicit written consent.",
  },
  {
    title: "Dispute Resolution",
    content:
      "Any disputes arising from the service agreement will first be addressed through good-faith negotiation. If unresolved within thirty (30) days, disputes will be submitted to binding arbitration under the laws of Pakistan. The prevailing party shall be entitled to recover reasonable attorney's fees.",
  },
];

export default function TermsPage() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="bg-secondary py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/60">
              Legal
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Terms &amp; Policies
            </h1>
            <p className="mt-4 text-lg text-white/80 sm:text-xl">
              Professional terms, payment policies, and contract conditions for
              medical billing and RCM services.
            </p>
          </div>
        </div>
      </section>

      {/* ─── LAST UPDATED ─── */}
      <section className="border-b border-border bg-surface/50 py-4">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm text-text-light">
            Last updated: August 10, 2026
          </p>
        </div>
      </section>

      {/* ─── MEETING & COMMUNICATION ─── */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Meetings &amp; Communication
            </h2>
            <div className="mt-2 h-[3px] w-12 rounded-full bg-primary" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-text-light">
              <p>
                After connecting on LinkedIn, all professional meetings,
                contract discussions, and business operations reviews are
                conducted via <strong>Google Meet</strong>, <strong>Zoom</strong>,
                or other agreed-upon video conferencing platforms.
              </p>
              <p>
                Meetings are scheduled by mutual agreement and confirmed via
                LinkedIn message or email. Regular check-ins and reporting
                reviews are conducted monthly to ensure transparency and
                alignment with practice goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PAYMENT METHODS ─── */}
      <section className="bg-surface/50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Accepted Payment Methods
            </h2>
            <div className="mt-2 h-[3px] w-12 rounded-full bg-primary" />
            <p className="mt-4 text-base text-text-light">
              We accept global payments through the following secure methods:
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paymentMethods.map((item) => (
              <div
                key={item.method}
                className="hover-lift rounded-2xl border border-border bg-white p-6"
              >
                <h3 className="text-lg font-bold text-text">{item.method}</h3>
                <p className="mt-2 text-sm text-text-light">
                  {item.description}
                </p>
                <div className="mt-4 space-y-1">
                  <p className="text-xs text-text-light">
                    <span className="font-semibold text-text">
                      Processing:
                    </span>{" "}
                    {item.processingTime}
                  </p>
                  <p className="text-xs text-text-light">
                    <span className="font-semibold text-text">Fee:</span>{" "}
                    {item.fee}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── POLICIES ─── */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Service &amp; Payment Policies
            </h2>
            <div className="mt-2 h-[3px] w-12 rounded-full bg-primary" />
          </div>
          <div className="mt-10 max-w-4xl space-y-8">
            {policies.map((policy) => (
              <div
                key={policy.title}
                className="rounded-2xl border border-border bg-surface/50 p-6 sm:p-8"
              >
                <h3 className="text-lg font-bold text-text">{policy.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-light">
                  {policy.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── UPFRONT FEE NOTE ─── */}
      <section className="bg-surface/50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-text">
              Setup Fee &amp; Pricing Structure
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-text-light">
              <p>
                Dr. Rimsha Shahid charges a <strong>one-time setup/onboarding fee</strong> ranging from $500 to $2,000, determined by practice size, claim volume, and integration complexity. This fee covers:
              </p>
              <ul className="ml-5 list-inside list-disc space-y-1">
                <li>Practice data migration and system integration</li>
                <li>Clearinghouse enrollment and EDI setup</li>
                <li>Workflow configuration and payer mapping</li>
                <li>Initial staff training and onboarding support</li>
              </ul>
              <p className="mt-4">
                Ongoing monthly fees are structured as a <strong>percentage of net collected revenue</strong> (typically 5%–8%) or an agreed flat monthly rate, as outlined in the individual service agreement.
              </p>
              <p>
                For high-volume practices (e.g., 2,000+ patients/month), custom pricing and volume-based discounts are available upon discussion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section className="bg-primary py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Questions About Our Terms?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Connect with Dr. Rimsha on LinkedIn to discuss any questions about
            our terms, policies, or pricing structure.
          </p>
          <div className="mt-8">
            <a
              href="https://www.linkedin.com/in/dr-rimsha-shahid-8a05b4352/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-secondary shadow-sm transition hover:bg-white/90"
            >
              Connect on LinkedIn
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

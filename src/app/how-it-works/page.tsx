import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";

const processSteps = [
  {
    step: 1,
    title: "Explore Our Services",
    description:
      "Review the medical billing, RCM, and healthcare IT services offered to find the solutions that best fit your practice.",
  },
  {
    step: 2,
    title: "Learn About Dr. Rimsha",
    description:
      "Understand her medical background and billing expertise to see how a physician-led approach adds value.",
  },
  {
    step: 3,
    title: "Connect on LinkedIn",
    description:
      "Connect with Dr. Rimsha on LinkedIn to start a conversation about your practice.",
  },
  {
    step: 4,
    title: "Schedule a Meeting",
    description:
      "Book a consultation via Google Meet, Zoom, or your preferred video conferencing platform to discuss your needs in detail.",
  },
  {
    step: 5,
    title: "Discuss Your Practice",
    description:
      "Share your billing challenges, goals, and practice needs in a focused discussion.",
  },
  {
    step: 6,
    title: "Explore a Potential Partnership",
    description:
      "Discuss contracts, pricing, and how Dr. Rimsha can support your revenue cycle — with flexible payment options via bank transfer, Visa/MasterCard, or Payoneer.",
  },
];

const expectations = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "Professional Communication",
    description:
      "Clear, timely responses at every stage — no jargon, no guesswork.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
    title: "Transparent Workflow",
    description:
      "Full visibility into processes, timelines, and deliverables from day one.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Regular Reporting",
    description:
      "Consistent performance updates so you always know where your revenue stands.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Dedicated Attention",
    description:
      "Personalized support focused on your specific practice and goals.",
  },
];

export default function HowItWorksPage() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="bg-secondary py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              How It Works
            </h1>
            <p className="mt-5 text-lg text-white/80">
              A Simple, Professional Process
            </p>
            <div className="mx-auto mt-6 h-[3px] w-12 rounded-full bg-white/30" />
          </div>
        </div>
      </section>

      {/* ─── PROCESS STEPS ─── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <SectionHeading
            title="Your Path to Better Revenue Cycle Management"
            subtitle="A clear, step-by-step process designed to get your practice the support it needs."
          />
          <div className="mx-auto mt-14 max-w-3xl space-y-10">
            {processSteps.map((s) => (
              <div key={s.step} className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-light">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT TO EXPECT ─── */}
      <section className="bg-surface/50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <SectionHeading
            title="What to Expect"
            subtitle="Working with Dr. Rimsha means a structured, transparent experience from start to finish."
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {expectations.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold text-text">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-text-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ PREVIEW ─── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find quick answers to the most common questions about working with Dr. Rimsha."
          />
          <div className="mx-auto mt-12 max-w-2xl text-center">
            <p className="text-sm text-text-light">
              We&apos;ve compiled answers to the questions physicians and practice
              managers ask most often — from services offered to onboarding,
              pricing, and more.
            </p>
            <div className="mt-6">
              <Button variant="outline" size="lg" href="/faq">
                View All FAQs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-primary">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Connect with Dr. Rimsha on LinkedIn to discuss how her medical
            billing expertise can support your practice&apos;s revenue cycle.
          </p>
          <div className="mt-8">
            <Button
              variant="secondary"
              size="lg"
              href="https://www.linkedin.com/in/dr-rimsha-shahid-8a05b4352/"
              target="_blank"
            >
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

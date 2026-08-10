"use client";

import { useState } from "react";
import { Button } from "@/components/Button";

const faqs = [
  {
    question: "What medical billing services do you provide?",
    answer:
      "Services include claim submission and management, denial management and appeals, accounts receivable follow-up, insurance verification, coding review, revenue cycle management, and healthcare revenue analytics. Each service is tailored to your practice's specific needs.",
  },
  {
    question: "Do you work with U.S.-based physicians?",
    answer:
      "Yes. The focus is on supporting U.S.-based healthcare practices with medical billing and revenue cycle management, including familiarity with U.S. payer systems, compliance standards, and billing regulations.",
  },
  {
    question: "Do you work with solo practices?",
    answer:
      "Absolutely. Solo practices often face unique billing challenges with limited staff and resources. Solutions are designed to fit the needs and scale of solo practitioners just as well as larger group practices.",
  },
  {
    question: "Can you work with existing billing systems?",
    answer:
      "Yes. Dr. Rimsha can integrate with your existing billing software and workflows. The goal is to enhance your current operations — not disrupt them — by identifying gaps and optimizing processes within the tools you already use.",
  },
  {
    question: "How does the onboarding process work?",
    answer:
      "Onboarding starts with a discovery conversation on LinkedIn, followed by a deeper discussion about your practice, challenges, and goals. From there, a customized workflow is designed and a clear action plan is provided before any work begins.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Pricing is based on the scope of services, practice size, and complexity of the revenue cycle. After an initial assessment, a transparent proposal is provided with clear deliverables and pricing — no hidden fees.",
  },
  {
    question: "How do you handle denied claims?",
    answer:
      "Denied claims are identified, analyzed for root cause, and appealed promptly. A proactive approach is used to not only resolve current denials but also implement preventive measures to reduce future claim rejections.",
  },
  {
    question: "Do you provide revenue-cycle reports?",
    answer:
      "Yes. Regular performance reports are provided, covering key metrics such as net collections, denial rates, days in accounts receivable, and aging summaries. These reports help you track progress and make informed decisions.",
  },
  {
    question: "How can I connect with Dr. Rimsha?",
    answer:
      "The best way to connect is through LinkedIn. You can send a connection request and message Dr. Rimsha directly to start a conversation about your practice's billing and revenue cycle needs.",
  },
];

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-text-light transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="bg-secondary py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-5 text-lg text-white/80">
              Quick answers to common questions about working with Dr. Rimsha
            </p>
            <div className="mx-auto mt-6 h-[3px] w-12 rounded-full bg-white/30" />
          </div>
        </div>
      </section>

      {/* ─── FAQ ACCORDION ─── */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-surface/50"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-text">
                    {faq.question}
                  </span>
                  <ChevronIcon isOpen={openIndex === index} />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    {faq.question ===
                    "How can I connect with Dr. Rimsha?" ? (
                      <p className="text-sm leading-relaxed text-text-light">
                        {faq.answer}{" "}
                        <a
                          href="https://www.linkedin.com/in/dr-rimsha-shahid-8a05b4352/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:text-primary/80 hover:decoration-primary/60"
                        >
                          Connect on LinkedIn
                        </a>
                      </p>
                    ) : (
                      <p className="text-sm leading-relaxed text-text-light">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STILL HAVE QUESTIONS ─── */}
      <section className="bg-surface/50">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Still Have Questions?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-light">
            Connect with Dr. Rimsha on LinkedIn to discuss your specific needs.
          </p>
          <div className="mt-8">
            <Button
              variant="linkedin"
              size="lg"
              href="https://www.linkedin.com/in/dr-rimsha-shahid-8a05b4352/"
              target="_blank"
            >
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-primary">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Strengthen Your Revenue Cycle?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Let&apos;s discuss how Dr. Rimsha&apos;s physician-led approach to
            medical billing can make a difference for your practice.
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

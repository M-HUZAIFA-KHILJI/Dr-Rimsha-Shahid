"use client";

import { useState } from "react";

const certifications = [
  {
    name: "HealthCare Hustler Training Certificate",
    issuer: "Healthcare Business & Operations Training",
    file: "/docs/cert-hipaa-1.pdf",
  },
  {
    name: "Emergency Medicine Certificate",
    issuer: "Clinical Emergency Medicine Training",
    file: "/docs/cert-emergency-medicine.pdf",
  },
  {
    name: "HIPAA Training Certification",
    issuer: "HIPAA Privacy & Security Training",
    file: "/docs/cert-hipaa-2.pdf",
  },
];

export function CertificationsSection() {
  const [openCert, setOpenCert] = useState<string | null>(null);

  return (
    <>
      <section className="py-20 sm:py-24">
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
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <button
                key={cert.name}
                onClick={() => setOpenCert(cert.file)}
                className="group flex flex-col items-center justify-center rounded-2xl border border-border bg-white p-8 text-center transition hover:border-primary/30 hover:shadow-md cursor-pointer"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                  </svg>
                </div>
                <p className="mt-5 text-base font-semibold text-text group-hover:text-primary transition">
                  {cert.name}
                </p>
                <p className="mt-2 text-sm text-text-light">{cert.issuer}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition group-hover:opacity-100">
                  View Certificate
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
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PDF LIGHTBOX MODAL ─── */}
      {openCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 sm:p-8"
          onClick={() => setOpenCert(null)}
        >
          <div
            className="relative flex h-[85vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <p className="text-sm font-semibold text-text">Certificate</p>
              <button
                onClick={() => setOpenCert(null)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-text-light transition hover:bg-surface hover:text-text"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <iframe
              src={openCert}
              className="flex-1 w-full"
              title="Certificate"
            />
          </div>
        </div>
      )}
    </>
  );
}

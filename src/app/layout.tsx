import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dr. Rimsha Shahid | Medical Billing & Revenue Cycle Management",
  description:
    "Expert medical billing and revenue cycle management services for healthcare practices. Maximize reimbursements, reduce denials, and streamline your revenue with Dr. Rimsha Shahid.",
  keywords: [
    "medical billing",
    "revenue cycle management",
    "RCM",
    "healthcare billing",
    "medical coding",
    "denial management",
    "claims processing",
  ],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Dr. Rimsha Shahid | Medical Billing & Revenue Cycle Management",
    description:
      "Expert medical billing and revenue cycle management services for healthcare practices. Maximize reimbursements and streamline your revenue.",
    type: "website",
    locale: "en_US",
    siteName: "Dr. Rimsha Shahid - Medical Billing & RCM",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Rimsha Shahid | Medical Billing & Revenue Cycle Management",
    description:
      "Expert medical billing and revenue cycle management services for healthcare practices.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

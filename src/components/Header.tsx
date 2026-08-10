"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/dr-rimsha-shahid-8a05b4352/";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/rcm", label: "RCM" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("h-5 w-5", className)}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function HamburgerIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-6 w-6", className)}
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-6 w-6", className)}
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Home">
          <Logo variant="mobile" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-primary-light text-primary"
                  : "text-text-light hover:bg-surface hover:text-text"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <Button
            variant="linkedin"
            size="md"
            href={LINKEDIN_URL}
            target="_blank"
          >
            <LinkedInIcon />
            Connect on LinkedIn
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-text hover:bg-surface lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-40 bg-black/20 backdrop-blur-sm transition-opacity lg:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu panel */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 z-50 border-b border-border bg-white shadow-lg transition-all duration-300 lg:hidden",
          mobileOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-2 opacity-0 pointer-events-none"
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 py-4" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block rounded-md px-4 py-3 text-base font-medium transition-colors",
                    pathname === link.href
                      ? "bg-primary-light text-primary"
                      : "text-text hover:bg-surface"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-border pt-4">
            <Button
              variant="linkedin"
              size="lg"
              href={LINKEDIN_URL}
              target="_blank"
              className="w-full"
            >
              <LinkedInIcon />
              Connect on LinkedIn
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

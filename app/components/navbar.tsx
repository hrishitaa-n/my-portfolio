"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false);

    window.addEventListener("hashchange", closeMenu);

    return () => {
      window.removeEventListener("hashchange", closeMenu);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 lg:px-6">
      <nav
        className={`mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-5 sm:py-3.5 ${
          isScrolled
            ? "border border-white/45 bg-white/45 shadow-[0_10px_35px_rgba(0,0,0,.05)] backdrop-blur-[30px]"
            : "border border-white/45 bg-white/45 backdrop-blur-[30px]"
        }`}
      >
        <Link
          href="/"
          className="text-sm font-bold uppercase tracking-[0.32em] text-[#1F1B18]"
        >
          HN
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-[rgba(124,92,59,0.12)] text-[#1F1B18] font-semibold"
                    : "text-[#5E5752] hover:text-[#1F1B18]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/45 bg-white/35 text-[#1F1B18] transition-colors hover:bg-white/45 md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {isMenuOpen ? (
        <div className="mx-auto mt-3 flex w-full max-w-6xl flex-col gap-2 rounded-3xl border border-white/45 bg-white/45 p-3 shadow-[0_10px_35px_rgba(0,0,0,.05)] backdrop-blur-[30px] md:hidden">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[rgba(124,92,59,0.12)] text-[#1F1B18] font-semibold"
                    : "text-slate-700/80 hover:bg-white/35 hover:text-[#1F1B18]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      ) : null}
    </header>
  );
}


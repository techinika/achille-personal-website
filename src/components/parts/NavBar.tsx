"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Speaking", href: "#speaking" },
    { name: "Teaching", href: "#teaching" },
    { name: "Ventures", href: "#ventures" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/95 backdrop-blur-md py-3 border-b border-white/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold text-[#fafafa] tracking-tight"
        >
          CSA<span className="text-[#3b82f6]">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#a1a1aa] hover:text-[#fafafa] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="https://calendar.app.google/BwtpDCv6tCtmtXgX9"
            target="_blank"
            className="bg-[#fafafa] text-[#050505] px-5 py-2.5 text-sm font-medium hover:bg-[#3b82f6] hover:text-white transition-all duration-300 rounded-md"
          >
            Book Me
          </Link>
        </div>

        <button
          className="md:hidden text-[#fafafa]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#050505]/98 border-b border-white/5 py-4">
          <div className="container mx-auto px-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#a1a1aa] hover:text-[#fafafa] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://calendar.app.google/BwtpDCv6tCtmtXgX9"
              target="_blank"
              className="bg-[#fafafa] text-[#050505] px-5 py-2.5 text-sm font-medium text-center rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

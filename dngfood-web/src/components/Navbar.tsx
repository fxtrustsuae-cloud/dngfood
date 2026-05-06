"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar
      <div
        style={{ background: "var(--color-green-dark)" }}
        className="hidden md:flex items-center justify-between site-container-wide py-2 text-white text-sm"
      >
        <div className="flex items-center gap-6">
          <a
            href="tel:+97142381006"
            className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
          >
            <FaPhoneAlt size={12} />
            <span>+971-42381006</span>
          </a>
          <a
            href="mailto:info@dngfoodstuff.com"
            className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
          >
            <FaEnvelope size={12} />
            <span>info@dngfoodstuff.com</span>
          </a>
        </div>
        <div className="flex items-center gap-4 text-xs whitespace-nowrap">
          <span className="text-yellow-300">🌍 Global Export | Import Ready</span>
          <span>|</span>
          <span>Mon – Fri: 8AM – 6PM</span>
        </div>
      </div> */}

      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
          scrolled ? "header-scrolled" : "bg-transparent"
        } ${pathname === "/" ? "" : "!bg-opacity-100"}`}
        style={
          pathname !== "/"
            ? { background: "var(--color-green-dark)" }
            : scrolled
            ? {}
            : {}
        }
      >
        <div className="w-dvw max-w-none px-4 sm:px-6 lg:mx-auto lg:w-[min(calc(100dvw-48px),1320px)] lg:px-0">
          <div className="relative flex h-20 w-full min-w-0 items-center justify-between gap-3">
            {/* Logo */}
            <Link href="/" className="group flex min-w-0 flex-1 items-center lg:flex-none">
              <span className="inline-flex h-14 w-[clamp(118px,42vw,145px)] max-w-full items-center justify-start transition-transform group-hover:scale-105 sm:h-16 sm:w-[220px]">
                <Image
                  src="/images/dng-logo-latest.webp"
                  alt="DNG FoodStuff"
                  width={1600}
                  height={965}
                  className="h-full w-full object-contain"
                />
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center justify-center gap-7 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact#quote"
                className="btn-gold text-sm py-3 px-6"
                id="nav-cta-quote"
              >
                Request Quote
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="fixed left-[calc(100dvw-60px)] top-[18px] z-[80] flex h-11 w-11 items-center justify-center rounded-lg border border-white/30 bg-green-950 p-2 text-white shadow-md lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              id="mobile-menu-toggle"
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="lg:hidden mobile-menu border-t border-green-700"
            id="mobile-menu"
          >
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-3 px-2 text-base font-medium border-b border-green-800 ${
                    pathname === link.href
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  } transition-colors`}
                >
                  {link.label}
                </Link>
              </div>
            ))}
            <Link
              href="/contact#quote"
              onClick={() => setMenuOpen(false)}
              className="btn-gold mt-4 w-full text-center block"
              id="mobile-cta-quote"
            >
              Request Quote
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}

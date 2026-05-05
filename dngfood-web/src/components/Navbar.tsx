"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Bar */}
      <div
        style={{ background: "var(--color-green-dark)" }}
        className="hidden md:flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-2 text-white text-sm w-full"
      >
        <div className="flex items-center gap-6">
          <a
            href="tel:+23400000000"
            className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
          >
            <FaPhoneAlt size={12} />
            <span>+234 000 000 0000</span>
          </a>
          <a
            href="mailto:info@dngfoodstuff.com"
            className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
          >
            <FaEnvelope size={12} />
            <span>info@dngfoodstuff.com</span>
          </a>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="text-yellow-300">🌍 Global Export | Import Ready</span>
          <span>|</span>
          <span>Mon – Fri: 8AM – 6PM</span>
        </div>
      </div>

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
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-lg flex items-center justify-center text-white font-black text-lg sm:text-xl shadow-lg group-hover:scale-105 transition-transform"
                style={{
                  background: "linear-gradient(135deg, #C9A227, #a8831a)",
                }}
              >
                DNG
              </div>
              <div>
                <div className="text-white font-black text-lg sm:text-xl leading-none tracking-wide">
                  DNG <span style={{ color: "var(--color-gold)" }}>FoodStuff</span>
                </div>
                <div className="text-[10px] sm:text-xs text-gray-300 leading-none tracking-widest font-medium mt-1">
                  AGRO COMMODITIES
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
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
              className="lg:hidden text-white p-2 rounded-lg"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mobile-menu border-t border-green-700"
              id="mobile-menu"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className={`block py-3 px-2 text-base font-medium border-b border-green-800 ${
                      pathname === link.href
                        ? "text-yellow-400"
                        : "text-white hover:text-yellow-400"
                    } transition-colors`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contact#quote"
                className="btn-gold mt-4 w-full text-center block"
                id="mobile-cta-quote"
              >
                Request Quote
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

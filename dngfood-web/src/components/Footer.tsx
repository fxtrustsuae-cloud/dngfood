"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaLeaf,
} from "react-icons/fa";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Our Products" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/contact", label: "Contact" },
];

const productLinks = [
  { href: "/products#rice", label: "Premium Rice" },
  { href: "/products#sugar", label: "Refined Sugar" },
  { href: "/products#pulses", label: "Pulses & Lentils" },
  { href: "/products#grains", label: "Grains & Cereals" },
  { href: "/products#oils", label: "Edible Oils" },
];

export default function Footer() {
  const [openSections, setOpenSections] = useState({
    quickLinks: false,
    products: false,
    contact: false,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((current) => ({
      ...current,
      [section]: !current[section],
    }));
  };

  return (
    <footer
      style={{
        background: "var(--color-green-dark)",
        borderTopColor: "rgba(255,255,255,0.08)",
        minHeight: "100px",
      }}
      className="mt-20 border-t text-white sm:mt-24 lg:mt-28"
    >
      {/* Top Footer */}
      <div className="site-container" style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
        <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-2 md:gap-x-12 md:gap-y-16 lg:grid-cols-[1.12fr_0.86fr_0.92fr_1.1fr] lg:gap-x-16">
          {/* Company Info */}
          <div className="mx-auto flex max-w-sm flex-col items-center text-center md:mx-0 md:items-start md:text-left">
            <div className="mb-7 inline-flex h-28 w-[280px] items-center">
              <Image
                src="/images/dng-logo-latest.webp"
                alt="DNG FoodStuff"
                width={1600}
                height={965}
                className="h-full w-full object-contain"
              />
            </div>
            <p className="mb-8 text-sm leading-relaxed text-gray-400">
              A premier agro trading company connecting global food commodity
              markets. Trusted supplier of rice, sugar, pulses, grains, and
              edible oils to buyers worldwide.
            </p>
            <div className="flex items-center justify-center gap-3.5 md:justify-start">
              {[
                { icon: FaFacebook, href: "#", label: "Facebook" },
                { icon: FaTwitter, href: "#", label: "Twitter" },
                { icon: FaLinkedin, href: "#", label: "LinkedIn" },
                { icon: FaInstagram, href: "#", label: "Instagram" },
                { icon: FaWhatsapp, href: "https://wa.me/23400000000", label: "WhatsApp" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-gray-400 transition-all duration-300 hover:text-white"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--color-gold)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--color-gold)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <button
              type="button"
              onClick={() => toggleSection("quickLinks")}
              className="flex w-full items-center justify-between border-b pb-4 text-left text-lg font-bold leading-none md:hidden"
              style={{ borderColor: "var(--color-gold)", color: "var(--color-gold)" }}
              aria-expanded={openSections.quickLinks}
            >
              Quick Links
              <FaChevronRight
                size={12}
                className={`transition-transform ${openSections.quickLinks ? "rotate-90" : ""}`}
              />
            </button>
            <h4
              className="mb-6 hidden border-b pb-4 text-lg font-bold leading-none md:block"
              style={{ borderColor: "var(--color-gold)", color: "var(--color-gold)" }}
            >
              Quick Links
            </h4>
            <ul className={`${openSections.quickLinks ? "block" : "hidden"} mt-5 space-y-4 md:mt-0 md:block`}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-center gap-2 text-sm leading-6 text-gray-400 transition-colors hover:text-white md:justify-start"
                  >
                    <FaChevronRight
                      size={10}
                      className="shrink-0 transition-transform group-hover:translate-x-1"
                      style={{ color: "var(--color-gold)" }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="text-center md:text-left">
            <button
              type="button"
              onClick={() => toggleSection("products")}
              className="flex w-full items-center justify-between border-b pb-4 text-left text-lg font-bold leading-none md:hidden"
              style={{ borderColor: "var(--color-gold)", color: "var(--color-gold)" }}
              aria-expanded={openSections.products}
            >
              Our Products
              <FaChevronRight
                size={12}
                className={`transition-transform ${openSections.products ? "rotate-90" : ""}`}
              />
            </button>
            <h4
              className="mb-6 hidden border-b pb-4 text-lg font-bold leading-none md:block"
              style={{ borderColor: "var(--color-gold)", color: "var(--color-gold)" }}
            >
              Our Products
            </h4>
            <ul className={`${openSections.products ? "block" : "hidden"} mt-5 space-y-4 md:mt-0 md:block`}>
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-center gap-2 text-sm leading-6 text-gray-400 transition-colors hover:text-white md:justify-start"
                  >
                    <FaLeaf
                      size={10}
                      className="shrink-0 transition-transform group-hover:translate-x-1"
                      style={{ color: "var(--color-gold)" }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <button
              type="button"
              onClick={() => toggleSection("contact")}
              className="flex w-full items-center justify-between border-b pb-4 text-left text-lg font-bold leading-none md:hidden"
              style={{ borderColor: "var(--color-gold)", color: "var(--color-gold)" }}
              aria-expanded={openSections.contact}
            >
              Contact Us
              <FaChevronRight
                size={12}
                className={`transition-transform ${openSections.contact ? "rotate-90" : ""}`}
              />
            </button>
            <h4
              className="mb-6 hidden border-b pb-4 text-lg font-bold leading-none md:block"
              style={{ borderColor: "var(--color-gold)", color: "var(--color-gold)" }}
            >
              Contact Us
            </h4>
            <ul className={`${openSections.contact ? "block" : "hidden"} mt-5 space-y-5 md:mt-0 md:block`}>
              <li className="flex items-start justify-center gap-3 md:justify-start">
                <div
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "rgba(201,162,39,0.15)" }}
                >
                  <FaMapMarkerAlt size={13} style={{ color: "var(--color-gold)" }} />
                </div>
                <span className="text-sm leading-6 text-gray-400">
                  Lagos, Nigeria<br />
                  West Africa
                </span>
              </li>
              <li className="flex items-center justify-center gap-3 md:justify-start">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "rgba(201,162,39,0.15)" }}
                >
                  <FaPhoneAlt size={13} style={{ color: "var(--color-gold)" }} />
                </div>
                <a
                  href="tel:+23400000000"
                  className="text-sm leading-6 text-gray-400 transition-colors hover:text-white"
                >
                  +234 000 000 0000
                </a>
              </li>
              <li className="flex items-center justify-center gap-3 md:justify-start">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "rgba(201,162,39,0.15)" }}
                >
                  <FaEnvelope size={13} style={{ color: "var(--color-gold)" }} />
                </div>
                <a
                  href="mailto:info@dngfoodstuff.com"
                  className="text-sm leading-6 text-gray-400 transition-colors hover:text-white"
                >
                  info@dngfoodstuff.com
                </a>
              </li>
              <li className="flex items-center justify-center gap-3 md:justify-start">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "rgba(201,162,39,0.15)" }}
                >
                  <FaWhatsapp size={13} style={{ color: "var(--color-gold)" }} />
                </div>
                <a
                  href="https://wa.me/23400000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-6 text-gray-400 transition-colors hover:text-white"
                >
                  WhatsApp Direct Chat
                </a>
              </li>
              <li className="hidden" style={{ marginTop: "1rem" }}>
                <div className="flex w-full items-center gap-3 rounded-xl border border-green-800 bg-green-900/50 p-4 text-left sm:gap-4 sm:p-5">
                  <div className="qr-placeholder flex-shrink-0" />
                  <div>
                    <div className="text-xs text-green-400 font-bold tracking-widest uppercase mb-1">Authenticity verified</div>
                    <div className="text-sm font-semibold text-white">Packed by DNG FoodStuff UAE</div>
                    <div className="text-xs text-gray-400 mt-1">Batch Code: DNG-2026-XQ9</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="w-full border-t py-6"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="site-container flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <p className="text-sm leading-6 text-gray-500">
            © {new Date().getFullYear()} DNG FoodStuff. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 sm:justify-end">
            <a href="#" className="text-sm leading-6 text-gray-500 transition-colors hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="text-sm leading-6 text-gray-500 transition-colors hover:text-gray-300">
              Terms of Service
            </a>
            <Link href="/contact" className="text-sm leading-6 text-gray-500 transition-colors hover:text-gray-300">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

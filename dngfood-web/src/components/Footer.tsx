"use client";
import Link from "next/link";
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
  return (
    <footer style={{ background: "var(--color-green-dark)" }} className="text-white">
      {/* Top Footer */}
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-black text-xl shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #C9A227, #a8831a)",
                }}
              >
                DNG
              </div>
              <div>
                <div className="text-white font-black text-xl leading-none">
                  DNG <span style={{ color: "var(--color-gold)" }}>FoodStuff</span>
                </div>
                <div className="text-xs text-gray-400 mt-1 tracking-widest">
                  GLOBAL TRADE. TRUSTED QUALITY.
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A premier agro trading company connecting global food commodity
              markets. Trusted supplier of rice, sugar, pulses, grains, and
              edible oils to buyers worldwide.
            </p>
            <div className="bg-green-900/50 p-3 sm:p-4 rounded-xl border border-green-800 mb-6 flex items-center gap-3 sm:gap-4">
              <div className="qr-placeholder flex-shrink-0" />
              <div>
                <div className="text-xs text-green-400 font-bold tracking-widest uppercase mb-1">Authenticity verified</div>
                <div className="text-sm font-semibold text-white">Packed by DNG FoodStuff UAE</div>
                <div className="text-xs text-gray-400 mt-1">Batch Code: DNG-2026-XQ9</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
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
                  className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
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
          <div>
            <h4
              className="font-bold text-lg mb-6 pb-3 border-b"
              style={{ borderColor: "var(--color-gold)", color: "var(--color-gold)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors group"
                  >
                    <FaChevronRight
                      size={10}
                      className="group-hover:translate-x-1 transition-transform"
                      style={{ color: "var(--color-gold)" }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4
              className="font-bold text-lg mb-6 pb-3 border-b"
              style={{ borderColor: "var(--color-gold)", color: "var(--color-gold)" }}
            >
              Our Products
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors group"
                  >
                    <FaLeaf
                      size={10}
                      className="group-hover:translate-x-1 transition-transform"
                      style={{ color: "var(--color-gold)" }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="font-bold text-lg mb-6 pb-3 border-b"
              style={{ borderColor: "var(--color-gold)", color: "var(--color-gold)" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(201,162,39,0.15)" }}
                >
                  <FaMapMarkerAlt size={13} style={{ color: "var(--color-gold)" }} />
                </div>
                <span className="text-gray-400 text-sm">
                  Lagos, Nigeria<br />
                  West Africa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(201,162,39,0.15)" }}
                >
                  <FaPhoneAlt size={13} style={{ color: "var(--color-gold)" }} />
                </div>
                <a
                  href="tel:+23400000000"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  +234 000 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(201,162,39,0.15)" }}
                >
                  <FaEnvelope size={13} style={{ color: "var(--color-gold)" }} />
                </div>
                <a
                  href="mailto:info@dngfoodstuff.com"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  info@dngfoodstuff.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(201,162,39,0.15)" }}
                >
                  <FaWhatsapp size={13} style={{ color: "var(--color-gold)" }} />
                </div>
                <a
                  href="https://wa.me/23400000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  WhatsApp Direct Chat
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t py-6 w-full"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} DNG FoodStuff. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Terms of Service
            </a>
            <Link href="/contact" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

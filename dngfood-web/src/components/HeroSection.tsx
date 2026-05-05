"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaShieldAlt, FaGlobeAfrica, FaTruck } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero_bg.png')" }}
      >
        <div className="watermark-overlay opacity-30 text-4xl" style={{ bottom: '40px', right: '40px' }} />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Decorative circles */}
      <div
        className="absolute top-32 right-16 w-64 h-64 rounded-full opacity-10 hidden lg:block"
        style={{ border: "2px solid var(--color-gold)" }}
      />
      <div
        className="absolute bottom-24 left-8 w-40 h-40 rounded-full opacity-10 hidden lg:block"
        style={{ border: "2px solid var(--color-gold)" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 pt-24 sm:pt-32 pb-10 sm:pb-16 flex-grow flex items-center">
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-6"
            style={{
              background: "rgba(201,162,39,0.15)",
              border: "1px solid rgba(201,162,39,0.4)",
              color: "var(--color-gold)",
            }}
          >
            🌍 Trusted Global Agro Commodities Trader
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-3xl sm:text-4xl lg:text-7xl font-black text-white leading-tight mb-4 sm:mb-6"
          >
            Premium{" "}
            <span style={{ color: "var(--color-gold)" }}>Agro</span>
            <br />
            Commodities
            <br />
            <span className="text-xl sm:text-3xl lg:text-6xl font-bold text-gray-200">
              Sourced. Traded. Delivered.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed mb-8 sm:mb-10"
          >
            DNG FoodStuff connects global markets with premium food commodities
            — rice, sugar, pulses, grains, and edible oils. Your trusted partner
            for import & export excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 mb-12 sm:mb-16"
          >
            <Link href="/products" className="btn-gold text-center" id="hero-view-products">
              View Our Products <FaArrowRight className="inline ml-2" size={14} />
            </Link>
            <Link href="/contact#quote" className="btn-outline-white text-center" id="hero-request-quote">
              Request a Quote
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6"
          >
            {[
              { icon: FaShieldAlt, text: "Quality Certified" },
              { icon: FaGlobeAfrica, text: "20+ Countries Served" },
              { icon: FaTruck, text: "Reliable Delivery" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 text-gray-300 text-sm"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(201,162,39,0.2)" }}
                >
                  <Icon size={14} style={{ color: "var(--color-gold)" }} />
                </div>
                {text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.75 }}
        className="relative z-20 w-full mt-8"
      >
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div
            className="rounded-t-2xl overflow-hidden"
            style={{ background: "rgba(201,162,39,0.9)", backdropFilter: "blur(10px)" }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center p-4">
              {[
                { value: "10+", label: "Years of Excellence" },
                { value: "20+", label: "Countries Served" },
                { value: "500+", label: "Global Clients" },
                { value: "50K+", label: "Tons Traded Annually" },
              ].map((stat) => (
                <div key={stat.label} className="py-4 px-2 bg-[#c09923] rounded-lg shadow-sm">
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-yellow-100 text-xs sm:text-sm font-semibold tracking-wide uppercase leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

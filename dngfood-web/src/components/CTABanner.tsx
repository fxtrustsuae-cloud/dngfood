"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaWhatsapp, FaDownload } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function CTABanner() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(135deg, var(--color-green-dark) 0%, var(--color-green) 100%)" }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: "var(--color-gold)", transform: "translate(30%, -30%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10"
        style={{ background: "var(--color-gold)", transform: "translate(-30%, 30%)" }}
      />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--color-gold)" }}
          >
            Start Trading Today
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Ready to Source Premium
            <br />
            <span style={{ color: "var(--color-gold)" }}>Agro Commodities?</span>
          </h2>
          <p className="text-green-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Join 500+ global businesses that trust DNG FoodStuff for their commodity supply needs. Get a custom quote in 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact#quote"
              className="btn-gold"
              id="cta-banner-quote"
            >
              Request a Quote <FaArrowRight className="inline ml-2" size={13} />
            </Link>
            <a
              href="https://wa.me/23400000000?text=Hello%20DNG%20FoodStuff!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white flex items-center justify-center gap-2"
              id="cta-banner-whatsapp"
            >
              <FaWhatsapp size={18} />
              WhatsApp Us
            </a>
            <a
              href="/brochure.pdf"
              download
              className="flex items-center justify-center gap-2 text-green-200 hover:text-white border border-green-400 hover:border-white px-8 py-3 rounded font-semibold text-sm transition-all"
              id="cta-banner-brochure"
            >
              <FaDownload size={14} />
              Download Brochure
            </a>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-10 border-t border-green-700"
        >
          <p className="text-green-200 text-sm mb-6 font-medium">Certifications & Compliance</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["NAFDAC Approved", "ISO 22000", "HACCP Certified", "Halal Certified", "Global G.A.P"].map((cert) => (
              <div key={cert} className="cert-badge text-xs" style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(201,162,39,0.5)", color: "var(--color-gold)" }}>
                ✓ {cert}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

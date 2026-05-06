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
      className="relative section-padding overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--color-green-dark) 0%, var(--color-green) 50%, var(--color-green-light) 100%)",
      }}
    >
      <div className="site-container relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex w-full max-w-3xl flex-col items-center text-center"
        >
          <p
            className="w-full text-center text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--color-gold)" }}
          >
            Start Trading Today
          </p>
          <h2 className="w-full text-center text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Ready to Source Premium
            <br />
            <span style={{ color: "var(--color-gold)" }}>Agro Commodities?</span>
          </h2>
          <p className="text-green-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Join 500+ global businesses that trust DNG FoodStuff for their commodity supply needs. Get a custom quote in 24 hours.
          </p>

          <div
            className="grid w-full max-w-xl grid-cols-1 gap-4 sm:grid-cols-3"
            style={{ marginTop: "2rem" }}
          >
            <Link
              href="/contact#quote"
              className="btn-gold inline-flex min-h-[34px] w-full items-center justify-center gap-1.5 !rounded-full !px-4 !py-1.5 !text-xs !leading-none"
              id="cta-banner-quote"
            >
              <span className="inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center">
                <FaArrowRight size={11} />
              </span>
              <span className="inline-flex items-center justify-center leading-none">Request a Quote</span>
            </Link>
            <a
              href="https://wa.me/971568441815?text=Hello%20DNG%20FoodStuff!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white flex min-h-[34px] w-full items-center justify-center gap-1.5 !rounded-full !px-4 !py-1.5 !text-xs !leading-none"
              id="cta-banner-whatsapp"
            >
              <span className="inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center">
                <FaWhatsapp size={11} />
              </span>
              <span className="inline-flex items-center justify-center leading-none">WhatsApp Us</span>
            </a>
            <a
              href="/brochure.pdf"
              download
              className="flex min-h-[34px] w-full items-center justify-center gap-1.5 rounded-full border border-green-400 px-4 py-1.5 text-xs font-semibold leading-none text-green-200 transition-all hover:border-white hover:text-white"
              id="cta-banner-brochure"
            >
              <span className="inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center">
                <FaDownload size={11} />
              </span>
              <span className="inline-flex items-center justify-center leading-none">Download Brochure</span>
            </a>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="w-full max-w-5xl border-t border-green-700 pt-8 text-center"
          style={{ marginTop: "3rem" }}
        >
          <p className="text-sm font-medium text-green-200" style={{ marginBottom: "1rem", marginTop: "1rem"   }}>
            Certifications & Compliance
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
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

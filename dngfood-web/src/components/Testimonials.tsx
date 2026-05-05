"use client";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    name: "Ahmed Al-Rashidi",
    title: "CEO, Gulf Foods Distribution",
    country: "🇦🇪 UAE",
    text: "DNG FoodStuff has been our trusted supplier for over 5 years. Their rice quality is consistently excellent, and delivery is always on schedule. Highly recommended for any serious importer.",
    rating: 5,
  },
  {
    name: "Chioma Okonkwo",
    title: "Procurement Manager, SaraFoods Ltd",
    country: "🇳🇬 Nigeria",
    text: "Exceptional service and competitive pricing. The team at DNG FoodStuff truly understands the commodity market. We've scaled our operations significantly thanks to their reliable supply.",
    rating: 5,
  },
  {
    name: "James Mwangi",
    title: "Managing Director, East Africa Traders",
    country: "🇰🇪 Kenya",
    text: "From documentation to delivery, DNG FoodStuff handles everything professionally. Their edible oils and pulses are top quality. Our go-to partner for all commodity sourcing.",
    rating: 5,
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="site-container section-stack">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--color-gold)" }}>
            What Clients Say
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black" style={{ color: "var(--color-green-dark)" }}>
            Trusted by <span style={{ color: "var(--color-gold)" }}>Global Buyers</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="testimonial-card"
            >
              <FaQuoteLeft
                className="mb-4"
                size={28}
                style={{ color: "var(--color-gold)", opacity: 0.6 }}
              />
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic flex-1">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-bold text-sm" style={{ color: "var(--color-green-dark)" }}>
                    {t.name}
                  </div>
                  <div className="text-gray-500 text-xs mt-1">{t.title}</div>
                  <div className="text-xs mt-1">{t.country}</div>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <FaStar key={j} size={12} style={{ color: "var(--color-gold)" }} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

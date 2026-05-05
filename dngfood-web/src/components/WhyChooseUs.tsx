"use client";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaHandshake,
  FaLeaf,
  FaGlobeAfrica,
  FaTruck,
  FaCertificate,
  FaChartLine,
  FaHeadset,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const features = [
  {
    icon: FaShieldAlt,
    title: "Quality Assurance",
    desc: "Every shipment undergoes rigorous quality testing to meet international food safety standards.",
  },
  {
    icon: FaGlobeAfrica,
    title: "Global Sourcing Network",
    desc: "Direct access to verified producers across Africa, Asia, South America, and beyond.",
  },
  {
    icon: FaTruck,
    title: "Reliable Logistics",
    desc: "End-to-end supply chain management with on-time delivery — every time.",
  },
  {
    icon: FaCertificate,
    title: "Certified Standards",
    desc: "Compliant with NAFDAC, ISO, HACCP, and Halal certifications for global acceptance.",
  },
  {
    icon: FaHandshake,
    title: "Trusted Partnerships",
    desc: "Long-term relationships with 500+ buyers, distributors, and food manufacturers globally.",
  },
  {
    icon: FaLeaf,
    title: "Sustainable Sourcing",
    desc: "We prioritize eco-conscious and ethical farming practices in all our supply chains.",
  },
  {
    icon: FaChartLine,
    title: "Competitive Pricing",
    desc: "Best-in-market prices with flexible payment terms and volume discounts.",
  },
  {
    icon: FaHeadset,
    title: "24/7 Support",
    desc: "Dedicated account managers and round-the-clock customer support for every client.",
  },
];

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="section-padding bg-section-light">
      <div className="site-container section-stack">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--color-gold)" }}>
            Our Advantage
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4" style={{ color: "var(--color-green-dark)" }}>
            Why Choose <span style={{ color: "var(--color-gold)" }}>DNG FoodStuff?</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            We go beyond just trading commodities — we build long-term partnerships built on trust, quality, and value.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="feature-card group bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              style={{ border: "1px solid rgba(11,93,59,0.08)" }}
            >
              <div className="feature-icon-box mb-5">
                <feature.icon />
              </div>
              <h3 className="font-bold text-lg mb-3" style={{ color: "var(--color-green-dark)" }}>
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

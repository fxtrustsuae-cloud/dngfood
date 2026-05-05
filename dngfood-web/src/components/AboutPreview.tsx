"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const strengths = [
  "Over a decade of agro commodity trading experience",
  "Direct farmer and mill sourcing networks",
  "Compliance with international food safety standards",
  "Dedicated export/import logistics support",
];

export default function AboutPreview() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="section-padding" style={{ background: "var(--color-off-white)" }}>
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative max-w-2xl lg:max-w-none mx-auto lg:mx-0 w-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/about_warehouse.png"
                alt="DNG FoodStuff Warehouse Operations"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(11,93,59,0.4), transparent)" }} />
              <div className="watermark-overlay opacity-20 text-3xl" style={{ bottom: '20px', right: '20px' }} />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 hidden sm:block"
              style={{ border: "2px solid var(--color-gold)" }}
            >
              <div className="text-3xl font-black" style={{ color: "var(--color-green)" }}>10+</div>
              <div className="text-sm font-medium text-gray-600 mt-1">Years of<br />Excellence</div>
            </div>

            {/* Decorative element */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl opacity-20 hidden sm:block"
              style={{ background: "var(--color-gold)" }}
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="content-readable"
          >
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--color-gold)" }}>
              Who We Are
            </p>
            <h2 className="text-3xl sm:text-4xl font-black mb-6" style={{ color: "var(--color-green-dark)" }}>
              Africa&apos;s Premier Agro<br />
              <span style={{ color: "var(--color-gold)" }}>Commodity Trader</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              DNG FoodStuff is a leading import and export company specializing in
              high-quality food commodities. Founded with the vision of bridging the
              gap between producers and global markets, we have built a reputation
              for reliability, quality, and excellence.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We work directly with verified farmers, processing mills, and
              certified exporters across Africa, Asia, and South America to ensure
              the finest quality at competitive prices.
            </p>

            {/* Strengths */}
            <ul className="grid gap-3 mb-10">
              {strengths.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3 text-gray-700 text-sm"
                >
                  <FaCheckCircle
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "var(--color-green)" }}
                    size={16}
                  />
                  {item}
                </motion.li>
              ))}
            </ul>

            <Link href="/about" className="btn-primary" id="about-learn-more">
              Learn More About Us <FaArrowRight className="inline ml-2" size={13} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

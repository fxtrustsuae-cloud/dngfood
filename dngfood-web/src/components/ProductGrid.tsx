"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const categories = [
  {
    id: "rice",
    title: "Premium Rice",
    description: "Long grain, parboiled, jasmine, basmati — top varieties sourced from Asia and West Africa.",
    image: "/images/product_rice.png",
    origin: "🇮🇳 India · 🇹🇭 Thailand · 🇳🇬 Nigeria",
    tag: "Best Seller",
  },
  {
    id: "sugar",
    title: "Refined Sugar",
    description: "ICUMSA 45 & 150 white sugar. Food-grade quality for food manufacturers and distributors.",
    image: "/images/product_sugar.png",
    origin: "🇧🇷 Brazil · 🇹🇭 Thailand",
    tag: "High Demand",
  },
  {
    id: "pulses",
    title: "Pulses & Lentils",
    description: "Red lentils, chickpeas, green mung beans, black-eyed peas — rich in protein.",
    image: "/images/product_pulses.png",
    origin: "🇮🇳 India · 🇨🇦 Canada · 🇦🇺 Australia",
    tag: "Nutritious",
  },
  {
    id: "grains",
    title: "Grains & Cereals",
    description: "Wheat, maize, sorghum, and millet — quality grains for food & feed industries.",
    image: "/images/product_grains.png",
    origin: "🇺🇸 USA · 🇦🇷 Argentina · 🇺🇦 Ukraine",
    tag: "Multi-Use",
  },
  {
    id: "oils",
    title: "Edible Oils",
    description: "Palm oil, sunflower oil, soybean oil — refined and crude grades available.",
    image: "/images/product_oil.png",
    origin: "🇲🇾 Malaysia · 🇧🇷 Brazil · 🇷🇺 Russia",
    tag: "Premium Grade",
  },
];

export default function ProductGrid() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="site-container section-stack">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--color-gold)" }}>
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4" style={{ color: "var(--color-green-dark)" }}>
            Our Product <span style={{ color: "var(--color-gold)" }}>Categories</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            From farm to port, we supply the world&apos;s most sought-after food commodities with unmatched quality and reliability.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="product-card group"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="premium-image-overlay" />
                <div className="watermark-overlay" />
                {/* Overlay */}
                <div className="product-overlay absolute inset-0 flex items-end p-4">
                  <div className="text-white text-xs">{cat.origin}</div>
                </div>
                {/* Tag */}
                <div
                  className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ background: "var(--color-gold)" }}
                >
                  {cat.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3
                  className="text-xl font-bold mb-2 group-hover:text-green-700 transition-colors"
                  style={{ color: "var(--color-green-dark)" }}
                >
                  {cat.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                  {cat.description}
                </p>
                <div className="flex items-center justify-between gap-4 pt-2">
                  <div className="flag-badge text-xs">{cat.origin.split("·")[0].trim()}</div>
                  <Link
                    href={`/products#${cat.id}`}
                    className="flex items-center gap-1 text-sm font-semibold transition-colors"
                    style={{ color: "var(--color-green)" }}
                    id={`product-grid-${cat.id}`}
                  >
                    View Details <FaArrowRight size={11} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="rounded-2xl flex h-full min-h-[360px] flex-col items-center justify-center p-8 lg:p-10 text-center bg-green-gradient text-white"
          >
            <div className="text-4xl mb-4">🌾</div>
            <h3 className="text-2xl font-bold mb-3">Custom Order?</h3>
            <p className="text-green-100 text-sm mb-6 leading-relaxed">
              Don&apos;t see what you need? We source and supply custom commodity requirements.
            </p>
            <Link href="/contact" className="btn-gold text-sm" id="product-grid-custom">
              Get In Touch
            </Link>
          </motion.div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <Link href="/products" className="btn-primary" id="product-grid-view-all">
            View All Products <FaArrowRight className="inline ml-2" size={13} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

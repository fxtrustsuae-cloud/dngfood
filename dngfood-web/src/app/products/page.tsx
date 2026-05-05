import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaDownload, FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Products | DNG FoodStuff",
  description: "Explore our premium agro commodities: Rice, Sugar, Pulses, Grains, and Edible Oils sourced from top global producers.",
};

const products = [
  {
    id: "rice",
    title: "Premium Rice",
    image: "/images/product_rice.png",
    desc: "We supply a wide variety of high-quality rice sourced from the best paddies globally. Suitable for various culinary needs and food manufacturing.",
    origin: "India, Thailand, Vietnam, Pakistan, Nigeria",
    packaging: "25kg, 50kg PP Bags, Bulk in Containers",
    varieties: ["Long Grain White Rice", "Parboiled Rice", "Basmati Rice", "Jasmine Rice", "Broken Rice (5%, 25%, 100%)"],
  },
  {
    id: "sugar",
    title: "Refined Sugar",
    image: "/images/product_sugar.png",
    desc: "Premium quality refined white sugar suitable for human consumption and industrial use in food and beverage manufacturing.",
    origin: "Brazil, Thailand, India",
    packaging: "50kg PP Bags with inner poly lining",
    varieties: ["ICUMSA 45 (Highly Refined White Sugar)", "ICUMSA 150 (White Crystal Sugar)", "Raw Brown Sugar (VHP)"],
  },
  {
    id: "pulses",
    title: "Pulses & Lentils",
    image: "/images/product_pulses.png",
    desc: "A rich selection of nutrient-dense pulses and lentils, cleaned and sorted using advanced color-sorting technology.",
    origin: "India, Canada, Australia, Myanmar, East Africa",
    packaging: "25kg, 50kg PP Bags",
    varieties: ["Red Lentils (Split/Whole)", "Green Mung Beans", "Yellow Peas", "Chickpeas (Kabuli/Desi)", "Black-Eyed Peas"],
  },
  {
    id: "grains",
    title: "Grains & Cereals",
    image: "/images/product_grains.png",
    desc: "High-grade grains essential for human consumption, animal feed, and industrial processing.",
    origin: "USA, Argentina, Ukraine, Russia, Brazil",
    packaging: "Bulk in vessels, 50kg bags in containers",
    varieties: ["Milling Wheat", "Yellow Corn/Maize (Animal Feed & Human Consumption)", "Sorghum", "Barley"],
  },
  {
    id: "oils",
    title: "Edible Oils",
    image: "/images/product_oil.png",
    desc: "Premium refined and crude edible oils extracted from high-quality oilseeds, perfect for cooking and industrial applications.",
    origin: "Malaysia, Indonesia, Ukraine, Brazil",
    packaging: "1L, 2L, 5L PET Bottles, 20L Jerry Cans, Flexitanks",
    varieties: ["Refined Palm Olein (CP10, CP8)", "Refined Sunflower Oil", "Refined Soybean Oil", "Crude Palm Oil (CPO)"],
  },
];

export default function ProductsPage() {
  return (
    <div>
      <div className="page-hero">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">Our Products</h1>
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span className="text-white">Products</span>
        </div>
      </div>

      <section className="section-padding bg-section-light">
        <div className="site-container">
          <div className="space-y-20 lg:space-y-24">
            {products.map((product, index) => (
              <div key={product.id} id={product.id} className="scroll-mt-24">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] max-w-2xl lg:max-w-none mx-auto lg:mx-0 w-full ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="premium-image-overlay" />
                    <div className="watermark-overlay watermark-overlay-gold opacity-30 text-2xl" style={{ bottom: '20px', right: '20px' }} />
                  </div>
                  
                  {/* Content */}
                  <div className={`content-readable ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "var(--color-green-dark)" }}>{product.title}</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">{product.desc}</p>
                    
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-sm mb-2" style={{ color: "var(--color-gold)" }}>Origin</h4>
                          <p className="text-sm text-gray-700">{product.origin}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-2" style={{ color: "var(--color-gold)" }}>Packaging</h4>
                          <p className="text-sm text-gray-700">{product.packaging}</p>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <h4 className="font-semibold text-sm mb-3" style={{ color: "var(--color-gold)" }}>Available Varieties</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {product.varieties.map((v, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                              <span style={{ color: "var(--color-green)" }}>•</span>
                              {v}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="cta-row">
                      <Link href={`/contact?product=${product.id}#quote`} className="btn-primary">
                        Request Quote
                      </Link>
                      <a href={`https://wa.me/23400000000?text=I'm interested in ${product.title}`} target="_blank" rel="noopener noreferrer" className="btn-outline-white !text-green-700 !border-green-700 hover:!bg-green-700 hover:!text-white flex items-center gap-2">
                        <FaWhatsapp size={16} /> WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Showcase */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="site-container section-stack">
          <div className="section-header">
            <h2 className="text-3xl sm:text-4xl font-black mb-4" style={{ color: "var(--color-green-dark)" }}>Premium <span style={{ color: "var(--color-gold)" }}>Packaging</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We provide high-quality, branded packaging that protects your commodities and builds trust with end consumers.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 lg:p-16 flex items-center justify-center relative overflow-hidden group min-h-[360px]">
              <div className="absolute inset-0 bg-green-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <Image 
                src="/images/dng-basmati-rice-bag.webp" 
                alt="DNG FoodStuff Branded Rice Bag" 
                width={626} 
                height={971} 
                className="relative z-10 rounded-2xl object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                style={{ width: '100%', height: 'auto', maxWidth: '360px' }}
              />
            </div>
            
            <div className="space-y-8 content-readable">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: "rgba(201,162,39,0.15)", color: "var(--color-gold)" }}>
                  OEM & Custom Branding Available
                </div>
                <h3 className="text-2xl font-bold mb-4">Export-Grade Protection</h3>
                <p className="text-gray-600 leading-relaxed">Our packaging is designed to withstand long-haul maritime transport while maintaining perfect moisture barriers to ensure product freshness.</p>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Double-lined PP Bags with moisture protection",
                  "QR Code integration for batch tracking & authenticity",
                  "Clear origin and packing date stamping",
                  "Custom labeling for large volume buyers"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(11,93,59,0.1)", color: "var(--color-green)" }}>
                      ✓
                    </div>
                    <span className="font-medium text-gray-800 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog CTA */}
      <section className="py-20 bg-green-gradient text-white text-center">
        <div className="site-container max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Download Our Full Product Catalog</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">Get detailed specifications, quality parameters, and loading capacities for all our commodities in our comprehensive product brochure.</p>
          <a href="/brochure.pdf" download className="btn-gold inline-flex items-center justify-center gap-2 align-middle leading-none">
            <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center">
              <FaDownload size={14} />
            </span>
            <span className="inline-flex items-center leading-none">Download PDF Catalog</span>
          </a>
        </div>
      </section>
    </div>
  );
}

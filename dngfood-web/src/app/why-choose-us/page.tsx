import { Metadata } from "next";
import Link from "next/link";
import { FaShieldAlt, FaCertificate } from "react-icons/fa";
import WhyChooseUsComponent from "@/components/WhyChooseUs";

export const metadata: Metadata = {
  title: "Why Choose Us | DNG FoodStuff",
  description: "Discover why global buyers trust DNG FoodStuff for their agro commodity needs. Quality assurance, reliable logistics, and competitive pricing.",
};

export default function WhyChooseUsPage() {
  return (
    <div>
      <div className="page-hero">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">Why Choose Us</h1>
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span className="text-white">Why Choose Us</span>
        </div>
      </div>

      <WhyChooseUsComponent />

      <section className="section-padding bg-white border-t border-gray-100">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="content-readable">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: "var(--color-green-dark)" }}>Commitment to Quality & Compliance</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At DNG FoodStuff, quality is not just a promise; it is a guarantee built into our supply chain. We understand that in the food industry, compliance with international health and safety standards is non-negotiable.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Pre-shipment inspection by internationally recognized agencies (e.g., SGS, Bureau Veritas).",
                  "Strict adherence to phytosanitary regulations of importing countries.",
                  "Careful selection of processing mills with HACCP and ISO certifications.",
                  "Optimal packaging solutions to ensure freshness and prevent contamination during transit."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <FaCertificate className="flex-shrink-0 mt-1" style={{ color: "var(--color-gold)" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary">
                Discuss Your Requirements
              </Link>
            </div>
            
            {/* Certifications Grid (Placeholder visually) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
               {["ISO 9001:2015", "HACCP Certified", "Halal Certified", "Global G.A.P", "FDA Registered", "FSSAI (India)"].map((cert, i) => (
                 <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:border-green-500 hover:shadow-md transition-all h-full">
                   <FaShieldAlt className="mx-auto mb-3 text-3xl" style={{ color: "var(--color-green)" }} />
                   <div className="font-bold text-gray-800 text-sm">{cert}</div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

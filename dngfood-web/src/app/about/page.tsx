import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle, FaGlobeAfrica, FaSeedling, FaHandsHelping } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About Us | DNG FoodStuff",
  description: "Learn about DNG FoodStuff, Africa's premier agro commodity trader. Discover our mission, vision, and core strengths.",
};

const strengths = [
  "Over a decade of agro commodity trading experience",
  "Direct farmer and mill sourcing networks",
  "Compliance with international food safety standards",
  "Dedicated export/import logistics support",
  "Transparent pricing and flexible payment terms",
  "Rigorous quality control processes",
];

const values = [
  { icon: FaGlobeAfrica, title: "Global Reach", desc: "Connecting local farmers to international markets." },
  { icon: FaSeedling, title: "Quality First", desc: "Uncompromising standards for every grain." },
  { icon: FaHandsHelping, title: "Integrity", desc: "Building trust through transparent trading." },
];

export default function AboutPage() {
  return (
    <div>
      {/* Page Hero */}
      <div className="page-hero">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">About Us</h1>
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span className="text-white">About Us</span>
        </div>
      </div>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-line mb-4" />
              <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--color-gold)" }}>
                Our Story
              </p>
              <h2 className="text-2xl sm:text-4xl font-black mb-6" style={{ color: "var(--color-green-dark)" }}>
                Bridging The Gap In<br />
                <span style={{ color: "var(--color-gold)" }}>Global Food Supply</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                DNG FoodStuff was established with a singular mission: to streamline the global supply chain of essential agro commodities. From our humble beginnings as a local distributor, we have grown into a formidable player in the international trading arena.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our expertise lies in sourcing premium quality Rice, Sugar, Pulses, Grains, and Edible Oils directly from origin countries and delivering them efficiently to destinations worldwide. We pride ourselves on our deep market knowledge, robust logistics network, and unwavering commitment to quality.
              </p>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/images/about_warehouse.png"
                  alt="DNG FoodStuff Operations"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-section-light">
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border-t-4" style={{ borderColor: "var(--color-green)" }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--color-green-dark)" }}>Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide seamless, reliable, and cost-effective sourcing and distribution of high-quality agro commodities, empowering businesses globally while ensuring food security and sustainability.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border-t-4" style={{ borderColor: "var(--color-gold)" }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--color-green-dark)" }}>Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the world's most trusted and preferred partner in the agro commodity trading industry, recognized for our integrity, operational excellence, and positive impact on global food chains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 text-center">
          <h2 className="text-3xl font-black mb-12" style={{ color: "var(--color-green-dark)" }}>Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="p-6">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-green-gradient text-white text-2xl">
                  <v.icon />
                </div>
                <h4 className="text-xl font-bold mb-3" style={{ color: "var(--color-green-dark)" }}>{v.title}</h4>
                <p className="text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="section-padding bg-green-gradient text-white">
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">Our Strengths</h2>
            <p className="text-green-100">What makes us the preferred choice for global buyers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {strengths.map((s, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <FaCheckCircle className="text-yellow-400 flex-shrink-0" size={20} />
                <span className="font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

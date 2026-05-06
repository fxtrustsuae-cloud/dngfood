"use client";
import { useState, FormEvent, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import toast from "react-hot-toast";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const defaultProduct = searchParams.get("product") || "";

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: defaultProduct,
    quantity: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent successfully! We will get back to you soon.");
        setFormData({
          name: "", email: "", phone: "", company: "", product: "", quantity: "", message: ""
        });
      } else {
        toast.error("Failed to send message. Please try again or use WhatsApp.");
      }
    } catch {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
          <input type="text" name="name" required value={formData.name} onChange={handleChange} className="form-input" placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
          <input type="email" name="email" required value={formData.email} onChange={handleChange} className="form-input" placeholder="john@company.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone / WhatsApp *</label>
          <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="form-input" placeholder="+1 234 567 8900" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
          <input type="text" name="company" value={formData.company} onChange={handleChange} className="form-input" placeholder="Your Company Ltd" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Product of Interest *</label>
          <select name="product" required value={formData.product} onChange={handleChange} className="form-input bg-white">
            <option value="">Select a product...</option>
            <option value="rice">Premium Rice</option>
            <option value="sugar">Refined Sugar</option>
            <option value="pulses">Pulses & Lentils</option>
            <option value="grains">Grains & Cereals</option>
            <option value="oils">Edible Oils</option>
            <option value="other">Other / Custom Request</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Required Quantity (MT)</label>
          <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} className="form-input" placeholder="e.g. 500 MT" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Message / Special Requirements *</label>
        <textarea name="message" required value={formData.message} onChange={handleChange} rows={5} className="form-input resize-none" placeholder="Tell us about your target port, packaging needs, etc."></textarea>
      </div>
      <button type="submit" disabled={loading} className={`btn-primary w-full flex justify-center items-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}>
        {loading ? 'Sending...' : <><FaPaperPlane /> Send Request</>}
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div>
      <div className="page-hero">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">Contact Us</h1>
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span className="text-white">Contact</span>
        </div>
      </div>

      <section className="section-padding bg-section-light relative">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6 lg:space-y-8">
              <div>
                <h2 className="text-3xl font-black mb-2" style={{ color: "var(--color-green-dark)" }}>Get in Touch</h2>
                <p className="text-gray-600 mb-8">Our team is ready to assist you with global sourcing and quotations.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-green-50 text-green-700 flex-shrink-0">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Head Office</h4>
                    <p className="text-sm text-gray-600">Ware house no.4, 21 A Street, Rising Star Garage, Backside, Ras Al Khor Ind 2, Dubai, United Arab Emirates</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-green-50 text-green-700 flex-shrink-0">
                    <FaPhoneAlt size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                    <p className="text-sm text-gray-600"><a href="tel:+97142381006" className="hover:text-green-700">+971-42381006</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-green-50 text-green-700 flex-shrink-0">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                    <p className="text-sm text-gray-600"><a href="mailto:info@dngfoodstuff.com" className="hover:text-green-700">info@dngfoodstuff.com</a></p>
                    <p className="text-sm text-gray-600"><a href="mailto:sales@dngfoodstuff.com" className="hover:text-green-700">sales@dngfoodstuff.com</a></p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 sm:p-8 border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-3 flex items-center gap-2">
                  <FaWhatsapp size={24} className="text-green-600" /> WhatsApp Direct
                </h4>
                <p className="text-sm text-yellow-700 mb-4">Need an immediate response? Chat with our sales agents directly on WhatsApp.</p>
                <a href="https://wa.me/971568441815" target="_blank" rel="noopener noreferrer" className="btn-gold w-full flex justify-center py-3">
                  Start Chat
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2" id="quote">
              <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-green-50 rounded-bl-full -z-0 opacity-50"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--color-green-dark)" }}>Request a Quote</h3>
                  <p className="text-gray-500 mb-8">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                  
                  <Suspense fallback={<div className="p-8 text-center">Loading form...</div>}>
                    <ContactFormContent />
                  </Suspense>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map */}
      <section className="relative py-16">
        <div className="site-container">
          <div className="h-96 w-full overflow-hidden rounded-xl lg:w-300">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126844.06233075558!2d3.269493134375!3d6.536968800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="DNG FoodStuff Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

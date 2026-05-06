"use client";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/971568441815?text=Hello%20DNG%20FoodStuff%2C%20I%20would%20like%20to%20inquire%20about%20your%20products."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      id="whatsapp-float-btn"
      className="whatsapp-float flex items-center gap-2 text-white font-semibold text-sm px-4 py-3 rounded-full shadow-2xl"
      style={{ background: "#25D366" }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp size={22} />
      <span className="hidden sm:inline">Chat With Us</span>
    </motion.a>
  );
}

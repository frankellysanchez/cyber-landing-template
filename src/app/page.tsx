'use client';

import CyberGridBackground from "@/components/CyberGridBackground";
import CyberServices from "@/components/CyberServices";
import Testimonials from "@/components/Testimonials";
import TeamSection from "@/components/TeamSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeIn, hoverEffect } from "@/components/Animations";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between scroll-smooth">
      <Navbar />

      <motion.section
        className="relative px-4 sm:px-6 md:px-8 text-center min-h-screen flex flex-col justify-center bg-gradient-to-b from-gray-800 to-black overflow-hidden"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        id="home"
      >
        <canvas id="cyberCanvas" className="absolute inset-0 z-0 pointer-events-none" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
          <p className="uppercase tracking-widest text-base sm:text-lg md:text-xl text-blue-400 mb-4 sm:mb-6">
            Welcome to SolucionesX
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight">
            Cybersecurity <span className="text-blue-400">Solutions</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-6 sm:mb-8 leading-snug">
            Secure. Monitor. Protect.
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            We protect your digital assets with cutting-edge technology and industry best practices to prevent cyber threats before they happen.
          </p>
          <motion.a
            href="#contacto"
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-white text-sm sm:text-lg md:text-xl transition-transform"
            {...hoverEffect}
          >
            Contact Us →
          </motion.a>
        </div>
        <CyberGridBackground />
      </motion.section>

      <CyberServices />
      <Testimonials />
      <TeamSection />
      <Footer />
    </div>
  );
}

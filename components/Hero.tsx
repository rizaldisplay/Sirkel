'use client';
import React, { JSX } from "react";
import Image from "next/image";
// 1. Impor tipe 'Variants' dari framer-motion
import { motion, Variants } from "framer-motion";
import HeroImage from "../public/assets/heroimage.png"; // Pastikan path gambar benar

// --- DATA & KONSTANTA ---
const navLinks: string[] = ["Auctions", "Roadmap", "Discover", "Community"];
const headingText: string = "Create, Sell & Collect Your Own Creative NFT";

// --- ANIMATION VARIANTS (Framer Motion) ---
// 2. Terapkan tipe 'Variants' pada setiap objek animasi
const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const letterAnimation: Variants = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

// --- KOMPONEN SVG ---
const WavyLines = (): JSX.Element => (
  <svg width="60" height="200" viewBox="0 0 60 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/4 right-0 md:right-10 opacity-10 pointer-events-none" aria-hidden="true">
    <path d="M 6 0 C 40 66, 1 133, 6 200" stroke="white" strokeWidth="1.5" />
    <path d="M 18 0 C 50 66, 13 133, 18 200" stroke="white" strokeWidth="1.5" />
    <path d="M 30 0 C 60 66, 25 133, 30 200" stroke="white" strokeWidth="1.5" />
    <path d="M 42 0 C 70 66, 37 133, 42 200" stroke="white" strokeWidth="1.5" />
  </svg>
);

const ConcentricCircles = (): JSX.Element => (
  <svg width="700" height="700" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/4 pointer-events-none opacity-5" aria-hidden="true">
    {Array.from({ length: 7 }).map((_, i) => (
      <circle key={i} cx="350" cy="350" r={50 + i * 50} stroke="white" strokeWidth="1" />
    ))}
  </svg>
);

// --- KOMPONEN UTAMA ---
const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#121630] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <WavyLines />
        <ConcentricCircles />
      </div>
      
      <div className="container relative mx-auto px-4 md:px-8 py-20 z-10">
        {/* Header/Nav */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 w-full px-4 md:px-8 py-6 flex justify-between items-center"
        >
          <h1 className="text-2xl font-bold">
            Psycho<span className="text-purple-400">Art</span>
          </h1>
          {/* Navigasi bisa diaktifkan kembali jika dibutuhkan */}
        </motion.header>

        {/* Main Content Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24 lg:mt-0"
        >
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <motion.h2
              variants={staggerContainer}
              className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text"
            >
              {headingText.split(" ").map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block whitespace-nowrap mr-4">
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span key={letterIndex} variants={letterAnimation} className="inline-block">
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-gray-300 text-lg max-w-lg mx-auto lg:mx-0">
              Jelajahi, ciptakan, dan perdagangkan NFT unik di platform seni digital paling inovatif.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="group w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-lg shadow-purple-500/30 hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
                Explore Now
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
              <button className="w-full sm:w-auto bg-white/5 border border-white/20 backdrop-blur-sm font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors duration-300">
                Sell NFT
              </button>
            </motion.div>
          </div>

          {/* Right Image Grid */}
          <motion.div variants={fadeInUp} className="relative flex justify-center items-center h-[400px] lg:h-[550px] group">
            <div className="absolute inset-0 bg-purple-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-[80%] h-[80%] lg:w-full lg:h-full"
            >
              <Image
                src={HeroImage}
                alt="Abstract Glowing Head"
                fill
                style={{ objectFit: 'contain' }}
                className="shadow-2xl shadow-black/30"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
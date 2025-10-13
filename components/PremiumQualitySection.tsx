'use client';
import React, { JSX } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, Variants } from "framer-motion";

// --- IMPORT YOUR IMAGES HERE ---
import Rectangle1 from "../public/assets/Rectangle1.png";
import Rectangle2 from "../public/assets/Rectangle2.png";
import Rectangle3 from "../public/assets/Rectangle3.png";
import Ellipse from "../public/assets/Ellipse.png"; // This is the cube image

// --- TYPE DEFINITIONS ---
// Mendefinisikan struktur objek untuk setiap fitur
type Feature = {
  title: string;
  number: string;
  description: string;
  alignment: 'left' | 'right'; // Menggunakan literal type untuk alignment yang lebih aman
};

// Mendefinisikan props untuk komponen FeatureItem
type FeatureItemProps = {
  feature: Feature;
};

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

// --- DATA ---
// Memberikan tipe pada array data untuk memastikan konsistensi
const qualityFeatures: Feature[] = [
  { title: "Kualitas Premium", number: "01", description: "Ciptakan pertumbuhan konsisten melalui strategi non-spekulatif berbasis algoritma...", alignment: "right" },
  { title: "Kualitas Premium", number: "02", description: "Ciptakan pertumbuhan konsisten melalui strategi non-spekulatif berbasis algoritma...", alignment: "left" },
  { title: "Kualitas Premium", number: "03", description: "Ciptakan pertumbuhan konsisten melalui strategi non-spekulatif berbasis algoritma...", alignment: "right" },
  { title: "Kualitas Premium", number: "04", description: "Ciptakan pertumbuhan konsisten melalui strategi non-spekulatif berbasis algoritma...", alignment: "left" },
];

// --- SVG DECORATIVE COMPONENTS ---
// Menambahkan tipe return 'JSX.Element' untuk kejelasan
const ConcentricCirclesQuality = (): JSX.Element => (
  <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-5">
    {Array.from({ length: 35 }).map((_, i) => {
      const radius = 500 - i * 14;
      if (radius <= 0) return null;
      const d = `M ${500 - radius} 500 A ${radius} ${radius} 0 0 1 500 ${500 - radius}`;
      return <path key={i} d={d} stroke="white" strokeWidth="1" />;
    })}
  </svg>
);

const FeatureConnectorLines = (): JSX.Element => (
  <svg width="100%" height="100%" viewBox="0 0 800 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
    <path d="M 250 100 Q 350 150, 400 200" stroke="white" strokeWidth="1" fill="none" />
    <path d="M 550 100 Q 450 150, 400 200" stroke="white" strokeWidth="1" fill="none" />
    <path d="M 250 300 Q 350 250, 400 200" stroke="white" strokeWidth="1" fill="none" />
    <path d="M 550 300 Q 450 250, 400 200" stroke="white" strokeWidth="1" fill="none" />
  </svg>
);

// --- REUSABLE FEATURE ITEM COMPONENT ---
// Menerapkan tipe props yang sudah didefinisikan
function FeatureItem({ feature }: FeatureItemProps): JSX.Element {
  const isRightAligned = feature.alignment === 'right';
  return (
    <div className={`w-full max-w-xs ${isRightAligned ? 'text-right ml-auto lg:ml-0' : 'text-left mr-auto lg:mr-0'}`}>
      <div className={`flex items-center gap-4 mb-3 ${isRightAligned ? 'flex-row-reverse' : ''}`}>
        <h3 className="text-xl font-semibold">{feature.title}</h3>
        <span className="text-4xl font-mono text-white/40">{feature.number}</span>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
    </div>
  );
}


// --- MAIN ENHANCED COMPONENT ---
export default function PremiumQualitySection(): JSX.Element {
  return (
    <section className="bg-[#1C1C1C] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] text-white py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Top Gallery Section */}
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
            <div className="max-w-3xl mb-8">
              <p className="text-gray-400 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-auto md:h-[450px] mb-24 lg:mb-32">
              <div className="md:col-span-2 flex flex-col gap-4">
                  <motion.div whileHover={{ scale: 1.03 }} className="relative h-60 md:h-full rounded-lg overflow-hidden shadow-lg"><Image src={Rectangle1} alt="Art 1" layout="fill" objectFit="cover" /></motion.div>
                  <motion.div whileHover={{ scale: 1.03 }} className="relative h-60 md:h-full rounded-lg overflow-hidden shadow-lg"><Image src={Rectangle2} alt="Art 2" layout="fill" objectFit="cover" /></motion.div>
              </div>
              <motion.div whileHover={{ scale: 1.03 }} className="relative md:col-span-3 h-80 md:h-full rounded-lg overflow-hidden shadow-lg"><Image src={Rectangle3} alt="Art 3" layout="fill" objectFit="cover" /></motion.div>
            </div>
        </motion.div>

        {/* Middle Title Section */}
        <motion.div className="text-center my-24" initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }} variants={fadeInUp}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">Collection</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </motion.div>

        {/* Bottom Features Grid */}
        <div className="relative">
          <div className="hidden lg:block">
            <FeatureConnectorLines />
            <ConcentricCirclesQuality />
          </div>

          {/* DESKTOP Grid Layout */}
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="hidden lg:grid grid-cols-3 gap-x-8 items-center relative z-10">
              <div className="space-y-32"><FeatureItem feature={qualityFeatures[0]} /><FeatureItem feature={qualityFeatures[2]} /></div>
              <motion.div whileHover={{ scale: 1.05, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }} className="flex justify-center items-center">
                <div className="relative w-72 h-72 rounded-full bg-gradient-to-b from-[#01203a] to-[#011427] flex items-center justify-center shadow-2xl ring-1 ring-white/10">
                    <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-2xl"></div>
                    <Image src={Ellipse} alt="Central Cube Graphic" width={180} height={180} className="relative z-10" />
                </div>
              </motion.div>
              <div className="space-y-32"><FeatureItem feature={qualityFeatures[1]} /><FeatureItem feature={qualityFeatures[3]} /></div>
          </motion.div>
          
          {/* MOBILE Grid Layout */}
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="grid grid-cols-1 lg:hidden gap-16 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
              <FeatureItem feature={qualityFeatures[0]} />
              <FeatureItem feature={qualityFeatures[1]} />
            </div>
            <motion.div whileHover={{ scale: 1.05, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }} className="flex justify-center items-center my-8">
                <div className="relative w-64 h-64 rounded-full bg-gradient-to-b from-[#01203a] to-[#011427] flex items-center justify-center shadow-2xl ring-1 ring-white/10">
                    <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-2xl"></div>
                    <Image src={Ellipse} alt="Central Cube Graphic" width={150} height={150} className="relative z-10" />
                </div>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
              <FeatureItem feature={qualityFeatures[2]} />
              <FeatureItem feature={qualityFeatures[3]} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
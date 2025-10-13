"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// --- DEFINISI TIPE & DATA (Tidak berubah) ---
type NFTCategory = 'Art' | 'Sport' | 'Photography' | 'Pattern';
type NFTItem = {
  id: number;
  image: string;
  artist: string;
  title: string;
  bid: number;
  category: NFTCategory;
};

const nftData: NFTItem[] = [
    { id: 1, image: '/assets/Collection1.png', artist: '@Johny', title: 'White Cylinders', bid: 0.005, category: 'Art' },
    { id: 2, image: '/assets/Collection2.png', artist: '@Johny', title: 'Minaret', bid: 0.005, category: 'Sport' },
    { id: 3, image: '/assets/Collection3.png', artist: '@Johny', title: 'Gradient Sphere', bid: 0.005, category: 'Photography' },
    { id: 4, image: '/assets/Collection4.png', artist: '@Johny', title: 'Geometric Play', bid: 0.005, category: 'Art' },
    { id: 5, image: '/assets/Collection5.png', artist: '@Johny', title: 'Reflection', bid: 0.005, category: 'Photography' },
    { id: 6, image: '/assets/Collection6.png', artist: '@Johny', title: 'Veiled Light', bid: 0.005, category: 'Art' },
    { id: 7, image: '/assets/Collection7.png', artist: '@Johny', title: 'Toy Story', bid: 0.005, category: 'Sport' },
    { id: 8, image: '/assets/Collection8.png', artist: '@Johny', title: 'Intersections', bid: 0.005, category: 'Pattern' },
    { id: 9, image: '/assets/Collection9.png', artist: '@Johny', title: 'Archways', bid: 0.005, category: 'Art' },
];

// --- VARIAN ANIMASI ---
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// --- KOMPONEN KARTU NFT (Ditingkatkan dengan motion) ---
const NFTCard: React.FC<{ item: NFTItem }> = ({ item }) => (
  <motion.div
    variants={cardVariants}
    className="bg-[#2A2D3A] rounded-xl p-4 border border-transparent hover:border-purple-600 transition-colors duration-300 group"
    whileHover={{ y: -8, transition: { duration: 0.3 } }} // Efek terangkat saat hover
  >
    <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4">
      <Image
        src={item.image}
        alt={item.title}
        fill
        style={{ objectFit: 'cover' }}
        className="group-hover:scale-105 transition-transform duration-400 ease-in-out"
      />
    </div>
    <div className="flex justify-between items-center mb-1">
      <p className="text-sm text-gray-400">{item.artist}</p>
      <p className="text-xs text-gray-500">Current Bid</p>
    </div>
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-semibold text-white">{item.title}</h3>
      <p className="font-semibold text-purple-400">{item.bid} ETH</p>
    </div>
    <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-2.5 rounded-lg shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300">
      Place a bid
    </button>
  </motion.div>
);

// --- KOMPONEN UTAMA (Ditingkatkan) ---
const CollectionSection: React.FC = () => {
  const categories: NFTCategory[] = ['Art', 'Sport', 'Photography', 'Pattern'];
  const [activeCategory, setActiveCategory] = useState<NFTCategory>('Sport');

  const filteredItems = nftData.filter(item => item.category === activeCategory);

  return (
    <section className="bg-[#1C1C1C] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] text-white py-20 lg:py-28">
      <div className="container mx-auto px-4 md:px-8 relative">
        {/* Dekorasi garis vertikal dengan warna yang lebih sesuai */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
            Our Collection
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Discover a curated selection of digital art from talented creators around the world.
          </p>
        </div>

        {/* Tab Filter Kategori dengan Animasi */}
        <div className="relative flex justify-center items-center gap-2 md:gap-4 mb-16 p-1.5 bg-[#2A2D3A] rounded-xl max-w-md mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative w-full py-2.5 px-4 rounded-lg text-sm md:text-base font-semibold transition-colors duration-300 z-10 ${
                activeCategory === category ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {activeCategory === category && (
                // Efek glow di latar belakang aktif
                <motion.div
                  layoutId="active-category-pill"
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-20">{category}</span>
            </button>
          ))}
        </div>

        {/* Grid untuk Kartu NFT dengan Animasi */}
        <motion.div
          key={activeCategory} // Ganti key untuk memicu animasi ulang saat filter berubah
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }, // Animasi berurutan
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => <NFTCard key={item.id} item={item} />)
            ) : (
              // Tampilan jika tidak ada item
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full text-center py-16"
              >
                <p className="text-gray-400 text-lg">No items found in this category.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default CollectionSection;
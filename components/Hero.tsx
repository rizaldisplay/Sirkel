import React from "react";
import Image from "next/image";
import HeroImage from "../public/assets/heroimage.png"; // Placeholder image, replace with actual images as needed

// SVG Component for the decorative wavy lines on the right
const WavyLines = () => (
  <svg
    width="60"
    height="200"
    viewBox="0 0 60 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-1/4 right-0 md:right-10 opacity-30"
  >
    <path d="M 6 0 C 40 66, 1 133, 6 200" stroke="white" strokeWidth="2" />
    <path d="M 18 0 C 50 66, 13 133, 18 200" stroke="white" strokeWidth="2" />
    <path d="M 30 0 C 60 66, 25 133, 30 200" stroke="white" strokeWidth="2" />
    <path d="M 42 0 C 70 66, 37 133, 42 200" stroke="white" strokeWidth="2" />
  </svg>
);

// SVG Component for the decorative circles on the left
const ConcentricCircles = () => (
  <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/4 w-[500px] h-[500px] md:w-[700px] md:h-[700px] pointer-events-none">
    <div className="absolute inset-0 rounded-full border border-white/30"></div>
    <div className="absolute inset-[50px] rounded-full border border-white/30"></div>
    <div className="absolute inset-[100px] rounded-full border border-white/30"></div>
    <div className="absolute inset-[150px] rounded-full border border-white/30"></div>
    <div className="absolute inset-[200px] rounded-full border border-white/30"></div>
  </div>
);

// Main Hero Component
const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-gradient-to-r from-[#402126] via-[#10142D] to-[#121630] text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 py-20 z-10">
        {/* Header/Nav */}
        <header className="absolute top-0 left-0 w-full px-6 md:px-12 py-6">
          <h1 className="text-2xl font-bold">
            Psycho<span className="text-purple-400">Art</span>
          </h1>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Create, Sell & Collect Your Own Creative NFT
            </h2>
            <p className="text-gray-300 text-lg max-w-lg mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 font-semibold py-3 px-10 rounded-lg shadow-lg shadow-purple-500/20 hover:scale-105 transition-transform duration-300">
                Explore Now
              </button>
              <button className="w-full sm:w-auto bg-white/10 border border-white/20 backdrop-blur-sm font-semibold py-3 px-10 rounded-lg hover:bg-white/20 transition-colors duration-300">
                Sell NFT
              </button>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="relative flex justify-center items-center gap-4 h-[500px]">
            <Image
              src={HeroImage}
              alt="Abstract Glowing Head"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <WavyLines />
      <ConcentricCircles />
    </section>
  );
};

export default HeroSection;

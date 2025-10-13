import React from "react";
import Image from "next/image";
import FeatureImage from "../public/assets/featureimage.jpg"; // Make sure this image path is correct

// The SVG component for the decorative lines remains the same.
const WavyLinesFeatures = () => (
  <svg
    width="180"
    height="80"
    viewBox="0 0 180 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // Adjusted positioning to better match the image
    className="absolute bottom-0 left-0 -translate-x-8 translate-y-10 pointer-events-none opacity-40"
  >
    <path
      d="M0 10 C 30 20, 60 0, 90 10 S 150 20, 180 10"
      stroke="white"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M0 25 C 30 35, 60 15, 90 25 S 150 35, 180 25"
      stroke="white"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M0 40 C 30 50, 60 30, 90 40 S 150 50, 180 40"
      stroke="white"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M0 55 C 30 65, 60 45, 90 55 S 150 65, 180 55"
      stroke="white"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M0 70 C 30 80, 60 60, 90 70 S 150 80, 180 70"
      stroke="white"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

const FeaturesSection = () => {
  return (
    <div className="bg-[#1C1C1C] text-white py-20 lg:py-24">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Stats Section */}
        <div className="flex justify-around items-center text-center pb-12 mb-12 border-b border-gray-700">
          <div>
            <h3 className="text-4xl font-bold">37k+</h3>
          </div>
          <div>
            <h3 className="text-4xl font-bold">20k+</h3>
          </div>
          <div>
            <h3 className="text-4xl font-bold">99k+</h3>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Image */}
          <div className="relative w-full flex justify-center lg:justify-start">
            <div className="max-w-md relative">
              <Image
                src={FeatureImage}
                alt="Bouquet of flowers in a box"
                width={500}
                height={600}
                className="rounded-lg object-cover shadow-2xl"
              />
              <WavyLinesFeatures />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col space-y-6 pt-4">
            <h2 className="text-4xl font-bold tracking-tight">Collection</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            
            {/* Text Cards with slightly different background for depth */}
            <div className="bg-[#252525] p-6 rounded-md shadow-lg">
              <p className="text-gray-300 text-sm leading-relaxed">
                Ciptakan pertumbuhan konsisten melalui strategi non-spekulatif
                berbasis algoritma, yang dirancang untuk trader baru maupun
                berpengalaman. Ciptakan pertumbuhan konsisten melalui strategi
                non-spekulatif berbasis algoritma.
              </p>
            </div>
            <div className="bg-[#252525] p-6 rounded-md shadow-lg">
              <p className="text-gray-300 text-sm leading-relaxed">
                Ciptakan pertumbuhan konsisten melalui strategi non-spekulatif
                berbasis algoritma, yang dirancang untuk trader baru maupun
                berpengalaman.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
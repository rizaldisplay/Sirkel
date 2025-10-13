import React from "react";
import Image from "next/image";
import FeatureImage from "../public/assets/featureimage.jpg"; // Placeholder image, replace with actual images as needed

// New SVG Component for the features section decorative lines
const WavyLinesFeatures = () => (
  <svg
    width="180"
    height="80"
    viewBox="0 0 180 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute bottom-0 left-0 -translate-x-6 translate-y-8 pointer-events-none opacity-40"
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
    <div className="bg-[#1C1C1C] text-white">
      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 py-20 lg:py-32">
        <div className="relative flex justify-start items-center">
          {/* Background Image */}
          <div className="relative w-full lg:w-2/3">
            <div className="max-w-3xl mx-auto p-8">
              {/* OR responsive version (scales with container width) */}
              <div className="mt-8 w-full max-w-2xl">
                <Image
                  src={FeatureImage}
                  alt="Feature Background"
                  width={800} // base width in pixels
                  height={500} // base height in pixels
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
            {/* Decorative SVG Lines */}
            <WavyLinesFeatures />
          </div>

          {/* Overlapping Text Content */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-1/2 space-y-8">
            <div className="bg-black p-6 rounded-md shadow-lg">
              <p className="text-gray-300 text-sm leading-relaxed">
                Ciptakan pertumbuhan konsisten melalui strategi non-spekulatif
                berbasis algoritma, yang dirancang untuk trader baru maupun
                berpengalaman. Ciptakan pertumbuhan konsisten melalui strategi
                non-spekulatif berbasis algoritma, yang dirancang untuk trader
                baru maupun berpengalaman.
              </p>
            </div>
            <div className="bg-black p-6 rounded-md shadow-lg">
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

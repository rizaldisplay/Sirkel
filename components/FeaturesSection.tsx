import React, { JSX } from "react";
import Image from "next/image";
import FeatureImage from "../public/assets/featureimage.jpg"; // Make sure this image path is correct

// --- Helper Components for Icons & Decoration ---
type FeatureIconProps = {
  children: React.ReactNode; // Tipe untuk 'children' adalah React.ReactNode
};

// A simple icon component for the feature cards
const FeatureIcon = ({ children }: FeatureIconProps): JSX.Element => (
  <div className="flex-shrink-0 w-12 h-12 bg-gray-800/80 text-cyan-400 rounded-full inline-flex items-center justify-center mb-4 border border-gray-700">
    {children}
  </div>
);

// SVG for the decorative lines (Unchanged)
const WavyLinesFeatures = () => (
  <svg width="180" height="80" viewBox="0 0 180 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 -translate-x-8 translate-y-10 pointer-events-none opacity-20">
    <path d="M0 10 C 30 20, 60 0, 90 10 S 150 20, 180 10" stroke="white" strokeWidth="1.5" fill="none" />
    <path d="M0 25 C 30 35, 60 15, 90 25 S 150 35, 180 25" stroke="white" strokeWidth="1.5" fill="none" />
    <path d="M0 40 C 30 50, 60 30, 90 40 S 150 50, 180 40" stroke="white" strokeWidth="1.5" fill="none" />
    <path d="M0 55 C 30 65, 60 45, 90 55 S 150 65, 180 55" stroke="white" strokeWidth="1.5" fill="none" />
    <path d="M0 70 C 30 80, 60 60, 90 70 S 150 80, 180 70" stroke="white" strokeWidth="1.5" fill="none" />
  </svg>
);


// --- Data for Stats and Features ---

const statsData = [
  { value: "37k+", label: "Artworks" },
  { value: "20k+", label: "Artists" },
  { value: "99k+", label: "Auctions" },
];

const featuresData = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    text: "Ciptakan pertumbuhan konsisten melalui strategi non-spekulatif berbasis algoritma, yang dirancang untuk trader baru maupun berpengalaman.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    text: "Strategi non-spekulatif kami dirancang untuk memberikan hasil yang andal dan terukur bagi trader baru maupun yang sudah berpengalaman.",
  },
];


// --- Main Component ---

const FeaturesSection = () => {
  return (
    // Added a subtle radial gradient for more depth
    <div className="bg-[#1C1C1C] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white py-20 lg:py-32">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Stats Section - Now data-driven and with labels */}
        <div className="flex justify-around text-center pb-12 mb-12 border-b border-white/10">
          {statsData.map((stat, index) => (
            <div key={index}>
              <h3 className="text-4xl md:text-5xl font-bold text-cyan-400">{stat.value}</h3>
              <p className="text-sm text-gray-400 mt-2 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Image with enhanced styling */}
          <div className="relative w-full flex justify-center lg:justify-start">
            <div className="relative max-w-md group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <Image
                  src={FeatureImage}
                  alt="Bouquet of flowers in a box"
                  width={500}
                  height={600}
                  className="rounded-lg object-cover shadow-2xl relative"
                />
                <WavyLinesFeatures />
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                Our Curated Collection
              </h2>
              <p className="text-gray-400 mt-4 max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
                rhoncus quam.
              </p>
            </div>
            
            {/* Feature Cards with icons and hover effects */}
            <div className="space-y-6">
              {featuresData.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-[#252525]/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/10 transition-all duration-300 hover:border-cyan-400/50 hover:bg-[#2a2a2a]"
                >
                  <div className="flex items-start space-x-4">
                    <FeatureIcon>{feature.icon}</FeatureIcon>
                    <div>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
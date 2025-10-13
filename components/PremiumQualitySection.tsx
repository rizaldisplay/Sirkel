import React from "react";
import Image from "next/image";
import Rectangle1 from "../public/assets/Rectangle1.png"; // replace with your images
import Rectangle2 from "../public/assets/Rectangle2.png";
import Rectangle3 from "../public/assets/Rectangle3.png";
import Ellipse from "../public/assets/Ellipse.png";

// Decorative concentric circles as SVG (clean, performant)
// SVG Component for the quality section decorative circles
const ConcentricCirclesQuality = () => (
  <svg
    width="300"
    height="300"
    viewBox="0 0 300 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 pointer-events-none opacity-25"
  >
    {Array.from({ length: 25 }).map((_, i) => {
      const radius = 300 - i * 10;
      if (radius <= 0) return null;
      const d = `M 0 ${radius} A ${radius} ${radius} 0 0 1 ${radius} 0`;
      return <path key={i} d={d} stroke="white" strokeWidth="1" />;
    })}
  </svg>
);

const qualityFeatures = [
  { title: "Kualitas Premium", number: "01" },
  { title: "Kualitas Premium", number: "02" },
  { title: "Kualitas Premium", number: "03" },
  { title: "Kualitas Premium", number: "04" },
];

export default function PremiumQualitySection(): JSX.Element {
  return (
    <section className="bg-[#1C1C1C] text-white py-20 lg:py-32">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Gallery */}
        <div className="mb-24">
          <p className="text-gray-400 max-w-xl mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[400px] md:h-[420px]">
            {/* Left two stacked images */}
            <div className="flex flex-col gap-4">
              <div className="relative w-full h-1/2 rounded-lg overflow-hidden">
                {/* Use Image with fill and a relative parent to control sizing */}
                <Image
                  src={Rectangle1}
                  alt="Art 1"
                  fill
                  style={{ objectFit: "cover" }}
                  quality={80}
                />
              </div>

              <div className="relative w-full h-1/2 rounded-lg overflow-hidden">
                <Image
                  src={Rectangle2}
                  alt="Art 2"
                  fill
                  style={{ objectFit: "cover" }}
                  quality={80}
                />
              </div>
            </div>

            {/* Right large image spanning 2 rows on md+ */}
            <div className="relative col-span-1 md:col-span-2 rounded-lg overflow-hidden h-full">
              <Image
                src={Rectangle3}
                alt="Art 3"
                fill
                style={{ objectFit: "cover" }}
                quality={90}
              />
            </div>
          </div>
        </div>

        {/* Bottom Features Grid (3 columns) */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 items-center relative z-10">
            {/* LEFT column: Feature 1 & 3 (stacked) */}
            <div className="space-y-16">
              <FeatureRightAligned feature={qualityFeatures[0]} />
              <FeatureRightAligned feature={qualityFeatures[2]} />
            </div>

            {/* CENTER column: circular image and decorative ring */}
            <div className="flex items-center justify-center relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-b from-[#01203a] to-[#011427] rounded-full flex items-center justify-center shadow-2xl ring-1 ring-white/5">
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden">
                  <Image
                    src={Ellipse}
                    alt="Central Ellipse"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
              </div>
            </div>

            {/* RIGHT column: Feature 2 & 4 (stacked) */}
            <div className="space-y-16">
              <FeatureLeftAligned feature={qualityFeatures[1]} />
              <FeatureLeftAligned feature={qualityFeatures[3]} />
            </div>
          </div>
          <ConcentricCirclesQuality />
        </div>
      </div>
    </section>
  );
}

function FeatureRightAligned({
  feature,
}: {
  feature: { title: string; number: string };
}) {
  return (
    <div className="text-right pr-6 md:pr-0">
      <h3 className="text-3xl font-bold mb-3 flex items-center justify-end gap-4">
        <span className="mr-3">{feature.title}</span>
        <span className="text-5xl font-mono text-gray-400">
          {feature.number}
        </span>
      </h3>
      <p className="text-gray-400 leading-relaxed">
        Ciptakan pertumbuhan konsisten melalui strategi non-spekulatif berbasis
        algoritma, yang dirancang untuk trader baru maupun berpengalaman.
      </p>
    </div>
  );
}

function FeatureLeftAligned({
  feature,
}: {
  feature: { title: string; number: string };
}) {
  return (
    <div className="pl-6 md:pl-0">
      <h3 className="text-3xl font-bold mb-3 flex items-center gap-4">
        <span className="text-5xl font-mono text-gray-400">
          {feature.number}
        </span>
        <span>{feature.title}</span>
      </h3>
      <p className="text-gray-400 leading-relaxed">
        Ciptakan pertumbuhan konsisten melalui strategi non-spekulatif berbasis
        algoritma, yang dirancang untuk trader baru maupun berpengalaman.
      </p>
    </div>
  );
}

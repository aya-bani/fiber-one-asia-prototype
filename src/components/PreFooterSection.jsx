import React from "react";
import { motion } from "framer-motion";

const PreFooterSection = () => {
  // Floating animations (slightly different for each image)
  const floatVariants = {
    float1: {
      y: [0, -12, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
    float2: {
      y: [0, 14, 0],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
    },
    float3: {
      y: [0, -16, 0],
      transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
    },
    float4: {
      y: [0, 10, 0],
      transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const imagesLeft = [
    { src: "src/assets/images/hero section.png", size: "w-52 h-52", marginRight: "mr-[-40px]", variant: "float1" },
    { src: "src/assets/images/hero section.png", size: "w-64 h-64", marginRight: "mr-6", variant: "float2" },
  ];

  const imagesRight = [
    { src: "src/assets/images/hero section.png", size: "w-56 h-56", marginLeft: "ml-[-20px]", variant: "float3" },
    { src: "src/assets/images/hero section.png", size: "w-48 h-48", marginLeft: "ml-8", variant: "float4" },
  ];

  return (
    <section className="relative w-full py-20 overflow-hidden bg-[#D7F4F1]">
      {/* Text */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Creative work, reimagined with AI
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          One suite with AI tools you trust and premium stock assets you’ll love.
        </p>
        <button className="mt-6 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Get started for free →
        </button>
      </div>

      {/* Video + Side Images */}
      <div className="flex items-center justify-center gap-8 relative">
        {/* Left Images */}
        <div className="flex flex-col gap-6">
          {imagesLeft.map((img, i) => (
            <motion.img
              key={i}
              src={img.src}
              alt=""
              className={`${img.size} object-cover rounded-xl shadow-lg ${img.marginRight}`}
              variants={floatVariants}
              animate={img.variant}
            />
          ))}
        </div>

        {/* Big Center Video */}
        <motion.video
          src="src/assets/videos/technology.mp4"
          className="rounded-2xl shadow-lg w-full max-w-4xl"
          autoPlay
          muted
          loop
          playsInline
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Right Images */}
        <div className="flex flex-col gap-6">
          {imagesRight.map((img, i) => (
            <motion.img
              key={i}
              src={img.src}
              alt=""
              className={`${img.size} object-cover rounded-xl shadow-lg ${img.marginLeft}`}
              variants={floatVariants}
              animate={img.variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreFooterSection;

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useSpring, animated, useScroll } from "@react-spring/web";

const X_LINES = 40; // number of animated background lines
const INITIAL_WIDTH = 20;

const PreFooterSection = () => {
  const containerRef = useRef(null);

  // React Spring text animation
  const [textStyles, textApi] = useSpring(() => ({
    y: "100%",
  }));

  const { scrollYProgress } = useScroll({
    container: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {
      if (scrollYProgress > 0.1) {
        textApi.start({ y: "0%" });
      } else {
        textApi.start({ y: "100%" });
      }
    },
  });

  // Floating animations (Framer Motion)
  const floatVariants = {
    float1: { y: [0, -12, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } },
    float2: { y: [0, 14, 0], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } },
    float3: { y: [0, -16, 0], transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" } },
    float4: { y: [0, 10, 0], transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" } },
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
    <section
      ref={containerRef}
      className="relative w-full py-20 overflow-hidden bg-[#D7F4F1]"
    >
      {/* Animated background bars */}
      <div className="absolute inset-0 flex flex-col justify-center">
        <div className="flex flex-col">
          {Array.from({ length: X_LINES }).map((_, i) => (
            <animated.div
              key={i}
              className="h-[2px] bg-white my-[1px]"
              style={{
                width: scrollYProgress.to(scrollP => {
                  const percentilePosition = (i + 1) / X_LINES;
                  return INITIAL_WIDTH / 4 + 40 * Math.cos(((percentilePosition - scrollP) * Math.PI) / 1.5) ** 32;
                }),
              }}
            />
          ))}
        </div>
      </div>

      {/* Animated heading & subheading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold text-[#00A39B]">
          <animated.span style={textStyles}>Creative work, reimagined with AI</animated.span>
        </h2>
        <p className=" max-w-xl mx-auto">
          One suite with AI tools you trust and premium stock assets you’ll love.
        </p>
        <button className="mt-6 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Get started for free →
        </button>
      </div>

      {/* Video + Side Images */}
      <div className="flex items-center justify-center gap-8 relative z-10">
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

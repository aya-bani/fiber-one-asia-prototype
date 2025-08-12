import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroVideo from "../assets/videos/Smart City Digital City Video.mp4";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Dark overlay with reduced opacity */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-7xl font-bold">Fiber One Asia</h1>
        <h2 className="mt-4 text-lg">Connecting People, Technology, and Experiences</h2>
        <h2 className="mt-4 text-lg">Empowering People Through <span className="text-[#00A39B]"> Technology and Memorable Experiences</span></h2>
        <h2 className="mt-4 text-lg">Speed. Reliability. Beyond Boundaries.</h2>
        <h2 className="mt-4 text-lg">Transforming <span className="text-[#00A39B]">Communities</span> , One Connection at a <span className="text-[#00A39B]"></span> Time.</h2>

        
      </div>
    </section>
  );
};

export default HeroSection;

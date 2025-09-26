import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTrail, animated as a } from "@react-spring/web";
import heroVideo from "../assets/videos/Smart City Digital City Video.mp4";
import AnimatedSubtitles from "./AnimatedSubtitles";

// Trail animation component
const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 30 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div
          key={index}
          style={{
            ...style,
            overflow: "hidden",
            display: "inline-block",
            marginRight: "0.25rem",
          }}
        >
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

const HeroSection = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    return scrollYProgress.onChange((v) => {
      if (v < 0.2) setActiveIndex(0);
      else if (v < 0.4) setActiveIndex(1);
      else if (v < 0.6) setActiveIndex(2);
      else setActiveIndex(3);
    });
  }, [scrollYProgress]);

  // Headline animations
  const headlineScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

  return (
    <section
      ref={containerRef}
      className="relative w-screen h-screen overflow-hidden"
      style={{
        scrollSnapAlign: "start",
        width: "100vw",
        height: "100vh",
        minHeight: "100vh",
        position: "relative",
        margin: 0
      }}
    >
      {/* Background video with subtle rolling b-roll (slow zoom) */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1 }}
        animate={{ scale: 1.06 }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover"
          }}
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        {/* Sticky headline */}
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold leading-tight max-w-6xl"
          style={{
            scale: headlineScale,
            opacity: headlineOpacity,
            position: "sticky",
            top: "20vh",
            zIndex: 10,
          }}
        >
          Fiber One Asia
        </motion.h1>

        {/* Subtitles */}
        <div className="mt-12 max-w-4xl">
          <AnimatedSubtitles />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

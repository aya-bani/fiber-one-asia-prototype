import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import globeGif from "../assets/videos/output-onlinegiftools-ezgif.com-crop.gif";

export default function FiberOneAsia() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth zoom-in for the heading
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.1]);

  return (
    <section
      ref={containerRef}
      className="h-screen flex items-center justify-center bg-white"
    >
      <motion.div
        style={{ scale }}
        className="flex flex-col items-center text-gray-900 space-y-4"
      >
        {/* Top row: FIBER + Globe + NE */}
        <div className="flex items-center gap-4">
          <h1 className="text-5xl md:text-9xl font-extrabold leading-none">
            FIBER
          </h1>
          <motion.img
            src={globeGif}
            alt="Spinning Earth"
            className="w-20 h-20 md:w-32 md:h-32 object-contain"
          />
          <h1 className="text-5xl md:text-9xl font-extrabold leading-none">
            NE
          </h1>
        </div>

        {/* Bottom row: ASIA */}
        <h1 className="text-5xl md:text-9xl font-extrabold leading-none">
          ASIA
        </h1>
      </motion.div>
    </section>
  );
}

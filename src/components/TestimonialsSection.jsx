import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const VideoSection = () => {
  const ref = useRef(null);

  // Track scroll progress of the section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"] // start animating when video enters viewport
  });

  // Map scroll progress (0 to 1) to scale range (1 to 1.6)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.6]);

  return (
    <motion.div
      ref={ref}
      className="relative max-w-4xl mx-auto overflow-hidden rounded-2xl"
      style={{ scale }}
    >
      {/* Video Container */}
      <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/src/assets/videos/technology.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Text Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
          <div className="p-8 w-full">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              See Our Work in Action
            </h3>
            <p className="text-white/90 text-lg md:text-xl mb-6 leading-relaxed">
              Watch how we transform businesses with cutting-edge AV solutions
            </p>
            <button className="bg-gradient-to-r from-[#00A39B] to-[#008F87] text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoSection;

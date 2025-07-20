import { motion } from "framer-motion";
import VideoPlayer from "./VideoPlayer";

const HeroSection = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2
      }
    }
  };

  const leftContentVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const videoVariants = {
    hidden: { 
      opacity: 0, 
      x: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };



  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 flex items-center justify-center relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(0, 163, 155, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(0, 163, 155, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(0, 163, 155, 0.3) 0%, transparent 50%)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Grid layout */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          className="text-white space-y-8"
          variants={leftContentVariants}
        >
          {/* Badge */}
          <motion.div
            className="inline-block bg-gradient-to-r from-[#00A39B] to-[#008F87] text-white px-4 py-2 rounded-full text-sm font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            CONNECTING ASIA WITH FIBER
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            variants={floatingVariants}
            animate="animate"
          >
            <span className="text-[#00A39B]">Fiber One Asia</span>
            <br />
            <span className="text-white">Solutions</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Transform your business with cutting-edge fiber optic technology, 
            intelligent networking solutions, and seamless connectivity across Asia.
          </motion.p>

          {/* Benefits */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-[#00A39B] rounded-full"></div>
              <span className="text-gray-300">High-Speed Connectivity</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-[#00A39B] rounded-full"></div>
              <span className="text-gray-300">Reliable Infrastructure</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-[#00A39B] rounded-full"></div>
              <span className="text-gray-300">24/7 Support</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-[#00A39B] to-[#008F87] text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-[#00A39B]/30 transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 163, 155, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              GET A DEMO
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "white",
                color: "#1f2937"
              }}
              whileTap={{ scale: 0.95 }}
            >
              TALK TO SALES
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Video Section */}
        <motion.div
          className="relative"
          variants={videoVariants}
        >
          <VideoPlayer 
            title="Fiber Network Demo"
            subtitle="Click to play video"
            showOverlay={true}
            // Add your video file here when ready:
            // videoSrc="/path/to/your/video.mp4"
            // posterSrc="/path/to/your/poster.jpg"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{
              y: [0, 12, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;

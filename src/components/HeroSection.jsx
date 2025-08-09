import { motion, useScroll, useTransform } from "framer-motion";
import heroBg from "../assets/images/hero section.png";

const HeroSection = () => {
  const { scrollYProgress } = useScroll();

  // Scroll animations
  const textSpacing = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 20, 60, 100]);
  const imageScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 0.8, 1, 1.2]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.3, 1, 1]);

  // Animation variants
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
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const videoVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div className="text-white space-y-8" variants={leftContentVariants}>
          
          {/* Badge */}
          <motion.div
            className="inline-block bg-gradient-to-r from-[#00A39B] to-[#008F87] text-white px-4 py-2 rounded-full text-sm font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            INNOVATION IN EVERY CONNECTION
          </motion.div>

          {/* Headline */}
          <motion.div
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-xl flex items-center justify-center lg:justify-start"
            variants={floatingVariants}
            animate="animate"
          >
            <span className="text-white">Fiber</span>

            {/* Logo Image */}
            <motion.div
              className="relative mx-2 lg:mx-4 overflow-hidden rounded-full"
              style={{ scale: imageScale, opacity: imageOpacity }}
            >
              <motion.img
                src="src/assets/images/logo fiber_one.png"
                alt="Fiber One Asia Logo"
                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
                style={{ filter: "drop-shadow(0 4px 8px rgba(0, 163, 155, 0.3))" }}
              />
            </motion.div>

            <motion.span
              className="text-white"
              style={{ marginLeft: textSpacing }}
            >
              One Asia
            </motion.span>
          </motion.div>

          {/* Sub-headline */}
          <motion.p
            className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-lg drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Experience the next generation of connectivity. Ultra-fast, ultra-reliable, 
            and built for tomorrow's digital world. Join the leaders who trust Fiber One Asia 
            to power their growth.
          </motion.p>

          {/* Benefits */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {[
              "Lightning-Fast Fiber Networks",
              "Seamless Business Solutions",
              "Trusted Across Asia"
            ].map((text, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#00A39B] rounded-full"></div>
                <span className="text-gray-200">{text}</span>
              </div>
            ))}
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GET A DEMO
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              TALK TO SALES
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Section (optional video or image placeholder) */}
        <motion.div className="relative" variants={videoVariants}>
          {/* Add your video/image component here */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;

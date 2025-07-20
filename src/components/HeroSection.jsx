import { motion } from "framer-motion";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className="h-screen bg-[url('src/assets/images/herosection.png')] bg-cover bg-center flex items-center justify-center relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated background overlay */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      <motion.div
        className="relative z-10 text-center"
        variants={textVariants}
      >
        <motion.h1 
          className="text-white text-4xl md:text-6xl font-bold mb-4"
          variants={floatingVariants}
          animate="animate"
        >
          Welcome to Fiber One Asia
        </motion.h1>
        
        <motion.p
          className="text-white text-lg md:text-xl opacity-90 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Connecting the world through innovative fiber solutions
        </motion.p>
        
        <motion.button
          className="mt-8 px-8 py-3 bg-[#00A39B] text-white rounded-full font-semibold hover:bg-[#008F87] transition-colors"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(0, 163, 155, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;

import { motion } from "framer-motion";

const LoadingSpinner = ({ size = 40, color = "#00A39B" }) => {
  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const dotVariants = {
    animate: (i) => ({
      scale: [1, 1.5, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        delay: i * 0.2,
        ease: "easeInOut"
      }
    })
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="relative"
        variants={spinnerVariants}
        animate="animate"
      >
        {/* Main spinning ring */}
        <motion.div
          className="border-4 border-gray-200 border-t-current rounded-full"
          style={{ 
            width: size, 
            height: size, 
            borderTopColor: color 
          }}
        />
        
        {/* Animated dots around the spinner */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-current rounded-full"
            style={{
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-${size / 2 + 8}px)`,
              backgroundColor: color
            }}
            custom={i}
            variants={dotVariants}
            animate="animate"
          />
        ))}
      </motion.div>
    </div>
  );
};

// Alternative loading animation - Pulse dots
export const PulseLoader = ({ color = "#00A39B" }) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="w-3 h-3 bg-current rounded-full"
          style={{ backgroundColor: color }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// Wave loading animation
export const WaveLoader = ({ color = "#00A39B" }) => {
  return (
    <div className="flex items-center justify-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1 bg-current rounded-full"
          style={{ 
            backgroundColor: color,
            height: "20px"
          }}
          animate={{
            height: ["20px", "40px", "20px"],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default LoadingSpinner; 
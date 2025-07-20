import { motion } from "framer-motion";
import { useState } from "react";

const FloatingActionButton = ({ 
  icon: Icon, 
  onClick, 
  color = "#00A39B",
  size = "large",
  position = "bottom-right",
  children,
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    small: "w-12 h-12",
    medium: "w-14 h-14", 
    large: "w-16 h-16"
  };

  const iconSizes = {
    small: 20,
    medium: 24,
    large: 28
  };

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6",
    "center": "bottom-1/2 right-6 transform translate-y-1/2"
  };

  const floatingVariants = {
    initial: {
      scale: 0,
      rotate: -180,
      opacity: 0
    },
    animate: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.5
      }
    },
    hover: {
      scale: 1.1,
      rotate: 360,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  const rippleVariants = {
    initial: {
      scale: 0,
      opacity: 0.8
    },
    animate: {
      scale: 2,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className={`fixed ${positionClasses[position]} z-50`}
      variants={floatingVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.button
        className={`${sizeClasses[size]} rounded-full shadow-lg flex items-center justify-center relative overflow-hidden cursor-pointer`}
        style={{ backgroundColor: color }}
        onClick={onClick}
        {...props}
      >
        {/* Ripple effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: color }}
            variants={rippleVariants}
            initial="initial"
            animate="animate"
          />
        )}

        {/* Icon */}
        <motion.div
          className="relative z-10 text-white"
          animate={{
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? 180 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          {Icon ? <Icon size={iconSizes[size]} /> : children}
        </motion.div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-0"
          style={{ 
            background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
            filter: "blur(8px)"
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.5 : 1
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      {/* Floating particles effect */}
      {isHovered && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
              }}
              initial={{
                x: 0,
                y: 0,
                opacity: 0.8,
                scale: 0
              }}
              animate={{
                x: Math.cos(i * 60 * Math.PI / 180) * 30,
                y: Math.sin(i * 60 * Math.PI / 180) * 30,
                opacity: 0,
                scale: 1
              }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  );
};

export default FloatingActionButton; 
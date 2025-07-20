import { motion } from "framer-motion";

const CardAbout = ({ icon: Icon, number, name, description, index = 0 }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        delay: index * 0.1 + 0.2,
        duration: 0.5,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: { duration: 0.6 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1 + 0.4,
        duration: 0.5
      }
    }
  };

  const numberVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: index * 0.1 + 0.6,
        duration: 0.5,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.2,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      className="flex flex-col bg-white rounded-xl shadow-md p-6 items-center space-x-4 w-full max-w-sm relative overflow-hidden cursor-pointer"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover={{ 
        y: -10,
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        transition: { duration: 0.3 }
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#B3E0DB]/10 to-[#0E1D2F]/5"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Icon */}
        <motion.div 
          className="p-3 bg-[#B3E0DB] text-[#0E1D2F] rounded-full mb-4"
          variants={iconVariants}
          whileHover="hover"
        >
          <Icon size={28} />
        </motion.div>

        <div className="flex flex-col items-center">
          <motion.h3 
            className="text-lg font-semibold text-gray-800 mb-2"
            variants={textVariants}
          >
            {name}
          </motion.h3>
          
          <motion.span 
            className="text-[#0E1D2F] font-bold text-2xl mb-2"
            variants={numberVariants}
            whileHover="hover"
          >
            {number}
          </motion.span>
          
          <motion.p 
            className="text-gray-600 text-sm text-center"
            variants={textVariants}
          >
            {description}
          </motion.p>
        </div>
      </div>

      {/* Hover indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B3E0DB] to-[#0E1D2F]"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default CardAbout;

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import useModal from "../hooks/useModal";

const cardStyle = {
  background: "#fff",
  padding: "1.5rem",
  borderRadius: "12px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  minHeight: "200px",
};

// Accept icon and iconColor as props
const CardService = ({ title, description, index = 0, image, icon: Icon, iconColor = "#fff" }) => {
  const { isOpen: isModalOpen, openModal, closeModal } = useModal();

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -10,
      scale: 1.03,
      rotateY: 2,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        delay: index * 0.1 + 0.3,
        duration: 0.5,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.6 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        delay: index * 0.1 + 0.4,
        duration: 0.5
      }
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "backOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
    <motion.div
      style={cardStyle}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true, margin: "-50px" }}
        custom={index}
        onClick={openModal}
      >
        {image && (
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            initial={{ scale: 1.1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        )}
        {/* Darker overlay for better text readability */}
        <motion.div
          className="absolute inset-0 bg-black"
          style={{ opacity: 0.55 }} // Increased opacity for darker effect
          initial={{ opacity: 0.55 }}
          whileHover={{ opacity: 0.7 }}
          transition={{ duration: 0.3 }}
        />
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#00A39B]/5 to-[#913880]/5"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="relative z-10">
          {/* Animated icon */}
          <motion.div
            className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
            style={{ background: `linear-gradient(135deg, ${iconColor}33 0%, #22222233 100%)` }}
            variants={iconVariants}
            whileHover="hover"
          >
            {Icon ? (
              <Icon size={32} color={iconColor} />
            ) : (
              <motion.div
                className="text-white text-xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.6 }}
              >
                {title.charAt(0)}
              </motion.div>
            )}
          </motion.div>

          {/* Title */}
          <motion.h3 
            className="text-white font-semibold text-lg mb-2 drop-shadow-lg"
            variants={textVariants}
          >
            {title}
          </motion.h3>

        

          {/* Click indicator */}
          <motion.div
            className="absolute bottom-4 right-4 text-white/70 text-xs"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Click for details →
          </motion.div>

          {/* Hover indicator */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A39B] to-[#913880]"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeModal}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
              onClick={closeModal}
            />
            
            {/* Modal Content */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Background Image */}
              <div className="relative h-48 overflow-hidden">
                {image && (
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(${image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Close Button */}
                <motion.button
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  onClick={closeModal}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </motion.button>

                {/* Title in Header */}
                <div className="absolute bottom-4 left-4 right-4">
                  <motion.h2
                    className="text-white text-2xl font-bold mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {title}
                  </motion.h2>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Service Overview
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {description}
                  </p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="text-md font-semibold text-gray-800 mb-2">
                      Service Description:
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {description}
                    </p>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    className="flex space-x-3 mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.button
                      className="px-6 py-2 bg-[#00A39B] text-white rounded-lg font-medium hover:bg-[#008F87] transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Started
                    </motion.button>
                    <motion.button
                      className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={closeModal}
                    >
                      Close
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
    </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CardService;
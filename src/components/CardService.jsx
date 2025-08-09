import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import useModal from "../hooks/useModal";

const CardService = ({
  title,
  description,
  index = 0,
  image,
  icon: Icon,
  iconColor = "#fff",
}) => {
  const { isOpen: isModalOpen, openModal, closeModal } = useModal();

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <>
      {/* Service Card */}
      <motion.div
        className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover={{ scale: 1.03 }}
        viewport={{ once: true, margin: "-50px" }}
        onClick={openModal}
      >
        {image && (
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${image})`,
            }}
            initial={{ scale: 1.05 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Card Content */}
        <div className="relative z-10 p-6 text-white">
          {/* Icon */}
          {Icon && (
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
              style={{
                background: `linear-gradient(135deg, ${iconColor}33 0%, #00000033 100%)`,
              }}
            >
              <Icon size={32} color={iconColor} />
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-200 line-clamp-3">{description}</p>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeModal}
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
            >
              {/* Modal Header */}
              {image && (
                <div className="relative h-56">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${image})`,
                    }}
                  />
                  <div className="absolute inset-0 bg-black/50" />

                  {/* Close Button */}
                  <button
                    className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full text-white flex items-center justify-center"
                    onClick={closeModal}
                  >
                    ✕
                  </button>
                </div>
              )}

              {/* Modal Body */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="text-gray-700">{description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CardService;

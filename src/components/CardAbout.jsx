import { motion } from "framer-motion";

const CardAbout = ({ icon: Icon, number, name, description, index = 0 }) => {
  // Refined positions for harmonious spacing around the logo
  const positions = [
    { top: "6%", left: "10%", transform: "translate(-100%, 0)" },      // Top left
    { top: "8%", right: "10%", transform: "translate(100%, 0)" },      // Top right
    { top: "38%", left: "6%", transform: "translate(-100%, 0)" },      // Middle left
    { top: "40%", right: "6%", transform: "translate(100%, 0)" },      // Middle right
    { bottom: "10%", left: "10%", transform: "translate(-100%, 0)" },  // Bottom left
    { bottom: "12%", right: "10%", transform: "translate(100%, 0)" },  // Bottom right
  ];

  // Small per-card floating offsets for continuous motion
  const floatOffsets = [
    { x: 6, y: -6 },
    { x: -6, y: -4 },
    { x: 5, y: 5 },
    { x: -5, y: 6 },
    { x: 4, y: -5 },
    { x: -4, y: 4 },
  ];
  const { x: floatX, y: floatY } = floatOffsets[index % floatOffsets.length];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: index * 0.1 + 0.2, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: index * 0.1 + 0.3, duration: 0.3 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.1 + 0.35, duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="absolute bg-white rounded-xl shadow-lg p-4 w-56 max-w-xs cursor-pointer border border-gray-100"
      style={positions[index % positions.length]}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      animate={{ x: [0, floatX, 0], y: [0, floatY, 0] }}
      transition={{ duration: 5 + (index % 3), repeat: Infinity, ease: "easeInOut", repeatType: "mirror", delay: index * 0.2 }}
      whileHover={{ y: -3, scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)", transition: { duration: 0.2 } }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#B3E0DB]/5 to-[#0E1D2F]/5 rounded-xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />

      <div className="relative z-10 flex items-start space-x-3">
        {/* Icon - Left side */}
        <motion.div className="flex-shrink-0 p-2 bg-[#00A39B] text-white rounded-lg" variants={iconVariants}>
          <Icon size={18} />
        </motion.div>

        {/* Content - Right side */}
        <div className="flex-1 min-w-0">
          <motion.h3 className="text-sm font-semibold text-gray-800 mb-1" variants={textVariants}>
            {name}
          </motion.h3>
          <motion.span className="text-[#00A39B] font-bold text-lg mb-1 block" variants={textVariants}>
            {number}
          </motion.span>
          <motion.p className="text-gray-600 text-xs leading-tight" variants={textVariants}>
            {description}
          </motion.p>
        </div>
      </div>

      {/* Simple hover indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00A39B] rounded-b-xl"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};

export default CardAbout;

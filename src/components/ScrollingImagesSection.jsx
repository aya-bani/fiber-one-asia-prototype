import { motion } from "framer-motion";

const ScrollingImagesSection = () => {
  const images = [
    "https://via.placeholder.com/200x100/00A39B/FFFFFF?text=Client+1",
    "https://via.placeholder.com/200x100/008F87/FFFFFF?text=Client+2",
    "https://via.placeholder.com/200x100/007A73/FFFFFF?text=Client+3",
    "https://via.placeholder.com/200x100/006B65/FFFFFF?text=Client+4",
    "https://via.placeholder.com/200x100/005C57/FFFFFF?text=Client+5",
    "https://via.placeholder.com/200x100/004D49/FFFFFF?text=Client+6",
    "https://via.placeholder.com/200x100/003E3B/FFFFFF?text=Client+7",
    "https://via.placeholder.com/200x100/002F2D/FFFFFF?text=Client+8",
  ];

  // Duplicate images for a seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <section className="w-full bg-[#F6F5F4] py-12 overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scroll-container {
          display: flex;
          animation: scroll 30s linear infinite;
        }
        .scroll-wrapper:hover .scroll-container {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#00A39B] mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We partner with organizations across Southeast Asia to deliver exceptional audio-visual solutions
          </p>
        </motion.div>

        {/* Scrolling Images */}
        <div className="relative scroll-wrapper">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Image Strip */}
          <div className="scroll-container gap-8">
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white rounded-lg shadow-md p-4 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={image}
                  alt={`Client ${index + 1}`}
                  className="h-16 w-auto object-contain"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollingImagesSection;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Dynamically import all images from the gallery folder
const imageModules = import.meta.glob(
  "../assets/images/gallery/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);
const images = Object.entries(imageModules).map(([path, src]) => ({
  src,
  alt: path.split("/").pop().replace(/\.[^.]+$/, ""),
}));

const GalleryPage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="min-h-screen bg-gray-50 py-10 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16">
      {/* Header */}
      <motion.div
        className="text-center mb-10 md:mb-14"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00A39B] mb-3">
          Our Gallery
        </h1>
        <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
          A showcase of our projects, events, and team across the APAC region.
        </p>
      </motion.div>

      {/* Responsive image grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {images.map((img, i) => (
          <motion.div
            key={img.alt}
            className="relative overflow-hidden rounded-xl shadow-md cursor-pointer group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            onClick={() => setSelected(img)}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-56 sm:h-48 md:h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected.src}
              alt={selected.alt}
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            {/* Close hint */}
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-white text-3xl font-light transition"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryPage;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCamera, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Dynamically import all images from the gallery folder
const imageModules = import.meta.glob(
  "../assets/images/gallery/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);
const images = Object.entries(imageModules).map(([path, src]) => ({
  src,
  alt: path.split("/").pop().replace(/\.[^.]+$/, ""),
}));

// Masonry-style varied heights for visual interest
const heightPatterns = [
  "h-52", "h-72", "h-60", "h-80", "h-56", "h-68",
  "h-64", "h-48", "h-76", "h-58", "h-70", "h-54",
  "h-66", "h-74", "h-50", "h-62", "h-78",
];

const GalleryPage = () => {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("all");

  const selectedIndex = selected ? images.indexOf(selected) : -1;

  const navigateLightbox = (dir) => {
    const next = (selectedIndex + dir + images.length) % images.length;
    setSelected(images[next]);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 py-10 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16">
      {/* Header */}
      <motion.div
        className="text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
       
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Our <span className="text-[#00A39B]">Gallery</span>
        </h1>
        <p className="text-gray-500 text-sm md:text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
          Explore our projects, installations, and team moments across the APAC region.
        </p>
        {/* Image count badge */}
        
      </motion.div>

      {/* Masonry-style grid with CSS columns for a modern magazine look */}
      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-5 space-y-4 md:space-y-5">
        {images.map((img, i) => (
          <motion.div
            key={img.alt}
            className="relative break-inside-avoid overflow-hidden rounded-2xl shadow-md hover:shadow-xl cursor-pointer group bg-white"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.03, ease: "easeOut" }}
            onClick={() => setSelected(img)}
          >
            <div className="overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-105"
              />
            </div>
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            {/* Bottom label on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-white text-xs font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                View photo
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox modal with navigation */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            {/* Navigation arrows */}
            <button
              className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200"
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>
            <button
              className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200"
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>

            {/* Image */}
            <motion.div
              className="relative"
              onClick={(e) => e.stopPropagation()}
              key={selected.src}
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: [0.25, 0.8, 0.25, 1] }}
            >
              <img
                src={selected.src}
                alt={selected.alt}
                className="max-w-[90vw] max-h-[80vh] rounded-2xl shadow-2xl object-contain"
              />
              {/* Counter badge */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
                {selectedIndex + 1} / {images.length}
              </div>
            </motion.div>

            {/* Close button */}
            <button
              className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white text-lg transition-all duration-200"
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

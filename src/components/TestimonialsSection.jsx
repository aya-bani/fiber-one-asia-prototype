import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaStar, FaBuilding, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {testimonials} from "../data"
// Animation variants for smooth carousel transitions
const cardVariants = {
  hidden: { opacity: 0, x: 60, scale: 0.95 },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: {
    opacity: 0,
    x: -60,
    scale: 0.95,
    transition: { duration: 0.3, ease: "easeIn" }
  },
  hover: {
    y: -6,
    boxShadow: "0 15px 30px rgba(0, 163, 155, 0.15)",
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => {
  return (
    <article
      tabIndex={0}
      aria-label={`Testimonial from ${testimonial.clientName}, ${testimonial.clientType} located in ${testimonial.location}`}
      className="bg-white/90 backdrop-blur-md rounded-3xl shadow-md p-8 flex flex-col h-full border border-[#00A39B]/20 focus:outline-none focus:ring-4 focus:ring-[#00A39B]/40 transition"
    >
      {testimonial.featured && (
        <div className="absolute top-6 right-6 bg-gradient-to-r from-[#00A39B] to-[#008F87] text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg select-none pointer-events-none">
          Featured
        </div>
      )}

      <div className="text-7xl text-[#00A39B]/25 font-extrabold mb-4 select-none" aria-hidden="true">“</div>

      {/* Star Rating */}
      <div className="flex gap-1 mb-6" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
        {[...Array(testimonial.rating)].map((_, i) => (
          <FaStar
            key={i}
            className="text-[#00A39B] text-xl drop-shadow-sm"
            aria-hidden="true"
          />
        ))}
      </div>

      <p className="text-gray-800 text-lg mb-8 leading-relaxed flex-grow">{testimonial.text}</p>

      <footer className="border-t border-[#00A39B]/20 pt-6 mt-auto">
        <h4 className="font-bold text-gray-900 mb-1 text-xl">{testimonial.clientName}</h4>
        <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <FaBuilding className="text-[#00A39B] text-base" aria-hidden="true" />
            <span className="font-medium">{testimonial.clientType}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#00A39B] text-base" aria-hidden="true" />
            <span className="font-medium">{testimonial.location}</span>
          </div>
        </div>
      </footer>
    </article>
  );
};

// Navigation Arrows Component
const NavigationArrows = ({ onPrev, onNext }) => {
  return (
    <motion.div
      className="flex justify-center gap-8 mb-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      aria-label="Testimonial navigation"
    >
      <motion.button
        onClick={onPrev}
        aria-label="Previous testimonials"
        className="w-14 h-14 border-2 border-[#00A39B]/40 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#00A39B] shadow-md hover:bg-[#00A39B]/10 focus:outline-none focus:ring-4 focus:ring-[#00A39B]/40 transition"
        whileHover={{ scale: 1.1, borderColor: "#00A39B", boxShadow: "0 6px 18px rgba(0, 163, 155, 0.25)" }}
        whileTap={{ scale: 0.95 }}
      >
        <FaChevronLeft className="text-xl" />
      </motion.button>
      <motion.button
        onClick={onNext}
        aria-label="Next testimonials"
        className="w-14 h-14 bg-gradient-to-r from-[#00A39B] to-[#008F87] rounded-full flex items-center justify-center text-white shadow-md hover:from-[#008F87] hover:to-[#007A73] focus:outline-none focus:ring-4 focus:ring-[#00A39B]/50 transition"
        whileHover={{ scale: 1.1, boxShadow: "0 6px 18px rgba(0, 163, 155, 0.3)" }}
        whileTap={{ scale: 0.95 }}
      >
        <FaChevronRight className="text-xl" />
      </motion.button>
    </motion.div>
  );
};

// Call to Action Component
const CallToAction = () => {
  return (
    <motion.section
      className="bg-gradient-to-br from-white/90 to-white/75 backdrop-blur-md rounded-3xl shadow-2xl p-12 text-center max-w-4xl mx-auto border border-white/30"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      whileHover={{ y: -3, boxShadow: "0 15px 30px rgba(0, 163, 155, 0.15)" }}
      tabIndex={-1}
    >
      <motion.h3
        className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        Join Our Satisfied Clients
      </motion.h3>
      <motion.p
        className="text-gray-700 text-xl md:text-2xl mb-10 leading-relaxed max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        Experience professional AV solutions tailored for your business
      </motion.p>
      <motion.button
        className="bg-gradient-to-r from-[#00A39B] to-[#008F87] text-white px-14 py-5 rounded-3xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#00A39B]/60"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 10px 30px rgba(0, 163, 155, 0.3)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started Today
      </motion.button>
    </motion.section>
  );
};

// Testimonials Data (unchanged)

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPages = Math.ceil(testimonials.length / 3);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 via-blue-50/40 to-[#00A39B]/10 py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 select-none"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-7 py-3 border-2 border-[#00A39B]/30 rounded-full mb-6 bg-white/80 backdrop-blur-md shadow-lg"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
          >
            <FaStar className="text-[#00A39B] text-base" />
            <span className="text-sm font-semibold text-gray-700">Client Testimonials</span>
          </motion.div>
          
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            What Our Clients Say
          </motion.h2>
        </motion.div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14 min-h-[430px]">
          <AnimatePresence mode="wait">
            {testimonials.slice(currentIndex * 3, currentIndex * 3 + 3).map((testimonial, index) => (
              <motion.div
                key={`${currentIndex}-${testimonial.id}`}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
                className="w-full"
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <NavigationArrows onPrev={prevTestimonial} onNext={nextTestimonial} />

        {/* Call to Action */}
        <CallToAction />
      </div>
    </section>
  );
};

export default TestimonialsSection;

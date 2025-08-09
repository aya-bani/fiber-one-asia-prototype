import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useRef } from "react";
import { FaStar, FaBuilding, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.3, ease: "easeIn" } }
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 relative h-full border border-white/20">
      {testimonial.featured && (
        <div className="absolute top-6 right-6 bg-gradient-to-r from-[#00A39B] to-[#008F87] text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
          Featured
        </div>
      )}
      <div className="text-7xl text-[#00A39B]/20 font-bold mb-4">"</div>
      <div className="flex gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FaStar key={i} className="text-[#00A39B] text-xl drop-shadow-sm" />
        ))}
      </div>
      <p className="text-gray-700 text-base mb-8 leading-relaxed">{testimonial.text}</p>
      <div className="border-t border-[#00A39B]/20 pt-6 mt-auto">
        <h4 className="font-bold text-gray-900 mb-3 text-lg">{testimonial.clientName}</h4>
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <FaBuilding className="text-[#00A39B] text-base" />
            <span className="font-medium">{testimonial.clientType}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#00A39B] text-base" />
            <span className="font-medium">{testimonial.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Navigation Arrows Component
const NavigationArrows = ({ onPrev, onNext }) => {
  return (
    <motion.div
      className="flex justify-center gap-6 mb-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      <motion.button
        onClick={onPrev}
        className="w-14 h-14 border-2 border-[#00A39B]/30 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-[#00A39B]/5 transition-all duration-300 shadow-lg"
        whileHover={{ scale: 1.05, borderColor: "#00A39B" }}
        whileTap={{ scale: 0.95 }}
      >
        <FaChevronLeft className="text-[#00A39B] text-lg" />
      </motion.button>
      <motion.button
        onClick={onNext}
        className="w-14 h-14 bg-gradient-to-r from-[#00A39B] to-[#008F87] rounded-xl flex items-center justify-center hover:from-[#008F87] hover:to-[#007A73] transition-all duration-300 shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaChevronRight className="text-white text-lg" />
      </motion.button>
    </motion.div>
  );
};

// Smooth Scroll Zoom Video Section
const VideoSection = () => {
  const ref = useRef(null);

  // Track scroll progress of the section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"] // animation from entering to leaving viewport
  });

  // Map progress to scale
  const rawScale = useTransform(scrollYProgress, [0, 1], [1, 1.6]);

  // Smooth spring animation for buttery effect
  const scale = useSpring(rawScale, {
    stiffness: 50,
    damping: 20,
    mass: 0.5
  });

  return (
    <motion.div
      ref={ref}
      className="relative max-w-4xl mx-auto overflow-hidden rounded-2xl"
      style={{ scale }}
    >
      <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/src/assets/videos/technology.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
          <div className="p-8 w-full">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              See Our Work in Action
            </h3>
            <p className="text-white/90 text-lg md:text-xl mb-6 leading-relaxed">
              Watch how we transform businesses with cutting-edge AV solutions
            </p>
            <button className="bg-gradient-to-r from-[#00A39B] to-[#008F87] text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const testimonials = [
  {
    id: 1,
    text: "Overall, good support and response from Fiber One.",
    rating: 5,
    clientName: "Statutory Board in Singapore",
    clientType: "Regular Customer",
    location: "Singapore",
    featured: false
  },
  {
    id: 2,
    text: "Fiber One is responsive and provides professional services to client.",
    rating: 5,
    clientName: "Government Office in Singapore",
    clientType: "Regular Customer",
    location: "Singapore",
    featured: false
  },
  {
    id: 3,
    text: "Fiber One team has two recent projects for us and the workmanship was really good and we are really satisfied with the projects they have done with us.",
    rating: 5,
    clientName: "Scientific and Technical Research Organization",
    clientType: "Regular Customer",
    location: "Singapore",
    featured: true
  },
  {
    id: 4,
    text: "Fiber One is responsive and provides professional services to client.",
    rating: 5,
    clientName: "Government Office in Singapore",
    clientType: "Regular Customer",
    location: "Singapore",
    featured: false
  },
  {
    id: 5,
    text: "In just 8 years of business partnership, Fiber One has grown to become a key partner for providing professional Audio Video solutions to all our end customers in various vertical market...",
    rating: 5,
    clientName: "Leading Professional AV Solutions Manufacturer Headquartered in US",
    clientType: "Regular Customer",
    location: "Singapore",
    featured: false
  },
  {
    id: 6,
    text: "We are pleased to have Fiber One Asia Pte Ltd as our preferred Authorized Partner for Commercial Displays...",
    rating: 5,
    clientName: "Multinational Electronics and Information Technology Company",
    clientType: "Regular Customer",
    location: "Singapore",
    featured: false
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 via-blue-50/30 to-[#00A39B]/5 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 border-2 border-[#00A39B]/30 rounded-full mb-6 bg-white/80 backdrop-blur-sm shadow-lg"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <FaStar className="text-[#00A39B] text-base" />
            <span className="text-sm font-semibold text-gray-700">Client Testimonials</span>
          </motion.div>
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            What Our Clients Say
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <AnimatePresence mode="wait">
            {testimonials
              .slice(currentIndex * 3, currentIndex * 3 + 3)
              .map((testimonial, index) => (
                <motion.div
                  key={`${currentIndex}-${testimonial.id}`}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ delay: index * 0.1 }}
                  className="w-full"
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        <NavigationArrows onPrev={prevTestimonial} onNext={nextTestimonial} />

        <VideoSection />
      </div>
    </section>
  );
};

export default TestimonialsSection;

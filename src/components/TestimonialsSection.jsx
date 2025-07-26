import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaStar, FaBuilding, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Animation variants for smooth carousel transitions
const cardVariants = {
  hidden: { 
    opacity: 0, 
    x: 50
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  },
  hover: {
    y: -3,
    boxShadow: "0 10px 25px rgba(0, 163, 155, 0.1)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const starVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: "easeOut"
    }
  })
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial, index }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 relative h-full border border-white/20">
      {/* Featured Tag */}
      {testimonial.featured && (
        <div className="absolute top-6 right-6 bg-gradient-to-r from-[#00A39B] to-[#008F87] text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
          Featured
        </div>
      )}

            {/* Large Quotation Mark */}
      <div className="text-7xl text-[#00A39B]/20 font-bold mb-4">
        "
      </div>

      {/* Star Rating */}
      <div className="flex gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <div key={i}>
            <FaStar className="text-[#00A39B] text-xl drop-shadow-sm" />
          </div>
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 text-base mb-8 leading-relaxed">
        {testimonial.text}
      </p>

      {/* Client Information */}
      <div className="border-t border-[#00A39B]/20 pt-6 mt-auto">
        <h4 className="font-bold text-gray-900 mb-3 text-lg">
          {testimonial.clientName}
        </h4>
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
        whileHover={{ 
          scale: 1.05, 
          borderColor: "#00A39B",
          boxShadow: "0 5px 15px rgba(0, 163, 155, 0.15)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        <FaChevronLeft className="text-[#00A39B] text-lg" />
      </motion.button>
      <motion.button
        onClick={onNext}
        className="w-14 h-14 bg-gradient-to-r from-[#00A39B] to-[#008F87] rounded-xl flex items-center justify-center hover:from-[#008F87] hover:to-[#007A73] transition-all duration-300 shadow-lg"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 5px 15px rgba(0, 163, 155, 0.2)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        <FaChevronRight className="text-white text-lg" />
      </motion.button>
    </motion.div>
  );
};

// Call to Action Component
const CallToAction = () => {
  return (
    <motion.div
      className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl shadow-2xl p-10 text-center max-w-3xl mx-auto border border-white/30"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
      whileHover={{ 
        y: -2,
        boxShadow: "0 10px 25px rgba(0, 163, 155, 0.1)"
      }}
    >
      <motion.h3 
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        Join Our Satisfied Clients
      </motion.h3>
      <motion.p 
        className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        Experience professional AV solutions tailored for your business
      </motion.p>
      <motion.button
        className="bg-gradient-to-r from-[#00A39B] to-[#008F87] text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ 
          scale: 1.03,
          boxShadow: "0 8px 20px rgba(0, 163, 155, 0.2)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started Today
      </motion.button>
    </motion.div>
  );
};

// Testimonials Data
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
    text: "In just 8 years of business partnership, Fiber One has grown to become a key partner for providing professional Audio Video solutions to all our end customers in various vertical market. Besides a local presence in Singapore, Fiber one is expanding regionally in APAC. I am very grateful to the Fiber One team's dedication and the result they have produced has proven to be essential for the growth in our presence in Singapore and beyond.",
    rating: 5,
    clientName: "Leading Professional AV Solutions Manufacturer Headquartered in US",
    clientType: "Regular Customer",
    location: "Singapore",
    featured: false
  },
  {
    id: 6,
    text: "We are pleased to have Fiber One Asia Pte Ltd as our preferred Authorized Partner for Commercial Displays. While being one of fastest growing system integrators in Singapore, as well as a valued partner, your team has also proven their dedication and ownership to projects which you had delivered.",
    rating: 5,
    clientName: "Multinational Electronics and Information Technology Company",
    clientType: "Regular Customer",
    location: "Singapore",
    featured: false
  }
];

// Main Testimonials Section Component
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
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          {/* Badge */}
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
          
          {/* Main Heading */}
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            What Our Clients Say
          </motion.h2>
        </motion.div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <AnimatePresence mode="wait">
            {testimonials.slice(currentIndex * 3, (currentIndex * 3) + 3).map((testimonial, index) => (
              <motion.div
                key={`${currentIndex}-${testimonial.id}`}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ delay: index * 0.1 }}
                className="w-full"
              >
                <TestimonialCard 
                  testimonial={testimonial} 
                  index={index} 
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <NavigationArrows 
          onPrev={prevTestimonial} 
          onNext={nextTestimonial} 
        />

        {/* Call to Action */}
        <CallToAction />
      </div>
    </section>
  );
};

export default TestimonialsSection; 
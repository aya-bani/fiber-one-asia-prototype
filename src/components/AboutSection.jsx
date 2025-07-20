import React from "react";
import { motion } from "framer-motion";
import CardAboutData from "../data";
import CardAbout from "./CardAbout";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <motion.div 
      className="flex flex-col items-center text-center w-full max-w-7xl mx-auto px-4 py-12 space-y-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      
      {/* Top Intro Text */}
      <motion.div 
        className="space-y-4 max-w-3xl"
        variants={textVariants}
      >
        <motion.p 
          className="text-[#00A39B] font-semibold text-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Fiber One Asia <br />
          Connecting people, technology, and experiences.
        </motion.p>

        <motion.p 
          className="text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Founded in <span className="font-semibold">October 2013</span>, Fiber One Asia is a trusted 
          audio-visual and collaboration technology integrator operating across the 
          <span className="font-semibold"> APAC</span> region. With a passion for innovation and excellence, 
          we specialize in delivering comprehensive AV system integration, unified communications, and intelligent 
          automation solutions tailored to modern business needs.
        </motion.p>
      </motion.div>

      {/* Card Grid */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        variants={cardsContainerVariants}
      >
        {CardAboutData.map((item, index) => (
          <CardAbout
            key={index}
            icon={item.icon}
            number={item.static}
            name={item.title}
            description={item.description}
            index={index}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;

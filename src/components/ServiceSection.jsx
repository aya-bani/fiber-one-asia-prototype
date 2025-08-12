// ServicesSection.jsx
import React from "react";
import { motion } from "framer-motion";
import CardService from "./CardService";
import { services } from "../data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const ServicesSection = () => {
  return (
    <div className="bg-[#F6F5F4] py-12">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        <motion.h2
            className="text-4xl font-bold text-[#00A39B]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h2>            
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >            Comprehensive solutions tailored to your business needs.
          </motion.h2>
        </motion.div>

        {/* Services Grid - 2 per row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <CardService
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              index={index}
              icon={service.icon}
              iconColor={service.iconColor}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServicesSection;

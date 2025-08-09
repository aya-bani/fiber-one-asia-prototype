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
    <div className="bg-gray-50 py-12">
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
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your business needs.
          </p>
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

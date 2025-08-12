import React, { useState } from "react";
import { motion } from "framer-motion";
import MapChart from "../components/MapChart"
// import GlobeComponent from "../components/GlobeComponent"
// Brand highlight color
const HIGHLIGHT = "#00A39B";
const BACKGROUND = "#e5e7eb";

// Country data - only the 5 main countries
const countries = [
  { name: "Singapore", label: "Headquarters", code: "SG", type: "city-state" },
  { name: "Malaysia", label: "Regional Office", code: "MY", type: "peninsula" },
  { name: "Indonesia", label: "Regional Office", code: "ID", type: "archipelago" },
  { name: "India", label: "Regional Office", code: "IN", type: "major" },
  { name: "Philippines", label: "Regional Office", code: "PH", type: "archipelago" },
];

const RegionalPresence = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div 
      className="flex flex-col md:flex-row items-center justify-center bg-white  p-8 w-screen"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* SVG Map */}
      <div className="w-full md:w-3/5 flex justify-center">
              <MapChart/>
      </div>

      {/* Country List */}
      <motion.div 
        className="w-full md:w-2/5  md:mt-0 md:ml-8"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
            className="text-4xl font-bold text-[#00A39B] text-center md:text-left "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Regional Presence
          </motion.h2>
        <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight my-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >          Serving clients across the Asia-Pacific region with local expertise and global standards.
        </motion.h2>
        <ul className="space-y-3">
          {countries.map((c, index) => (
            <motion.li
              key={c.code}
              className={`flex items-center justify-between px-4 py-3 rounded-lg shadow-sm border border-gray-200 bg-white transition-all duration-150 ${hovered === c.code ? "ring-2 ring-[#00A39B] bg-[#e6f7f6] shadow-md" : ""}`}
              onMouseEnter={() => setHovered(c.code)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="flex items-center">
                <span className={`w-3 h-3 rounded-full mr-3 ${hovered === c.code ? "bg-[#00A39B]" : "bg-gray-300"}`}></span>
                <span className="font-medium text-gray-800">{c.name}</span>
              </span>
              <span className="text-xs text-gray-500">{c.label}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default RegionalPresence; 
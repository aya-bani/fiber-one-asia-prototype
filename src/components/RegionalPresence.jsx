import React, { useState } from "react";
import { motion } from "framer-motion";
import MapChart from "../components/MapChart"
// import GlobeComponent from "../components/GlobeComponent"
// Brand highlight color
const HIGHLIGHT = "#00A39B";
const BACKGROUND = "#e5e7eb";
const BORDER = "#d1d5db";

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
      className="flex flex-col md:flex-row items-center justify-center bg-white rounded-2xl shadow-lg p-8 max-w-6xl mx-auto my-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* SVG Map */}
      <div className="w-full md:w-2/3 flex justify-center">
              <MapChart/>
      </div>

      {/* Country List */}
      <motion.div 
        className="w-full md:w-1/3 mt-8 md:mt-0 md:ml-8"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center md:text-left mb-6 text-[#00A39B]">Regional Presence</h2>
        <p className="text-gray-600 mb-6 text-center md:text-left">
          Serving clients across the Asia-Pacific region with local expertise and global standards.
        </p>
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
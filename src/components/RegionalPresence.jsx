// RegionalPresence.jsx
import React, { useState } from "react";
import GlobeMap from "./GlobeMap";

const countries = [
  { name: "India", label: "Regional Office" },
  { name: "Singapore", label: "Headquarters" },
  { name: "Malaysia", label: "Regional Office" },
  { name: "Indonesia", label: "Regional Office" },
  { name: "Philippines", label: "Regional Office" },
];

export default function RegionalPresence() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 gap-8">
      {/* Map */}
      <div className="w-full md:w-3/5 h-[600px] rounded-lg shadow-lg overflow-hidden border">
        <GlobeMap hovered={hovered} />
      </div>

      {/* Country list */}
      <div className="w-full md:w-2/5 flex flex-col">
        <h2 className="text-3xl font-bold text-[#00A39B] mb-6">
          Regional Presence
        </h2>
        <ul className="space-y-3">
          {countries.map((c) => (
            <li
              key={c.name}
              onMouseEnter={() => setHovered(c.name)}
              onMouseLeave={() => setHovered(null)}
              className={`flex justify-between items-center px-4 py-3 rounded-lg border shadow-sm transition-all duration-300 cursor-pointer ${
                hovered === c.name
                  ? "bg-[#e6f7f6] border-[#00A39B] shadow-md"
                  : "bg-white border-gray-200 hover:bg-gray-50"
              }`}
            >
              <span className="font-medium text-gray-800">{c.name}</span>
              <span className="text-sm text-gray-500">{c.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

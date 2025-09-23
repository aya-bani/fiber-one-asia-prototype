import React, { useState } from "react";
import MapChart from "./MapChart";

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
    <div className="flex flex-col md:flex-row items-center justify-center p-8">
      {/* Map */}
      <div className="w-full md:w-3/5">
        <MapChart hovered={hovered} />
      </div>

      {/* Country list */}
      <div className="w-full md:w-2/5 mt-8 md:mt-0 md:ml-8">
        <h2 className="text-3xl font-bold text-[#00A39B] mb-4">
          Regional Presence
        </h2>
        <ul className="space-y-3">
          {countries.map((c) => (
            <li
              key={c.name}
              onMouseEnter={() => setHovered(c.name)}
              onMouseLeave={() => setHovered(null)}
              className={`flex justify-between items-center px-4 py-2 rounded-lg border transition-all duration-200 ${
                hovered === c.name
                  ? "bg-[#e6f7f6] border-[#00A39B]"
                  : "bg-white border-gray-200"
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

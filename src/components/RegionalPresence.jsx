import React, { useState } from "react";

// Brand highlight color
const HIGHLIGHT = "#00A39B";

// Country data
const countries = [
  { name: "Singapore", label: "Headquarters", code: "SG" },
  { name: "Malaysia", label: "Regional Office", code: "MY" },
  { name: "Indonesia", label: "Regional Office", code: "ID" },
  { name: "India", label: "Regional Office", code: "IN" },
  { name: "Philippines", label: "Regional Office", code: "PH" },
];

// SVG paths for the 5 countries (simplified for demo; you can replace with more detailed paths)
const countryPaths = {
  SG: "M 670 420 l 5 2 l -2 5 l -5 -2 z", // Singapore (tiny, demo only)
  MY: "M 650 400 l 20 10 l -10 20 l -20 -10 z", // Malaysia
  ID: "M 700 500 l 40 10 l -10 20 l -40 -10 z", // Indonesia
  IN: "M 600 350 l 40 20 l -20 40 l -40 -20 z", // India
  PH: "M 800 450 l 10 20 l -20 10 l -10 -20 z", // Philippines
};

const RegionalPresence = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white rounded-2xl shadow-lg p-8 max-w-5xl mx-auto my-16">
      {/* SVG Map */}
      <div className="w-full md:w-2/3 flex justify-center">
        <svg
          viewBox="500 300 400 300"
          width="100%"
          height="340"
          className="max-w-xl"
        >
          {/* Asia background (light gray) */}
          <path
            d="M 520 320 Q 700 310 850 350 Q 900 400 850 550 Q 700 600 550 500 Q 500 400 520 320 Z"
            fill="#e5e7eb"
          />
          {/* Highlightable countries */}
          {countries.map((c) => (
            <path
              key={c.code}
              d={countryPaths[c.code]}
              fill={hovered === c.code ? HIGHLIGHT : "#b6e4e0"}
              stroke="#008F87"
              strokeWidth={hovered === c.code ? 3 : 1}
              style={{ cursor: "pointer", transition: "all 0.2s" }}
              onMouseEnter={() => setHovered(c.code)}
              onMouseLeave={() => setHovered(null)}
            />
          ))}
        </svg>
      </div>
      {/* Country List */}
      <div className="w-full md:w-1/3 mt-8 md:mt-0 md:ml-8">
        <h2 className="text-2xl font-bold text-center md:text-left mb-6 text-[#00A39B]">Regional Presence</h2>
        <ul className="space-y-3">
          {countries.map((c) => (
            <li
              key={c.code}
              className={`flex items-center justify-between px-4 py-3 rounded-lg shadow-sm border border-gray-200 bg-white transition-all duration-150 ${hovered === c.code ? "ring-2 ring-[#00A39B] bg-[#e6f7f6]" : ""}`}
              onMouseEnter={() => setHovered(c.code)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className="flex items-center">
                <span className={`w-3 h-3 rounded-full mr-3 ${hovered === c.code ? "bg-[#00A39B]" : "bg-gray-300"}`}></span>
                <span className="font-medium text-gray-800">{c.name}</span>
              </span>
              <span className="text-xs text-gray-500">{c.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RegionalPresence; 
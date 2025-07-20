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

const RegionalPresence = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white rounded-2xl shadow-lg p-8 max-w-5xl mx-auto my-16">
      {/* SVG Map */}
      <div className="w-full md:w-2/3 flex justify-center">
        <svg
          viewBox="0 0 900 600"
          width="100%"
          height="340"
          className="max-w-xl"
        >
          {/* Asia background (light gray) */}
          <g>
            {/* The rest of Asia (background) */}
            <path d="M 60 100 Q 300 50 800 100 Q 870 200 800 500 Q 400 600 100 400 Q 30 250 60 100 Z" fill="#e5e7eb" />
          </g>
          {/* India */}
          <path
            d="M 370 270 L 410 320 L 400 370 L 370 390 L 340 350 L 350 300 Z"
            fill={hovered === "IN" ? HIGHLIGHT : "#b6e4e0"}
            stroke="#008F87"
            strokeWidth={hovered === "IN" ? 3 : 1}
            style={{ cursor: "pointer", transition: "all 0.2s" }}
            onMouseEnter={() => setHovered("IN")}
            onMouseLeave={() => setHovered(null)}
          />
          {/* Malaysia */}
          <path
            d="M 480 370 L 500 390 L 510 410 L 490 420 L 470 400 Z"
            fill={hovered === "MY" ? HIGHLIGHT : "#b6e4e0"}
            stroke="#008F87"
            strokeWidth={hovered === "MY" ? 3 : 1}
            style={{ cursor: "pointer", transition: "all 0.2s" }}
            onMouseEnter={() => setHovered("MY")}
            onMouseLeave={() => setHovered(null)}
          />
          {/* Singapore */}
          <circle
            cx="510"
            cy="420"
            r="6"
            fill={hovered === "SG" ? HIGHLIGHT : "#b6e4e0"}
            stroke="#008F87"
            strokeWidth={hovered === "SG" ? 3 : 1}
            style={{ cursor: "pointer", transition: "all 0.2s" }}
            onMouseEnter={() => setHovered("SG")}
            onMouseLeave={() => setHovered(null)}
          />
          {/* Indonesia */}
          <path
            d="M 540 470 L 600 490 L 650 510 L 630 530 L 570 510 L 550 490 Z"
            fill={hovered === "ID" ? HIGHLIGHT : "#b6e4e0"}
            stroke="#008F87"
            strokeWidth={hovered === "ID" ? 3 : 1}
            style={{ cursor: "pointer", transition: "all 0.2s" }}
            onMouseEnter={() => setHovered("ID")}
            onMouseLeave={() => setHovered(null)}
          />
          {/* Philippines */}
          <path
            d="M 700 390 L 720 410 L 710 430 L 690 420 Z"
            fill={hovered === "PH" ? HIGHLIGHT : "#b6e4e0"}
            stroke="#008F87"
            strokeWidth={hovered === "PH" ? 3 : 1}
            style={{ cursor: "pointer", transition: "all 0.2s" }}
            onMouseEnter={() => setHovered("PH")}
            onMouseLeave={() => setHovered(null)}
          />
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
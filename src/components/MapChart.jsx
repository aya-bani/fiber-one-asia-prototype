// MapChart.jsx
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { geoCentroid } from "d3-geo";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function MapChart({ hovered, setHovered }) {
  const mainCountries = ["India", "Singapore", "Malaysia", "Indonesia", "Philippines"];
  
  // Get realistic country positions for labels
  const getCountryPosition = (countryName, geographies) => {
    const country = geographies.find(geo => geo.properties.name === countryName);
    if (country) {
      const centroid = geoCentroid(country);
      
      // Adjust positions for better label placement - labels below flags
      const adjustments = {
        "India": [0, 0],            // Centered on country
        "Singapore": [0, 0],        // Centered on country
        "Malaysia": [0, 0],         // Centered on country
        "Indonesia": [0, 0],        // Centered on country
        "Philippines": [0, 0]       // Centered on country
      };
      
      const adjustment = adjustments[countryName] || [0, 0];
      return [centroid[0] + adjustment[0], centroid[1] + adjustment[1]];
    }
    return null;
  };

  // Real flag colors for each country
  const getFlagColors = (countryName) => {
    const flags = {
      "India": ["#FF9933", "#FFFFFF", "#138808", "#000080"], // Saffron, White, Green, Blue
      "Singapore": ["#ED2939", "#FFFFFF"], // Red, White
      "Malaysia": ["#CE1126", "#FFFFFF", "#0066CC", "#FFCC00"], // Red, White, Blue, Yellow
      "Indonesia": ["#FF0000", "#FFFFFF"], // Red, White
      "Philippines": ["#0038A8", "#CE1126", "#FFFFFF", "#FFD700"] // Blue, Red, White, Gold
    };
    return flags[countryName] || ["#00A39B"];
  };

  return (
    <div className="w-full max-w-6xl mx-auto rounded-lg shadow overflow-hidden">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [100, 15], // Focus on Asia-Pacific
          scale: 350,        // Bigger zoom
        }}
        style={{
          width: "100%",
          height: "600px",
          margin: "0 auto",
          display: "block",
          backgroundColor: "#fff",
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) => (
            <>
              {geographies.map((geo) => {
                const isHovered = geo.properties.name === hovered;
                const isMainCountry = mainCountries.includes(geo.properties.name);

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => setHovered(geo.properties.name)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      default: {
                        fill: isHovered
                          ? "#00A39B"
                          : isMainCountry
                          ? "#9E9E9E"
                          : "#E0E0E0",
                        outline: "none",
                      },
                      hover: {
                        fill: isHovered
                          ? "#00A39B"
                          : isMainCountry
                          ? "#00A39B"
                          : "#bdbdbd",
                        outline: "none",
                        cursor: "pointer",
                      },
                      pressed: {
                        fill: "#757575",
                        outline: "none",
                      },
                    }}
                  />
                );
              })}

              {/* Country Markers with Flags */}
              {mainCountries.map((country) => {
                const position = getCountryPosition(country, geographies);
                const flagColors = getFlagColors(country);
                
                if (!position) return null;

          return (
            <g key={country}>
              {/* Teardrop Pin */}
              <path
                d={`M ${position[0]} ${position[1]} L ${position[0] - 2} ${position[1] + 8} L ${position[0] + 2} ${position[1] + 8} Z`}
                fill="#00A39B"
                stroke="#008B8B"
                strokeWidth="0.5"
              />
              
              {/* Flag Circle */}
              <circle
                cx={position[0]}
                cy={position[1] - 1}
                r="3"
                fill={flagColors[0]}
                stroke="#fff"
                strokeWidth="0.3"
              />
              
                          {/* Real Flag Details */}
                          {country === "India" && (
                            <>
                              {/* Saffron stripe */}
                              <rect x={position[0] - 2.5} y={position[1] - 2.5} width="5" height="1.7" fill={flagColors[0]} />
                              {/* White stripe with Ashoka Chakra */}
                              <rect x={position[0] - 2.5} y={position[1] - 0.8} width="5" height="1.7" fill={flagColors[1]} />
                              <circle cx={position[0]} cy={position[1]} r="0.6" fill={flagColors[3]} />
                              {/* Green stripe */}
                              <rect x={position[0] - 2.5} y={position[1] + 0.8} width="5" height="1.7" fill={flagColors[2]} />
                            </>
                          )}
                          
                          {country === "Singapore" && (
                            <>
                              {/* Red stripe */}
                              <rect x={position[0] - 2.5} y={position[1] - 2.5} width="5" height="2.5" fill={flagColors[0]} />
                              {/* White stripe */}
                              <rect x={position[0] - 2.5} y={position[1]} width="5" height="2.5" fill={flagColors[1]} />
                              {/* Crescent and stars */}
                              <circle cx={position[0] - 1.5} cy={position[1] - 1} r="0.4" fill={flagColors[1]} />
                              <circle cx={position[0] - 1.2} cy={position[1] - 1.2} r="0.3" fill={flagColors[0]} />
                            </>
                          )}
                          
                          {country === "Malaysia" && (
                            <>
                              {/* Red stripes */}
                              <rect x={position[0] - 2.5} y={position[1] - 2.5} width="5" height="1.25" fill={flagColors[0]} />
                              <rect x={position[0] - 2.5} y={position[1] - 0.5} width="5" height="1.25" fill={flagColors[0]} />
                              <rect x={position[0] - 2.5} y={position[1] + 1.5} width="5" height="1.25" fill={flagColors[0]} />
                              <rect x={position[0] - 2.5} y={position[1] + 3.5} width="5" height="1.25" fill={flagColors[0]} />
                              {/* White stripes */}
                              <rect x={position[0] - 2.5} y={position[1] - 1.25} width="5" height="1.25" fill={flagColors[1]} />
                              <rect x={position[0] - 2.5} y={position[1] + 0.25} width="5" height="1.25" fill={flagColors[1]} />
                              <rect x={position[0] - 2.5} y={position[1] + 2.25} width="5" height="1.25" fill={flagColors[1]} />
                              {/* Blue canton */}
                              <rect x={position[0] - 2.5} y={position[1] - 2.5} width="2.5" height="2.5" fill={flagColors[2]} />
                              {/* Crescent and star */}
                              <circle cx={position[0] - 1.2} cy={position[1] - 1} r="0.3" fill={flagColors[1]} />
                            </>
                          )}
                          
                          {country === "Indonesia" && (
                            <>
                              {/* Red stripe */}
                              <rect x={position[0] - 2.5} y={position[1] - 2.5} width="5" height="2.5" fill={flagColors[0]} />
                              {/* White stripe */}
                              <rect x={position[0] - 2.5} y={position[1]} width="5" height="2.5" fill={flagColors[1]} />
                            </>
                          )}
                          
                          {country === "Philippines" && (
                            <>
                              {/* Blue stripe */}
                              <rect x={position[0] - 2.5} y={position[1] - 2.5} width="5" height="2.5" fill={flagColors[0]} />
                              {/* Red stripe */}
                              <rect x={position[0] - 2.5} y={position[1]} width="5" height="2.5" fill={flagColors[1]} />
                              {/* White triangle */}
                              <polygon 
                                points={`${position[0] - 2.5},${position[1] - 2.5} ${position[0] - 2.5},${position[1] + 2.5} ${position[0] - 0.5},${position[1]}`} 
                                fill={flagColors[2]} 
                              />
                              {/* Sun and stars */}
                              <circle cx={position[0] - 1.5} cy={position[1] - 0.5} r="0.3" fill={flagColors[3]} />
                            </>
                          )}
              
                          {/* Country Label - positioned below the flag and pin */}
                          <text
                            x={position[0]}
                            y={position[1] + 12}
                            textAnchor="middle"
                            alignmentBaseline="central"
                            style={{
                              fontFamily: "Arial, sans-serif",
                              fontSize: 11,
                              fill: "#000",
                              fontWeight: "bold",
                              textShadow: "1px 1px 1px rgba(255,255,255,0.9)"
                            }}
                          >
                            {country}
                          </text>
            </g>
          );
        })}
            </>
          )}
        </Geographies>
      </ComposableMap>
    </div>
  );
}

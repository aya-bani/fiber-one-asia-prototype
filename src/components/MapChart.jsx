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
            </>
          )}
        </Geographies>
      </ComposableMap>

      {/* Country names below the map */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 px-4 py-5 bg-gray-50 border-t border-gray-200">
        {mainCountries.map((country) => (
          <button
            key={country}
            onMouseEnter={() => setHovered(country)}
            onMouseLeave={() => setHovered(null)}
            className={`px-4 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-200 cursor-pointer ${
              hovered === country
                ? "bg-[#00A39B] text-white shadow-lg scale-105"
                : "bg-white text-gray-700 border border-gray-200 hover:border-[#00A39B] hover:text-[#00A39B]"
            }`}
          >
            {country}
          </button>
        ))}
      </div>
    </div>
  );
}

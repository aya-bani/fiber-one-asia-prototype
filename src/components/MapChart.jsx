import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { geoCentroid } from "d3-geo";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function MapChart({ hovered }) {
  const mainCountries = ["India", "Singapore", "Malaysia", "Indonesia", "Philippines"];

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
          {({ geographies }) =>
            geographies.map((geo) => {
              const isHovered = geo.properties.name === hovered;
              const isMainCountry = mainCountries.includes(geo.properties.name);
              const centroid = geoCentroid(geo);

              return (
                <g key={geo.rsmKey}>
                  <Geography
                    geography={geo}
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
                  {isHovered && (
                    <text
                      x={centroid[0]}
                      y={centroid[1] - 10} // Slightly above the country
                      textAnchor="middle"
                      alignmentBaseline="central"
                      style={{
                        fontFamily: "Arial, sans-serif",
                        fontSize: 14,
                        fill: "#333",
                        pointerEvents: "none",
                        fontWeight: "bold",
                      }}
                    >
                      {geo.properties.name}
                    </text>
                  )}
                </g>
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}

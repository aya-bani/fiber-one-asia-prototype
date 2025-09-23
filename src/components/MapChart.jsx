import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function MapChart({ hovered }) {
  return (
    <div className="w-full max-w-6xl mx-auto rounded-lg shadow overflow-hidden">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [100, 15],  // Focus on Asia-Pacific
          scale: 350,         // Bigger zoom (increase this number for more zoom)
        }}
        style={{
          width: "100%",
          height: "600px",    // Taller map
          margin: "0 auto",
          display: "block",
          backgroundColor: "#fff",
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isHovered = geo.properties.name === hovered;
              const mainCountries = [
                "India",
                "Singapore",
                "Malaysia",
                "Indonesia",
                "Philippines",
              ];
              const isMainCountry = mainCountries.includes(geo.properties.name);

              return (
                <Geography
                  key={geo.rsmKey}
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
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}

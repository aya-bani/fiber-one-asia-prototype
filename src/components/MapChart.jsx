import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function MapChart() {
  return (
    <div className="w-full  max-w-6xl mx-auto rounded-lg  shadow">
      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          center: [100, 10],
          scale: 400,
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isHighlighted = [
                "India",
                "Singapore",
                "Malaysia",
                "Indonesia",
                "Philippines"
              ].includes(geo.properties.name);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: isHighlighted ? "#00A39B" : "#E0E0E0",
                      outline: "none",
                    },
                    hover: {
                      fill: "#00c9b2",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#009f8a",
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

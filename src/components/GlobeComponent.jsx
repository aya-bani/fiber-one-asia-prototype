// GlobeMap.jsx
import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";

const HIGHLIGHTED_COUNTRIES = [
  "India",
  "Singapore",
  "Malaysia",
  "Indonesia",
  "Philippines"
];

const GlobeMap = () => {
  const globeEl = useRef();
  const [countries, setCountries] = useState({ features: [] });

  // Fetch GeoJSON for countries
  useEffect(() => {
    fetch("https://unpkg.com/world-atlas@2/countries-110m.json")
      .then((res) => res.json())
      .then((worldData) => {
        const countriesData = Globe().topojson.feature(worldData, worldData.objects.countries);
        setCountries(countriesData);
      });
  }, []);

  // Auto-rotate the globe
  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
    }
  }, []);

  return (
    <div className="w-full h-[600px] mx-auto rounded-lg border shadow">
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundColor="#ffffff"
        polygonsData={countries.features}
        polygonCapColor={({ properties }) =>
          HIGHLIGHTED_COUNTRIES.includes(properties.name) ? "#00A39B" : "rgba(200, 200, 200, 0.2)"
        }
        polygonSideColor={() => "rgba(0, 100, 0, 0.05)"}
        polygonStrokeColor={() => "#111"}
        polygonLabel={({ properties }) => properties.name}
        polygonsTransitionDuration={300}
      />
    </div>
  );
};

export default GlobeMap;

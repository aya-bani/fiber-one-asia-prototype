import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import * as topojson from "topojson-client";
import * as THREE from "three";

const GlobeMap = ({ hovered }) => {
  const globeEl = useRef();
  const [countries, setCountries] = useState({ features: [] });

  const HIGHLIGHTED_COUNTRIES = [
    "India",
    "Singapore",
    "Malaysia",
    "Indonesia",
    "Philippines"
  ];

  useEffect(() => {
    fetch("https://unpkg.com/world-atlas@2/countries-110m.json")
      .then((res) => res.json())
      .then((worldData) => {
        const countriesData = topojson.feature(
          worldData,
          worldData.objects.countries
        );
        setCountries(countriesData);
      });
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.4;
      globeEl.current.controls().enableZoom = false;
    }
  }, []);

  return (
    <Globe
      ref={globeEl}
      backgroundColor="#ffffff"
      globeMaterial={new THREE.MeshPhongMaterial({ 
        color: "#e6e6e6",
        shininess: 20,
        emissive: "#000000",
        emissiveIntensity: 0.2
      })}
      polygonsData={countries.features}
      polygonCapColor={({ properties }) => {
        if (properties.name === hovered) return "#00FFD1"; // brighter teal for hover
        return HIGHLIGHTED_COUNTRIES.includes(properties.name)
          ? "#00A39B" // regular highlight
          : "#cccccc"; // non-highlighted countries
      }}
      polygonSideColor={() => "rgba(0,0,0,0.05)"}
      polygonStrokeColor={() => "#666"}
      polygonsTransitionDuration={300}
      labelsData={countries.features.filter((f) =>
        HIGHLIGHTED_COUNTRIES.includes(f.properties.name)
      )}
      labelLat={(d) =>
        d.properties.lat || d.geometry.coordinates[0][1][1]
      }
      labelLng={(d) =>
        d.properties.lng || d.geometry.coordinates[0][1][0]
      }
      labelText={(d) => d.properties.name}
      labelSize={1.8}
      labelDotRadius={0.6}
      labelColor={() => "#111"}
      labelResolution={2}
    />
  );
};

export default GlobeMap;

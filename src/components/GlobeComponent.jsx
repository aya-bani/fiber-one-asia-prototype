// GlobeComponent.jsx
import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';

const GlobeComponent = () => {
  const globeEl = useRef();
  const [countries, setCountries] = useState({ features: [] });

  useEffect(() => {
    // Load GeoJSON for world countries
    fetch('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
      .then(res => res.json())
      .then(data => {
        // Filter only needed countries
        const selected = ["India", "Singapore", "Malaysia", "Indonesia", "Philippines"];
        const filtered = {
          ...data,
          features: data.features.filter(d => selected.includes(d.properties.name))
        };
        setCountries(filtered);
      });

    // Auto-rotate
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 1.2;
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        polygonsData={countries.features}
        polygonCapColor={() => '#913880'}
        polygonSideColor={() => 'rgba(255, 255, 255, 0.15)'}
        polygonStrokeColor={() => '#111'}
        polygonAltitude={0.01}
        polygonLabel={({ properties: d }) => `${d.name}`}
        onPolygonHover={d => globeEl.current.controls().autoRotate = !d}
      />
    </div>
  );
};

export default GlobeComponent;

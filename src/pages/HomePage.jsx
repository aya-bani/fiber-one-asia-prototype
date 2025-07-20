import React from "react";
import ServiceSection from "../components/ServiceSection";
import RegionalPresence from "../components/RegionalPresence";
import AboutSection from "../components/AboutSection"
import HeroSection from "../components/HeroSection"
const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <RegionalPresence />
      <ServiceSection />
    </div>
  );
};

export default HomePage;
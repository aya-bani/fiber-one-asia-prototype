import React from "react";
import ServiceSection from "../components/ServiceSection";
import RegionalPresence from "../components/RegionalPresence";
import AboutSection from "../components/AboutSection"
import HeroSection from "../components/HeroSection"
import Footer from '../components/Footer'
import WhyWorkWithUs from "../components/WhyWorkWithUs";
const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <RegionalPresence />
      <ServiceSection />
      <WhyWorkWithUs/>
      <Footer/>
    </div>
  );
};

export default HomePage;
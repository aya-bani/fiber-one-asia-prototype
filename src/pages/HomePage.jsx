import ServiceSection from "../components/ServiceSection";
import GlobeMap from "../components/GlobeMap";
import AboutSection from "../components/AboutSection"
import HeroSection from "../components/HeroSection"
import Footer from '../components/Footer'
import WhyWorkWithUs from "../components/WhyWorkWithUs";
import TestimonialsSection from "../components/TestimonialsSection";
import ScrollingImagesSection from "../components/ScrollingImagesSection"
import FiberOneAsia from "../components/FiberOneAsia";
import PreFooterSection from "../components/PreFooterSection";
import RegionalPresence from "../components/RegionalPresence";
const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <ScrollingImagesSection/>
      <FiberOneAsia/>
      <AboutSection/>
      <RegionalPresence/>
      <ServiceSection />
      <WhyWorkWithUs/>
      <TestimonialsSection/>
      <PreFooterSection/>
   
    </div>
  );
};

export default HomePage;
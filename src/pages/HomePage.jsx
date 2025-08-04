import ServiceSection from "../components/ServiceSection";
import RegionalPresence from "../components/RegionalPresence";
import AboutSection from "../components/AboutSection"
import HeroSection from "../components/HeroSection"
import Footer from '../components/Footer'
import WhyWorkWithUs from "../components/WhyWorkWithUs";
import TestimonialsSection from "../components/TestimonialsSection";
import ScrollingImagesSection from "../components/ScrollingImagesSection"
const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <ScrollingImagesSection/>
      <AboutSection/>
      <RegionalPresence />
      <ServiceSection />
      <WhyWorkWithUs/>
      <TestimonialsSection/>
      <Footer/>
    </div>
  );
};

export default HomePage;
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AVGuidePage from "./pages/AVGuidePage";
import SolutionPage from "./pages/SolutionPage";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AboutPage from "./pages/AboutPage";

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
 <Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />      {/* default / */}
    <Route path="home" element={<HomePage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="solutions" element={<SolutionPage />} />
    <Route path="av-guide" element={<AVGuidePage />} />
    <Route path="contact" element={<ContactPage />} />
  </Route>
</Routes>

  );
}

export default App;

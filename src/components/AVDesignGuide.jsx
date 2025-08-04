import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Download, BookOpen, Maximize2, Minimize2, ArrowRight } from "lucide-react";

const AVDesignGuide = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const pages = [
    {
      id: 1,
      title: "ORGANISATION, KNOWLEDGE, AND EXPERTISE",
      content: {
        left: {
          title: "",
          text: "Our team specializes in equipment selection and audio visual products, focusing on delivering exceptional client projects through strategic product choices and innovative solutions."
        },
        middle: {
          title: "ACCREDITATION",
          text: "We are committed to having the best people and continually trained staff with multiple industry certifications.",
          logos: [
            { name: "Extron", type: "Global Certified", color: "bg-blue-600" },
            { name: "CRESTRON", type: "Global Certified", color: "bg-red-600" },
            { name: "Fullscreen", type: "", color: "bg-purple-600" },
            { name: "BOSE", type: "Audio DSP", color: "bg-gray-800" },
            { name: "Symetrix", type: "Audio DSP", color: "bg-green-600" }
          ]
        },
        right: {
          title: "SOLUTIONS",
          services: [
            "Interactive Solutions",
            "Command Centre",
            "AV Automation",
            "Intelligent Lighting Control",
            "Room Scheduling",
            "Digital Signage",
            "Video Wall",
            "Video Conference",
            "Artificial Intelligence System"
          ]
        }
      }
    },
    {
      id: 2,
      title: "TECHNOLOGY & INNOVATION",
      content: {
        left: {
          title: "CUTTING-EDGE TECHNOLOGY",
          text: "We leverage the latest advancements in audio-visual technology to create immersive experiences that transform how people interact with digital content."
        },
        middle: {
          title: "CERTIFICATIONS",
          text: "Our team holds certifications from leading technology providers, ensuring we deliver solutions that meet the highest industry standards.",
          logos: [
            { name: "Cisco", type: "Certified Partner", color: "bg-blue-500" },
            { name: "Microsoft", type: "Gold Partner", color: "bg-green-600" },
            { name: "Samsung", type: "Authorized Dealer", color: "bg-blue-800" },
            { name: "LG", type: "Premium Partner", color: "bg-red-500" },
            { name: "Panasonic", type: "Elite Partner", color: "bg-blue-900" }
          ]
        },
        right: {
          title: "SERVICES",
          services: [
            "System Design & Integration",
            "Project Management",
            "Installation & Commissioning",
            "Training & Support",
            "Maintenance & Service",
            "Consulting Services",
            "Custom Development",
            "24/7 Support",
            "Remote Monitoring"
          ]
        }
      }
    },
    {
      id: 3,
      title: "PROJECT PORTFOLIO",
      content: {
        left: {
          title: "SUCCESS STORIES",
          text: "From corporate boardrooms to educational institutions, our projects demonstrate our commitment to excellence and innovation in every installation."
        },
        middle: {
          title: "PARTNERSHIPS",
          text: "We collaborate with industry leaders to bring you the most advanced and reliable audio-visual solutions available.",
          logos: [
            { name: "Harman", type: "Premium Partner", color: "bg-gray-700" },
            { name: "Shure", type: "Authorized Dealer", color: "bg-blue-700" },
            { name: "QSC", type: "Certified Partner", color: "bg-orange-600" },
            { name: "Biamp", type: "Elite Partner", color: "bg-green-700" },
            { name: "Dante", type: "Certified", color: "bg-purple-700" }
          ]
        },
        right: {
          title: "INDUSTRIES",
          services: [
            "Corporate & Enterprise",
            "Education & Training",
            "Healthcare & Medical",
            "Entertainment & Events",
            "Government & Public",
            "Hospitality & Tourism",
            "Retail & Commercial",
            "Transportation",
            "Manufacturing"
          ]
        }
      }
    }
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "ArrowRight") nextPage();
    if (e.key === "ArrowLeft") prevPage();
    if (e.key === "Escape" && isFullscreen) setIsFullscreen(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [currentPage, isFullscreen]);

  const currentPageData = pages[currentPage];

  return (
    <div className={`${isFullscreen ? 'fixed inset-0 z-50 bg-gradient-to-br from-slate-900 to-slate-800' : 'relative'} transition-all duration-500`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-[#00A39B] to-[#008F87] text-white p-6 shadow-2xl relative z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <BookOpen className="w-8 h-8" />
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">FiberONE Asia</h1>
              <p className="text-sm opacity-90">Audio-Visual Design Guide</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-200 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              <span className="ml-2">{isFullscreen ? "Exit Fullscreen" : "Fullscreen"}</span>
            </motion.button>
            <motion.button
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-slate-50 to-slate-100 min-h-[80vh] relative">
        <div className="relative max-w-7xl w-full">
          {/* Page Counter */}
          <div className="text-center mb-8">
            <motion.span 
              className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg text-slate-700 font-medium border border-slate-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Page {currentPage + 1} of {pages.length}
            </motion.span>
          </div>

          {/* Content Container */}
          <div className="relative mx-auto max-w-6xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200"
              >
                {/* Page Header */}
                <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-8 border-b border-slate-200">
                  <motion.h2 
                    className="text-4xl font-bold text-slate-900 text-center mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {currentPageData.title}
                  </motion.h2>
                  <motion.div 
                    className="w-32 h-1 bg-gradient-to-r from-[#00A39B] to-[#008F87] mx-auto rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  />
                </div>

                {/* Page Content */}
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <motion.div 
                      className="space-y-6"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {currentPageData.content.left.title && (
                        <h3 className="text-2xl font-semibold text-[#00A39B] mb-4">
                          {currentPageData.content.left.title}
                        </h3>
                      )}
                      <p className="text-slate-700 leading-relaxed text-lg">
                        {currentPageData.content.left.text}
                      </p>
                    </motion.div>

                    {/* Middle Column */}
                    <motion.div 
                      className="space-y-8"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="text-center">
                        <h3 className="text-2xl font-semibold text-[#00A39B] mb-4">
                          {currentPageData.content.middle.title}
                        </h3>
                        <p className="text-slate-700 leading-relaxed text-lg">
                          {currentPageData.content.middle.text}
                        </p>
                      </div>
                      
                      {/* Certification Logos */}
                      <div className="grid grid-cols-2 gap-4">
                        {currentPageData.content.middle.logos.map((logo, index) => (
                          <motion.div
                            key={index}
                            className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 text-center border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            whileHover={{ 
                              y: -4, 
                              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                              scale: 1.02
                            }}
                          >
                            <div className={`w-16 h-16 ${logo.color} rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                              {logo.name.charAt(0)}
                            </div>
                            <p className="font-semibold text-slate-800 mb-1">{logo.name}</p>
                            {logo.type && (
                              <p className="text-sm text-slate-500">{logo.type}</p>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div 
                      className="space-y-6"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h3 className="text-2xl font-semibold text-[#00A39B]">
                        {currentPageData.content.right.title}
                      </h3>
                      <ul className="space-y-3">
                        {currentPageData.content.right.services.map((service, index) => (
                          <motion.li
                            key={index}
                            className="flex items-center space-x-4 text-slate-700 group"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + index * 0.05 }}
                          >
                            <div className="w-3 h-3 bg-gradient-to-r from-[#00A39B] to-[#008F87] rounded-full flex-shrink-0 shadow-sm group-hover:scale-125 transition-transform duration-200"></div>
                            <span className="text-lg group-hover:text-[#00A39B] transition-colors duration-200">{service}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <motion.button
                onClick={prevPage}
                disabled={currentPage === 0}
                className="bg-white/90 backdrop-blur-sm hover:bg-white px-6 py-3 rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 border border-slate-200 flex items-center space-x-2"
                whileHover={{ scale: 1.05, x: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5 text-slate-700" />
                <span className="font-medium text-slate-700">Previous</span>
              </motion.button>

              <div className="flex space-x-2">
                {pages.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentPage 
                        ? 'bg-gradient-to-r from-[#00A39B] to-[#008F87] scale-125 shadow-lg' 
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextPage}
                disabled={currentPage === pages.length - 1}
                className="bg-white/90 backdrop-blur-sm hover:bg-white px-6 py-3 rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 border border-slate-200 flex items-center space-x-2"
                whileHover={{ scale: 1.05, x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-medium text-slate-700">Next</span>
                <ChevronRight className="w-5 h-5 text-slate-700" />
              </motion.button>
            </div>

            {/* Instructions */}
            <motion.div 
              className="text-center mt-6 text-slate-500 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p>Use arrow keys or click the navigation buttons to navigate</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AVDesignGuide; 
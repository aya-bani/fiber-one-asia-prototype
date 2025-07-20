import React from "react";
import { motion } from "framer-motion";
import CardService from "./CardService";

// Local image imports (you can replace these with your actual images)
const serviceImages = {
  design: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  development: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  consulting: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  seo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  marketing: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  branding: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  testing: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  support: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
};

const ServiceDemo = () => {
  const demoServices = [
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive user experiences",
      image: serviceImages.design,
      details: [
        "User Research and Persona Development",
        "Wireframing and Prototyping",
        "Visual Design and Brand Integration",
        "User Testing and Iteration",
        "Design System Creation",
        "Responsive Design Implementation"
      ]
    },
    {
      title: "Web Development",
      description: "Modern, scalable web applications",
      image: serviceImages.development,
      details: [
        "Frontend Development (React, Vue, Angular)",
        "Backend Development (Node.js, Python)",
        "Database Design and Management",
        "API Development and Integration",
        "Performance Optimization",
        "Deployment and DevOps"
      ]
    },
    {
      title: "Digital Marketing",
      description: "Data-driven marketing strategies",
      image: serviceImages.marketing,
      details: [
        "Search Engine Marketing (SEM)",
        "Social Media Marketing",
        "Content Marketing Strategy",
        "Email Marketing Campaigns",
        "Analytics and Reporting",
        "Conversion Rate Optimization"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Interactive Service Cards
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Click on any service card to see detailed information in a beautiful modal popup. 
            Each card features a background image and smooth animations.
          </p>
        </motion.div>

        {/* Demo Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {demoServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
            >
              <CardService
                title={service.title}
                description={service.description}
                image={service.image}
                details={service.details}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Instructions */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              How It Works
            </h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#00A39B] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <span>Hover over any service card to see interactive effects</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#00A39B] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <span>Click on a card to open a detailed modal popup</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#00A39B] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <span>Press ESC or click outside to close the modal</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDemo; 
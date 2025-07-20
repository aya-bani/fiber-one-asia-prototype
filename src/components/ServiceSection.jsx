import React from "react";
import { motion } from "framer-motion";
import CardService from "./CardService";

const services = [
  { 
    title: "Design", 
    description: "UI/UX, Prototyping, Wireframes",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    details: [
      "User Interface (UI) Design",
      "User Experience (UX) Design",
      "Wireframing and Prototyping",
      "Design Systems and Style Guides",
      "Responsive Design Solutions",
      "Interactive Prototypes"
    ]
  },
  { 
    title: "Development", 
    description: "Web, Mobile, Full-Stack",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    details: [
      "Frontend Development (React, Vue, Angular)",
      "Backend Development (Node.js, Python, Java)",
      "Mobile App Development (iOS, Android)",
      "Full-Stack Development",
      "API Development and Integration",
      "Database Design and Management"
    ]
  },
  { 
    title: "Consulting", 
    description: "Architecture, Tech Advice",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    details: [
      "Technology Architecture Planning",
      "System Design and Optimization",
      "Performance Optimization",
      "Security Audits and Recommendations",
      "Scalability Planning",
      "Technology Stack Selection"
    ]
  },
  { 
    title: "SEO", 
    description: "Optimization, Ranking, Audits",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    details: [
      "Search Engine Optimization",
      "Keyword Research and Strategy",
      "On-Page and Off-Page SEO",
      "Technical SEO Audits",
      "Content Optimization",
      "Local SEO Services"
    ]
  },
  { 
    title: "Marketing", 
    description: "Ads, Funnels, Analytics",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    details: [
      "Digital Marketing Strategy",
      "Social Media Marketing",
      "Pay-Per-Click (PPC) Advertising",
      "Email Marketing Campaigns",
      "Conversion Rate Optimization",
      "Marketing Analytics and Reporting"
    ]
  },
  { 
    title: "Branding", 
    description: "Logos, Style Guides",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    details: [
      "Brand Identity Design",
      "Logo Design and Branding",
      "Visual Identity Systems",
      "Brand Guidelines and Style Guides",
      "Marketing Collateral Design",
      "Brand Strategy Development"
    ]
  },
  { 
    title: "Testing", 
    description: "QA, Automation, Reports",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    details: [
      "Quality Assurance Testing",
      "Automated Testing Solutions",
      "Performance Testing",
      "Security Testing",
      "User Acceptance Testing",
      "Test Planning and Documentation"
    ]
  },
  { 
    title: "Support", 
    description: "Maintenance, SLAs, Updates",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    details: [
      "24/7 Technical Support",
      "System Maintenance and Updates",
      "Bug Fixes and Troubleshooting",
      "Performance Monitoring",
      "Backup and Recovery Services",
      "Service Level Agreements (SLAs)"
    ]
  },
];

const containerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "2rem",
  padding: "2rem",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const ServicesSection = () => {
  return (
    <div className="bg-gray-50 py-12">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your business needs. Click on any service to learn more about what we offer.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          style={containerStyle}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <CardService
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              details={service.details}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServicesSection;
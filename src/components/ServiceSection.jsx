import React from "react";
import { motion } from "framer-motion";
import CardService from "./CardService";
import DigitalSignage from "../assets/images/digital signage.png";
import CommandCenter from "../assets/images/Commande Center.png";
import AVAutomation from "../assets/images/AV automation.png";
const services = [
  { 
    title: "Interactive Touch Interface Solutions", 
    description: "Interactive technology helps to improve collaboration in the workplace and classrooms. Interactive displays and projectors are the perfect alternative to whiteboards. They offer a rich collaborative experience for teams with features such as multipoint touch, seamless integration with business apps and video communication.",
    image: DigitalSignage
  },
  { 
    title: "Command Centre", 
    description: "Complex command centers require special consideration for far-reaching technical consideration and long-term support to make sure that the system is running every day of the year. An experienced audio-visual crew is paramount in avoiding any problems along the way and should be consulted during the planning stages of any such system.",
    image: CommandCenter
  },
  { 
    title: "AV Automation", 
    description: "Controls of multiple systems working in a room could become quite complicated to operate. AV automation is necessary to streamline all your business operations with a centralized control solution that lets you manage lights, temperature, shades, security, and commercial audio visual systems from one location.",
    image: AVAutomation
  },
  { 
    title: "Intelligent Lighting Control", 
    description: "With Intelligent Lighting Control, automatically change the lighting mode in your room based on triggers such as occupancy of room, sharing of presentation, boardroom discussion and videoconferencing mode. The intensity of the lights can also be adjusted from a touch screen.",
    image: AVAutomation
  },
  { 
    title: "Chope AI Room Booking", 
    description: "Maximize the use of company space by introducing smarter room booking processes into the workplace. Effectively manage and reduce administration time by making it easier to book meeting and conference rooms.",
    image: AVAutomation
  },
  { 
    title: "Digital Signage", 
    description: "Digital Signages are used to display digital content that typically draws customer’s attention and drives higher engagement. These include solutions such as standard LCD display, video wall, LED displays and special signages.",
    image: DigitalSignage
  },
  { 
    title: "Video Wall", 
    description: "A video wall is a special multi-monitor setup that consists of multiple computer monitors, video projectors, or television sets tiled together contiguously or overlapped in order to form one large screen.",
    image: DigitalSignage
  },
  { 
    title: "Unified Communications and Collaboration", 
    description: "Unified Communications and Collaboration Video conferencing is a live video-based meeting between two or more people in different locations using video-enabled devices. Video conferencing allows multiple people to meet and collaborate face to face long distance by transmitting audio, video, text and presentations in real time through the internet.",
    image: DigitalSignage
  }
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
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServicesSection;
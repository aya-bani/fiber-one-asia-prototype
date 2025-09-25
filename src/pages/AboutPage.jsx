/* eslint-disable no-unused-vars */
import React, { useState, CSSProperties, useEffect } from "react";
import { useTransition, animated, useSpringRef } from "@react-spring/web";
import { motion } from "framer-motion";
import OurDifference from "../components/OurDifference";
import {
  FaRocket,
  FaStar,
  FaHeart,
  FaGlobe,
  FaTwitter,
  FaLinkedin,
  FaLightbulb,
  FaLeaf,
  FaTrophy,
  FaChartLine,
  FaMapMarkerAlt,
  FaUsers,
  FaAward,
  FaBriefcase,
  FaHandshake
} from "react-icons/fa";
import ScrollingImagesSection from "../components/ScrollingImagesSection";
// ---------------- Styles for Hero Section ----------------
const heroStyles = {
  container: {
    position: "relative",
    width: "100%",
    height: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    background: "#f5f5f5",
    borderRadius: "20px",
    marginBottom: "4rem"
  },
  slide: {
    position: "absolute",
    width: "100%",
    height: "100%",
    color: "white",
    fontSize: "3rem",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    position: "absolute",
    bottom: "20px",
    display: "flex",
    gap: "10px"
  },
  button: {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    background: "rgba(255, 255, 255, 0.8)",
    color: "#333",
    fontWeight: "bold"
  }
};

// ---------------- SectionTitle ----------------
const SectionTitle = ({ title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </motion.div>
);

const InfoCard = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 50 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{
      y: -10,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    }}
    className="bg-white text-center p-10 rounded-2xl shadow-lg border border-gray-100 transition cursor-pointer"
  >
    <motion.div
      className="flex justify-center items-center w-20 h-20 rounded-full bg-[#E0F7F6] mx-auto mb-6"
      whileHover={{ scale: 1.1, rotate: 10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Icon className="text-4xl text-[#00A39B]" />
    </motion.div>
    <h3 className="font-bold text-2xl mb-3">{title}</h3>
    <p className="text-lg text-gray-600">{description}</p>
  </motion.div>
);


const TimelineItem = ({ year, title, description, reverse, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, x: reverse ? 70 : -70 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className={`mb-16 flex ${reverse ? "flex-row-reverse" : "flex-row"} items-center`}
  >
    <div className="w-5/12"></div>
    <div className="w-2/12 flex justify-center relative">
      <div className="flex justify-center items-center w-14 h-14 bg-[#00A39B] text-white rounded-full shadow-lg z-10">
        <Icon className="text-2xl" />
      </div>
    </div>
    <div className="w-5/12 bg-white p-8 rounded-2xl shadow border border-gray-100">
      <span className="text-[#00A39B] font-bold text-lg">{year}</span>
      <h3 className="font-semibold text-2xl mb-2">{title}</h3>
      <p className="text-lg text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const TeamMember = ({ img, name, role }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -8, boxShadow: "0 16px 35px rgba(0,0,0,0.12)" }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-2xl shadow border border-gray-100"
  >
    <img
      src={img}
      alt={name}
      className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-[#E0F7F6]"
    />
    <h3 className="font-bold text-2xl">{name}</h3>
    <p className="text-lg text-[#00A39B]">{role}</p>
    <div className="flex justify-center mt-4 space-x-4 text-gray-500 text-xl">
      <a href="#" className="hover:text-[#00A39B]"><FaGlobe /></a>
      <a href="#" className="hover:text-[#00A39B]"><FaTwitter /></a>
      <a href="#" className="hover:text-[#00A39B]"><FaLinkedin /></a>
    </div>
  </motion.div>
);

const StatCard = ({ icon: Icon, value, label }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-white p-10 rounded-2xl shadow-lg text-center border border-gray-100"
  >
    <Icon className="text-4xl text-[#00A39B] mb-4 mx-auto" />
    <h3 className="text-4xl font-extrabold text-gray-800">{value}</h3>
    <p className="text-lg text-gray-600">{label}</p>
  </motion.div>
);

const pages = [
  ({ style }) => (
    <animated.div style={{ ...heroStyles.slide, ...style, background: "#00A39B" }}>
      Propel Your Innovation
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...heroStyles.slide, ...style, background: "#DDF247", color: "#222" }}>
      Creative Solutions
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...heroStyles.slide, ...style, background: "#4ECDC4" }}>
      Accelerate Your Growth
    </animated.div>
  )
];

// ---------------- AboutPage ----------------
export default function AboutPage() {
  const [index, set] = useState(0);
  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
    config: { duration: 1000 }
  });

  useEffect(() => {
    transRef.start();
  }, [index, transRef]);

  const nextSlide = () => {
    set((prev) => (prev + 1) % pages.length);
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section with Click Control */}
      <section>
        <div style={heroStyles.container}>
          {transitions((style, i) => {
            const Page = pages[i];
            return <Page style={style} />;
          })}
          <div style={heroStyles.buttonContainer}>
            <button style={heroStyles.button} onClick={nextSlide}>
              Next
            </button>
          </div>
        </div>
      </section>

      <ScrollingImagesSection />

      {/* Regional Presence */}
      <section className="py-20 bg-white">
        <SectionTitle
          title="Our Regional Presence"
          subtitle="Proudly serving clients and communities across the globe"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            { name: "North America", color: "#FF6B6B" },
            { name: "Europe", color: "#4ECDC4" },
            { name: "Asia", color: "#FFD93D" },
            { name: "Middle East", color: "#6A4C93" },
            { name: "Africa", color: "#1A936F" }
          ].map((region) => (
            <div
              key={region.name}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-10 flex flex-col items-center text-center border border-gray-100"
            >
              <FaMapMarkerAlt size={48} style={{ color: region.color }} className="mb-4" />
              <h3 className="text-xl font-bold">{region.name}</h3>
              <p className="text-gray-500 mt-2">
                Delivering innovative solutions and dedicated support in this region.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#F9FAFB]">
        <SectionTitle
          title="Why Choose Us"
          subtitle="Here's what makes us the trusted choice for our clients"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          <InfoCard
            icon={FaUsers}
            title="Expert Team"
            description="Work with passionate experts who bring years of experience and innovation to every project."
          />
          <InfoCard
            icon={FaHandshake}
            title="Client-Centric"
            description="Your success is our mission — we listen, adapt, and deliver beyond expectations."
          />
          <InfoCard
            icon={FaAward}
            title="Proven Results"
            description="Recognized for delivering impactful solutions that drive measurable growth."
          />
        </div>
      </section>

      {/* Our Difference */}
      <OurDifference />

      {/* Our Journey */}
      <section className="py-20 bg-white">
        <SectionTitle
          title="Our Journey"
          subtitle="From a spark of an idea to a global movement — here’s our story"
        />
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#00A39B]"
          ></motion.div>
          <TimelineItem
            year="2018"
            title="A Bold Beginning"
            description="It all started with a spark — a small team united by a shared dream to innovate beyond limits."
            icon={FaLightbulb}
          />
          <TimelineItem
            year="2020"
            title="Breaking New Ground"
            description="Fueled by our growing expertise, we entered new markets and expanded our reach."
            reverse
            icon={FaLeaf}
          />
          <TimelineItem
            year="2022"
            title="Recognized for Excellence"
            description="Our work began turning heads, earning prestigious awards and recognition."
            icon={FaTrophy}
          />
          <TimelineItem
            year="2024"
            title="Today & Tomorrow"
            description="We’re not slowing down — our mission is to keep innovating, inspiring, and impacting lives."
            reverse
            icon={FaChartLine}
          />
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#F9FAFB]">
        <SectionTitle
          title="Our Impact in Numbers"
          subtitle="A quick look at our achievements so far"
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
          <StatCard icon={FaBriefcase} value="150+" label="Projects Completed" />
          <StatCard icon={FaUsers} value="100+" label="Happy Clients" />
          <StatCard icon={FaAward} value="12" label="Awards Won" />
          <StatCard icon={FaGlobe} value="20+" label="Countries Served" />
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-white">
        <SectionTitle
          title="Meet the Visionaries"
          subtitle="Extraordinary people behind our extraordinary success"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          <TeamMember
            img="https://randomuser.me/api/portraits/women/44.jpg"
            name="Sarah Johnson"
            role="CEO & Founder"
          />
          <TeamMember
            img="https://randomuser.me/api/portraits/men/46.jpg"
            name="Michael Chen"
            role="Technical Director"
          />
          <TeamMember
            img="https://randomuser.me/api/portraits/men/52.jpg"
            name="Alex Rivera"
            role="Lead Designer"
          />
        </div>
      </section>
    </div>
  );
}

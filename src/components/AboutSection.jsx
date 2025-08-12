import { motion } from "framer-motion";
import { CardAboutData } from "../data";
import CardAbout from "./CardAbout";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
   <motion.div
  className="bg-[#D7F4F1] flex flex-col lg:flex-row items-start justify-between w-full  lg:px-16 py-20 space-y-12 lg:space-y-0 lg:space-x-16"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
>

      {/* Left Side - Text Content (2/5 width) */}
      <motion.div
        className="lg:flex-[2] lg:max-w-none space-y-6"
        variants={textVariants}
      >
        {/* Heading */}
        <div className="space-y-3">
          <motion.h3
            className="text-4xl font-bold text-[#00A39B]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About US
          </motion.h3>
          
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            Unifying IT and AV: Communications made easy
          </motion.h2>
        </div>

        {/* Main Content */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p className="text-base text-gray-700 leading-relaxed">
            With over <span className="font-semibold text-[#00A39B]">10 years</span> of trusted expertise, Fiber One Asia is committed to delivering excellence in every project. Your success is our mission, and we make sure to prioritize results that drive growth and impact across the <span className="font-semibold text-[#00A39B]">APAC</span> region.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-2 text-base text-gray-700">
            <li className="flex items-start">
              <span className="text-[#00A39B] font-bold mr-2">•</span>
              <span><span className="font-semibold">15+ countries</span> where our services create lasting value</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#00A39B] font-bold mr-2">•</span>
              <span><span className="font-semibold">1,700+ satisfied clients</span> who trust us</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#00A39B] font-bold mr-2">•</span>
              <span><span className="font-semibold">1,000+ successful projects</span> completed</span>
            </li>
          </ul>

          <p className="text-base text-gray-700 leading-relaxed">
            At Fiber One Asia, we operate across multiple offices in the APAC region, making communication seamless and collaboration easy. Our clients trust us to deliver cutting-edge AV-IT integration solutions that are reliable, efficient, and tailored to their unique needs.
          </p>
        </motion.div>
      </motion.div>

      {/* Right Side - Logo and Cards (3/5 width) */}
      <motion.div
        className="lg:flex-[4] relative lg:min-h-[600px] flex items-center justify-center"
        variants={cardsContainerVariants}
      >
        {/* Company Logo */}
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ 
            delay: 0.2, 
            duration: 0.5,
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }
          }}
        >
          <img src="src\assets\images\logo fiber_one.png" alt="" />
        </motion.div>

        <div className="absolute inset-0">
          {CardAboutData.map((item, index) => (
            <CardAbout
              key={index}
              icon={item.icon}
              number={item.static}
              name={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;

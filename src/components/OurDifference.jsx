import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCogs, 
  FaHeadset, 
  FaChartBar
} from 'react-icons/fa';

const OurDifference = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      y: 20
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const rightItemVariants = {
    hidden: { 
      opacity: 0, 
      x: 50,
      y: 20
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const differenceItems = [
    {
      icon: FaCogs,
      title: "Catch-all solutions for your hybrid workspace.",
      description: "Experience the latest leading-edge technology for seamless collaboration."
    },
    {
      icon: FaHeadset,
      title: "Hassle-free support, anytime, anywhere.",
      description: "Let our support team take care of your collaboration systems, so you can take care of your business."
    },
    {
      icon: FaChartBar,
      title: "Smart, insightful, and actionable analytics.",
      description: "Optimize workplace provisioning and policies based on data-driven insights to drive productivity and resource maximization.",
      statistic: "People Count: 1,233"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Difference
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive end-to-end services create seamless workplace experiences. From technical consulting to final implementation, our in-house experts handle it all.
          </p>
        </motion.div>

        {/* Content Blocks Grid - Two Line Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          {/* First Line - Two Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 h-96">
            {/* First Card - 70% width, 50% height */}
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="lg:col-span-7 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-[#00A39B] transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-800/20 rounded-2xl"></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00A39B] to-[#008B8B] rounded-full flex items-center justify-center shadow-lg">
                    <FaCogs className="text-2xl text-white" />
                  </div>
                </div>

                {/* Title and Description */}
                <div className="text-center flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    Catch-all solutions for your hybrid workspace.
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Experience the latest leading-edge technology for seamless collaboration.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Second Card - 30% width, 100% height */}
            <motion.div
              variants={rightItemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="lg:col-span-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-[#00A39B] transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-800/20 rounded-2xl"></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00A39B] to-[#008B8B] rounded-full flex items-center justify-center shadow-lg">
                    <FaHeadset className="text-2xl text-white" />
                  </div>
                </div>

                {/* Title and Description */}
                <div className="text-center flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                    Hassle-free support, anytime, anywhere.
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    Let our support team take care of your collaboration systems, so you can take care of your business.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Second Line - Full Width Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3 }
            }}
            className="w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-[#00A39B] transition-all duration-300 relative overflow-hidden"
          >
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-800/20 rounded-2xl"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Left side - Icon and Content */}
                <div className="flex flex-col lg:flex-row items-center gap-6 flex-1">
                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#00A39B] to-[#008B8B] rounded-full flex items-center justify-center shadow-lg">
                      <FaChartBar className="text-3xl text-white" />
                    </div>
                  </div>

                  {/* Title and Description */}
                  <div className="text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      Smart, insightful, and actionable analytics.
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Optimize workplace provisioning and policies based on data-driven insights to drive productivity and resource maximization.
                    </p>
                  </div>
                </div>

                {/* Right side - Statistic Block */}
                <div className="flex-shrink-0">
                  <div className="p-6 bg-gradient-to-r from-[#00A39B]/20 to-[#008B8B]/20 rounded-lg border border-[#00A39B]/30">
                    <p className="text-[#00A39B] font-bold text-2xl text-center">
                      People Count: 1,233
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurDifference;

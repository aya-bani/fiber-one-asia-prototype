import { motion } from "framer-motion";
import {
  FaUserTie,
  FaUsers,
  FaLightbulb,
  FaCogs,
  FaCheckCircle,
} from "react-icons/fa";

const features = [
  {
    icon: FaUserTie,
    title: "Industry Experience",
    subtitle: "Multi-sector expertise",
    desc: "Fiber One Asia is constantly building its base of industry knowledge through consulting teams that work across multiple organizations in various sectors.",
  },
  {
    icon: FaUsers,
    title: "Brilliant Team",
    subtitle: "Senior consultants",
    desc: "Our team leverages a network of senior consultants who are passionate about delivering excellence, innovation, and measurable value.",
  },
  {
    icon: FaLightbulb,
    title: "Creative & Professional",
    subtitle: "Quality-driven approach",
    desc: "Our professional approach improves process quality, product quality, and performance to meet business objectives.",
  },
  {
    icon: FaCogs,
    title: "Complex Solutions",
    subtitle: "Future-ready solutions",
    desc: "We go beyond methodology—designing solutions tailored to your current needs and ready to grow with your organization.",
  },
  {
    icon: FaCheckCircle,
    title: "100% Result Guarantee",
    subtitle: "Guaranteed results",
    desc: "Continuous innovation, rapid transformation, and sustainability have defined Fiber One Asia's history of success.",
  },
];

const WhyWorkWithUs = () => {
  return (
    <section className="w-full px-4 py-20 flex flex-col items-center bg-[#D7F4F1]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 w-full max-w-7xl">
        {/* Sticky / Centered Intro Section */}
        <div className="lg:sticky lg:top-20 self-start flex flex-col items-center justify-center text-center  px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 text-[#00A39B] leading-snug"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Why <span className="text-gray-900">Work With Us</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-700 max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Discover what makes{" "}
            <span className="font-semibold text-[#00A39B]">
              Fiber One Asia
            </span>{" "}
            the <span className="font-semibold">preferred technology partner</span> for forward-thinking organizations across Southeast Asia.
          </motion.p>
        </div>

        {/* Scrollable Cards */}
        <div className="flex flex-col gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-6 flex flex-col"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.2 + i * 0.12,
                duration: 0.7,
                type: "spring",
              }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px #00A39B22",
                y: -6,
              }}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#00A39B]/10 mb-4">
                <f.icon size={32} className="text-[#00A39B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {f.title}
              </h3>
              <div className="text-sm font-semibold text-[#00A39B] mb-3 opacity-80">
                {f.subtitle}
              </div>
              <p className="text-gray-600 text-base flex-1">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;

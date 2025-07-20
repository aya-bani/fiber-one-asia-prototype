import  { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Solutions",
    "Gallery",
    "Download AV Book",
    "Contact",
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1
      }
    }
  };

  const mobileLinkVariants = {
    closed: { opacity: 0, x: -20 },
    open: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.nav 
      className="bg-white shadow-md sticky top-0 z-50"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src="src\assets\images\logo fiber_one.png" alt="Fiber One Asia Logo" />
        </motion.div>

        {/* Desktop Links */}
        <motion.ul 
          className="hidden md:flex space-x-6 font-medium"
          variants={navVariants}
        >
          {links.map((link, index) => (
            <motion.li key={index} variants={linkVariants}>
              <motion.a
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-gray-700 hover:text-[#00A39B] transition-colors duration-100 relative"
                whileHover={{ 
                  scale: 1.05,
                  color: "#00A39B"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {link}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00A39B]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden px-4 pb-4 bg-white border-t border-gray-100"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.ul className="space-y-3 font-medium">
              {links.map((link, index) => (
                <motion.li key={index} variants={mobileLinkVariants}>
                  <motion.a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block text-gray-700 hover:text-[#00A39B] transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-50"
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

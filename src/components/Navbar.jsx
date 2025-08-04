import  { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Solutions", path: "/#solutions" },
    { name: "Gallery", path: "/#gallery" },
    { name: "AV Design Guide", path: "/av-guide" },
    { name: "Contact", path: "/contact" },
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
      className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src="src/assets/images/logo fiber_one.png"
            alt="Fiber One Asia Logo"
            className="h-10 w-auto cursor-pointer drop-shadow-md"
            whileHover={{ scale: 1.08, filter: "drop-shadow(0 4px 16px #00A39B33)" }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>

        {/* Desktop Links */}
        <motion.ul 
          className="hidden md:flex space-x-8 font-semibold tracking-wide"
          variants={navVariants}
        >
          {links.map((link, index) => (
            <motion.li key={index} variants={linkVariants} className="relative">
              <motion.div
                className={`relative px-2 py-1 ${
                  location.pathname === link.path ? 'text-[#00A39B]' : 'text-gray-700'
                }`}
              >
                {link.path.startsWith('/#') ? (
                  <motion.a
                    href={link.path}
                    className="hover:text-[#00A39B] transition-colors duration-150"
                    whileHover={{ 
                      scale: 1.07,
                      color: "#00A39B"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.a>
                ) : (
                  <Link to={link.path}>
                    <motion.div
                      className="hover:text-[#00A39B] transition-colors duration-150 cursor-pointer"
                      whileHover={{ 
                        scale: 1.07,
                        color: "#00A39B"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.name}
                    </motion.div>
                  </Link>
                )}
                <motion.span
                  className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#00A39B] rounded-full origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.25, type: "spring" }}
                  style={{ display: "block" }}
                />
              </motion.div>
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
            className="md:hidden px-4 pb-4 bg-white/90 backdrop-blur-md border-t border-gray-100 shadow-lg rounded-b-2xl"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.ul className="space-y-3 font-semibold">
              {links.map((link, index) => (
                <motion.li key={index} variants={mobileLinkVariants}>
                  {link.path.startsWith('/#') ? (
                    <motion.a
                      href={link.path}
                      className="block text-gray-700 hover:text-[#00A39B] transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-50"
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </motion.a>
                  ) : (
                    <Link to={link.path}>
                      <motion.div
                        className="block text-gray-700 hover:text-[#00A39B] transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </motion.div>
                    </Link>
                  )}
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

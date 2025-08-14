import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#0D2A3F] text-white pt-16 pb-8 px-4  rounded-t-3xl shadow-2xl overflow-hidden">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-t-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-12 z-10">
        <div className="flex-1 flex flex-col items-start justify-between min-w-[220px]">
          <img src="src/assets/images/logo fiber_one.png" alt="Fiber One Asia Logo" className="h-12 mb-4 drop-shadow-lg" />
          <p className="text-xl font-bold mb-2 text-[#6BD6CC]">Fiber One Asia</p>
          <p className="text-sm text-white/80 mb-4 max-w-xs">Empowering Asia with next-generation fiber connectivity and smart solutions.</p>
        </div>
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold mb-3 text-[#6BD6CC]">Product</h4>
            <ul className="space-y-2">
              <li><a href="#solutions" className="hover:underline hover:text-[#6BD6CC] transition">Solutions</a></li>
              <li><a href="#services" className="hover:underline hover:text-[#6BD6CC] transition">Services</a></li>
              <li><a href="#gallery" className="hover:underline hover:text-[#6BD6CC] transition">Gallery</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-[#6BD6CC]">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:underline hover:text-[#6BD6CC] transition">About</a></li>
              <li><a href="#contact" className="hover:underline hover:text-[#6BD6CC] transition">Contact</a></li>
              <li><a href="#blog" className="hover:underline hover:text-[#6BD6CC] transition">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-[#6BD6CC]">Support</h4>
            <ul className="space-y-2">
              <li><a href="#faq" className="hover:underline hover:text-[#6BD6CC] transition">FAQ</a></li>
              <li><a href="#help" className="hover:underline hover:text-[#6BD6CC] transition">Help Center</a></li>
              <li><a href="#download" className="hover:underline hover:text-[#6BD6CC] transition">Download AV Book</a></li>
            </ul>
          </div>
        </div>
        {/* Contact Info */}
        <div className="flex-1 min-w-[220px] flex flex-col gap-3">
          <h4 className="font-bold mb-3 text-[#6BD6CC]">Contact Us</h4>
          <div className="flex items-center gap-3 text-white/90">
            <FaMapMarkerAlt className="text-[#6BD6CC]" />
            <span>123 Fiber Lane, Singapore 123456</span>
          </div>
          <div className="flex items-center gap-3 text-white/90">
            <FaEnvelope className="text-[#6BD6CC]" />
            <a href="mailto:info@fiberone.asia" className="hover:underline hover:text-[#6BD6CC] transition">info@fiberone.asia</a>
          </div>
          <div className="flex items-center gap-3 text-white/90">
            <FaPhone className="text-[#6BD6CC]" />
            <a href="tel:+6512345678" className="hover:underline hover:text-[#6BD6CC] transition">+65 1234 5678</a>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <a href="#" className="hover:text-[#6BD6CC] transition" aria-label="LinkedIn">
              <FaLinkedin size={28} />
            </a>
            {/* Add more social icons as needed */}
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="relative max-w-7xl mx-auto mt-10 border-t border-white/20" />
      {/* Bottom bar */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 pt-6 text-sm text-white/70 z-10">
        <div className="flex gap-4">
          <a href="#terms" className="hover:underline hover:text-[#6BD6CC] transition">Terms of Use</a>
          <a href="#privacy" className="hover:underline hover:text-[#6BD6CC] transition">Privacy Policy</a>
        </div>
        <div>© {new Date().getFullYear()} Fiber One Asia. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer; 
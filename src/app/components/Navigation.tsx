import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Car } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import Logo from "./image/logo22.jpg";
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },

  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div>
              <img
                src={Logo}
                alt="logo"
                className="h-6 w-6 object-contain"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#00d4ff] to-white bg-clip-text text-transparent">
              Paragon Customs Garage
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-wider transition-all duration-300 hover:text-[#00d4ff] ${location.pathname === link.path
                    ? "text-[#00d4ff]"
                    : "text-white/80"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              className="px-6 py-2.5 bg-gradient-to-r from-[#00d4ff] to-[#0080ff] text-black rounded-lg glow-blue-hover transition-all duration-300"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-[#00d4ff] transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm uppercase tracking-wider transition-all duration-300 hover:text-[#00d4ff] ${location.pathname === link.path
                        ? "text-[#00d4ff]"
                        : "text-white/80"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/booking"
                  className="px-6 py-2.5 bg-gradient-to-r from-[#00d4ff] to-[#0080ff] text-black rounded-lg text-center glow-blue-hover transition-all duration-300"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

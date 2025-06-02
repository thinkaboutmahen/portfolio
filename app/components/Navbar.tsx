'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="text-2xl font-bold gradient-text">
              Portfolio
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex space-x-8"
            >
              <a
                href="#home"
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact
              </a>
            </motion.div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-blue-400 focus:outline-none transition-all duration-300"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-gray-900/95 backdrop-blur-lg shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar; 
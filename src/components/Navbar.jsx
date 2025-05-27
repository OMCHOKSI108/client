import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter, FaTimes, FaBars } from 'react-icons/fa';
import { li } from 'framer-motion/client';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'Resume', path: '/resume' },
    { name: 'Work', path: '/work' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (e, path) => {
    if (path.includes('#')) {
      e.preventDefault();
      const sectionId = path.split('#')[1];
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false); // Close mobile menu after clicking
      }
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold font-poppins"
          >
            <Link to="/" className="text-white hover:text-red-500 transition-colors duration-300">
              Devang<span className="text-red-500">.</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.path}
                  onClick={(e) => handleSectionClick(e, link.path)}
                  className="text-white hover:text-red-500 transition-colors duration-300 text-sm tracking-wider uppercase font-fira"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.button
              className="px-4 py-2 border-2 border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-[#121212] transition-colors duration-300 font-fira"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.location.href = '/hire-me';
              }}
            >
              Hire me
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-16 right-0 w-full h-[calc(100vh-4rem)] bg-black/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.path}
                    onClick={(e) => {
                      handleSectionClick(e, link.path);
                      setIsOpen(false);
                    }}
                    className="text-white hover:text-[#00FF7F] transition-colors duration-300 text-lg tracking-wider uppercase font-fira"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                variants={linkVariants}
                initial="closed"
                animate="open"
                transition={{ delay: navLinks.length * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.location.href = '/hire-me';
                }}
                className="px-6 py-3 border-2 border-[#00FF7F] text-[#00FF7F] rounded-md hover:bg-[#00FF7F] hover:text-[#121212] transition-colors duration-300 font-fira"
              >
                Hire me
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 

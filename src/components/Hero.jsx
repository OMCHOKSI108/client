import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaYoutube, 
  FaXTwitter, 
  FaInstagram, 
  FaDiscord, 
  FaDownload 
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import dhairya from '../assets/dhairya-portrait.png';

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/DEVang0876' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/devang0876/' },
    { icon: FaInstagram, href: 'https://www.instagram.com/__deviiinee_/' },
    { icon: FaXTwitter, href: 'https://x.com/DevangDhandhuk1' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 md:space-y-8 order-2 md:order-1"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.span className="text-red-500 text-sm uppercase tracking-wider font-fira">
                AI and Data Science Engineer
              </motion.span>
              <motion.h1 className="text-3xl md:text-6xl font-bold font-fira">
                Hello I'm{' '}
                <span className="text-red-500">Devang</span>
              </motion.h1>
              <motion.p className="text-base md:text-lg text-gray-300 max-w-lg font-fira">
                I excel at crafting elegant digital experiences that combine
                technical precision with creative innovation.
              </motion.p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.location.href = '/Resume.pdf';
                }}
                className="px-4 md:px-6 py-2 md:py-3 border-2 border-[#00FF7F] text-[#00FF7F] rounded-md hover:bg-[#00FF7F] hover:text-[#121212] transition-colors duration-300 flex items-center space-x-2 font-fira text-sm md:text-base"
              >
                <FaDownload />
                <span>Download CV</span>
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: '#00FF7F' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white flex items-center justify-center hover:border-[#00FF7F] transition-colors duration-300"
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div className="relative order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative w-[20rem] md:w-[26rem] h-[20rem] md:h-[26rem] mx-auto">
              {/* Neon glow effect */}
              <div className="absolute inset-0 bg-red-500/20 blur-xl" />
              
              {/* Rotating circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0.5 border-2 border-dashed border-sky-500 rounded-full"
                style={{
                  clipPath: 'inset(0 0 50% 0)',
                }}
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-6 border-2 border-dotted border-red-500 rounded-full"
                style={{
                  clipPath: 'inset(50% 0 0 0)',
                }}
              />

              {/* Image container */}
              <div className="absolute inset-16 md:inset-20 rounded-full overflow-hidden border-2 border-red-500/30 flex items-center justify-center">
                <img
                  src={dhairya}
                  alt="Devang"
                  className="w-[6rem] md:w-[8rem] object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
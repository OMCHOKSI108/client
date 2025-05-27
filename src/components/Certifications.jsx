import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaCode, FaUserShield, FaAward } from 'react-icons/fa';
import { SiPostman } from 'react-icons/si';
import { useState } from 'react';

const CertificationCard = ({ data, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  const popupVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: 20,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const getRoleColor = (role) => {
    switch (role.toLowerCase()) {
      case 'contributor':
        return 'bg-blue-500/20 text-blue-400';
      case 'admin':
        return 'bg-orange-500/20 text-orange-400';
      case 'expert':
        return 'bg-[#87CEEB]/20 text-[#87CEEB]';
      default:
        return 'bg-yellow-500/20 text-yellow-400';
    }
  };

  const getStatusClasses = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-sky-500/20 text-sky-400';
      case 'In Progress':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'Pending':
        return 'bg-gray-500/20 text-gray-400';
      default:
        return 'bg-red-500/20 text-red-400';
    }
  };

  const getIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'github':
        return <FaGithub className="w-6 h-6 md:w-8 md:h-8" />;
      case 'postman':
        return <SiPostman className="w-6 h-6 md:w-8 md:h-8" />;
      case 'girlscript':
        return <FaCode className="w-6 h-6 md:w-8 md:h-8" />;
      default:
        return <FaAward className="w-6 h-6 md:w-8 md:h-8" />;
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(135, 206, 235, 0.3)' }}
      className="relative bg-white/5 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-[#87CEEB]/20 hover:border-[#87CEEB]/40 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between mb-3 md:mb-4">
        <div className="text-[#87CEEB]">
          {getIcon(data.type)}
        </div>
        <span className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium ${getRoleColor(data.role)}`}>
          {data.role}
        </span>
      </div>
      
      <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2">{data.title}</h3>
      <p className="text-sm md:text-base text-[#87CEEB] mb-1 md:mb-2">{data.organization}</p>
      <p className="text-xs md:text-sm text-gray-400 font-mono">{data.date}</p>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 flex items-center justify-center"
          >
            <p className="text-sm md:text-base text-white text-center leading-relaxed">
              {data.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Database Management System',
      organization: 'Girlscript Open Source Program',
      date: 'April f2024',
      role: 'All India Topper TOP1%',
      type: 'Online',
      description: 'Achieved top 1% rank in the All India Database Management System competition. Demonstrated exceptional skills in SQL, database design, and optimization techniques.',
    },
    {
      id: 2,
      title: 'Data Structure and Algorithm',
      organization: 'NPTEL',
      date: 'July 2023',
      role: 'ELite+Silver',
      type: 'online',
      description: 'Completed the NPTEL course on Data Structures and Algorithms with an Elite+Silver certificate. Gained in-depth knowledge of data structures, algorithms, and their applications in problem-solving.',
    },
    {
      id: 3,
      title: 'AI and DS Foundation:',
      organization: 'Samatrix.io',
      date: 'June 2025',
      role: 'Learner',
      type: 'Technical Training',
      description: 'Completed the Samatrix.io training program, focusing on advanced data structures and algorithms. Gained hands-on experience in implementing complex algorithms and solving real-world problems.',
    },
    {
      id: 4,
      title: 'Kaggle-Python,Intro to MachineLearning',
      organization: 'Kaggle',
      date: 'October 2024',
      role: 'Learner',
      type: 'Online Competition',
      description: 'Participated in Kaggle competitions, focusing on Python programming and machine learning techniques. Developed skills in data preprocessing, feature engineering, and model evaluation.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <motion.h2
            variants={containerVariants}
            className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4 font-fira"
          >
            Certifications
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="w-20 md:w-24 h-1 bg-[#87CEEB] mx-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.id} data={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
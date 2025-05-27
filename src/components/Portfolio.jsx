import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, onOpen }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative group cursor-pointer bg-page"
      onClick={() => onOpen(project)}
    >
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-accent bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
            <p className="text-black">{project.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Lightbox = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        className="max-w-4xl w-full mx-4 bg-[#1a1a1a] rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-[#00FF7F]"
          >
            ×
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-4">{project.title}</h2>
          <p className="text-gray-400 mb-6">{project.description}</p>
          <div className="flex space-x-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[#00FF7F] hover:text-white"
            >
              <FaGithub />
              <span>View Code</span>
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[#00FF7F] hover:text-white"
            >
              <FaExternalLinkAlt />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Employee Performnace Prediction',
      description:
        'A machine learning model to predict employee performance using Python and scikit-learn.',
      image: "/projects/Emp.png",
      github: "https://github.com/OMCHOKSI108/EMPLOYEE-PERFORMANCE-PREDICTION-",
      live: "https://employee-yp79.onrender.com",
      
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates.',
      image: '/projects/taskmanager.jpg',
      github: 'https://github.com/dhairya/taskmanager',
      live: 'https://taskmanager-demo.com',
    },
    {
      title: 'AI Image Generator',
      description:
        'An AI-powered image generation tool using OpenAI and React.',
      image: '/projects/aigenerator.jpg',
      github: 'https://github.com/dhairya/aigenerator',
      live: 'https://aigenerator-demo.com',
    },
    {
      title: 'Fitness Tracker',
      description:
        'A comprehensive fitness tracking application with workout plans.',
      image: '/projects/fitnesstracker.jpg',
      github: 'https://github.com/dhairya/fitnesstracker',
      live: 'https://fitnesstracker-demo.com',
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
    <section id="portfolio" className="py-20 bg-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-black mb-4"
          >
            Projects
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-accent mx-auto"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard project={project} onOpen={setSelectedProject} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Lightbox
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useState, useRef } from 'react';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline Node */}
      <div className="absolute left-0 top-6 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#00FF7F] -translate-x-1/2 z-10">
        <motion.div
          className="absolute inset-0 rounded-full bg-[#00FF7F]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.2, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Project Card */}
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        className="ml-6 md:ml-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-[#00FF7F]/40 transition-all duration-300"
      >
        <div className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            {/* Project Image */}
            <motion.div
              className="w-full md:w-1/3 aspect-video rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Project Content */}
            <div className="flex-1 space-y-3 md:space-y-4">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">{project.title}</h3>
                <p className="text-sm md:text-base text-[#00FF7F] mb-1">{project.role}</p>
                <p className="text-xs md:text-sm text-gray-400">{project.type}</p>
              </div>

              <p className="text-xs md:text-sm text-gray-300">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 bg-sky-500/10 text-sky-500 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sky-500 hover:text-white"
                >
                  <FiGithub />
                  <span>View Code</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sky-500 hover:text-white"
                >
                  <FiExternalLink />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectTimeline = () => {
  const containerRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 100,
    damping: 30
  });

  const glowIntensity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const lineOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  const projects = [
    {
      title: "Employee Performance Prediction and Dashbord",
      role: "Data Scientist & ML Engineer",
      type: "Open Source | Personal",
      description: "Predicting employee performance using ML models and visualizing data through an interactive dashboard.",
      techStack: ["SciKit Learn", "Flask", "Python", "Vercel"],
      github: "https://github.com/OMCHOKSI108/EMPLOYEE-PERFORMANCE-PREDICTION-",
      live: "https://employee-yp79.onrender.com",
      image: "/projects/Emp.png"
    },
    {
      title: "Deviine-AI",
      role: "Machine Learning Engineer",
      type: "AI-based Personal project",
      description: "An AI-based personal assistant that can answer questions and perform tasks using natural language processing.",
      techStack: ["Python", "Flask", "Streamlit", "Gemini API"],
      github: "https://github.com/DEVang0876/Deviine-AI",
      live: "https://deviine-ai.vercel.app",
      image: "/projects/deviine.png"
    },
    {
      title: "AI Image Generator",
      role: "AI Engineer",
      type: "AI-based Personal project",
      description: "An AI-powered image generation tool using diffusers.",
      techStack: ["Python", "Flask", "Streamlit", "Diffusers"],
      github: "https://",
      live: "https://colab.research.google.com/drive/1v_hwIG7XHGtRcG1OlHJU68cT7Q-J-3_Y#scrollTo=rh-iiJutCEQ0",
      image: "/projects/AI-image.png"
    },
    {
      title: "Movie Recommendation System",
      role: "Data Scientist & ML Engineer",
      type: "Open Source | Personal",
      description: "A movie recommendation system that suggests movies based on user preferences using collaborative filtering.",
      techStack: ["Python", "Flask", "Streamlit", "Pandas", "NumPy"],
      github: "https://github.com/DEVang0876/Movie-Recommendation-System-",
      live: "https://samvidhan-path.vercel.app",
      image: "/projects/movie.png"
    },
      {
        title: "Open CV",
        role: "AI Engineer",
        type: "AI-based Personal project",
        description: "A project showcasing various OpenCV functionalities including image processing and computer vision tasks.",
        techStack: ["Python", "OpenCV"],
        github: "https://github.com/DEVang0876/Face-Detection",
        live: "",
        image: "/projects/cv.png"
      }
    ];
  

  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4 font-fira">
            Projects
          </h2>
          <div className="w-20 md:w-24 h-1 bg-[#00FF7F] mx-auto" />
        </motion.div>

        <div ref={ref} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#00FF7F]/20">
            {/* Animated Line */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-[#00FF7F]"
              style={{ 
                height: lineHeight,
                opacity: lineOpacity,
                boxShadow: useTransform(
                  glowIntensity,
                  [0, 1],
                  ['0 0 0px rgba(0, 255, 127, 0)', '0 0 30px rgba(0, 255, 127, 0.8)']
                )
              }}
            />
          </div>

          {/* Project Cards */}
          <div className="space-y-8 md:space-y-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;
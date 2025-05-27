import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({
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
      <div className="absolute left-0 top-6 w-3 h-3 md:w-4 md:h-4 rounded-full bg-sky-500 -translate-x-1/2 z-10">
        <motion.div
          className="absolute inset-0 rounded-full bg-sky-500"
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
        whileHover={{ scale: 1.02 }}          className="ml-6 md:ml-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-sky-500/40 transition-all duration-300"
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
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2 font-fira">{project.title}</h3>
                <p className="text-sm md:text-base text-[#00FF7F] mb-1 font-poppins">{project.role}</p>
                <p className="text-xs md:text-sm text-gray-400 font-poppins">{project.type}</p>
              </div>

              <p className="text-xs md:text-sm text-gray-300 font-poppins">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 md:px-3 py-1 bg-sky-500/10 text-sky-500 rounded-full text-xs font-fira"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 md:gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 md:gap-2 text-white hover:text-sky-500 transition-colors duration-300"
                >
                  <FiGithub className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm font-fira">GitHub</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 md:gap-2 text-white hover:text-[#00FF7F] transition-colors duration-300"
                >
                  <FiExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm font-fira">Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const OrganizationCard = ({ org }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 md:p-6 hover:border-[#00FF7F]/40 transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <img
          src={org.avatar_url}
          alt={org.login}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-[#00FF7F]/30"
        />
        <div>
          <h3 className="text-base md:text-lg font-bold text-white font-fira">{org.login}</h3>
          <p className="text-xs md:text-sm text-gray-400 font-poppins">{org.description || 'No description available'}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Work = () => {
  const [organizations, setOrganizations] = useState([]);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        // Fetch all pages of organizations
        let allOrgs = [];
        let page = 1;
        let hasMore = true;

        while (hasMore) {
          const response = await fetch(`https://api.github.com/users/DEVang0876/orgs?page=${page}&per_page=100`);
          const data = await response.json();
          
          if (data.length === 0) {
            hasMore = false;
          } else {
            allOrgs = [...allOrgs, ...data];
            page++;
          }
        }

        // Sort organizations by name
        allOrgs.sort((a, b) => a.login.localeCompare(b.login));
        setOrganizations(allOrgs);
      } catch (error) {
        console.error('Error fetching organizations:', error);
      }
    };

    fetchOrganizations();
  }, []);

  // const projects = [
  //   {
  //     title: "100 Days 100 Web Projects",
  //     role: "Fullstack Developer",
  //     type: "Open Source | Personal",
  //     description: "A challenge-based project where 100 unique web projects were developed in 100 days to enhance frontend and backend skills.",
  //     techStack: ["React.js", "Tailwind CSS", "Node.js", "Vercel"],
  //     github: "https://github.com/dhairyagothi/100_days_100_web_project",
  //     live: "https://100-days-100-web-project.vercel.app",
  //     image: "/projects/100days.png"
  //   },
  //   {
  //     title: "Waste Sort AI",
  //     role: "ML Model Development / Backend",
  //     type: "Group Project | AI-based",
  //     description: "AI-powered waste classification system using real-time object detection and ML model integration.",
  //     techStack: ["Python", "YOLOv8", "Streamlit", "React.js", "Flask"],
  //     github: "https://github.com/dhairyagothi/wastesort-ai-deployment",
  //     live: "https://waste-sortai.vercel.app",
  //     image: "/projects/wastesort.png"
  //   },
  //   {
  //     title: "Station Saarthi",
  //     role: "Fullstack Developer",
  //     type: "Smart India Hackathon | Gov PS",
  //     description: "A smart navigation system for railway stations designed to guide passengers in real-time.",
  //     techStack: ["React.js", "Node.js", "Google Maps API"],
  //     github: "https://github.com/dhairyagothi/StationGuide",
  //     live: "https://station-guide.vercel.app",
  //     image: "/projects/station.png"
  //   },
  //   {
  //     title: "Samvidhan Path",
  //     role: "Fullstack Developer",
  //     type: "Group Project | Civic Education",
  //     description: "Interactive and educational website to understand the Indian Constitution through a gamified interface.",
  //     techStack: ["React.js", "Tailwind", "Framer Motion", "Node.js"],
  //     github: "https://github.com/dhairyagothi/samvidhan--path",
  //     live: "https://samvidhan-path.vercel.app",
  //     image: "/projects/samvidhan.png"
  //   },
  //   {
  //     title: "Swasthya Saarthi",
  //     role: "Backend Developer",
  //     type: "Hackathon | HealthTech",
  //     description: "A healthcare accessibility platform simplifying digital health for remote areas and common users.",
  //     techStack: ["Node.js", "Express", "MongoDB", "Tailwind", "React.js"],
  //     github: "https://github.com/dhairyagothi/swasthya-saarthi",
  //     live: "https://swasthya-saarthi.vercel.app",
  //     image: "/projects/swasthya.png"
  //   }
  // ];
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4 font-fira">
              My Projects
            </h1>
            <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto font-poppins">
              Explore my latest projects and contributions to the tech community
            </p>
            <div className="w-20 md:w-24 h-1 bg-sky-500 mx-auto mt-3 md:mt-4" />
          </motion.div>

          <div ref={ref} className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#00FF7F]/20" />

            {/* Project Cards */}
            <div className="space-y-8 md:space-y-12">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>

          {/* GitHub Organizations Section */}
          {organizations.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 md:mt-20"
            >
              <h2 className="text-xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center font-fira">
                GitHub Organizations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {organizations.map((org) => (
                  <OrganizationCard key={org.id} org={org} />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Work; 
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaCode, FaUserShield, FaAward, FaDownload } from 'react-icons/fa';
import { SiPostman } from 'react-icons/si';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

// Education Card Component
const EducationCard = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-4 md:mb-6"
    >
      <div className="bg-[#121212] backdrop-blur-sm border border-[#00FF7F]/20 rounded-lg p-3 md:p-4 shadow-lg hover:shadow-[#00FF7F]/20 transition-all duration-300">
        <div className="flex items-start space-x-2 md:space-x-3">
          <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-[#00FF7F]/60">
            <img
              src={data.logo}
              alt={`${data.institution} logo`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-grow">
            <h3 className="text-base md:text-lg font-bold text-white mb-1 font-poppins">
              {data.degree}
            </h3>
            <p className="text-sm md:text-base text-[#00FF7F] font-semibold mb-1 font-poppins">
              {data.institution}
            </p>
            <div className="flex justify-between items-center text-gray-400 text-xs md:text-sm font-fira mb-2">
              <span>{data.duration}</span>
              <span className="text-[#00FF7F]">{data.grade}</span>
            </div>
            {data.details && (
              <ul className="list-disc list-inside text-gray-400 text-xs md:text-sm space-y-1">
                {data.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Experience Card Component
const ExperienceCard = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-4 md:mb-6"
    >
      <div className="bg-[#121212] backdrop-blur-sm border border-[#00FF7F]/20 rounded-lg p-3 md:p-4 shadow-lg hover:shadow-[#00FF7F]/20 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
          <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#00FF7F]/10 rounded-full flex items-center justify-center overflow-hidden">
            <img
              src={data.logo}
              alt={`${data.organization} logo`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-grow">
            <h3 className="text-base md:text-lg font-bold text-white mb-1">{data.title}</h3>
            <p className="text-sm md:text-base text-[#00FF7F] mb-1">{data.organization}</p>
            <div className="flex flex-wrap gap-1 mb-2 text-xs md:text-sm">
              <span className="text-gray-400">{data.duration}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-400">{data.type}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-400">{data.location}</span>
            </div>
            <p className="text-xs md:text-sm text-gray-400 mb-2">{data.description}</p>
            {data.responsibilities && (
              <ul className="list-disc list-inside text-gray-400 text-xs md:text-sm space-y-1 mb-2">
                {data.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            )}
            {data.skills.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {data.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 bg-[#00FF7F]/10 text-[#00FF7F] rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Certification Card Component
const CertificationCard = ({ data }) => {
  const getIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'github':
        return <FaGithub className="w-5 h-5" />;
      case 'postman':
        return <SiPostman className="w-5 h-5" />;
      case 'girlscript':
        return <FaCode className="w-5 h-5" />;
      default:
        return <FaAward className="w-5 h-5" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-4"
    >
      <div className="bg-[#121212] backdrop-blur-sm border border-[#00FF7F]/20 rounded-lg p-4 shadow-lg hover:shadow-[#00FF7F]/20 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
          <div className="text-[#00FF7F] mt-1">
            {getIcon(data.type)}
          </div>
          <div className="flex-grow">
            <h3 className="text-md font-bold text-white">{data.title}</h3>
            <div className="flex flex-wrap items-center text-xs space-x-2 mb-2">
              <span className="text-[#00FF7F]">{data.organization}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-400">{data.date}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-400">{data.role}</span>
            </div>
            {data.details && (
              <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                {data.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-6"
    >
      <div className="bg-[#121212] backdrop-blur-sm border border-[#00FF7F]/20 rounded-lg p-4 shadow-lg hover:shadow-[#00FF7F]/20 transition-all duration-300">
        <div className="flex flex-col space-y-3">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-2 sm:space-y-0">
            <div>
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
              <p className="text-[#00FF7F] text-sm">{project.role} | {project.type}</p>
            </div>
            <div className="flex space-x-2">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00FF7F]"
              >
                <FiGithub className="w-4 h-4" />
              </a>
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00FF7F]"
              >
                <FiExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
          <p className="text-gray-400 text-sm">{project.description}</p>
          <div className="flex flex-wrap gap-1">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-0.5 bg-[#00FF7F]/10 text-[#00FF7F] rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Resume Component
const ResumeNew = () => {
  const educationData = [
    {
      id: 1,
      institution: 'Charotar University of Science and Technology',
      logo: '/logos/vit.png',
      degree: 'BTech(AIML)',
      duration: 'Aug 2023 – Jul 2027',
      grade: '8.83 CGPA',
      details: []
    },
    {
      id: 2,
      institution: 'Gujrat Secondary and Higher Secondary Education Board',
      logo: '/logos/cbse.png',
      degree: '12th Senior Secondary, Science',
      duration: 'Mar 2022 – May 2023',
      grade: '82 %ile',
      details: []
    },
    {
      id: 3,
      institution: 'Gujrat Secondary and Higher Secondary Education Board',
      logo: '/logos/cbse.png',
      degree: '10th Secondary, Science',
      duration: 'Mar 2020 – Apr 2021',
      grade: '93%',
      details: []
    },
  ];

  const experienceData = {
    clubs: [
      {
        id: 1,
        title: 'Techathon: National level Hackathon',
        organization: 'Adani University',
        logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQEAfG-5C8Lv6Q/company-logo_100_100/B4DZVXqxtwHAAQ-/0/1740932588580?e=1751500800&v=beta&t=CAOpIIZT85xsld2u06xPQ8n7W9hnqfXRvxCxVK-DU6U',
        duration: 'Nov 2024 - Present',
        location: 'Ahemdabad, Gujrat, India',
        type: '24 Hours',
        description: 'Participated in a national level hackathon organized by Adani University, focusing on innovative solutions in AI and ML.',
        responsibilities: [
          'Developing a machine learning model for real-time data analysis',
        ],
        skills: ['Machine Learning', 'Data Analysis', 'Problem Solving', 'web development']
      },
      {
        id: 2,
        title: '',
        organization: '',
        logo: '',
        duration: '',
        location: '',
        type: '',
        description: '',
        responsibilities: [
          '',
          ''
        ],
        skills: ['']
      }
    ],
    other: [
      {
        id: 4,
        title: '',
        organization: '',
        logo: '',
        duration: '',
        location: '',
        type: '',
        description: '',
        responsibilities: [
          '',
          '',
        ],
        skills: ['']
      },
      {
        id: 5,
        title: '',
        organization: '',
        logo: '',
        duration: '',
        location: '',
        type:'',
        description: "",
        responsibilities: [
          '',
          '',
        ],
        skills: ['']
      }
    ]
  };

  const certifications = [
    {
      id: 1,
      title: 'NPTEL Databse Management System',
      organization: 'IIT Kharagpur',
      date: 'April 2024',
      role: 'ALL INDIA TOPPER TOP(1%)',
      type: '8 week Online',
      details: [
      ]
    },
    {
      id: 2,
      title: 'NPTEL Data Structures and Algorithms',
      organization: 'IIT Kharagpur',
      date: 'July 2024',
      role: 'ELite+Silver Certified',
      type: '* week Online',
      details: [
      ]
    },
    {
      id: 3,
      title: 'AI and Data Science Foundations',
      organization: 'Samatrix.IO',
      date: 'June 2024',
      role: 'Learner',
      type: '1 year Hands On Projects',
      details: [
      ]
    },
    {
      id: 4,
      title: 'Kaggle - Python, Data cleaning, Into to ML, ',
      organization: 'Kaggle',
      date: 'October 2024',
      role: 'Learner',
      type: 'Competition',
      details: [
      ]
    },
  ];

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="resume" className="pt-20 md:pt-24 pb-16 md:pb-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Resume
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="w-20 md:w-24 h-1 bg-[#00FF7F] mx-auto"
          />
        </motion.div>

        {/* Education Section */}
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 md:mb-16"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 font-fira border-b border-[#00FF7F]/20 pb-2">
            Education
          </h3>
          <div className="space-y-3 md:space-y-4">
            {educationData.map((edu) => (
              <EducationCard key={edu.id} data={edu} />
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 md:mb-16"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 font-fira border-b border-[#00FF7F]/20 pb-2">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <CertificationCard key={cert.id} data={cert} />
            ))}
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 md:mb-16"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 font-fira border-b border-[#00FF7F]/20 pb-2">
            Projects
          </h3>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 md:mb-16"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 font-fira border-b border-[#00FF7F]/20 pb-2">
            Experience
          </h3>
          
          {/* Technical Clubs */}
          <div className="mb-8">
            <h4 className="text-base md:text-lg font-semibold text-white mb-4 font-fira">
              Technical Clubs
            </h4>
            <div className="space-y-4">
              {experienceData.clubs.map((exp) => (
                <ExperienceCard key={exp.id} data={exp} />
              ))}
            </div>
          </div>
          
          {/* Other Experience */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-4 font-fira">
              Other Experience
            </h4>
            <div className="space-y-4">
              {experienceData.other.map((exp) => (
                <ExperienceCard key={exp.id} data={exp} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 md:mb-16"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 font-fira border-b border-[#00FF7F]/20 pb-2">
            Achievements
          </h3>
          <div className="bg-[#121212] backdrop-blur-sm border border-[#00FF7F]/20 rounded-lg p-6 shadow-lg">
            <div className="flex flex-col space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <FaAward className="text-[#00FF7F] w-5 h-5" />
                  <h4 className="text-white font-semibold text-base">Data Science Treasure Hunt</h4>
                </div>
                <p className="text-gray-400">2nd Rank Among 40 teams</p>
              </div>
              
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <FaCode className="text-[#00FF7F] w-5 h-5" />
                  <h4 className="text-white font-semibold text-base">ImmunoQuest: The deep learning hackathon</h4>
                </div>
                <p className="text-gray-400">Secured Top 9 Position in Leaderboard among 50+ experienced Teams </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Download Resume Button */}
        <div className="mt-8 md:mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.location.href = '/Resume.pdf';
            }}
            className="px-4 md:px-6 py-2 md:py-3 border-2 border-[#00FF7F] text-[#00FF7F] rounded-md hover:bg-[#00FF7F] hover:text-[#121212] transition-colors duration-300 flex items-center space-x-2 font-fira text-sm md:text-base"
          >
            <FaDownload className="w-4 h-4 md:w-5 md:h-5" />
            <span>Download CV</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ResumeNew; 
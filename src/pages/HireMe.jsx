import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaServer, FaTools } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const HireMe = () => {
  const services = [
    {
      icon: FaServer,
      title: "AI & Data Science",
      description: "Build intelligent solutions and analyze data using Python, Pandas, and machine learning libraries.",
      features: [
        "Data Preprocessing & Cleaning",
        "Model Training & Evaluation",
        "Data Visualization (Matplotlib/Seaborn)",
        "AI Model Deployment"
      ]
    },
    {
      icon: FaCode,
      title: "Data Analytics & Visualization",
      description: "Transform raw data into actionable insights using Python, SQL, and visualization tools.",
      features: [
        "Data Analysis with Pandas",
        "SQL Querying & Optimization",
        "Interactive Dashboards (Tableau/Power BI)",
        "Data Storytelling"
      ]
      
    },
    {
      icon: FaMobile,
      title: "Machine Learning",
      description: "Develop and deploy machine learning models using Python, TensorFlow, and PyTorch.",
      features: [
        "Supervised & Unsupervised Learning",
        "Model Deployment (Flask/Django)",
        "Real-time Predictions",
        "Model Optimization"
      ]
      
    },
    {
      icon: FaTools,
      title: "Freelancing & Collaboration",
      description: "Contribute to diverse projects with clear communication, agile practices, and effective teamwork.",
      features: [
        "Agile Methodologies",
        "Team Collaboration Tools (GitHub, Trello)",
        "Requirement Analysis",
        "Effective Communication"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-fira">
              Let's Work Together
            </h1>
            <p className="text-gray-400 text-lg max-w-4xl mx-auto font-poppins">
              I'm available for freelance projects, full-time positions, and collaborative opportunities
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#1a1a1a] border border-gray-700 rounded-lg p-8 hover:border-[#00FF7F] transition-colors duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-[#00FF7F] rounded-full flex items-center justify-center">
                    <service.icon className="text-[#121212] w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-fira">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-400 mb-6 font-poppins">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2 text-gray-300 font-poppins">
                      <span className="w-2 h-2 bg-[#00FF7F] rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4 font-fira">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-400 mb-8 font-poppins">
              Let's discuss how I can help bring your ideas to life
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-[#00FF7F] text-[#121212] rounded-md hover:bg-[#00cc66] transition-colors duration-300 font-fira"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default HireMe;

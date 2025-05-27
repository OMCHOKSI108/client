import { motion } from 'framer-motion';
import { FaChartBar, FaBrain, FaChalkboardTeacher } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const ServiceCard = ({ icon: Icon, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
      <div className="relative bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-sky-500/40 transition-all duration-300">
        <div className="text-sky-500 mb-4 md:mb-6">
          <Icon className="w-8 h-8 md:w-12 md:h-12" />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 relative inline-block">
          {title}
          <motion.span
            className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-500"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </h3>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: FaChartBar,
      title: 'Data Analytics & Visualization',
      description:
        'Transforming raw data into actionable insights using Python, SQL, and data visualization tools like Tableau and Power BI.',
    },
    {
      icon: FaBrain,
      title: 'AI, Machine Learning & Data Science',
      description:
        'Building and deploying machine learning models using Python, TensorFlow, and PyTorch, with a focus on real-world applications.',
    },
    {
      icon: FaChalkboardTeacher,
      title: 'Tech Consulting & Mentorship',
      description:
        'Providing guidance on best practices in software development, data science, and AI, helping teams to innovate and excel.',
    },
  ];

  return (
    <section id="services" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 font-fira"
          >
            What I Do 
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-20 md:w-24 h-1 bg-[#38BDF8] mx-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-8 md:mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.location.href = '/contact';
            }}
            className="px-6 md:px-8 py-2 md:py-3 text-sm md:text-base bg-sky-500 text-black font-bold rounded-lg hover:bg-sky-600 transition-colors duration-300"
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

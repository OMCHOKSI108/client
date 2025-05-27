import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaCode } from 'react-icons/fa';

const StatCard = ({ title, icon: Icon, children, index, buttonLink, buttonText, buttonIcon: ButtonIcon }) => {
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
      whileHover={{ scale: 1.02 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#00FF7F]/10 via-transparent to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
      <div className="relative bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6 hover:border-[#00FF7F]/40 transition-all duration-300">
        <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
          <div className="text-[#00FF7F]">
            <Icon className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <h3 className="text-base md:text-lg font-bold text-white">{title}</h3>
        </div>
        <div className="w-full h-[200px] md:h-[250px] overflow-hidden rounded-lg mb-3 md:mb-4">
          {children}
        </div>
        <motion.a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1 md:py-1.5 bg-[#00FF7F] text-black font-bold rounded-lg hover:bg-[#00cc66] transition-colors duration-300 text-xs md:text-sm w-max justify-center"
        >
          <ButtonIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
          <span>{buttonText}</span>
        </motion.a>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="achievements" className="py-12 md:py-20">
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
            className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4 font-fira"
          >
            Other Achievements
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-20 md:w-24 h-1 bg-[#00FF7F] mx-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <StatCard 
            title="GitHub Stats" 
            icon={FaGithub} 
            index={0}
            buttonLink="https://github.com/DEVang0876"
            buttonText="View GitHub Profile"
            buttonIcon={FaGithub}
          >
            <img
              src="https://github-readme-stats.vercel.app/api?username=DEVang0876&theme=blue-green&show_icons=true&hide_border=true&count_private=true"
              alt="GitHub Stats"
              className="w-full h-full object-contain"
            />
          </StatCard>

          <StatCard 
            title="LeetCode Stats" 
            icon={FaCode} 
            index={1}
            buttonLink="https://leetcode.com/u/devang_23AIML014/"
            buttonText="View LeetCode Profile"
            buttonIcon={FaCode}
          >
            <img
              src="https://leetcode-stats.vercel.app/api?username=devang_23AIML014&theme=Dark"
              alt="LeetCode Stats"
              className="w-full h-full object-contain"
            />
          </StatCard>
        </div>
      </div>
    </section>
  );
};

export default Achievements; 
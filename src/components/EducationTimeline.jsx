import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';

const educationData = [
  {
    id: 1,
    institution: 'Gujrat Secondary and Higher secondary Education Board',
    logo: '/logos/cbse.png',
    degree: '10th Secondary, Science',
    duration: 'Mar 2020 – Apr 2021',
    grade: '93%',
  },
  {
    id: 2,
    institution: 'Gujrat Secondary and Higher secondary Education Board',
    logo: '/logos/cbse.png',
    degree: '12th Senior Secondary, Science',
    duration: 'Mar 2022 – May 2023',
    grade: '82%ile',
  },
  {
    id: 3,
    institution: 'Charotar Univercity of science and technology -CHARUSAT',
    logo: '/logos/vit.png',
    degree: 'BTech(AIML)',
    duration: 'Aug 2023 – Jul 2027',
    grade: '8.85 CGPA',
  },
];

const TimelineDot = ({ index, total, inView }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={inView ? { scale: 1 } : { scale: 0 }}
      transition={{ delay: index * 0.2 }}
      className="absolute left-0 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#00FF7F] -translate-x-1/2 z-10"
      style={{ top: `${(index * 100) / (total - 1)}%` }}
    />
  );
};

const EducationCard = ({ data, index, inView }) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="relative w-full md:w-[calc(100%-3rem)] md:ml-16 mb-12"
    >
      <motion.div
        whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(0, 255, 127, 0.3)' }}
        className="bg-[#121212] backdrop-blur-sm border border-[#00FF7F]/20 rounded-lg p-4 md:p-6 shadow-lg hover:shadow-[#00FF7F]/20 transition-all duration-300"
      >
        <div className="flex items-start space-x-3 md:space-x-4">
          <motion.div
            variants={logoVariants}
            className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-[#00FF7F]/60"
          >
            <img
              src={data.logo}
              alt={`${data.institution} logo`}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="flex-grow min-w-0">
            <h3 className="text-base md:text-xl font-bold text-white mb-1 font-poppins truncate">
              {data.degree}
            </h3>
            <p className="text-sm md:text-base text-[#00FF7F] font-semibold mb-2 font-poppins truncate">
              {data.institution}
            </p>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center text-xs md:text-sm text-gray-400 font-fira space-y-1 md:space-y-0">
              <span>{data.duration}</span>
              <span className="text-[#00FF7F]">{data.grade}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const EducationTimeline = () => {
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

  return (
    <section id="education" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4 font-fira">
            Education
          </h2>
          <div className="w-20 md:w-24 h-1 bg-[#00FF7F] mx-auto" />
        </motion.div>

        <div ref={ref} className="relative">
          {/* Timeline Line Container */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-[#00FF7F]/20">
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
            {/* Timeline Dots */}
            {educationData.map((_, index) => (
              <TimelineDot key={index} index={index} total={educationData.length} inView={inView} />
            ))}
          </div>

          {/* Education Cards */}
          <div className="space-y-8 pl-12 md:pl-0">
            {educationData.map((data, index) => (
              <EducationCard key={data.id} data={data} index={index} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline; 
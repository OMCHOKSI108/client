import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExperienceCard = ({ data, isLeft }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-3 md:gap-4`}
    >
      <div className="flex-shrink-0">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-[#00FF7F]/10 rounded-lg flex items-center justify-center overflow-hidden border-2 border-[#00FF7F]/30 hover:border-[#00FF7F]/60 transition-colors duration-300">
          <img
            src={data.logo}
            alt={`${data.organization} logo`}
            className="w-12 h-12 md:w-16 md:h-16 object-contain p-1"
          />
        </div>
      </div>
      <div className="flex-grow">
        <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2">{data.title}</h3>
        <p className="text-sm md:text-base text-[#00FF7F] mb-1 md:mb-2">{data.organization}</p>
        <div className="flex flex-wrap gap-1.5 md:gap-2 mb-1.5 md:mb-2">
          <span className="text-xs md:text-sm text-gray-400">{data.duration}</span>
          <span className="text-xs md:text-sm text-gray-400">•</span>
          <span className="text-xs md:text-sm text-gray-400">{data.type}</span>
          <span className="text-xs md:text-sm text-gray-400">•</span>
          <span className="text-xs md:text-sm text-gray-400">{data.location}</span>
        </div>
        <p className="text-xs md:text-sm text-gray-400 mb-2 md:mb-3">{data.description}</p>
        {data.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 md:px-3 py-0.5 md:py-1 bg-[#00FF7F]/10 text-[#00FF7F] rounded-full text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      },
      {
        id: 3,
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
      },
      {
        id: 6,
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
      },
    ],
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="experience" className="py-12 md:py-20 bg-page">
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
            className="text-2xl md:text-4xl font-bold text-black mb-3 md:mb-4"
          >
            Experience
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="w-20 md:w-24 h-1 bg-accent mx-auto"
          />
        </motion.div>
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
      },
      {
        id: 6,
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
      },
    ],
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="experience" className="py-12 md:py-20">
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
            Experience
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="w-20 md:w-24 h-1 bg-[#00FF7F] mx-auto"
          />
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Technical Clubs Section */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 font-fira">Technical Clubs</h3>
            <div className="space-y-6 md:space-y-8">
              {experienceData.clubs.map((data) => (
                <ExperienceCard key={data.id} data={data} isLeft={true} />
              ))}
            </div>
          </div>

          {/* Other Experience Section */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 font-fira">Other Experience</h3>
            <div className="space-y-6 md:space-y-8">
              {experienceData.other.map((data) => (
                <ExperienceCard key={data.id} data={data} isLeft={false} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import { databases, DATABASE_ID, COLLECTION_ID, ID } from '../config/appwrite';

const FloatingLabelInput = ({ label, type = 'text', value, onChange, required }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(value.length > 0)}
        required={required}
        name={label.toLowerCase()}
        className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-white focus:outline-none focus:border-[#00FF7F] transition-colors duration-300"
      />
      <label
        className={`absolute left-3 md:left-4 transition-all duration-300 ${
          isFocused || value.length > 0
            ? '-top-2 text-xs text-[#00FF7F] bg-[#1a1a1a] px-1 md:px-2'
            : 'top-2 md:top-3 text-xs md:text-sm text-gray-400'
        }`}
      >
        {label}
      </label>
    </div>
  );
};

const FloatingLabelTextarea = ({ label, value, onChange, required }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <textarea
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(value.length > 0)}
        required={required}
        name={label.toLowerCase()}
        rows="4"
        className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-white focus:outline-none focus:border-[#00FF7F] transition-colors duration-300"
      />
      <label
        className={`absolute left-3 md:left-4 transition-all duration-300 ${
          isFocused || value.length > 0
            ? '-top-2 text-xs text-[#00FF7F] bg-[#1a1a1a] px-1 md:px-2'
            : 'top-2 md:top-3 text-xs md:text-sm text-gray-400'
        }`}
      >
        {label}
      </label>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Test Appwrite connection
  useEffect(() => {
    console.log('Testing Appwrite connection');
    console.log('Databases service:', databases);
    
    // Test the connection by listing collections
    const testConnection = async () => {
      try {
        const collections = await databases.listCollections(DATABASE_ID);
        console.log('Appwrite connection successful:', collections);
      } catch (error) {
        console.error('Appwrite connection error:', error);
      }
    };
    
    testConnection();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Store the message in Appwrite Database
      const response = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          created_at: new Date().toISOString(),
        }
      );
      
      console.log('Document created successfully:', response);
      
      // Show success toast
      toast.success('Message sent successfully! We will contact you soon.', {
        duration: 5000,
        icon: '✅',
      });
      
      // Reset form data
      setFormData({ name: '', email: '', message: '' });
      
      // Uncomment this in production when Appwrite Functions is set up
      /* 
      // Send acknowledgement email using Appwrite Functions
      const emailData = {
        to: formData.email,
        subject: 'Thank you for contacting us',
        message: `Dear ${formData.name},\n\nThank you for reaching out to us. We've received your message and will get back to you soon.\n\nBest regards,\nDEvang Dhandhukiya`
      };
      
      await functions.createExecution(
        'EMAIL_FUNCTION_ID',
        JSON.stringify(emailData)
      );
      */
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again later.', {
        duration: 5000,
        icon: '❌',
      });
    } finally {
      setIsSubmitting(false);
    }
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
    <section id="contact" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4 font-fira"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 md:w-24 h-1 bg-sky-500 mx-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <motion.div variants={itemVariants} className="flex items-center space-x-3 md:space-x-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-sky-500 rounded-full flex items-center justify-center">
                <FaEnvelope className="text-[#121212] w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-bold text-white font-fira">Email</h3>
                <a
                  href="mailto:devang454147@gmail.com"
                  className="text-xs md:text-sm text-gray-400 hover:text-sky-500 transition-colors duration-300 font-poppins"
                >
                  devang454147@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center space-x-3 md:space-x-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-sky-500 rounded-full flex items-center justify-center">
                <FaPhone className="text-[#121212] w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-bold text-white font-fira">Phone</h3>
                <a href="tel:+919424065768" className="text-xs md:text-sm text-gray-400 hover:text-sky-500 transition-colors duration-300 font-poppins">
                  +91 94240 65768
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center space-x-3 md:space-x-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-sky-500 rounded-full flex items-center justify-center">
                <FaLinkedin className="text-[#121212] w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-bold text-white font-fira">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/devang0876/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm text-gray-400 hover:text-sky-500 transition-colors duration-300 font-poppins"
                >
                  devang0876
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center space-x-3 md:space-x-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-sky-500 rounded-full flex items-center justify-center">
                <FaGithub className="text-[#121212] w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-bold text-white font-fira">GitHub</h3>
                <a 
                  href="https://github.com/DEVang0876" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm text-gray-400 hover:text-sky-500 transition-colors duration-300 font-poppins"
                >
                  DEVang0876
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-6"
          >
            <motion.div variants={itemVariants}>
              <FloatingLabelInput
                label="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <FloatingLabelInput
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <FloatingLabelTextarea
                label="Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.button
              variants={itemVariants}
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 md:py-3 px-4 md:px-6 rounded-lg text-sm md:text-base text-white font-bold ${
                isSubmitting
                  ? 'bg-gray-600'
                  : 'bg-[#00FF7F] hover:bg-[#00cc66]'
              } transition-colors duration-300 font-fira flex items-center justify-center`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"/>
                  <span>Sending...</span>
                </>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
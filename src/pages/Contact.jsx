import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import { databases, DATABASE_ID, COLLECTION_ID, ID } from '../config/appwrite';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Store the message in Appwrite Database
      const response = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {
          name: data.name,
          email: data.email,
          message: data.message
        }
      );
      
      console.log('Document created successfully:', response);
      
      // Show success toast
      toast.success('Message sent successfully! I will contact you soon.', {
        duration: 5000,
        icon: '✅',
      });
      
      // Reset form
      reset();
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

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'devang454147@gmail.com',
      href: 'mailto:devang454147@gmail.com'
    },
    {
      icon: FaGithub,
      title: 'GitHub',
      value: 'github.com/DEVang0876',
      href: 'https://github.com/DEVang0876'
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/devang0876',
      href: 'https://www.linkedin.com/in/devang0876/'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'India (CHARUSAT UNIVERSITY)'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-fira">
              Get in Touch
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-poppins">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#1a1a1a] border border-gray-700 rounded-lg p-6 hover:border-[#00FF7F] transition-colors duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#00FF7F] rounded-full flex items-center justify-center">
                      <info.icon className="text-[#121212] w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold font-fira">{info.title}</h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-[#00FF7F] transition-colors duration-300 font-poppins"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-400 font-poppins">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div>
                <input
                  {...register('name', { required: 'Name is required' })}
                  placeholder="Your Name"
                  className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00FF7F] transition-colors duration-300 font-poppins"
                />
                {errors.name && (
                  <p className="text-sky-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  placeholder="Your Email"
                  className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00FF7F] transition-colors duration-300 font-poppins"
                />
                {errors.email && (
                  <p className="text-sky-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <textarea
                  {...register('message', {
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Message must be at least 10 characters'
                    }
                  })}
                  placeholder="Your Message"
                  rows="5"
                  className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00FF7F] transition-colors duration-300 font-poppins"
                />
                {errors.message && (
                  <p className="text-sky-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg text-white font-bold flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? 'bg-gray-600'
                    : 'bg-[#00FF7F] hover:bg-[#00cc66]'
                } transition-colors duration-300 font-fira`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
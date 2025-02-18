import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-900 via-[#0f1729] to-gray-900 overflow-hidden"
    >
      <motion.div 
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-gray-900/50 to-gray-900"
      />
      
      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        <motion.div 
          initial={{ scale: 0, opacity: 0, rotate: -180 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          className="w-32 h-32 mb-8 rounded-full border-4 border-blue-500/50 overflow-hidden hover:border-blue-400 transition-colors duration-300 transform hover:scale-105"
        >
          <img 
            src="/src/assets/images/Abhinav2.JPG" 
            alt="Abhinav K."
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
          />
        </motion.div>

        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            bounce: 0.4
          }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 relative"
        >
          <span className="relative inline-block">
            Hi, I'm{' '}
            <span className="relative">
              <span className="relative z-10">Abhinav K.</span>
              <motion.span
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-3 bg-blue-500/20 rounded-full"
              />
            </span>
          </span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl md:text-4xl text-electric-blue mb-8"
        >
          <TypeAnimation
            sequence={[
              'React Specialist',
              2000,
              'Frontend Enthusiast',
              2000,
              'Creative Coder',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          />
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all relative overflow-hidden group"
          >
            <span className="relative z-10">View Projects</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="px-8 py-3 rounded-full bg-gray-800/50 backdrop-blur-sm text-white font-medium border border-gray-700 hover:border-blue-500 transition-all relative overflow-hidden group"
          >
            <span className="relative z-10">Contact Me</span>
            <motion.div
              className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.button>
        </div>

        <div className="flex gap-4 justify-center">
          {[
            { icon: <Github className="w-5 h-5" />, url: 'https://github.com/Abhinavsathyann', color: 'hover:text-purple-400' },
            { icon: <Linkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/abhinavksathyan/', color: 'hover:text-blue-400' },
            { icon: <Mail className="w-5 h-5" />, url: 'mailto:abhinavksathyann@gmail.com', color: 'hover:text-green-400' }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-500 text-white ${social.color} transition-all duration-300 transform hover:rotate-[360deg]`}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <motion.div 
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Terminal, Video } from 'lucide-react';

const skills = [
  { name: 'HTML/CSS', icon: <Code2 className="w-6 h-6" /> },
  { name: 'JavaScript', icon: <Code2 className="w-6 h-6" /> },
  { name: 'React', icon: <Code2 className="w-6 h-6" /> },
  { name: 'Node.js', icon: <Code2 className="w-6 h-6" /> },
  { name: 'TailwindCSS', icon: <Code2 className="w-6 h-6" /> },
  { name: 'Bootarap', icon: <Code2 className="w-6 h-6" /> },
  { name: 'Python', icon: <Code2 className="w-6 h-6" /> },
  { name: 'Java', icon: <Code2 className="w-6 h-6" /> },
  { name: 'Mongo DB', icon: <Code2 className="w-6 h-6" /> },
  { name: 'SQL', icon: <Code2 className="w-6 h-6" /> },
  { name: 'PHP', icon: <Code2 className="w-6 h-6" /> },
  { name: 'EMBEDED SYSYTEM', icon: <Code2 className="w-6 h-6" /> },
  // { name: 'DIGITAL MARKETING'},
  // { name: 'DIGITAL MARKETING'},
  // { name: 'DIGITAL MARKETING'},

];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Hi, I’m Abhinav K, a passionate Web Developer with experience in building dynamic and user-friendly web applications. I specialize in React, Node.js, and modern web technologies, with a focus on creating seamless digital experiences. I also have a keen interest in UI/UX design using Figma.

Let’s build something amazing together!
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-medium text-white">{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
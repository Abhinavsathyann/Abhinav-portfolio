import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, BookOpen } from 'lucide-react';

const education = [
  {
    institution: 'Kuttukaran Polytechnic College',
    degree: 'Diploma in Computer Engineering',
    period: '2023 - 2025',
    description: 'Specialized in computer science fundamentals, web development, and software engineering practices.',
    courses: [
      'Advanced Web Development',
      'Database Management Systems',
      'Software Engineering Principles',
    ],
  },
];

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-purple-500 before:to-blue-500"
            >
              <div className="absolute left-0 top-0 w-8 h-8 -translate-x-1/2 bg-gray-900 rounded-full border border-purple-500 flex items-center justify-center text-purple-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.institution}</h3>
                    <p className="text-purple-400 text-lg">{edu.degree}</p>
                  </div>
                  <p className="text-gray-400 mt-2 md:mt-0 px-4 py-2 rounded-full bg-gray-800/80 border border-gray-700">
                    {edu.period}
                  </p>
                </div>
                <p className="text-gray-300 mb-6">{edu.description}</p>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Key Courses</h4>
                  <ul className="space-y-3">
                    {edu.courses.map((course, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: (index * 0.2) + ((i + 1) * 0.1) }}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <BookOpen className="w-4 h-4 text-purple-400" />
                        {course}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
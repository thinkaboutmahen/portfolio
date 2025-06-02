'use client';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <div className="mt-4 h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400">
              I am a passionate Website Developer & Designer with a strong foundation in web development
              and a keen eye for creating beautiful, user-friendly interfaces. With expertise in
              modern technologies and frameworks, I strive to build efficient and scalable
              applications that solve real-world problems.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              My journey in web development started several years ago, and since then, I&apos;ve
              worked on various projects ranging from small business websites to complex
              web applications. I&apos;m constantly learning and adapting to new technologies
              to stay at the forefront of web development.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                View Projects
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Education</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Bachelor&apos;s Degree in Computer Science
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Experience</h3>
              <p className="text-gray-600 dark:text-gray-400">
                5+ Years in Web Development
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Based in Indonesia
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Languages</h3>
              <p className="text-gray-600 dark:text-gray-400">
                English, Indonesian
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 
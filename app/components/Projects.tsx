'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Laundry Management System ',
    description: 'A full-stack web application built with PHP and MySQL.',
    image: '/projects/laundryy.jpg',
    tags: ['PHP', 'MySQL', 'Bootstrap']
  },
  {
    title: 'E-Procurement',
    description: 'An e-procurement platform with real-time inventory management.',
    image: '/projects/pengadaanbarang.jpg',
    tags: ['React', 'Node.js', 'PostgreSQL']
  },
  {
    title: 'Accounting System',
    description: 'An accounting system with financial reporting and analytics.',
    image: '/projects/cubima.jpg',
    tags: ['CodeIgniter', 'MySQL', 'Bootstrap']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and expertise
          </p>
          <div className="mt-6 h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-blue-500/20 text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/thinkaboutmahen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 transform hover:-translate-y-1"
          >
            View All Projects
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 
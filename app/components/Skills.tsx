'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const skills = [
  {
    name: 'JavaScript',
    logo: '/skills/javascript.svg',
    level: 'Expert'
  },
  {
    name: 'TypeScript',
    logo: '/skills/typescript.svg',
    level: 'Advanced'
  },
  {
    name: 'React',
    logo: '/skills/react.svg',
    level: 'Expert'
  },
  {
    name: 'Next.js',
    logo: '/skills/nextjs.svg',
    level: 'Advanced'
  },
  {
    name: 'Node.js',
    logo: '/skills/nodejs.svg',
    level: 'Advanced'
  },
  {
    name: 'Tailwind CSS',
    logo: '/skills/tailwind.svg',
    level: 'Expert'
  },
  {
    name: 'MongoDB',
    logo: '/skills/mongodb.svg',
    level: 'Intermediate'
  },
  {
    name: 'PostgreSQL',
    logo: '/skills/postgresql.svg',
    level: 'Intermediate'
  },
  {
    name: 'CodeIgniter',
    logo: '/skills/codeigniter.svg',
    level: 'Intermediate'
  },
  {
    name: 'PHP',
    logo: '/skills/php.svg',
    level: 'Advanced'
  },
  {
    name: 'C++',
    logo: '/skills/cpp.svg',
    level: 'Intermediate'
  },
  {
    name: 'Python',
    logo: '/skills/python.svg',
    level: 'Intermediate'
  }
];

const otherSkills = [
  {
    name: 'Git',
    logo: '/skills/git.svg'
  },
  {
    name: 'Docker',
    logo: '/skills/docker.svg'
  },
  {
    name: 'AWS',
    logo: '/skills/aws.svg'
  },
  {
    name: 'Jest',
    logo: '/skills/jest.svg'
  },
  {
    name: 'Cypress',
    logo: '/skills/cypress.svg'
  },
  {
    name: 'Figma',
    logo: '/skills/figma.svg'
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            Technical Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my core technical skills and the tools I use to bring ideas to life
          </p>
          <div className="mt-6 h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {skill.name}
              </h3>
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-500/20 text-blue-400">
                {skill.level}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-semibold text-white mb-4">
            Tools & Technologies
          </h3>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Additional tools and technologies I use to enhance development workflow and productivity
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {otherSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative w-12 h-12 mb-3">
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 
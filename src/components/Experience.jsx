import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: "Director of Technical Team (Intern)",
    company: "Digimoga Re-innovations LLP",
    date: "February 2025 - Present",
    description: [
      "Led full stack development of scalable web applications using Spring Boot, Node.js, and modern frontend frameworks like React",
      "Designed backend architecture and APIs, integrated PostgreSQL, MongoDB, Redis, Docker, and Kubernetes",
      "Ensured secure, high-performance cloud deployments while fostering collaboration across teams"
    ]
  },
  {
    title: "Fullstack Developer (Intern)",
    company: "Digivity Technologies PVT Ltd",
    date: "November 2024 - January 2025",
    description: [
      "Leveraged full stack development with RESTful APIs and integrated React frameworks at the front end and Node.js, Express at the back end",
      "Managed databases like MongoDB, MySQL",
      "Worked as part of Agile Teams with Git version repositories and took part in reviewing, debugging, and deploying flexible and scalable systems"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-6 lg:left-1/2 h-full w-0.5 bg-gray-700 transform lg:translate-x-[-0.5px]"></div>
          
          {/* Experience Items */}
          <div className="space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-start gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-2 sm:left-4 lg:left-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary transform lg:translate-x-[-8px]"></div>
                  
                  {/* Date Block for mobile (shown only on mobile) */}
                  <div className="flex items-center text-gray-400 lg:hidden mb-2 ml-8 sm:ml-12">
                    <Calendar size={14} className="mr-2 flex-shrink-0" />
                    <span className="text-sm">{exp.date}</span>
                  </div>
                  
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : ''} pl-8 sm:pl-12 lg:pl-0`}>
                    <div className={`glass p-4 sm:p-6 rounded-lg ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
                      <h3 className="text-lg sm:text-xl font-bold text-white">{exp.title}</h3>
                      <div className="flex items-center my-2 text-primary font-medium text-sm sm:text-base">
                        <Briefcase size={14} className="mr-2 flex-shrink-0" />
                        <span>{exp.company}</span>
                      </div>
                      
                      {/* Date Block for desktop (hidden on mobile) */}
                      <div className="hidden lg:flex items-center text-gray-400 mb-3">
                        <Calendar size={14} className="mr-2 flex-shrink-0" />
                        <span className="text-sm">{exp.date}</span>
                      </div>
                      
                      <ul className={`list-disc text-gray-300 text-sm sm:text-base ${index % 2 === 0 ? 'lg:mr-4' : 'ml-4'}`}>
                        {exp.description.map((item, i) => (
                          <li key={i} className="mb-1 leading-relaxed">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Empty div for spacing on alternate sides */}
                  <div className="hidden lg:block w-5/12"></div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Bootstrap", level: 85 },
      { name: "Next.js", level: 75 },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 91 },
      { name: "Express.js", level: 91 },
      { name: "Spring Boot", level: 80 },
      { name: "Java", level: 75 },
      { name: "Python", level: 70 },
      { name: "Servlet", level: 75 },
      { name: "Hibernate", level: 70 },
      { name: "C", level: 65 },
    ]
  },
  {
    title: "Database & APIs",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "RESTful APIs", level: 90 },
    ]
  },
  {
    title: "DevOps & Others",
    skills: [
      { name: "AWS", level: 70 },
      { name: "Docker", level: 65 },
      { name: "JWT", level: 80 },
      { name: "Git", level: 85 },
      { name: "Data Structures", level: 80 },
      { name: "Algorithms", level: 75 },
    ]
  }
];

const SkillBar = ({ name, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-200">{name}</span>
        <span className="text-gray-200">{level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="h-full bg-primary rounded-full"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-sm sm:text-base px-4 sm:px-0">
            I've worked with a wide range of technologies in the web development world.
            Here's a snapshot of my technical skills and proficiency levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-4 sm:p-6 rounded-lg"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-primary">{category.title}</h3>
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex} 
                    name={skill.name} 
                    level={skill.level} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
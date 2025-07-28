import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-primary">Who I Am</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              I'm a passionate Fullstack Developer with a strong foundation in web development technologies. 
              Currently pursuing my B.Tech in Computer Science Engineering, I've been actively involved in 
              developing scalable web applications and participating in hackathons.
            </p>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              My journey in tech began with a curiosity about how websites work, which led me to explore 
              various programming languages and frameworks. I enjoy solving complex problems and creating 
              intuitive user experiences through clean, efficient code.
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              When I'm not coding, I enjoy staying updated with the latest tech trends, participating in 
              coding communities, and contributing to open-source projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4 sm:gap-6 mt-8 lg:mt-0"
          >
            <div className="glass p-4 sm:p-6 rounded-lg">
              <div className="flex items-start">
                <div className="bg-primary/20 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                  <User className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-2">Personal Info</h4>
                  <ul className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                    <li><span className="font-medium text-white">Name:</span> Anup Raj</li>
                    <li><span className="font-medium text-white">Email:</span> rajanup835@gmail.com</li>
                    <li><span className="font-medium text-white">Location:</span> Greater Noida, UP</li>
                    <li><span className="font-medium text-white">Phone:</span> 7903693971</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass p-4 sm:p-6 rounded-lg">
              <div className="flex items-start">
                <div className="bg-primary/20 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                  <BookOpen className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-2">Education</h4>
                  <div className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                    <p><span className="font-medium text-white">B.Tech in Computer Science</span></p>
                    <p>KCC Institute Of Technology & Management</p>
                    <p>2022 - Present</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-4 sm:p-6 rounded-lg">
              <div className="flex items-start">
                <div className="bg-primary/20 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                  <Award className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-2">Certifications</h4>
                  <ul className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                    <li>Java Web Development with AI - HCL Technologies</li>
                    <li>AI Beginner - HP</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
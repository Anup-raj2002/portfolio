import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Download, ArrowDown, Github as GitHub, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const handleResumeDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    // Set the href to the resume file path (place your resume at /public/resume.pdf)
    link.href = '/resume.pdf';
    // Set the download attribute to specify the filename
    link.download = 'Anup_Raj_Resume.pdf';
    // Append the link to the document
    document.body.appendChild(link);
    // Trigger the click event
    link.click();
    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="w-full min-h-screen mx-auto flex items-center relative overflow-hidden py-10 sm:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
        <div className="text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-bold text-white text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Hi, I'm <span className="text-primary">Anup Raj</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-white text-xl sm:text-2xl lg:text-3xl font-medium mb-6 sm:mb-8">
              Fullstack Developer
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-300 max-w-xl lg:mx-0 mx-auto mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed px-4 lg:px-0"
          >
            I build modern, responsive web applications with cutting-edge technologies.
            Specializing in both frontend and backend development to create seamless user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center px-4 lg:px-0"
          >
            <button
              onClick={handleResumeDownload}
              className="bg-primary hover:bg-primary/80 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-colors w-full sm:w-auto text-sm sm:text-base"
            >
              <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
              Download Resume
            </button>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="bg-transparent hover:bg-gray-800 text-white border border-gray-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer w-full sm:w-auto text-sm sm:text-base"
            >
              View My Work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center lg:justify-start gap-3 sm:gap-4 mt-8 sm:mt-10"
          >
            <a 
              href="https://github.com/Anup-raj2002" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <GitHub size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/anup-raj-10b8b3298" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <Linkedin size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a 
              href="mailto:rajanup835@gmail.com" 
              className="p-2.5 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <Mail size={18} className="sm:w-5 sm:h-5" />
            </a>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0"
        >
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
              <img 
                src="/Anup photo.jpg" 
                alt="Anup Raj - Fullstack Developer" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-20 sm:h-20 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-16 sm:h-16 bg-secondary/20 rounded-full blur-xl"></div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-4 sm:bottom-10 left-1/2 transform -translate-x-1/2 lg:col-span-2"
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="flex flex-col items-center cursor-pointer hover:text-primary transition-colors"
          >
            <span className="text-gray-400 mb-1 sm:mb-2 text-sm sm:text-base">Scroll Down</span>
            <ArrowDown className="text-primary animate-bounce" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
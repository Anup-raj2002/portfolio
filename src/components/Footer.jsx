import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 sm:py-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-xl sm:text-2xl font-bold cursor-pointer"
            >
              <span className="text-primary">Anup</span> Raj
            </Link>
            <p className="text-gray-400 mt-3 sm:mt-4 max-w-md text-sm sm:text-base">
              A passionate fullstack developer focused on creating intuitive, 
              dynamic user experiences with clean, efficient code.
            </p>
            <div className="flex mt-4 sm:mt-6 space-x-3 sm:space-x-4">
              <a 
                href="https://github.com/Anup-raj2002" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a 
                href="https://www.linkedin.com/in/anup-raj-10b8b3298" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a 
                href="mailto:rajanup835@gmail.com" 
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-primary transition-colors cursor-pointer capitalize text-sm sm:text-base"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Info</h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
              <li>Greater Noida, UP, India</li>
              <li>rajanup835@gmail.com</li>
              <li>+91 7903693971</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-10 pt-4 sm:pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © {new Date().getFullYear()} Anup Raj. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
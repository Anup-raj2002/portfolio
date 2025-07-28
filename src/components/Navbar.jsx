import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-20 transition-all duration-300 ease-in-out ${scrolled ? "nav-glass py-2 shadow-lg" : "bg-transparent py-5"}`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <Link
          to="home"
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            setActive("home");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-base sm:text-lg font-bold cursor-pointer flex">
            <span className="text-primary">Anup</span>&nbsp;Raj
          </p>
        </Link>

        <ul className="list-none hidden md:flex flex-row gap-6 lg:gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "text-primary" : "text-gray-300"
              } hover:text-primary text-base lg:text-lg font-medium cursor-pointer transition duration-200`}
              onClick={() => setActive(nav.id)}
            >
              <Link 
                to={nav.id} 
                smooth={true} 
                duration={500} 
                spy={true}
                offset={-70}
                activeClass="text-primary"
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
          <div
            className="w-7 h-7 cursor-pointer flex items-center justify-center"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <X size={24} /> : <Menu size={24} />}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: toggle ? 1 : 0,
              x: toggle ? 0 : 20,
              transition: { duration: 0.3 }
            }}
            className={`${!toggle ? 'hidden' : 'flex'} p-4 sm:p-6 glass absolute top-16 sm:top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-lg`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-3 sm:gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-sm sm:text-base ${
                    active === nav.id ? "text-primary" : "text-gray-300"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.id);
                  }}
                >
                  <Link 
                    to={nav.id} 
                    smooth={true} 
                    duration={500} 
                    spy={true}
                    offset={-70}
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
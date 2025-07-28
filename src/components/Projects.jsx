"use client"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Learnocept – Scalable LMS with Microservices, Payments & Automation",
    description:
      "A role-based Learning Management System built with React and microservices architecture. Features automated certificate generation, secure payments via Cashfree, and containerized deployment with Docker.",
    image: "/Learnocept.webp",
    tags: ["React", "Vite", "Firebase Auth", "Express.js", "MongoDB", "Redis", "BullMQ", "Docker", "NGINX", "Cashfree"],
    liveDemo: "https://learnocept.in/",
    sourceCode: "",
  },
  {
    title: "Mynirdeshak - An online assessment platform",
    description:
      "A comprehensive test platform with secure payment integration, automated scorecard generation, and anti-cheating measures including tab-switch detection. Built with modern web technologies and containerized deployment.",
    image: "/mynirdeshak.webp",
    tags: [
      "React",
      "Vite",
      "Firebase Auth",
      "Express.js",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Gmail API",
      "Docker",
      "NGINX",
      "Cashfree",
    ],
    liveDemo: "https://mynirdeshak.com/",
    sourceCode: "https://github.com/Anup-raj2002/mynirdeshak.git",
  },
]

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass rounded-xl overflow-hidden w-full"
    >
      <div className="relative overflow-hidden group">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-40 sm:h-48 md:h-52 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>

        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex space-x-1 sm:space-x-2">
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 bg-gray-900/80 rounded-full hover:bg-primary transition-colors duration-300"
          >
            <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
          </a>
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 bg-gray-900/80 rounded-full hover:bg-primary transition-colors duration-300"
          >
            <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
          </a>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold mb-2 leading-tight">{project.title}</h3>
        <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="text-xs font-medium px-2 py-1 sm:px-2.5 sm:py-0.5 rounded-full bg-primary/20 text-primary whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="py-8 sm:py-12 md:py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-2">Projects</h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-3 sm:mt-4 text-gray-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed px-2 sm:px-4 md:px-0">
            Here are some of my recent projects that showcase my skills and problem-solving abilities. Each project was
            built with a focus on scalability, performance, and user experience.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

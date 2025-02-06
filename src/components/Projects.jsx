import { useState } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import Masonry from "react-masonry-css"

const projects = [
  {
    title: "Task Management System",
    description: "A full-stack Task Management System built with Spring Boot and React.",
    image: "/Task-Management-System.jpg",
    technologies: ["Spring Boot", "React", "MySQL"],
    github: "https://github.com/KolteAkash/Task_Managment-System.git",
    demo: "https://ecommerce-platform-demo.com",
  },
  {
    title: "Medical Store Billing App",
    description: "A responsive Medical Store Billing application using Node.js and React",
    image: "/Medical-Store-Billing-App.png",
    technologies: ["Node.js", "MySQL", "React"],
    github: "https://github.com/KolteAkash/Medical_Billing.git",
    demo: "https://ak-medical.netlify.app/",
  },
  {
    title: "Studdy Buddy Online Learning Platform ",
    description: "Developed a Studdy Buddy Online Learning web application by using Servlet,JSP and Spring",
    image: "/Studdy-Buddy.png",
    technologies: ["Java", "Spring", "RESTful APIs", "JSP", "Servlet"],
    github: "https://github.com/KolteAkash/Online_Job_Portal.git",
    demo: "https://weather-forecast-dashboard-demo.com",
  },
]

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600"
        >
          My Projects
        </motion.h2>
        <Masonry
          breakpointCols={{
            default: 3,
            1100: 2,
            700: 1,
          }}
          className="flex w-auto"
          columnClassName="bg-clip-padding px-2"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-4"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                {hoveredProject === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center"
                  >
                    <div className="text-white text-center">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="mb-4">{project.description}</p>
                      <div className="flex justify-center space-x-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-indigo-400 transition duration-300"
                        >
                          <FaGithub size={24} />
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-indigo-400 transition duration-300"
                        >
                          <FaExternalLinkAlt size={24} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">{project.title}</h3>
                <div className="flex flex-wrap mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </section>
  )
}

export default Projects


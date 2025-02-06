import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 Akash Kolte. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <SocialIcon href="https://github.com/KolteAkash" icon={FaGithub} />
            <SocialIcon href="https://linkedin.com/in/akash-kolte-029382230" icon={FaLinkedin} />
            <SocialIcon href="mailto:akashkolte240899@gmail.com" icon={FaEnvelope} />
          </div>
        </div>
      </div>
    </footer>
  )
}

const SocialIcon = ({ href, icon: Icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    className="text-white hover:text-indigo-400 transition duration-300"
  >
    <Icon size={24} />
  </motion.a>
)

export default Footer

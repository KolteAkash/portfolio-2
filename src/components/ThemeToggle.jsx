import { motion } from "framer-motion"
import { FiSun, FiMoon } from "react-icons/fi"

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md transition-colors duration-300"
    >
      {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
    </motion.button>
  )
}

export default ThemeToggle

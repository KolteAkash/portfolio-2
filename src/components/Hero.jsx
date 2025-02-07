import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              Hi, I'm Akash Kolte
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
              A Passionate Software Developer
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <motion.a
                href="/akashkolte-resume.pdf"
                download="AkashKolte_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300 shadow-lg hover:shadow-xl"
              >
                Download Resume
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Me
              </motion.a>
            </div>
            <div className="flex justify-center space-x-4">
              <SocialIcon
                href="https://github.com/KolteAkash"
                icon={FaGithub}
              />
              <SocialIcon
                href="https://linkedin.com/in/akash-kolte-029382230"
                icon={FaLinkedin}
              />
              <SocialIcon
                href="mailto:akashkolte240899@gmail.com"
                icon={FaEnvelope}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ href, icon: Icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition duration-300"
  >
    <Icon size={24} />
  </motion.a>
);

export default Hero;

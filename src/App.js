import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroBackground3D from "./components/HeroBackground3D";
import TechBackground from "./components/TechBackground";
import Navbar from "./components/Navbar";
import ChatBot from "./components/ChatBot";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <AnimatePresence>
      <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-x-hidden"
      >

        <div className="relative">
          <HeroBackground3D />
          <TechBackground />
          <div className="relative z-10">
            <Navbar />
            <div className="fixed right-4 top-20 flex flex-col items-end space-y-4 z-50">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              <ChatBot />
            </div>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
          </div>
        </div>
      </motion.main>
    </AnimatePresence>
  );
}

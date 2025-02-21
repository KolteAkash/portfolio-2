// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
//     >
//       <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
//         {/* Profile Image */}
//         <motion.img
//           src="/Hero.jpg"
//           alt="Akash Kolte"
//           className="w-40 h-40 md:w-52 md:h-52 rounded-full shadow-lg border-4 border-indigo-500 mb-6"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         />

//         {/* Typing Effect Text with Fixed Dimensions */}
//         <div className="flex flex-col items-center mb-6">
//           <TypingText
//             texts={["Hi, I'm Akash Kolte", "A Passionate Software Developer"]}
//             className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600"
//           />
//         </div>

//         {/* Buttons */}
//         <div className="flex justify-center space-x-4 mb-8">
//           <motion.a
//             href="/akashkolte-resume.pdf"
//             download="AkashKolte_Resume.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300 shadow-lg hover:shadow-xl"
//           >
//             Download Resume
//           </motion.a>
//           <motion.a
//             href="#contact"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-6 py-3 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition duration-300 shadow-lg hover:shadow-xl"
//           >
//             Contact Me
//           </motion.a>
//         </div>

//         {/* Social Icons */}
//         <div className="flex justify-center space-x-4">
//           <SocialIcon href="https://github.com/KolteAkash" icon={FaGithub} />
//           <SocialIcon
//             href="https://linkedin.com/in/akash-kolte-029382230"
//             icon={FaLinkedin}
//           />
//           <SocialIcon
//             href="mailto:akashkolte240899@gmail.com"
//             icon={FaEnvelope}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// // Typing Effect Component with Proper Spacing
// const TypingText = ({ texts, className }) => {
//   const [displayTexts, setDisplayTexts] = useState(["", ""]);
//   const [charIndex, setCharIndex] = useState(0);
//   const [lineIndex, setLineIndex] = useState(0);
//   const typingSpeed = 100; // Typing speed
//   const delayBetweenLines = 1000; // Pause before starting the second line

//   useEffect(() => {
//     if (charIndex < texts[lineIndex].length) {
//       const timeout = setTimeout(() => {
//         setDisplayTexts((prev) => {
//           const newTexts = [...prev];
//           newTexts[lineIndex] = texts[lineIndex].slice(0, charIndex + 1);
//           return newTexts;
//         });
//         setCharIndex(charIndex + 1);
//       }, typingSpeed);
//       return () => clearTimeout(timeout);
//     } else if (lineIndex === 0) {
//       setTimeout(() => {
//         setLineIndex(1);
//         setCharIndex(0);
//       }, delayBetweenLines);
//     }
//   }, [charIndex, lineIndex, texts]);

//   return (
//     <div
//       className={`${className} flex flex-col items-center`}
//       style={{ minWidth: "max-content", height: "120px" }}
//     >
//       <div className="h-[50px] w-full text-center">
//         {displayTexts[0]}
//         {lineIndex === 0 && (
//           <span className="text-indigo-500 animate-blink">|</span>
//         )}
//       </div>
//       <div className="h-[50px] w-full text-center mt-2">
//         {lineIndex > 0 && displayTexts[1]}
//         {lineIndex > 0 && (
//           <span className="text-indigo-500 animate-blink">|</span>
//         )}
//       </div>
//     </div>
//   );
// };

// // Social Icons Component
// const SocialIcon = ({ href, icon: Icon }) => (
//   <motion.a
//     href={href}
//     target="_blank"
//     rel="noopener noreferrer"
//     whileHover={{ scale: 1.2, rotate: 5 }}
//     whileTap={{ scale: 0.9 }}
//     className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition duration-300"
//   >
//     <Icon size={28} />
//   </motion.a>
// );

// export default Hero;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Profile Image - Increased Size Without Stretching */}
        <motion.img
          src="/Hero.jpg"
          alt="Akash Kolte"
          className="w-48 h-48 md:w-60 md:h-60 rounded-full shadow-lg border-4 border-indigo-500 mb-6 object-cover object-top"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Typing Effect Text with Fixed Dimensions */}
        <div className="flex flex-col items-center mb-6">
          <TypingText
            texts={["Hi, I'm Akash Kolte", "A Passionate Software Developer"]}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600"
          />
        </div>

        {/* Buttons */}
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

        {/* Social Icons */}
        <div className="flex justify-center space-x-4">
          <SocialIcon href="https://github.com/KolteAkash" icon={FaGithub} />
          <SocialIcon
            href="https://linkedin.com/in/akash-kolte-029382230"
            icon={FaLinkedin}
          />
          <SocialIcon
            href="mailto:akashkolte240899@gmail.com"
            icon={FaEnvelope}
          />
        </div>
      </div>
    </section>
  );
};

// Typing Effect Component with Proper Spacing
const TypingText = ({ texts, className }) => {
  const [displayTexts, setDisplayTexts] = useState(["", ""]);
  const [charIndex, setCharIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const typingSpeed = 100; // Typing speed
  const delayBetweenLines = 1000; // Pause before starting the second line

  useEffect(() => {
    if (charIndex < texts[lineIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayTexts((prev) => {
          const newTexts = [...prev];
          newTexts[lineIndex] = texts[lineIndex].slice(0, charIndex + 1);
          return newTexts;
        });
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (lineIndex === 0) {
      setTimeout(() => {
        setLineIndex(1);
        setCharIndex(0);
      }, delayBetweenLines);
    }
  }, [charIndex, lineIndex, texts]);

  return (
    <div
      className={`${className} flex flex-col items-center`}
      style={{ minWidth: "max-content", height: "120px" }}
    >
      <div className="h-[50px] w-full text-center">
        {displayTexts[0]}
        {lineIndex === 0 && (
          <span className="text-indigo-500 animate-blink">|</span>
        )}
      </div>
      <div className="h-[50px] w-full text-center mt-2">
        {lineIndex > 0 && displayTexts[1]}
        {lineIndex > 0 && (
          <span className="text-indigo-500 animate-blink">|</span>
        )}
      </div>
    </div>
  );
};

// Social Icons Component
const SocialIcon = ({ href, icon: Icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition duration-300"
  >
    <Icon size={28} />
  </motion.a>
);

export default Hero;

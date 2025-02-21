import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // Add this import
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/3 mb-8 md:mb-0"
          >
            <img
              src="/About.jpg"
              alt="Akash Kolte"
              width={320}
              height={320}
              className="rounded-full shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-2/3 md:pl-12"
          >
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              <p>
                Aspiring Developer | Proficient in Java, ReactJS, HTML, CSS, and
                JavaScript | Hands-on experience in web and standalone projects
                | Eager to innovate, learn, and contribute to impactful
                solutions in a dynamic environment.
              </p>
            </p>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              <p>
                I'm a passionate software developer with expertise in Spring
                Boot, Node.js, and React. I love creating efficient and scalable
                solutions to complex problems.
              </p>

              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300"></p>
              <p>
                My journey in software development has equipped me with a strong
                foundation in both frontend and backend technologies with a keen
                eye for detail and a commitment to writing clean, maintainable
                code, I strive to deliver high-quality software that meets and
                exceeds expectations. I'm always eager to learn new technologies
                and stay up-to-date with the latest industry trends.
              </p>
            </p>
          </motion.div>
        </div>
        <h3 className="text-2xl font-bold text-center mb-8 text-indigo-600 dark:text-indigo-400">
          My Journey
        </h3>
        <VerticalTimeline lineColor="currentColor">
          <TimelineElement
            date="March 2023 - August 2023"
            icon={<FaBriefcase />}
            title="Software Developer"
            subtitle="DG-FutureTech India Pvt Ltd"
            content="Gained hands-on experience in full-stack development and agile methodologies and Worked on cutting-edge web applications using React, Node.js, and Spring Boot."
          />
          <TimelineElement
            date="August 2021 - August 2023"
            icon={<FaGraduationCap />}
            title="Master's in Computer Applications"
            subtitle="New Art's Commerce and Science College Ahmednagar, 414001"
            content="PostGraduated with honors, specializing in software development and web technologies."
          />
          <TimelineElement
            date="July 2018 - August 2021"
            icon={<FaGraduationCap />}
            title="Bachelor's in Computer Science"
            subtitle="New Art's Commerce and Science College Ahmednagar, 414001  "
            content="Graduated with honors, specializing in software development and web technologies."
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

const TimelineElement = ({ date, icon, title, subtitle, content }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "rgb(99, 102, 241)", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid rgb(99, 102, 241)" }}
    date={date}
    dateClassName="text-gray-700 dark:text-gray-300"
    iconStyle={{ background: "rgb(99, 102, 241)", color: "#fff" }}
    icon={icon}
  >
    <h3 className="vertical-timeline-element-title">{title}</h3>
    <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
    <p>{content}</p>
  </VerticalTimelineElement>
);

export default About;

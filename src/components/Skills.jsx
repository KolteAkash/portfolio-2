import { useState } from "react"
import { motion } from "framer-motion"
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js"
import { Radar } from "react-chartjs-2"
import { initialSkills } from "../data/skills"

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const Skills = () => {
  const [skills, setSkills] = useState(initialSkills)

  const updateSkillLevel = (id, increment) => {
    setSkills((prevSkills) =>
      prevSkills.map((skill) =>
        skill.id === id ? { ...skill, level: Math.min(Math.max(skill.level + (increment ? 5 : -5), 0), 100) } : skill,
      ),
    )
  }

  const chartData = {
    labels: skills.map((skill) => skill.name),
    datasets: [
      {
        label: "Skill Level",
        data: skills.map((skill) => skill.level),
        backgroundColor: "rgba(99, 102, 241, 0.2)",
        borderColor: "rgba(99, 102, 241, 0.6)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(99, 102, 241, 0.8)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(99, 102, 241, 1)",
      },
    ],
  }

  const chartOptions = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 100,
        pointLabels: {
          color: "rgba(0, 0, 0, 0.5)",
          font: {
            size: 10,
          },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  }

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600"
        >
          My Skills
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3 mb-8 md:mb-0"
          >
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg" style={{ height: "300px" }}>
              <Radar data={chartData} options={chartOptions} />
            </div>
          </motion.div>
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 md:pl-8">
            {skills.map((skill) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: skill.id * 0.1 }}
                className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow"
              >
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">{skill.name}</span>
                  <div className="flex items-center">
                    <button
                      onClick={() => updateSkillLevel(skill.id, false)}
                      className="text-sm font-medium text-indigo-700 dark:text-indigo-300 mr-2 focus:outline-none"
                    >
                      -
                    </button>
                    <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">{skill.level}%</span>
                    <button
                      onClick={() => updateSkillLevel(skill.id, true)}
                      className="text-sm font-medium text-indigo-700 dark:text-indigo-300 ml-2 focus:outline-none"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                  <motion.div
                    className="bg-indigo-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills


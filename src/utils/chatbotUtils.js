const knowledgeBase = {
  name: "Akash Kolte",
  role: "Software Developer",
  skills: [
    "Java SE 8",
    "Spring Boot",
    "Node.js",
    "React",
    "JavaScript",
    "HTML/CSS",
    "MySQL",
    "Git",
    "RESTful APIs",
    "Agile Methodologies",
  ],
  experience: [
    {
      title: "Software Developer Intern",
      company: "DG-FutureTech India Pvt Ltd.",
      period: "March 2023 - August 2023",
      description:
        "Worked on cutting-edge web applications using React, and Spring Boot and Gained hands-on experience in full-stack development and agile methodologies.",
    },
  ],
  education: [
    {
      degree: "Bachelor's in Computer Science",
      institution: "New Art's Commerce and Science College Ahmednagar, 414001",
      period: "2019 - 2021",
      description:
        "Graduated with honors, specializing in software engineering and web technologies.",
    },
    {
      degree: "Master's in Computer Applications",
      institution: "New Art's Commerce and Science College Ahmednagar, 414001",
      period: "2021 - 2023",
      description:
        "Mastered with honors, specializing in software engineering and web technologies.",
    },
  ],
  projects: [
    {
      name: "Task Management System",
      description:
        "A full-stack Task management System built with Spring Boot and React.",
      technologies: ["Spring Boot", "React", "MySQL"],
    },
    {
      name: "Medical tore Billing App",
      description:
        "A responsive Medical Store Billing application using Node.js and React",
      technologies: ["Node.js", "MySQL", "React"],
    },
    {
      name: "Studdy Buddy Online Learning Platform",
      description:
        "Developed a Studdy Buddy Online Learning web application by using Servlet,JSP and Spring",
      technologies: ["Java", "Spring", "RESTful APIs", "JSP", "Servlet"],
    },
  ],
  contact: {
    email: "akashkolte240899@gmail.com",
    github: "https://github.com/KolteAkash",
    linkedin: "https://linkedin.com/in/akash-kolte-029382230",
  },
};

function answerQuestion(question) {
  const lowerQuestion = question.toLowerCase();

  if (lowerQuestion.includes("name")) {
    return `My name is ${knowledgeBase.name}.`;
  } else if (
    lowerQuestion.includes("do you do") ||
    lowerQuestion.includes("role")
  ) {
    return `I am a ${knowledgeBase.role}.`;
  } else if (
    lowerQuestion.includes("skills") ||
    lowerQuestion.includes("technologies")
  ) {
    return `My skills include: ${knowledgeBase.skills.join(", ")}.`;
  } else if (
    lowerQuestion.includes("experience") ||
    lowerQuestion.includes("work")
  ) {
    const latestJob = knowledgeBase.experience[0];
    return `I'm currently working as a ${latestJob.title} at ${latestJob.company} since ${latestJob.period}. ${latestJob.description}`;
  } else if (
    lowerQuestion.includes("education") ||
    lowerQuestion.includes("study")
  ) {
    return `I have a ${knowledgeBase.education.degree} from ${knowledgeBase.education.institution}, completed in ${knowledgeBase.education.period}.`;
  } else if (lowerQuestion.includes("projects")) {
    const projectInfo = knowledgeBase.projects
      .map((p) => `${p.name}: ${p.description}`)
      .join(" ");
    return `Some of my notable projects include: ${projectInfo}`;
  } else if (
    lowerQuestion.includes("contact") ||
    lowerQuestion.includes("email") ||
    lowerQuestion.includes("github") ||
    lowerQuestion.includes("linkedin")
  ) {
    return `You can contact me via email at ${knowledgeBase.contact.email}, or find me on GitHub (${knowledgeBase.contact.github}) and LinkedIn (${knowledgeBase.contact.linkedin}).`;
  } else {
    return "I'm sorry, I don't have information about that. Can you please ask something related to my skills, experience, education, projects, or contact information?";
  }
}

export { answerQuestion };

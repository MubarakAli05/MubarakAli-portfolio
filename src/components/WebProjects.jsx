// WebProjects.jsx

import ProjectCard from "./ProjectCard";

const webProjects = [

  {
    title: "Luxury Portfolio Website",
    image: "/web/portfolio-cover.svg",
    imageFit: "contain",
    description:
      "Modern luxury-themed portfolio website built with React, smooth animations, and responsive UI design.",
    github: "https://github.com/MubarakAli05",
    live: "https://mubarak-ali-portfolio.vercel.app/",
  },

  {
    title: "When to Wander",
    image: "/web/when-to-wander-cover.png",
    imageFit: "contain",
    description:
      "Seasonal travel discovery platform with guides to 195 countries, recommended travel months, festivals, and natural wonders.",
    github: "https://github.com/MubarakAli05/WhentoWander",
    live: "https://whentowander.vercel.app/",
  },


  {
    title: "AI Assistant",
    image: "/web/ai-assistant-cover.svg",
    imageFit: "contain",
    description:
      "Python desktop assistant with a PySide6 interface and dedicated AI, voice, intent, and memory modules. Windows actions support applications, screenshots, media controls, and system information.",
    github: "https://github.com/MubarakAli05/NEXUS",
  }
 
];

const WebProjects = () => {

  return (

    <section className="projects-section" id="web-projects">

      <h2 className="section-title">
        Web &amp; AI Projects
      </h2>

      <div className="projects-container">

        {webProjects.map((project, index) => (

          <ProjectCard
            key={index}
            {...project}
          />

        ))}

      </div>

    </section>

  );
};

export default WebProjects;
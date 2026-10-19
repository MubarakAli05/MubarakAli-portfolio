import { useState } from "react";

const skills = [
  {
    icon: "💻",
    title: "Frontend",
    desc: "Modern responsive interfaces and interactive web experiences.",
    tech: ["React", "JavaScript", "HTML", "CSS", "Bootstrap"],
    glow: "frontend-glow",
  },

  {
    icon: "🌐",
    title: "Full Stack",
    desc: "End-to-end web applications with responsive interfaces, backend APIs, and database integration.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    glow: "ui-glow",
  },

  {
    icon: "🧊",
    title: "3D Design",
    desc: "Cinematic Blender renders, environments, and lighting.",
    tech: ["Blender", "Cycles", "Lighting", "Rendering"],
    glow: "three-glow",
  },

  {
    icon: "🧠",
    title: "AI/ML Engineering",
    desc: "Currently learning the foundations of artificial intelligence and machine learning engineering.",
    tech: ["Currently Learning"],
    glow: "motion-glow",
  },
];

const Skills = () => {
  const [selected, setSelected] = useState(0);
  return (

    <section className="skills-section" id="skills">

      <div className="skills-header">

        <span>WHAT I DO</span>

        <h2>Creative Expertise</h2>

      </div>

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <div
            className={`skill-card ${skill.glow}${selected === index ? " is-selected" : ""}`}
            key={index}
          >

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3><button className="skill-select" type="button" aria-pressed={selected === index} aria-controls="skill-spotlight" onClick={() => setSelected(index)}>{skill.title}<span aria-hidden="true">↗</span></button></h3>

            <p>{skill.desc}</p>

            <div className="tech-stack">

              {skill.tech.map((item, i) => (

                <span key={i}>
                  {item}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>
      <div className="skill-spotlight" id="skill-spotlight" aria-live="polite" aria-atomic="true">
        <span>EXPERTISE SPOTLIGHT</span>
        <div key={selected}><strong>{skills[selected].title}</strong><p>{skills[selected].tech.join(" · ")}</p></div>
      </div>

    </section>

  );
};

export default Skills;
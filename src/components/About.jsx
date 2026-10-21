import { useRef, useState } from "react";

const storyTitles = ["Creative Thinking", "Frontend Focus", "3D Visual Style"];

const About = () => {
  const section = useRef(null);
  const [active, setActive] = useState(0);

  return (
    <section ref={section} className="about-section story-section" id="about" data-step={active + 1}>
      <div className="about-header">
        <span className="about-subtitle">ABOUT ME</span>
        <h2>More Than <span>Just Code</span></h2>
        <p>
          I combine frontend development, UI design, and 3D creativity to build
          digital experiences that feel modern, useful, and visually memorable.
        </p>
        <div className="story-indicator">
          <nav className="story-dots" aria-label="About timeline">{storyTitles.map((title, index) => <button type="button" key={title} aria-label={`Read ${title}`} aria-current={index === active ? "step" : undefined} onClick={() => {
            setActive(index);
            const card = section.current.querySelectorAll(".about-card")[index];
            card.tabIndex = -1;
            card.focus({ preventScroll: true });
            card.scrollIntoView({ block: "center", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
          }}><span aria-hidden="true">0{index + 1}</span></button>)}</nav>
        </div>
      </div>

      <div className="about-cards">
        <div className="about-card">
          <div className="about-card-top">
            <svg className="about-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false"><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z" /></svg>
            <h3>01</h3>
          </div>
          <h4>Creative Thinking</h4>
          <p>
            I start every project with a visual idea, then shape it into a clean
            and interactive user experience.
          </p>
        </div>

        <div className="about-card">
          <div className="about-card-top">
            <svg className="about-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false"><path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 4l-4 16" /></svg>
            <h3>02</h3>
          </div>
          <h4>Frontend Focus</h4>
          <p>
            I build responsive websites using React, JavaScript, HTML, CSS, and
            modern UI patterns.
          </p>
        </div>

        <div className="about-card">
          <div className="about-card-top">
            <svg className="about-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false"><path d="m12 2 9 5v10l-9 5-9-5V7Zm0 10 9-5M12 12 3 7m9 5v10M7.5 4.5l9 5V14" /></svg>
            <h3>03</h3>
          </div>
          <h4>3D Visual Style</h4>
          <p>
            My Blender work helps me bring depth, atmosphere, lighting, and
            cinematic visuals into digital design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
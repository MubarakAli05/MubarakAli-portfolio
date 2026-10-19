import { useEffect, useRef, useState } from "react";

const storyTitles = ["Creative Thinking", "Frontend Focus", "3D Visual Style"];

const About = () => {
  const section = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let frame;
    const update = () => {
      const steps = [...section.current.querySelectorAll(".about-card")];
      let selected = 0;
      steps.forEach((step, index) => {
        if (step.getBoundingClientRect().top <= window.innerHeight * 0.55) selected = index;
      });
      setActive(selected);
      frame = null;
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <section ref={section} className="about-section story-section" id="about" data-step={active + 1}>
      <div className="about-header">
        <span className="about-subtitle">ABOUT ME</span>
        <h2>More Than Just Code</h2>
        <p>
          I combine frontend development, UI design, and 3D creativity to build
          digital experiences that feel modern, useful, and visually memorable.
        </p>
        <div className="story-indicator">
          <span className="story-number" aria-hidden="true">0{active + 1} / 03</span>
          <strong key={active} aria-hidden="true">{storyTitles[active]}</strong>
          <nav className="story-dots" aria-label="About timeline">{storyTitles.map((title, index) => <button type="button" key={title} aria-label={`Read ${title}`} aria-current={index === active ? "step" : undefined} onClick={() => {
            const card = section.current.querySelectorAll(".about-card")[index];
            card.tabIndex = -1;
            card.focus({ preventScroll: true });
            card.scrollIntoView({ block: "center", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
          }}><span aria-hidden="true">0{index + 1}</span></button>)}</nav>
        </div>
      </div>

      <div className="about-cards">
        <div className="about-card">
          <h3>01</h3>
          <h4>Creative Thinking</h4>
          <p>
            I start every project with a visual idea, then shape it into a clean
            and interactive user experience.
          </p>
        </div>

        <div className="about-card">
          <h3>02</h3>
          <h4>Frontend Focus</h4>
          <p>
            I build responsive websites using React, JavaScript, HTML, CSS, and
            modern UI patterns.
          </p>
        </div>

        <div className="about-card">
          <h3>03</h3>
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
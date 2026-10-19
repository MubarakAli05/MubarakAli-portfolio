const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-header">
        <span className="about-subtitle">ABOUT ME</span>
        <h2>More Than Just Code</h2>
        <p>
          I combine frontend development, UI design, and 3D creativity to build
          digital experiences that feel modern, useful, and visually memorable.
        </p>
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
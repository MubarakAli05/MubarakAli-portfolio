const Hero = () => {

  return (
    <section className="hero" id="home">
      <div className="hero-shapes" aria-hidden="true"><span className="parallax-shape shape-ring" /><span className="parallax-shape shape-diamond" /></div>
      <div className="hero-left">
        <span className="hero-badge">Creative Portfolio</span>

        <h1 aria-label="Building cinematic digital experiences.">
          <span className="headline-mask" aria-hidden="true"><span className="headline-line">Building <span className="rotating-word">cinematic</span></span></span>
          <span className="headline-mask" aria-hidden="true"><span className="headline-line">digital experiences.</span></span>
        </h1>

        <p className="hero-role">
          <span className="sr-only">Frontend &amp; Full Stack Developer · 3D Artist</span>
          <span className="typewriter-line" aria-hidden="true">Frontend &amp; Full Stack Developer · 3D Artist</span>
        </p>

        <p className="hero-desc">
          I design and build modern React websites, clean user interfaces,
          and immersive 3D visuals using Blender.
        </p>

        <div className="hero-buttons">
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="primary-btn magnetic-btn">
            <span>Hire Me</span><span className="button-arrow" aria-hidden="true">↗</span>
          </a>

          <a href="#projects" className="secondary-btn">
            View Projects
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <h3 aria-label="15 plus"><span className="project-counter" aria-hidden="true">15+</span></h3>
            <p>Projects</p>
          </div>

          <div>
            <h3>React</h3>
            <p>Frontend</p>
          </div>

          <div>
            <h3>Blender</h3>
            <p>3D Artist</p>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="portrait-label"><span>THE PERSON BEHIND THE PIXELS</span><span aria-hidden="true">↘</span></div>
        <div className="hero-image-card">
          <img
            src="/portrait.jpg"
            alt="Mubarak Ali, frontend developer and 3D artist"
            width="768"
            height="1024"
            fetchPriority="high"
            decoding="async"
          />

          <div className="floating-card card-one">
            Web Developer
          </div>

          <div className="floating-card card-two">
            3D Visual Artist
          </div>
        </div>
        <div className="portrait-caption"><strong>Mubarak Ali</strong><span>Code meets creativity.</span></div>
      </div>
    </section>
  );
};

export default Hero;
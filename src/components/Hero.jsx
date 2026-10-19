const Hero = () => {

  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <span className="hero-badge">Creative Portfolio</span>

        <h1>
          Building cinematic <br />
          <span>digital experiences.</span>
        </h1>

        <p className="hero-role">
          Frontend &amp; Full Stack Developer · 3D Artist
        </p>

        <p className="hero-desc">
          I design and build modern React websites, clean user interfaces,
          and immersive 3D visuals using Blender.
        </p>

        <div className="hero-buttons">
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="primary-btn">
            Hire Me
          </a>

          <a href="#projects" className="secondary-btn">
            View Projects
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <h3>15+</h3>
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
      </div>
    </section>
  );
};

export default Hero;
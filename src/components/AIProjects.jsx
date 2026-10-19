const AIProjects = () => (
  <section className="projects-section" id="aiml-projects" aria-labelledby="aiml-projects-title">
    <h2 className="section-title" id="aiml-projects-title">AI/ML Projects</h2>

    <article className="project-card ai-project-card">
      <img
        src="/web/agrivo-cover.svg"
        alt="Agrivo agriculture and machine learning project"
        className="project-image"
        width="1200"
        height="630"
        loading="lazy"
        decoding="async"
      />
      <div className="project-content">
        <span className="project-status">In development</span>
        <h3>Agrivo</h3>
        <p>An agriculture-focused AI/ML project.</p>
        <p>
          The vision is to build an AI system that brings agricultural data and
          machine learning closer together, helping us explore soil conditions,
          plant health, and crop-related insights through intelligent technology.
        </p>
        <div className="tech-stack" aria-label="Project focus">
          <span>Agriculture</span>
          <span>Artificial Intelligence</span>
          <span>Machine Learning</span>
        </div>
      </div>
    </article>
  </section>
);

export default AIProjects;

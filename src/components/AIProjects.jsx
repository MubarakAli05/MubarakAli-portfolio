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
        <div className="agrivo-explorer" aria-label="Explore the Agrivo vision">
          <span className="explorer-label">EXPLORE THE VISION · PLANNED CAPABILITIES</span>
          <details><summary>01 <strong>Soil conditions</strong><span aria-hidden="true">+</span></summary><p>Exploring how agricultural data could help us better understand soil conditions.</p></details>
          <details><summary>02 <strong>Plant health</strong><span aria-hidden="true">+</span></summary><p>Investigating how machine learning could support insights into plant health.</p></details>
          <details><summary>03 <strong>Crop insights</strong><span aria-hidden="true">+</span></summary><p>Bringing agricultural data together to explore useful crop-related insights.</p></details>
        </div>
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

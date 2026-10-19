import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";

const Portfolio = () => {
  useEffect(() => {
    AOS.init();

    const typed = new Typed(".typing", {
      strings: ["Web Developer", "3D Artist", "Creative Designer"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      {/* Header */}
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
          <div className="container">
            <a className="navbar-brand logo" href="#">
              Artist
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#skills">
                    Skills
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#projects">
                    Projects
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="hero-section d-flex align-items-center justify-content-center text-center">
          <div>
            <img
              src="/image.jpeg"
              alt="Mubarak"
              className="hero-img"
              data-aos="zoom-in"
            />

            <h1 className="hero-title">
              Hi 👋, I'm <span>Mubarak</span>
            </h1>

            <p className="typing"></p>

            <div className="hero-buttons mt-4">
              <a href="#projects" className="btn btn-warning me-3">
                View Projects
              </a>

              <a href="#contact" className="btn btn-outline-light">
                Hire Me
              </a>
            </div>
          </div>
        </section>
      </header>

      {/* About */}
      <section id="about" className="section">
        <div className="container about">
          <img
            src="/meee.jpeg"
            className="about-img"
            alt="Me"
            data-aos="fade-right"
          />

          <div className="about-content" data-aos="fade-left">
            <h3 className="section-title">About Me</h3>

            <p>
              I'm a passionate creative focused on web design, 3D art, and
              UI/UX.
            </p>

            <p>
              I enjoy exploring design tools like Figma and Blender and believe
              in continuous learning.
            </p>
          </div>
        </div>

        <div className="personal mt-5" data-aos="fade-up">
          <h3>Beyond Work 😄</h3>

          <p>
            I love photography, sketching ideas, and helping friends with
            digital projects.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section bg-dark">
        <div className="container">
          <h2 className="section-title">My Skills</h2>

          <div className="row skills" data-aos="fade-up">
            <div className="col-md-6">
              <div className="skill-box">
                <h5>🖥️ Web Development</h5>

                <p>
                  HTML, CSS, Bootstrap – building responsive websites and UI.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="skill-box">
                <h5>🎨 UI/UX Design</h5>

                <p>Designing user-friendly interfaces using Figma and XD.</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="skill-box">
                <h5>🧊 3D Modeling</h5>

                <p>Creating realistic renders and environments in Blender.</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="skill-box">
                <h5>🎬 Motion & Animation</h5>

                <p>CSS animations, Blender animation, and scroll effects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">3D Projects</h2>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="project-card">
                <img
                  src="/blender/earth.png"
                  alt="Earth"
                  className="img-fluid rounded"
                />

                <h3 className="mt-3">Earth Surface</h3>

                <p>Realtime Earth surface view using texturing.</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="project-card">
                <img
                  src="/blender/mirror.png"
                  alt="Room"
                  className="img-fluid rounded"
                />

                <h3 className="mt-3">Designer Room</h3>

                <p>Interior render using cycles renderer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section bg-dark">
        <div className="container">
          <h3 className="section-title">Contact Me</h3>

          <form className="contact-form" data-aos="fade-up">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />

            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
            />

            <textarea
              className="form-control"
              rows="5"
              placeholder="Your Message"
            ></textarea>

            <button type="submit" className="btn btn-warning mt-3">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container text-center">
          <p>© 2025 Mubarak. All rights reserved.</p>

          <div className="social-icons">
            <a
              href="https://www.instagram.com/aalam_alkhayal_05/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              href="https://github.com/MubarakAli05"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/mubarak5"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;
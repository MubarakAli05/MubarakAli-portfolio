

const Footer = () => {

  return (

    <footer className="footer">

      {/* TOP GLOW LINE */}

      <div className="footer-line"></div>

      <div className="footer-container">

        {/* BRAND */}

        <div className="footer-brand">

          <h2>
            Mubarak
          </h2>

          <p>
            Frontend Developer • 3D Artist • Creative Designer
          </p>

        </div>

        {/* SOCIAL ICONS */}

        <div className="footer-icons">

          <a
            href="https://github.com/MubarakAli05"
            aria-label="Mubarak Ali on GitHub (opens in a new tab)"
            target="_blank"
            rel="noreferrer"
          >

            <i className="fab fa-github"></i>

          </a>

          <a
            href="https://www.linkedin.com/in/mubarak5"
            aria-label="Mubarak Ali on LinkedIn (opens in a new tab)"
            target="_blank"
            rel="noreferrer"
          >

            <i className="fab fa-linkedin"></i>

          </a>

          <a
            href="https://www.instagram.com/aalam_alkhayal_05/"
            aria-label="Mubarak Ali on Instagram (opens in a new tab)"
            target="_blank"
            rel="noreferrer"
          >

            <i className="fab fa-instagram"></i>

          </a>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <span>
          © 2026 Mubarak. All Rights Reserved.
        </span>
        <a className="back-to-top" href="#home">Back to top <span aria-hidden="true">↑</span></a>

      </div>

    </footer>
  );
};

export default Footer;


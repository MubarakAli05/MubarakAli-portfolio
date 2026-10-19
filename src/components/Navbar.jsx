import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      aria-label="Main navigation"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setMenuOpen(false);
          event.currentTarget.querySelector("button").focus();
        }
      }}
    >
      <a href="#home" className="nav-brand" onClick={() => setMenuOpen(false)}>
        <img className="brand-mark" src="/logo.svg" width="36" height="36" alt="" aria-hidden="true" />
        Mubarak Ali<span className="brand-dot">.</span>
      </a>
      <button
        type="button"
        className={`hamburger ${menuOpen ? "active" : ""}`}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="navigation-links"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>

      <ul id="navigation-links" className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </li>

        <li>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        </li>

        <li>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        </li>

        <li>
          <a href="#aiml-projects" onClick={() => setMenuOpen(false)}>AI/ML</a>
        </li>

        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </li>
      </ul>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="hire-btn"
      >
        Hire Me
      </a>
    </nav>
  );
};

export default Navbar;
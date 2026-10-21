import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectGalleries } from "./projectGalleries";

const projects = [
  {
    title: "Testing Lighting",
    image: "/blender/light2.jpeg",
    description:
      "Realtime atmospheric lighting using Blender texturing, volumetrics, and cinematic rendering.",
    github: "https://github.com/MubarakAli05",
  },

  {
    title: "Cafe Architecture",
    image: "/blender/arch1.jpeg",
    description:
      "Modern café architecture visualization with warm atmospheric lighting and realistic interior detailing.",
    github: "https://github.com/MubarakAli05",
  },

  {
    title: "Home Architecture",
    image: "/blender/archh1.jpeg",
    description:
      "Modern home architecture visualization with cinematic lighting, realistic materials, and contemporary design aesthetics.",
    github: "https://github.com/MubarakAli05",
  },

  {
    title: "Modern Living Room",
    image: "/blender/archhh1.jpeg",
    description:
      "Modern hall interior visualization with cinematic lighting, realistic materials, and contemporary architectural aesthetics.",
    github: "https://github.com/MubarakAli05",
  },

  {
    title: "Gaming Environment",
    image: "/blender/game1.jpeg",
    description:
      "Realtime game environment with cinematic lighting, atmospheric effects, and immersive world design.",
    github: "https://github.com/MubarakAli05",
  },

  {
    title: "Atmospheric Lighting",
    image: "/blender/atmosp1.jpeg",
    description:
      "Realtime atmospheric lighting using Blender texturing, volumetrics, and cinematic rendering.",
    github: "https://github.com/MubarakAli05",
  },

  {
    title: "Last of Environment",
    image: "/blender/ev1.jpeg",
    description:
      "Post-apocalyptic environment with cinematic lighting, abandoned architecture, and immersive atmospheric storytelling.",
    github: "https://github.com/MubarakAli05",
  },

  {
    title: "Class Room",
    image: "/blender/cl1.jpeg",
    description:
      "Classroom environment with realtime lighting, realistic materials, and cinematic interior atmosphere.",
    github: "https://github.com/MubarakAli05",
  },

  {
    title: "Beyond the Mountains",
    image: "/blender/atmos1.jpeg",
    description:
      "Atmospheric railway environment with cinematic fog, realistic lighting, and immersive mountain scenery.",
    github: "https://github.com/MubarakAli05",
  },
];

const Projects = () => {
  const track = useRef(null);
  const [bounds, setBounds] = useState({ start: true, end: false });
  const [position, setPosition] = useState({ first: 1, last: 3, progress: 0 });

  useEffect(() => {
    const element = track.current;
    const update = () => {
      const cards = element.querySelectorAll(".project-card");
      const step = cards[1].offsetLeft - cards[0].offsetLeft;
      const first = Math.round(element.scrollLeft / step) + 1;
      const visible = Math.max(1, Math.round(element.clientWidth / step));
      const distance = element.scrollWidth - element.clientWidth;
      setPosition({ first, last: Math.min(projects.length, first + visible - 1), progress: distance > 0 ? Math.min(1, Math.max(0, element.scrollLeft / distance)) : 1 });
      setBounds({ start: element.scrollLeft <= 2, end: element.scrollLeft >= distance - 2 });
    };
    const observer = new ResizeObserver(update);
    observer.observe(element);
    element.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      observer.disconnect();
      element.removeEventListener("scroll", update);
    };
  }, []);

  const move = (direction) => {
    const element = track.current;
    const cards = element.querySelectorAll(".project-card");
    const step = cards[1].offsetLeft - cards[0].offsetLeft;
    element.scrollBy({
      left: direction * step,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };

  return (
    <section className="projects-section" id="projects" aria-labelledby="three-d-title">
      <h2 className="section-title" id="three-d-title">My 3D-Projects</h2>
      <div className="carousel-toolbar">
        <p>All 9 works — explore finished renders and behind-the-scenes Blender images in each gallery.</p>
        <div className="carousel-controls">
          <button type="button" aria-label="Previous 3D project" aria-controls="three-d-carousel" disabled={bounds.start} onClick={() => move(-1)}>←</button>
          <button type="button" aria-label="Next 3D project" aria-controls="three-d-carousel" disabled={bounds.end} onClick={() => move(1)}>→</button>
        </div>
      </div>
      <div
        ref={track}
        id="three-d-carousel"
        className="project-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="3D projects — swipe or use the arrow buttons to browse"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            move(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
      >
        {projects.map((project) => <ProjectCard key={project.title} {...project} gallery={projectGalleries[project.title]} />)}
      </div>
      <div className="carousel-position">
        <span>WORKS {String(position.first).padStart(2, "0")}–{String(position.last).padStart(2, "0")} <span>/ 09</span></span>
        <div className="carousel-meter" aria-hidden="true"><span style={{ transform: `translateX(${position.progress * 300}%)` }} /></div>
        <span>LIGHT · SPACE · FORM</span>
      </div>
    </section>
  );
};

export default Projects;
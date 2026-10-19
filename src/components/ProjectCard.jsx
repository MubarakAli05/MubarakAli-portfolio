import { useRef, useState } from "react";

const ProjectCard = ({ image, imageFit = "cover", title, description, github, live, gallery }) => {
  const dialog = useRef(null);
  const [previewLoaded, setPreviewLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const works = gallery ?? [{ image, title, description }];
  const activeWork = works[activeIndex];
  const move = (direction) => setActiveIndex((index) => Math.max(0, Math.min(works.length - 1, index + direction)));

  const openPreview = () => {
    setActiveIndex(0);
    setPreviewLoaded(true);
    dialog.current.showModal();
  };

  return (
    <>
      <article className="project-card">
        <div className="project-image-container">
          <img
            src={image}
            alt={title}
            className="project-image"
            style={{ objectFit: imageFit }}
            width="960"
            height="600"
            loading="lazy"
            decoding="async"
          />
          {gallery && <span className="project-count">{works.length} works</span>}
        </div>
        <div className="project-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="project-buttons">
            {live ? (
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="project-btn live-btn"
                aria-label={`Visit ${title} website (opens in a new tab)`}
              >Visit Website <span aria-hidden="true">↗</span></a>
            ) : (
              <button
                type="button"
                className="project-btn live-btn"
                onClick={openPreview}
                aria-label={gallery ? `View ${title} collection` : `View ${title} full image`}
              >{gallery ? "View Collection" : "View Full Image"} <span aria-hidden="true">↗</span></button>
            )}
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="project-btn github-btn"
              aria-label={`${title} on GitHub (opens in a new tab)`}
            >GitHub</a>
          </div>
        </div>
      </article>
      {!live && (
        <dialog
          ref={dialog}
          className="image-popup"
          aria-label={gallery ? `${title} collection` : `${title} full image`}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              event.preventDefault();
              dialog.current.close();
            }
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              move(event.key === "ArrowLeft" ? -1 : 1);
            }
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) dialog.current.close();
          }}
        >
          <button type="button" className="close-btn" aria-label="Close image preview" onClick={() => dialog.current.close()}>✕</button>
          <div className="gallery-panel">
            {previewLoaded && <img src={activeWork.image} alt={activeWork.title} className="popup-image" />}
            <div className="gallery-caption" aria-live="polite">
              <h3>{activeWork.title}</h3>
              <p>{activeWork.description}</p>
            </div>
            {works.length > 1 && (
              <div className="gallery-controls">
                <button type="button" onClick={() => move(-1)} disabled={activeIndex === 0} aria-label="Previous artwork">← Previous</button>
                <span aria-live="polite">{activeIndex + 1} / {works.length}</span>
                <button type="button" onClick={() => move(1)} disabled={activeIndex === works.length - 1} aria-label="Next artwork">Next →</button>
              </div>
            )}
          </div>
        </dialog>
      )}
    </>
  );
};

export default ProjectCard;
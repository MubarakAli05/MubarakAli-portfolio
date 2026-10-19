import { useEffect } from "react";

export default function PageMotion() {

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let dispose = () => {};
    const setup = () => {
      dispose();
      const disabled = preference.matches;
      document.documentElement.dataset.motion = disabled ? "paused" : "active";
      const cleanup = [];
      const listen = (target, event, callback, options) => {
        target.addEventListener(event, callback, options);
        cleanup.push(() => target.removeEventListener(event, callback, options));
      };
      const progress = document.querySelector(".scroll-progress");
      const shapes = [...document.querySelectorAll(".parallax-shape")];
      let frame;
      const update = () => {
        const distance = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.transform = `scaleX(${distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0})`;
        if (!disabled) shapes.forEach((shape, index) => {
          shape.style.translate = `0 ${Math.min(window.scrollY, window.innerHeight) * (index ? -0.045 : 0.075)}px`;
        });
        frame = null;
      };
      const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
      listen(window, "scroll", schedule, { passive: true });
      listen(window, "resize", schedule);
      const resize = new ResizeObserver(schedule);
      resize.observe(document.body);
      cleanup.push(() => { resize.disconnect(); cancelAnimationFrame(frame); shapes.forEach(shape => shape.style.removeProperty("translate")); });
      update();

      const image = document.querySelector(".hero-image-card > img");
      const loaded = () => image.parentElement.removeAttribute("data-loading");
      if (!image.complete) image.parentElement.dataset.loading = "true";
      listen(image, "load", loaded);
      listen(image, "error", loaded);
      cleanup.push(loaded);

      if (!disabled) {
        const animations = new Set();
        const animate = (element, frames, options) => {
          if (!element.animate) return;
          const animation = element.animate(frames, options);
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        };
        document.querySelectorAll(".headline-line").forEach((line, index) => {
          animate(line, [{ transform: "translateY(110%)" }, { transform: "translateY(0)" }], { duration: 850, delay: index * 120, easing: "cubic-bezier(.22,1,.36,1)", fill: "backwards" });
        });
        const word = document.querySelector(".rotating-word");
        const words = ["cinematic", "interactive", "immersive"];
        let wordIndex = 0;
        const timer = setInterval(() => {
          if (document.hidden || window.scrollY > window.innerHeight) {
            clearInterval(timer);
            return;
          }
          wordIndex += 1;
          if (wordIndex === words.length - 1) clearInterval(timer);
          word.textContent = words[wordIndex];
          animate(word, [{ opacity: 0, transform: "translateY(65%)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 500, easing: "ease-out" });
        }, 2100);
        cleanup.push(() => { clearInterval(timer); word.textContent = words[0]; });

        const line = document.querySelector(".typewriter-line");
        const text = line.textContent;
        const counter = document.querySelector(".project-counter");
        let countFrame;
        const start = performance.now();
        const tick = (now) => {
          const elapsed = now - start;
          counter.textContent = `${Math.round(15 * Math.min(1, elapsed / 1200))}+`;
          line.textContent = text.slice(0, Math.max(1, Math.ceil(text.length * Math.min(1, elapsed / 1800))));
          if (elapsed < 1800) countFrame = requestAnimationFrame(tick);
        };
        countFrame = requestAnimationFrame(tick);
        cleanup.push(() => { cancelAnimationFrame(countFrame); counter.textContent = "15+"; line.textContent = text; });

        const button = document.querySelector(".magnetic-btn");
        const reset = () => button.style.removeProperty("translate");
        listen(button, "pointermove", (event) => {
          if (event.pointerType !== "mouse" || document.activeElement === button) return;
          const rect = button.getBoundingClientRect();
          button.style.translate = `${(event.clientX - rect.left - rect.width / 2) * 0.12}px ${(event.clientY - rect.top - rect.height / 2) * 0.12}px`;
        });
        listen(button, "pointerleave", reset);
        listen(button, "focus", reset);
        cleanup.push(reset, () => animations.forEach(animation => animation.cancel()));
      }
      dispose = () => cleanup.forEach(callback => callback());
    };
    setup();
    preference.addEventListener("change", setup);
    return () => {
      dispose();
      preference.removeEventListener("change", setup);
      delete document.documentElement.dataset.motion;
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}

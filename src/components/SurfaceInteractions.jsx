import { useEffect } from "react";

export default function SurfaceInteractions() {
  useEffect(() => {
    const surfaces = [...document.querySelectorAll("main > section, .footer")];
    const portrait = document.querySelector(".hero-right");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const cleanup = [];
    const pending = new Map();
    let frame;
    const allowed = () => finePointer.matches && !reducedMotion.matches && document.documentElement.dataset.motion !== "paused";
    const reset = (surface) => {
      pending.delete(surface);
      surface.removeAttribute("data-pointer");
      ["--pointer-x", "--pointer-y", "--portrait-x", "--portrait-y"].forEach(name => surface.style.removeProperty(name));
    };
    const resetAll = () => {
      cancelAnimationFrame(frame);
      frame = null;
      [...surfaces, portrait].forEach(reset);
    };
    const flush = () => {
      if (allowed()) pending.forEach(({ x, y }, surface) => {
        const rect = surface.getBoundingClientRect();
        const localX = Math.max(0, Math.min(rect.width, x - rect.left));
        const localY = Math.max(0, Math.min(rect.height, y - rect.top));
        surface.dataset.pointer = "true";
        surface.style.setProperty("--pointer-x", `${localX}px`);
        surface.style.setProperty("--pointer-y", `${localY}px`);
        if (surface === portrait) {
          surface.style.setProperty("--portrait-x", `${(0.5 - localY / rect.height) * 5}deg`);
          surface.style.setProperty("--portrait-y", `${(localX / rect.width - 0.5) * 5}deg`);
        }
      });
      pending.clear();
      frame = null;
    };
    [...surfaces, portrait].forEach(surface => {
      const move = event => {
        if (event.pointerType !== "mouse" || !allowed()) return;
        pending.set(surface, { x: event.clientX, y: event.clientY });
        if (!frame) frame = requestAnimationFrame(flush);
      };
      const leave = () => reset(surface);
      surface.addEventListener("pointermove", move, { passive: true });
      surface.addEventListener("pointerleave", leave);
      cleanup.push(() => {
        surface.removeEventListener("pointermove", move);
        surface.removeEventListener("pointerleave", leave);
      });
    });
    const observer = new MutationObserver(() => { if (!allowed()) resetAll(); });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-motion"] });
    finePointer.addEventListener("change", resetAll);
    reducedMotion.addEventListener("change", resetAll);
    window.addEventListener("blur", resetAll);
    window.addEventListener("scroll", resetAll, { passive: true });
    return () => {
      resetAll();
      observer.disconnect();
      cleanup.forEach(dispose => dispose());
      finePointer.removeEventListener("change", resetAll);
      reducedMotion.removeEventListener("change", resetAll);
      window.removeEventListener("blur", resetAll);
      window.removeEventListener("scroll", resetAll);
    };
  }, []);

  return null;
}

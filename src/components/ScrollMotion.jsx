import { useEffect } from "react";

export default function ScrollMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!window.IntersectionObserver || !Element.prototype.animate) return;

    const animations = new Map();
    const seen = new WeakSet();
    const elements = document.querySelectorAll(
      ".about-header, .skills-header, .contact-header, .section-title, .about-card, .skill-card, .project-card, .contact-info, .contact-form",
    );
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting || seen.has(target)) return;
        seen.add(target);
        observer.unobserve(target);
        if (preference.matches || target.contains(document.activeElement)) return;

        const animation = target.animate(
          [{ opacity: 0.7, transform: "translateY(18px)" }, { opacity: 1, transform: "none" }],
          { duration: 560, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
        );
        animations.set(target, animation);
        animation.onfinish = () => animations.delete(target);
      });
    }, { threshold: 0.1 });

    const cancelAnimations = () => {
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    const onPreferenceChange = () => {
      if (preference.matches) cancelAnimations();
    };
    const onFocus = (event) => {
      animations.forEach((animation, element) => {
        if (element.contains(event.target)) {
          animation.cancel();
          animations.delete(element);
        }
      });
    };

    elements.forEach((element) => observer.observe(element));
    preference.addEventListener("change", onPreferenceChange);
    document.addEventListener("focusin", onFocus);
    return () => {
      observer.disconnect();
      cancelAnimations();
      preference.removeEventListener("change", onPreferenceChange);
      document.removeEventListener("focusin", onFocus);
    };
  }, []);

  return null;
}

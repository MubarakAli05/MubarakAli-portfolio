import { useEffect } from "react";

export default function ScrollMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!window.IntersectionObserver || !Element.prototype.animate) return;

    const animations = new Map();
    const seen = new WeakSet();
    const elements = document.querySelectorAll(
      ".about-header, .skills-header, .contact-header, .section-title, .about-card, .skill-card, .project-card, .contact-info, .contact-form, .skill-spotlight, .footer-container, .footer-bottom",
    );
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }, index) => {
        if (!isIntersecting || seen.has(target)) return;
        seen.add(target);
        observer.unobserve(target);
        if (preference.matches || document.documentElement.dataset.motion === "paused" || target.contains(document.activeElement)) return;

        let entrance = "translateY(18px)";
        if (target.matches(".about-card")) entrance = "translateX(18px)";
        if (target.matches(".skill-card")) entrance = "translateY(24px) scale(0.96)";
        if (target.matches("#projects .project-card")) entrance = "translateX(20px) scale(0.98)";
        if (target.matches("#web-projects .project-card")) entrance = "translateY(28px) rotate(1deg) scale(0.98)";
        if (target.matches(".ai-project-card")) entrance = "scale(0.96)";
        if (target.matches(".contact-info")) entrance = "translateX(-18px)";
        if (target.matches(".contact-form")) entrance = "translateY(22px) scale(0.98)";
        const animation = target.animate(
          [{ opacity: 0.55, transform: entrance }, { opacity: 1, transform: "none" }],
          { duration: 680, delay: (index % 3) * 90, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" },
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

    const motionObserver = new MutationObserver(() => {
      if (document.documentElement.dataset.motion === "paused") cancelAnimations();
    });
    motionObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-motion"] });
    elements.forEach((element) => observer.observe(element));
    preference.addEventListener("change", onPreferenceChange);
    document.addEventListener("focusin", onFocus);
    return () => {
      observer.disconnect();
      motionObserver.disconnect();
      cancelAnimations();
      preference.removeEventListener("change", onPreferenceChange);
      document.removeEventListener("focusin", onFocus);
    };
  }, []);

  return null;
}

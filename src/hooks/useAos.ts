import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function useAos() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    AOS.init({
      duration: 600,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      disable: prefersReducedMotion,
    });
  }, []);
}

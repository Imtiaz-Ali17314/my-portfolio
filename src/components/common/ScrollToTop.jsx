import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash, state } = useLocation();

  useEffect(() => {
    const targetId = hash || state?.scrollTo;
    if (targetId) {
      // Wait briefly for initial layout to settle
      const element = document.querySelector(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return;
      }

      // Retry loop to accommodate component mounting latency
      let attempts = 0;
      const interval = setInterval(() => {
        const el = document.querySelector(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          clearInterval(interval);
        } else {
          attempts++;
          if (attempts > 12) clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    } else {
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
    }
  }, [pathname, hash, state]);

  return null;
};

export default ScrollToTop;
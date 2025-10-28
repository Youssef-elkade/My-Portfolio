import { useEffect, useRef } from "react";

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.1
) {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("revealed");
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px", // Trigger slightly before element is fully visible
      }
    );
    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return elementRef;
}

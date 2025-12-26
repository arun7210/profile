// app/scroll-animations.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation"; // 1. Import this to track page changes

export default function ScrollAnimations() {
  const pathname = usePathname(); // 2. Track current route

  useEffect(() => {
    // 3. Accessibility Check: Don't animate if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const elements = document.querySelectorAll(".animate-on-scroll");

    // If user wants no motion, just make everything visible immediately and exit
    if (prefersReducedMotion) {
      elements.forEach((el) => {
        el.classList.add("animate__animated", "animate__fadeInUp");
        (el as HTMLElement).style.animationDuration = "0s"; // Force instant appearance
        (el as HTMLElement).style.opacity = "1";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 4. Add classes immediately when in view
            entry.target.classList.add("animate__animated", "animate__fadeInUp");
            
            // 5. Stop observing once animated (performance)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // 6. Trigger as soon as 10% is visible (safer for tall elements)
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before the bottom of screen
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => observer.disconnect();
    
  }, [pathname]); // 7. Re-run this effect whenever the URL changes

  return null;
}
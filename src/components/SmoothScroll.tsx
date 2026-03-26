"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Disable Lenis on touch/mobile devices — native momentum scroll is faster
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Smooth anchor scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (anchor && anchor.hash && anchor.hash.startsWith("#")) {
        // Let the page handle it for mobile, only intercept on desktop
        e.preventDefault();
        lenis.scrollTo(anchor.hash, {
          offset: -72,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    };

    document.addEventListener("click", handleAnchorClick);
    const resizeObserver = new ResizeObserver(() => lenis.resize());
    resizeObserver.observe(document.body);

    return () => {
      lenis.destroy();
      document.removeEventListener("click", handleAnchorClick);
      resizeObserver.disconnect();
    };
  }, []);

  return <>{children}</>;
}

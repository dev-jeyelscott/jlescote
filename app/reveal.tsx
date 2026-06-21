"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!element.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const animation = gsap.fromTo(element.current, { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.7, delay, ease: "power2.out", scrollTrigger: { trigger: element.current, start: "top 88%", once: true } });
    return () => {
      animation.kill();
    };
  }, [delay]);

  return <div ref={element} className={className}>{children}</div>;
}

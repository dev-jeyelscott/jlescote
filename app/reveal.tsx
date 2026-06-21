"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type AnimationKind = "hero" | "timeline" | "stats" | "projects";

export function AnimatedGroup({ children, className = "", kind }: { children: ReactNode; className?: string; kind: AnimationKind }) {
  const element = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = element.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const targets = kind === "hero" || kind === "timeline" || kind === "projects" ? Array.from(root.children) : root;
    const context = gsap.context(() => {
      gsap.fromTo(targets, { autoAlpha: 0, y: kind === "hero" ? 18 : 24 }, { autoAlpha: 1, y: 0, duration: 0.7, stagger: kind === "projects" ? 0.1 : 0.08, ease: "power2.out", scrollTrigger: kind === "hero" ? undefined : { trigger: root, start: "top 86%", once: true } });
    }, root);
    return () => context.revert();
  }, [kind]);
  return <div ref={element} className={className}>{children}</div>;
}

export function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const element = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const node = element.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const value = { current: 0 };
    const tween = gsap.to(value, { current: end, duration: 1.2, ease: "power2.out", scrollTrigger: { trigger: node, start: "top 90%", once: true }, onUpdate: () => { node.textContent = `${Math.round(value.current)}${suffix}`; } });
    return () => {
      tween.kill();
    };
  }, [end, suffix]);
  return <span ref={element}>{end}{suffix}</span>;
}

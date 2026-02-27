"use client";

import { useEffect, useRef, ReactNode } from "react";

type AnimationType = "up" | "left" | "right" | "scale" | "blur" | "clip";

interface ScrollAnimationProps {
  children: ReactNode;
  type?: AnimationType;
  delay?: number;
  className?: string;
}

export default function ScrollAnimation({
  children,
  type = "up",
  delay = 0,
  className = "",
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animClass = type === "clip" ? "anim-clip" : `anim anim-${type}`;
  const delayClass = delay > 0 ? `anim-delay-${delay}` : "";

  return (
    <div ref={ref} className={`${animClass} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}

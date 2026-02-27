"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  type?: string;
  delay?: number;
  className?: string;
}

export default function ScrollAnimation({
  children,
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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay > 0 ? `fade-up-d${delay}` : "";

  return (
    <div ref={ref} className={`fade-up ${delayClass} ${className}`}>
      {children}
    </div>
  );
}

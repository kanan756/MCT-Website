"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down" | "fade";
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  className = "",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, []);

  const getTransformStyle = () => {
    if (isVisible) {
      return "translate3d(0, 0, 0) scale(1)";
    }
    switch (direction) {
      case "left":
        return "translate3d(-60px, 0, 0)";
      case "right":
        return "translate3d(60px, 0, 0)";
      case "up":
        return "translate3d(0, 50px, 0)";
      case "down":
        return "translate3d(0, -50px, 0)";
      case "fade":
      default:
        return "translate3d(0, 0, 0) scale(0.95)";
    }
  };

  return (
    <div
      ref={elementRef}
      style={{
        transform: getTransformStyle(),
        opacity: isVisible ? 1 : 0,
        transition: `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: "transform, opacity",
      }}
      className={`relative ${className}`}
    >
      {children}
    </div>
  );
}

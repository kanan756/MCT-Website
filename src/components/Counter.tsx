"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function Counter({ end, duration = 2, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        
        if (progress < 1) {
          setCount(Math.floor(end * progress));
          requestAnimationFrame(animateCount);
        } else {
          setCount(end);
        }
      };
      
      requestAnimationFrame(animateCount);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

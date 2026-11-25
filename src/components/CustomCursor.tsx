"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Delay slightly to avoid synchronous setState in effect warning
    const timer = setTimeout(() => {
      setIsVisible(!("ontouchstart" in window || navigator.maxTouchPoints > 0));
    }, 0);
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("hover-magnetic")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center overflow-visible"
    >
      <motion.div 
        animate={{ 
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? "#fff" : "#fff" 
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-full h-full rounded-full bg-white opacity-80"
      />
    </motion.div>
  );
}

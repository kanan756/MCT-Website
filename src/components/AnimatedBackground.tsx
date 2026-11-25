"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background">
      {/* Orb 1: Primary Color (Blue) */}
      <motion.div
        animate={{
          x: ["-20%", "20%", "-10%", "-20%"],
          y: ["-20%", "10%", "30%", "-20%"],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-primary/20 blur-[120px]"
      />
      
      {/* Orb 2: Accent Color (Red) */}
      <motion.div
        animate={{
          x: ["20%", "-20%", "10%", "20%"],
          y: ["20%", "-10%", "-30%", "20%"],
          scale: [0.9, 1.1, 1, 0.9],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] rounded-full bg-accent/15 blur-[100px]"
      />

      {/* Orb 3: Subtle Secondary Mix */}
      <motion.div
        animate={{
          x: ["0%", "30%", "-30%", "0%"],
          y: ["0%", "20%", "10%", "0%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[30vw] rounded-full bg-primary-light/10 blur-[150px]"
      />
      
      {/* Optional faint grid overlay for that tech feel */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
    </div>
  );
}

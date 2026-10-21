"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function PageTransitionLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const firstRender = useRef(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Skip on initial page render so initial view displays immediately
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    // Trigger loader on route navigation
    setLoading(true);

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2-second duration

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [pathname, searchParams]);

  if (!loading) return null;

  // 8 circular bubble nodes around a circular clock layout
  // Matching MCT corporate theme colors: #3482b9, #5ba6db, #1d4ed8, #00d2d3
  const bubbleCount = 8;
  const radius = 28; // px

  return (
    <div
      aria-label="Loading page"
      className="fixed inset-0 z-[9999] bg-[#0b1b3d]/85 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300 select-none animate-in fade-in"
    >
      {/* Background Soft Theme Glow */}
      <div className="absolute w-64 h-64 bg-[#3482b9]/25 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Bubble Spinner Container */}
      <div className="relative flex flex-col items-center justify-center z-10">
        
        {/* Classic Bubbles - Fast Movement Circular Spinner */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center animate-spin" style={{ animationDuration: "1.2s" }}>
          {Array.from({ length: bubbleCount }).map((_, i) => {
            const angle = (i * 360) / bubbleCount;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            const delay = (i * 0.6) / bubbleCount;

            return (
              <div
                key={i}
                className="absolute flex items-center justify-center"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                <span
                  className="rounded-full inline-block"
                  style={{
                    width: `${8 + (i % 3) * 2.5}px`,
                    height: `${8 + (i % 3) * 2.5}px`,
                    backgroundColor: i % 2 === 0 ? "#3482b9" : "#5ba6db",
                    boxShadow: "0 0 12px rgba(52, 130, 185, 0.9)",
                    animation: `classicBubblePulse 0.6s ease-in-out infinite`,
                    animationDelay: `${delay}s`,
                  }}
                />
              </div>
            );
          })}

          {/* Central fast glowing bubble */}
          <div className="w-3.5 h-3.5 rounded-full bg-[#00d2d3] shadow-[0_0_14px_#00d2d3] animate-ping opacity-80" />
        </div>

        {/* Brand Label */}
        <div className="mt-6 flex flex-col items-center space-y-1">
          <span className="text-xs font-black tracking-widest uppercase text-white/95">
            MCT IT Solutions
          </span>
          <span className="text-[11px] font-semibold text-[#5ba6db] tracking-wider uppercase animate-pulse">
            Loading...
          </span>
        </div>

      </div>

      {/* Embedded CSS Keyframes for Classic Fast Bubble Movement */}
      <style jsx>{`
        @keyframes classicBubblePulse {
          0%, 100% {
            transform: scale(0.35);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.35);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

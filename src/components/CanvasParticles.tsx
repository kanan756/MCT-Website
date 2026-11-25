"use client";

import { useEffect, useRef } from "react";

export default function CanvasParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      init();
    });

    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 150
    };

    window.addEventListener("mousemove", (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    window.addEventListener("mouseout", () => {
      mouse.x = null;
      mouse.y = null;
    });

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = (Math.random() - 0.5) * 1.5;
      }

      update() {
        if (this.x > w || this.x < 0) this.speedX = -this.speedX;
        if (this.y > h || this.y < 0) this.speedY = -this.speedY;

        this.x += this.speedX;
        this.y += this.speedY;

        // Mouse interaction
        if (mouse.x != null && mouse.y != null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            this.x -= dx / 20;
            this.y -= dy / 20;
          }
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(52, 130, 185, 0.8)"; // MCT Blue
        ctx.fill();
      }
    }

    function init() {
      particlesArray = [];
      // Reduce the number of particles drastically to improve performance. Max 100.
      const numberOfParticles = Math.min(100, Math.floor((w * h) / 15000));
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    function connect() {
      if (!ctx) return;
      let opacityValue = 1;
      // Optimize connection distance calculation. Use a fixed responsive max distance squared.
      // On mobile we might want a shorter connection distance.
      const maxDistance = (Math.min(w, h) / 4) * (Math.min(w, h) / 4);
      
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distanceSq = dx * dx + dy * dy;
          
          if (distanceSq < maxDistance) {
            opacityValue = 1 - distanceSq / maxDistance;
            ctx.strokeStyle = `rgba(52, 130, 185, ${opacityValue})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connect();
      requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
      // Cleanup event listeners could be added here
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen"
    />
  );
}

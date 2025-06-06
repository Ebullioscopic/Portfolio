"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
}

export default function Particles({
  className = "",
  quantity = 30,
  staticity = 50,
  ease = 50,
  refresh = false,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<any[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const mouseMoved = useRef(false);
  const [canvasSize, setCanvasSize] = useState({ w: 0, h: 0 });

  const getCanvasSize = () => {
    if (canvasContainerRef.current) {
      const rect = canvasContainerRef.current.getBoundingClientRect();
      return { w: rect.width, h: rect.height };
    }
    return { w: 0, h: 0 };
  };

  const resizeCanvas = () => {
    const newSize = getCanvasSize();
    setCanvasSize(newSize);
    if (canvasRef.current) {
      canvasRef.current.width = newSize.w;
      canvasRef.current.height = newSize.h;
    }
  };

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    initCanvas();
    animate();
    const handleResize = () => {
      resizeCanvas();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [canvasSize.w, canvasSize.h]);

  useEffect(() => {
    initCanvas();
  }, [refresh]);

  const initCanvas = () => {
    resizeCanvas();
    circles.current.length = 0;
    for (let i = 0; i < quantity; i++) {
      circles.current.push({
        x: Math.random() * canvasSize.w,
        y: Math.random() * canvasSize.h,
        translateX: 0,
        translateY: 0,
        size: Math.random() * 2 + 0.1,
        alpha: Math.random() * 0.5 + 0.1,
        targetAlpha: Math.random() * 0.5 + 0.1,
        dx: (Math.random() - 0.5) * 0.2,
        dy: (Math.random() - 0.5) * 0.2,
        magnetism: 0.1 + Math.random() * 4,
      });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        mousePosition.current.x = e.clientX - rect.left;
        mousePosition.current.y = e.clientY - rect.top;
        mouseMoved.current = true;
      }
    };

    const handleMouseLeave = () => {
      mouseMoved.current = false;
    };

    if (canvasRef.current) {
      canvasRef.current.addEventListener("mousemove", handleMouseMove);
      canvasRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (canvasRef.current) {
        canvasRef.current.removeEventListener("mousemove", handleMouseMove);
        canvasRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const animate = () => {
    if (context.current) {
      context.current.clearRect(0, 0, canvasSize.w, canvasSize.h);

      circles.current.forEach((circle: any) => {
        // Handle magnetism
        if (mouseMoved.current) {
          const distance = Math.sqrt(
            (mousePosition.current.x - circle.x) ** 2 +
              (mousePosition.current.y - circle.y) ** 2
          );
          const force = (100 - distance) / 100;
          if (force > 0) {
            circle.translateX += 
              (mousePosition.current.x - circle.x) * force * circle.magnetism * 0.04;
            circle.translateY += 
              (mousePosition.current.y - circle.y) * force * circle.magnetism * 0.04;
          }
        }

        circle.x += circle.dx + circle.translateX;
        circle.y += circle.dy + circle.translateY;

        // Boundary checks
        if (
          circle.x < -circle.size ||
          circle.x > canvasSize.w + circle.size ||
          circle.y < -circle.size ||
          circle.y > canvasSize.h + circle.size
        ) {
          circle.x = Math.random() * canvasSize.w;
          circle.y = Math.random() * canvasSize.h;
          circle.translateX = 0;
          circle.translateY = 0;
        }

        circle.translateX *= staticity / 100;
        circle.translateY *= staticity / 100;

        if (context.current) {
          context.current.beginPath();
          context.current.arc(circle.x, circle.y, circle.size, 0, 2 * Math.PI);
          context.current.fillStyle = `rgba(255, 255, 255, ${circle.alpha})`;
          context.current.fill();
        }
      });
    }
    requestAnimationFrame(animate);
  };

  return (
    <div className={className} ref={canvasContainerRef} aria-hidden="true">
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
}

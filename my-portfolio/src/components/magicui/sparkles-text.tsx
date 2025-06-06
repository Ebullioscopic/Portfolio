"use client";

import React, { CSSProperties, ReactElement, useEffect, useState } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

interface SparklesTextProps {
  text: string;
  colors?: {
    first: string;
    second: string;
  };
  className?: string;
  sparklesCount?: number;
}

interface Sparkle {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
  lifespan: number;
}

export default function SparklesText({
  text,
  colors = { first: "#9E7AFF", second: "#FE8BBB" },
  className,
  sparklesCount = 10,
}: SparklesTextProps) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generateSpark = (): Sparkle => ({
      id: `sparkle-${Date.now()}-${Math.random()}`,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      color: Math.random() > 0.5 ? colors.first : colors.second,
      delay: Math.random() * 2,
      scale: Math.random() * 1 + 0.3,
      lifespan: Math.random() * 10 + 5,
    });

    const initializeSparks = () => {
      const newSparks = Array.from({ length: sparklesCount }, generateSpark);
      setSparkles(newSparks);
    };

    const updateSparks = () => {
      setSparkles((currentSparks) =>
        currentSparks.map((spark) => ({
          ...spark,
          id: `sparkle-${Date.now()}-${Math.random()}`,
          x: `${Math.random() * 100}%`,
          y: `${Math.random() * 100}%`,
        }))
      );
    };

    initializeSparks();
    const interval = setInterval(updateSparks, 3000);

    return () => clearInterval(interval);
  }, [colors.first, colors.second, sparklesCount]);

  return (
    <div
      className={cn(
        "relative inline-block",
        className
      )}
    >
      <span className="relative z-10">{text}</span>
      <span className="absolute inset-0">
        {sparkles.map((sparkle) => (
          <Sparkle key={sparkle.id} {...sparkle} />
        ))}
      </span>
    </div>
  );
}

interface SparkleProps {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
  lifespan: number;
}

const Sparkle: React.FC<SparkleProps> = ({
  id,
  x,
  y,
  color,
  delay,
  scale,
}) => {
  return (
    <motion.svg
      key={id}
      className="pointer-events-none absolute z-20"
      initial={{ opacity: 0, transform: `translate(-50%, -50%) scale(0)` }}
      animate={{
        opacity: [0, 1, 0],
        transform: [
          `translate(-50%, -50%) scale(0) rotate(0deg)`,
          `translate(-50%, -50%) scale(${scale}) rotate(180deg)`,
          `translate(-50%, -50%) scale(0) rotate(360deg)`,
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
      }}
      style={{
        left: x,
        top: y,
      }}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0001 3.00009C11.0001 1.34323 9.65695 0.00009155 8.00009 0.00009155C9.65695 0.00009155 11.0001 -1.34305 11.0001 -3.00009C11.0001 -1.34305 12.3432 0.00009155 14.0001 0.00009155C12.3432 0.00009155 11.0001 1.34323 11.0001 3.00009Z"
        fill={color}
      />
      <path
        d="M11.0001 8.99991C11.0001 7.34305 9.65695 5.99991 8.00009 5.99991C9.65695 5.99991 11.0001 4.65677 11.0001 2.99991C11.0001 4.65677 12.3432 5.99991 14.0001 5.99991C12.3432 5.99991 11.0001 7.34305 11.0001 8.99991Z"
        fill={color}
      />
      <path
        d="M8.00009 11.0001C8.00009 9.34323 6.65695 8.00009 5.00009 8.00009C6.65695 8.00009 8.00009 6.65695 8.00009 5.00009C8.00009 6.65695 9.34323 8.00009 11.0001 8.00009C9.34323 8.00009 8.00009 9.34323 8.00009 11.0001Z"
        fill={color}
      />
      <path
        d="M8.00009 17.0001C8.00009 15.3432 6.65695 14.0001 5.00009 14.0001C6.65695 14.0001 8.00009 12.6569 8.00009 11.0001C8.00009 12.6569 9.34323 14.0001 11.0001 14.0001C9.34323 14.0001 8.00009 15.3432 8.00009 17.0001Z"
        fill={color}
      />
      <path
        d="M14.0001 14.0001C14.0001 12.3432 12.6569 11.0001 11.0001 11.0001C12.6569 11.0001 14.0001 9.65695 14.0001 8.00009C14.0001 9.65695 15.3432 11.0001 17.0001 11.0001C15.3432 11.0001 14.0001 12.3432 14.0001 14.0001Z"
        fill={color}
      />
      <path
        d="M14.0001 20.0001C14.0001 18.3432 12.6569 17.0001 11.0001 17.0001C12.6569 17.0001 14.0001 15.6569 14.0001 14.0001C14.0001 15.6569 15.3432 17.0001 17.0001 17.0001C15.3432 17.0001 14.0001 18.3432 14.0001 20.0001Z"
        fill={color}
      />
    </motion.svg>
  );
};

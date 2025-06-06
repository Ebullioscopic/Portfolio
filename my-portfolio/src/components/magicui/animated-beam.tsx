"use client";

import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { motion } from "motion/react";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: React.RefObject<HTMLElement>;
  fromRef: React.RefObject<HTMLElement>;
  toRef: React.RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  delay = 0,
  duration = Math.random() * 3 + 4,
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}) => {
  const id = React.useId();
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const [pathD, setPathD] = React.useState("");
  const [svgDimensions, setSvgDimensions] = React.useState({ width: 0, height: 0 });

  const updatePath = React.useCallback(() => {
    if (containerRef.current && fromRef.current && toRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const fromRect = fromRef.current.getBoundingClientRect();
      const toRect = toRef.current.getBoundingClientRect();

      const relativeFromX = fromRect.left - containerRect.left + fromRect.width / 2 + startXOffset;
      const relativeFromY = fromRect.top - containerRect.top + fromRect.height / 2 + startYOffset;
      const relativeToX = toRect.left - containerRect.left + toRect.width / 2 + endXOffset;
      const relativeToY = toRect.top - containerRect.top + toRect.height / 2 + endYOffset;

      const midX = (relativeFromX + relativeToX) / 2;
      const midY = (relativeFromY + relativeToY) / 2;
      const controlX = midX + curvature;
      const controlY = midY;

      const d = `M${relativeFromX},${relativeFromY} Q${controlX},${controlY} ${relativeToX},${relativeToY}`;
      setPathD(d);

      setSvgDimensions({
        width: containerRect.width,
        height: containerRect.height,
      });
    }
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset]);

  React.useEffect(() => {
    updatePath();

    const resizeObserver = new ResizeObserver(updatePath);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [updatePath, containerRef]);

  return (
    <svg
      ref={svgRef}
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      className={cn(
        "pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",
        className
      )}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        ref={pathRef}
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        fill="none"
      />
      <path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={`url(#${id})`}
        strokeOpacity="1"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="0 30"
      >
        <motion.animate
          attributeName="stroke-dasharray"
          dur={`${duration}s`}
          repeatCount="indefinite"
          values={
            reverse
              ? "0 30;30 30;30 0;0 30"
              : "0 30;30 30;30 0;0 30"
          }
          begin={`${delay}s`}
        />
      </path>
      <defs>
        <linearGradient
          className={cn("transform-gpu")}
          id={id}
          gradientUnits="userSpaceOnUse"
          x1={pathD.split(" ")[1]?.split(",")[0]}
          y1={pathD.split(" ")[1]?.split(",")[1]}
          x2={pathD.split(" ")[pathD.split(" ").length - 1]?.split(",")[0]}
          y2={pathD.split(" ")[pathD.split(" ").length - 1]?.split(",")[1]}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="32.5%" stopColor={gradientStopColor} />
          <stop
            offset="100%"
            stopColor={gradientStopColor}
            stopOpacity="0"
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default AnimatedBeam;

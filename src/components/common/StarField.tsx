"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  radius: number;
  tail: { x: number; y: number }[];
}

const MOBILE_BREAKPOINT = 768; // px
const MOBILE_STAR_FACTOR = 0.5; // Reduce stars by 50% on mobile

interface StarfieldProps {
  minHeight: number;
  starCount: number; // Keep it as starCount
  hyperSpace: boolean;
  style?: React.CSSProperties;
}

const MAX_TAIL_LENGTH = 3;

const Starfield: React.FC<StarfieldProps> = ({
  minHeight,
  starCount,
  hyperSpace,
  style,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const starsRef = useRef<Star[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const speedRef = useRef(2);

  const getAdjustedStarCount = useCallback(() => {
    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
    return isMobile ? Math.floor(starCount * MOBILE_STAR_FACTOR) : starCount;
  }, [starCount]);

  const updateDimensions = useCallback(() => {
    if (canvasRef.current) {
      const { clientWidth } = canvasRef.current.parentElement || document.body;
      setDimensions({
        width: clientWidth,
        height: Math.max(minHeight, window.innerHeight),
      });
    }
  }, [minHeight]);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]);

  useEffect(() => {
    const { width, height } = dimensions;
    const adjustedStarCount = getAdjustedStarCount();

    starsRef.current = Array.from({ length: adjustedStarCount }, () => ({
      x: Math.random() * width - width / 2,
      y: Math.random() * height - height / 2,
      z: Math.random() * width,
      radius: Math.random() * 1.5 + 0.5,
      tail: [],
    }));
  }, [dimensions, getAdjustedStarCount]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = dimensions;
    canvas.width = width;
    canvas.height = height;

    const normalSpeed = 2;
    const hyperSpeedMax = 30;
    const accelerationRate = 1.2;
    const decelerationRate = 0.95;

    let animationFrameId: number;

    const animate = () => {
      if (!ctx) return;

      speedRef.current = hyperSpace
        ? Math.min(hyperSpeedMax, speedRef.current * accelerationRate)
        : Math.max(normalSpeed, speedRef.current * decelerationRate);

      ctx.clearRect(0, 0, width, height);

      const halfWidth = width / 2;
      const halfHeight = height / 2;
      const currentSpeed = speedRef.current;

      starsRef.current.forEach((star, index) => {
        star.z -= currentSpeed;

        if (star.z <= 0) {
          starsRef.current[index] = {
            x: Math.random() * width - halfWidth,
            y: Math.random() * height - halfHeight,
            z: width,
            radius: Math.random() * 1.5 + 0.5,
            tail: [],
          };
          return;
        }

        const zFactor = star.z / width;
        const x = star.x / zFactor + halfWidth;
        const y = star.y / zFactor + halfHeight;
        const radius = star.radius * (1 - zFactor);

        if (!isFinite(x) || !isFinite(y) || !isFinite(radius) || radius <= 0) {
          return;
        }

        if (star.tail.length > 0) {
          ctx.beginPath();
          ctx.moveTo(star.tail[0].x, star.tail[0].y);
          ctx.lineTo(x, y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.5 * (1 - zFactor)})`;
          ctx.lineWidth = radius * 2;
          ctx.stroke();
        }

        star.tail.unshift({ x, y });
        if (star.tail.length > MAX_TAIL_LENGTH) {
          star.tail.pop();
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${0.8 * (1 - zFactor)})`;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Start the animation
    animationFrameId = requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [dimensions, hyperSpace]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: `${dimensions.height}px`,
        pointerEvents: "none",
        background: "transparent",
        ...style,
      }}
    />
  );
};

export default Starfield;

"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  radius: number;
  tail: { x: number; y: number }[];
}

interface StarfieldProps {
  minHeight: number;
  starCount: number;
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
  const animationRef = useRef<number>();

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
    starsRef.current = Array.from({ length: starCount }, () => ({
      x: Math.random() * width - width / 2,
      y: Math.random() * height - height / 2,
      z: Math.random() * width,
      radius: Math.random() * 1.5 + 0.5,
      tail: [],
    }));
  }, [dimensions, starCount]);

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

    const animate = () => {
      speedRef.current = hyperSpace
        ? Math.min(hyperSpeedMax, speedRef.current * accelerationRate)
        : Math.max(normalSpeed, speedRef.current * decelerationRate);

      ctx.clearRect(0, 0, width, height);

      starsRef.current.forEach((star, index) => {
        star.z -= speedRef.current;

        if (star.z <= 0) {
          starsRef.current[index] = {
            x: Math.random() * width - width / 2,
            y: Math.random() * height - height / 2,
            z: width,
            radius: Math.random() * 1.5 + 0.5,
            tail: [],
          };
          return;
        }

        const x = star.x / (star.z / width) + width / 2;
        const y = star.y / (star.z / width) + height / 2;
        const radius = star.radius * (1 - star.z / width);

        if (!isFinite(x) || !isFinite(y) || !isFinite(radius) || radius <= 0) {
          return;
        }

        star.tail.unshift({ x, y });
        if (star.tail.length > MAX_TAIL_LENGTH) {
          star.tail.pop();
        }

        if (star.tail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(star.tail[0].x, star.tail[0].y);
          star.tail.forEach((point) => ctx.lineTo(point.x, point.y));
          ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
          ctx.lineWidth = radius * 2;
          ctx.stroke();
        }

        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
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

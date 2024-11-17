'use client'
import React, { useRef, useEffect, useState, useCallback } from 'react';

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

const Starfield: React.FC<StarfieldProps> = ({ minHeight, starCount, hyperSpace, style }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const starsRef = useRef<Star[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const speedRef = useRef(2);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  const updateDimensions = useCallback(() => {
    if (canvasRef.current) {
      const { clientWidth } = canvasRef.current.parentElement || document.body;
      setDimensions({
        width: clientWidth,
        height: Math.max(minHeight, window.innerHeight)
      });
    }
  }, [minHeight]);

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    updateDimensions();
    return () => window.removeEventListener('resize', updateDimensions);
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

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = dimensions;
    canvas.width = width;
    canvas.height = height;

    const normalSpeed = 2;
    const hyperSpeedMax = 30;
    const accelerationRate = 1.2;
    const decelerationRate = 0.95;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      // Adjust speed
      const targetSpeed = hyperSpace ? hyperSpeedMax : normalSpeed;

      if (hyperSpace) {
        // Accelerate exponentially
        speedRef.current = Math.min(
          hyperSpeedMax,
          speedRef.current * accelerationRate
        );
      } else {
        // Decelerate exponentially
        speedRef.current = Math.max(
          normalSpeed,
          speedRef.current * decelerationRate
        );
      }

      // Ensure we don't overshoot the target speed
      if (hyperSpace && speedRef.current > targetSpeed) {
        speedRef.current = targetSpeed;
      } else if (!hyperSpace && speedRef.current < targetSpeed) {
        speedRef.current = targetSpeed;
      }

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

        // Apply mouse influence
        const mouseInfluence = 0.1;
        const dx = mouseRef.current.x - x;
        const dy = mouseRef.current.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = Math.sqrt(width * width + height * height) / 2;
        const influence = (1 - Math.min(distance / maxDistance, 1)) * mouseInfluence;

        const adjustedX = x + dx * influence;
        const adjustedY = y + dy * influence;

        // Update tail
        star.tail.unshift({ x: adjustedX, y: adjustedY });

        // Calculate tail length based on speed, but cap it at MAX_TAIL_LENGTH
        const tailLength = Math.min(Math.floor(speedRef.current), MAX_TAIL_LENGTH);

        if (star.tail.length > tailLength) {
          star.tail = star.tail.slice(0, tailLength);
        }

        // Draw tail
        if (star.tail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(star.tail[0].x, star.tail[0].y);
          for (let i = 1; i < star.tail.length; i++) {
            ctx.lineTo(star.tail[i].x, star.tail[i].y);
          }
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
          ctx.lineWidth = radius * 2;
          ctx.stroke();
        }

        // Draw star
        const gradientRadius = Math.max(radius * 2.5, 0.1);
        try {
          const gradient = ctx.createRadialGradient(
            adjustedX, adjustedY, 0,
            adjustedX, adjustedY, gradientRadius
          );
          gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
          gradient.addColorStop(0.1, 'rgba(255, 255, 255, 0.8)');
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

          ctx.beginPath();
          ctx.arc(adjustedX, adjustedY, gradientRadius, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        } catch (error) {
          console.error('Error drawing star:', error);
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [dimensions, hyperSpace]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: `${dimensions.height}px`,
        pointerEvents: 'none',
        background: 'transparent',
        ...style
      }}
    />
  );
};

export default Starfield;

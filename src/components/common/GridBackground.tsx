import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const GridBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (gridRef.current) {
        const rect = gridRef.current.getBoundingClientRect();
        setMousePosition({
          x: event.clientX - rect.left + window.scrollX,
          y: event.clientY - rect.top + window.scrollY,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const gridStyle = {
    transform: 'skew(-10deg)', // Adjust this value to change the lean angle
    backgroundImage: `
      linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
    `,
    backgroundSize: '50px 50px',
  };

  return (
    <div ref={gridRef} className="absolute inset-0 z-0">
      <div
        className="absolute inset-0 grid-background rotate-60"
        style={gridStyle}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          ...gridStyle,
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,1) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(255,255,255,1) 2px, transparent 2px)
          `,
          opacity: 0.2,
          maskImage: `
            radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, white, transparent),
            radial-gradient(ellipse 800px 200px at center, black 0, rgba(0, 0, 0, 1) 600px 150px, transparent 800px 200px)
          `,
          maskComposite: 'intersect',
          WebkitMaskImage: `
            radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, white, transparent),
            radial-gradient(ellipse 800px 200px at center, black 0, rgba(0, 0, 0, 1) 600px 150px, transparent 800px 200px)
          `,
          WebkitMaskComposite: 'intersect',
        }}
      />
    </div>
  );
};

export default GridBackground;

"use client";

import { useState, useEffect } from "react";

export function useRandomPositions(count: number) {
  const [positions, setPositions] = useState<{ top: number; left: number }[]>([]);

  useEffect(() => {
    // Generate positions only on client side
    const newPositions = Array.from({ length: count }).map(() => ({
      top: Math.random() * 50,
      left: Math.random() * 100
    }));
    setPositions(newPositions);
  }, [count]);

  return positions;
}

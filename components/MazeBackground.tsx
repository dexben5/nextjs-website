"use client";

import { useRef, useEffect } from "react";

export default function MazeBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "blue";
    ctx.fillRect(20, 20, 150, 100);
  }, []);
  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={300}
      className="fixed top-0 left-0 -z-50 border border-gray-300 rounded"
    />
  );
}

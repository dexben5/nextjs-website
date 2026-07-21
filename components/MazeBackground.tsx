"use client";

import { useEffect, useRef } from "react";
import { key } from "@lib/bfs";

type Props = {
  grid: number[][];
  visited: Set<string>;
  cellSize?: number;
};

export default function MazeBackground({
  grid,
  visited,
  cellSize = 30,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    for (let x = 0; x < grid.length; x++) {
      for (let y = 0; y < grid[0].length; y++) {
        if (grid[x][y] === 1) ctx.fillStyle = "black";
        else if (visited.has(key(x, y))) ctx.fillStyle = "lightblue";
        else ctx.fillStyle = "white";

        ctx.fillRect(y * cellSize, x * cellSize, cellSize, cellSize);
        ctx.strokeRect(y * cellSize, x * cellSize, cellSize, cellSize);
      }
    }
  }, [grid, visited, cellSize]);

  return (
    <canvas
      ref={canvasRef}
      width={grid[0].length * cellSize}
      height={grid.length * cellSize}
    />
  );
}

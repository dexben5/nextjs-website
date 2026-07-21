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
  // Initialize canvas reference
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Set context to 2d and ensure it is defined
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    // Iterate over each grid cell, fill in walls as black, visited as light blue, and unexplored as white
    for (let x = 0; x < grid.length; x++) {
      for (let y = 0; y < grid[0].length; y++) {
        if (grid[x][y] === 1) ctx.fillStyle = "black";
        else if (visited.has(key(x, y))) ctx.fillStyle = "lightblue";
        else ctx.fillStyle = "white";

        ctx.fillRect(y * cellSize, x * cellSize, cellSize, cellSize);
        // ctx.strokeRect(y * cellSize, x * cellSize, cellSize, cellSize);
      }
    }
  }, [grid, visited, cellSize]);

  // Return html canvas element
  return (
    <canvas
      ref={canvasRef}
      width={grid[0].length * cellSize}
      height={grid.length * cellSize}
    />
  );
}

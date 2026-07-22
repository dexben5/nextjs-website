"use client";

import useBfs from "@lib/useBfs";
import MazeBackground from "@components/MazeBackground";
import { Coord } from "@lib/bfs";
import dfsGenerateMaze from "@lib/dfs-maze-generator";

const rows = 25;
const cols = 50;
const stepDelayMs = 0;

// Randomized start value
const start: Coord = [
  Math.floor(Math.random() * rows),
  Math.floor(Math.random() * cols),
];
const grid = dfsGenerateMaze(rows, cols, start);

export default function MazeDriver() {
  // Start bfs with a given grid, start point, and delay between cell explorations
  const lastVisited = useBfs(grid, start, stepDelayMs);
  return <MazeBackground grid={grid} lastVisited={lastVisited} cellSize={40} />;
}

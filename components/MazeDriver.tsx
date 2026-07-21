"use client";

import useBfs from "@lib/useBfs";
import MazeBackground from "@components/MazeBackground";
import { Coord } from "@lib/bfs";
import dfsGenerateMaze from "@lib/dfs-maze-generator";

const grid = [
  [1, 0, 0, 1, 0, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 1, 0, 0],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 1, 0, 0],
  [1, 0, 0, 1, 0, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 1, 0, 0],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 1, 0, 0],
];
const start: Coord = [0, 2];

console.table(dfsGenerateMaze(4, 5));

export default function MazeDriver() {
  // Start bfs with a given grid, start point, and delay between cell explorations
  const lastVisited = useBfs(grid, start, 150);
  return <MazeBackground grid={grid} lastVisited={lastVisited} cellSize={40} />;
}

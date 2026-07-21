"use client";

import useBfs from "@lib/useBfs";
import MazeBackground from "@components/MazeBackground";
import { Coord } from "@lib/bfs";

const grid = [
  [1, 0, 0, 1, 0, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 1, 0, 0],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 0, 1, 0, 0],
  [1, 0, 0, 1, 0, 0],
  [1, 0, 0, 1, 0, 0],
];
const start: Coord = [0, 2];

export default function MazeDriver() {
  const visited = useBfs(grid, start);
  return <MazeBackground grid={grid} visited={visited} />;
}

"use client";

import { useEffect, useRef, useState } from "react";
import { bfs, key, Coord } from "./bfs";

export default function useBfs(
  grid: number[][],
  start: Coord,
  stepDelayMs = 100,
) {
  const [visited, setVisited] = useState<Set<string>>(new Set());
  const generatorRef = useRef<Generator<Coord>>(null);

  useEffect(() => {
    generatorRef.current = bfs(grid, start);

    const interval = setInterval(() => {
      const next = generatorRef.current?.next();
      if (!next || next.done) {
        clearInterval(interval);
        return;
      }
      const [x, y] = next.value;
      setVisited((prev) => new Set(prev).add(key(x, y)));
    }, stepDelayMs);

    return () => clearInterval(interval);
  }, [grid, start, stepDelayMs]);

  return visited;
}

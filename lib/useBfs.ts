"use client";

import { useEffect, useRef, useState } from "react";
import { bfs, key, Coord } from "@lib/bfs";

export default function useBfs(
  grid: number[][],
  start: Coord,
  stepDelayMs: number,
): Set<string> {
  // Initialize visited with empty set and generator with null
  const [visited, setVisited] = useState<Set<string>>(new Set());
  const [lastVisited, setLastVisited] = useState<Coord | null>(null);
  const generatorRef = useRef<Generator<Coord>>(null);

  useEffect(() => {
    // Get initial state of bfs
    generatorRef.current = bfs(grid, start);

    // Explore grid at desired ms delay
    const interval = setInterval(() => {
      // Get next if current is defined
      const next = generatorRef.current?.next();

      // Exit when grid has been fully explored
      if (!next || next.done) {
        clearInterval(interval);
        return;
      }

      // Get new cell
      const [x, y] = next.value;
      // Update visited set with new cell
      setVisited((prev) => new Set(prev).add(key(x, y)));
      setLastVisited([x, y]);
    }, stepDelayMs);

    // Clean up interval
    return () => clearInterval(interval);
  }, [grid, start, stepDelayMs]);

  return visited;
}

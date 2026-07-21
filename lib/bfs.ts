export type Coord = [number, number];

export function key(x: number, y: number): string {
  return `${x},${y}`;
}

const DIRECTIONS: Coord[] = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

export function* bfs(grid: number[][], start: Coord): Generator<Coord> {
  const rows = grid.length;
  const cols = grid[0].length;

  const visited = new Set<string>([key(...start)]);
  const queue: Coord[] = [[0, 2]];
  let head = 0;

  yield start;

  while (head < queue.length) {
    const [x, y] = queue[head++];

    for (const [dx, dy] of DIRECTIONS) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx >= 0 &&
        nx < rows &&
        ny >= 0 &&
        ny < cols &&
        grid[nx][ny] !== 1 &&
        !visited.has(key(nx, ny))
      ) {
        visited.add(key(nx, ny));
        queue.push([nx, ny]);
        yield [nx, ny];
      }
    }
  }
}

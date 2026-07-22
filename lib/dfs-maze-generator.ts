type Coord = [number, number];

const DIRECTIONS: Coord[] = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

// Set entries are compared based on memory address, so represent coordinates as strings
function key(x: number, y: number): string {
  return `${x},${y}`;
}

function isValidCell(
  grid: number[][],
  x: number,
  y: number,
  rows: number,
  cols: number,
): boolean {
  let wallCount = 0;
  for (const [dx, dy] of DIRECTIONS) {
    const nx = x + dx;
    const ny = y + dy;

    if (nx < 0 || nx >= rows || ny < 0 || ny >= cols || grid[nx][ny] === 1) {
      wallCount++;
    }
  }

  return wallCount >= 3;
}

export default function dfsGenerateMaze(
  rows: number,
  cols: number,
  start: Coord,
): number[][] {
  // Initialize grid with all walls
  const grid: number[][] = Array.from({ length: rows }, () =>
    new Array(cols).fill(1),
  );

  console.log(start);

  // Initialize visited and stack with start, set start cell to 0
  const visited = new Set<string>([key(...start)]);
  const stack: Coord[] = [start];
  grid[start[0]][start[1]] = 0;

  while (stack.length > 0) {
    // Get current coordinates
    const [x, y] = stack[stack.length - 1];

    // Shuffle directions and check each path for validity
    const shuffled = [...DIRECTIONS].sort(() => Math.random() - 0.5);
    let moved = false;

    for (const [dx, dy] of shuffled) {
      const nx = x + dx;
      const ny = y + dy;
      if (
        nx >= 0 &&
        nx < rows &&
        ny >= 0 &&
        ny < cols &&
        !visited.has(key(nx, ny)) &&
        isValidCell(grid, nx, ny, rows, cols)
      ) {
        grid[nx][ny] = 0;
        visited.add(key(nx, ny));
        stack.push([nx, ny]);
        moved = true;
        break;
      }
    }

    // If no movements (dead end), pop this off the stack
    if (!moved) {
      stack.pop();
    }
  }

  return grid;
}

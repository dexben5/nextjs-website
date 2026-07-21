export default function dfsGenerateMaze(
  rows: number,
  cols: number,
): number[][] {
  const grid: number[][] = Array.from({ length: rows }, () =>
    new Array(cols).fill(0),
  );
  return grid;
}

const input: string = await Bun.stdin.text();
const lines: string[] = input
  .trim()
  .split("\n")
  .map((line) => line.trim());

const N = Number(lines[0]);
const sticks = lines[1]?.split(" ").map(Number)!;
let triangleCount = 0;
for (let i = 0; i < N - 2; i++) {
  const edge1 = sticks[i]!;
  for (let j = i + 1; j < N; j++) {
    const edge2 = sticks[j]!;
    for (let k = j + 1; k < N; k++) {
      const edge3 = sticks[k]!;

      const isUnique = new Set([edge1, edge2, edge3]).size === 3;
      const existTriangle = Math.abs(edge1 - edge2) < edge3 && edge3 < edge1 + edge2;
      if (isUnique && existTriangle) {
        triangleCount += 1;
      }
    }
  }
}

console.log(triangleCount);

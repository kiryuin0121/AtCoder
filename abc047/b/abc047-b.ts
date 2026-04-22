const input: string = await Bun.stdin.text();
const lines: string[] = input
  .trim()
  .split("\n")
  .map((line) => line.trim());
const [W, H, N] = lines[0]?.split(" ").map(Number) as [number, number, number];
const points = lines.slice(1).map((point) => point.split(" ").map(Number));
const square = new Array(H).fill(null).map(() => new Array(W).fill(0)) as any;
let area = 0;
for (let i = 0; i < N; i++) {
  const [X, Y, a] = points[i] as [number,number,number];

  switch (a) {
    case 1: 
      for (let y = 0; y < H; y++) {
        for (let x = 0; x < X; x++) {
          square[y][x] = 1;
        }
      }
      break;

    case 2:
      for (let y = 0; y < H; y++) {
        for (let x = X + 1; x < W; x++) {
          square[y][x] = 1;
        }
      }
      break;

    case 3: 
      for (let y = 0; y < Y; y++) {
        for (let x = 0; x < W; x++) {
          square[y][x] = 1;
        }
      }
      break;

    case 4:
      for (let y = Y + 1; y < H; y++) {
        for (let x = 0; x < W; x++) {
          square[y][x] = 1;
        }
      }
      break;
  }
}

for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    if (square[y][x] === 0) area++;
  }
}

console.log(area);
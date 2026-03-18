const input: string = await Bun.stdin.text();
const lines: string[] = input
  .trim()
  .split("\n")
  .map((line) => line.trim());

const [N, Y] = lines[0]?.split(" ").map(Number) as number[];
let enable = false;
loop: for (let a = 0; a <= N!; a++) {
  for (let b = 0; b <= N! - a; b++) {
    for (let c = 0; c <= N! - a - b; c++) {
      if (a + b + c === N! && 10000 * a + 5000 * b + 1000 * c === Y!) {
        enable = true;
        console.log(a, b, c);
        break loop;
      }
    }
  }
}
if (!enable) console.log(-1, -1, -1);

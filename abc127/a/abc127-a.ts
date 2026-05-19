const input: string = await Bun.stdin.text();
const lines: string[] = input
  .trim()
  .split("\n")
  .map((line) => line.trim());
const [A, B] = lines[0]?.split(" ").map(Number) as [number, number];
if (A <= 5) {
  console.log(0);
}else if (A <= 12) {
  console.log(B / 2);
} else {
  console.log(B);
}

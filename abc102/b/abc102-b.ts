const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());

const N = Number(lines[0]);
const A = lines[1]?.split(" ").map(Number) as number[];
const min = Math.min(...A);
const max = Math.max(...A);
console.log(Math.abs(max-min));
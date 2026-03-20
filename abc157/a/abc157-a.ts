const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());
const N = Number(lines[0]) as number;
console.log(Math.ceil(N/2));
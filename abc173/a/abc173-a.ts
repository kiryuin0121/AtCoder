const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());
const N = Number(lines[0]);
console.log(Math.ceil(N/1000)*1000-N);
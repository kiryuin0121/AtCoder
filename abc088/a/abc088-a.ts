const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());
const N= Number(lines[0]) as number;
const A =Number(lines[1]) as number;
console.log(N%500<=A?"Yes":"No");


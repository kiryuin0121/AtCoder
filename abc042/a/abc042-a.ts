const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());
const [A,B,C] = lines[0]?.split(" ").map(Number) as [number,number,number];
console.log(A+B+C===5+5+7?"YES":"NO");
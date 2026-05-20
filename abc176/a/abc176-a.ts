const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());
const [N,X,T] = lines[0]?.split(" ").map(Number) as [number,number,number];
console.log(Math.ceil(N/X)*T);
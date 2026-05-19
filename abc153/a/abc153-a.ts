const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());
const [H,A] = lines[0]?.split(" ").map(Number) as [number,number];
console.log(Math.ceil(H/A));
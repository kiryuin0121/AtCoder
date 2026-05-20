const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());
const [A,P] = lines[0]?.split(" ").map(Number) as [number,number];
console.log(Math.floor((3*A+P)/2));
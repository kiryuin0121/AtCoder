const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());
const [A,B] = lines[0]?.split(" ").map(Number) as [number,number];
console.log(B%A===0?A+B:B-A);
const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());
const number = Number(lines[0]?.split(" ").join(""));
console.log(number%4===0?"YES":"NO");

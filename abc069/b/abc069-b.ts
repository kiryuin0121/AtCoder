const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());
const s = lines[0] as string;
console.log(`${s[0]}${s.length-2}${s[s.length-1]}`);
const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());

const s = lines[0]?.split("") as string[];
const result = s.filter((_,idx)=>idx%2===0).join("");
console.log(result);

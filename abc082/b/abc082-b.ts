const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());

const s = lines[0] as string;
const t = lines[1] as string;

const minS = s.split("").sort((a,b)=>a.localeCompare(b)).join("");
const maxT = t.split("").sort((a,b)=>b.localeCompare(a)).join("");

console.log(minS<maxT?"Yes":"No");

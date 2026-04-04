const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());
const s = lines[0]?.split("") as string[];
const firstIndexOfA = s.indexOf("A");
const lastIndexOfZ = s.lastIndexOf("Z");
console.log(lastIndexOfZ-firstIndexOfA+1);

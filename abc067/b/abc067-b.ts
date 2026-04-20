const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());
const [N,K] = lines[0]?.split(" ").map(Number) as [number,number];
const sticks = lines[1]?.split(" ").map(Number).sort((a,b)=>b-a) as number[];
const max = sticks.slice(0,K).reduce((result,length)=>result+=length);
console.log(max);

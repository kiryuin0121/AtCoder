const input: string = await Bun.stdin.text();
const lines: string[] = input.trim().split("\n").map((line) => line.trim());

const a = Number(lines[0]);
const sumBC = lines[1]!.split(" ").map(Number).reduce((sum,num)=>sum+num);
const s = lines[2] as string;
console.log(a+sumBC,s);
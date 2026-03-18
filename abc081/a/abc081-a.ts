const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());

const countOf1 = lines[0]?.split("").map(Number).reduce((sum,num)=>num===1?sum+=num:sum);

console.log(countOf1)
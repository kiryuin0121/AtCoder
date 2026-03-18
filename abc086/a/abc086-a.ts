const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());

const isEven = lines[0]?.split(" ").map(Number).some(num=>num%2==0) as boolean;
console.log(isEven?"Even":"Odd");
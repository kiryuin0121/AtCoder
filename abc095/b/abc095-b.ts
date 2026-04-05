const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());
const [N,X]= lines[0]?.split(" ").map(Number) as [number,number];
const mArr = lines.slice(1).map(Number);
let restAmount = mArr.reduce((amount,m) => {
  return amount-=m
},X);
const minM = Math.min(...mArr);
console.log(N+Math.floor(restAmount/minM));
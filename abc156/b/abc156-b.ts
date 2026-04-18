const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());
let [N,K] = lines[0]?.split(" ").map(Number) as [number,number];
let digit = 1;
while(N/K>=1){
  N/=K;
  digit++;
}
console.log(digit);
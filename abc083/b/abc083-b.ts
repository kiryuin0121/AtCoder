const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());

const [N,A,B]= lines[0]?.split(" ").map(Number) as number[];

let total = 0;
for(let num=1; num<=N!; num++) {
  const sum = String(num).split("").map(Number).reduce((s,n)=>s+n);
  if(sum>=A!&&sum<=B!){
    total+=num;
  }
}
console.log(total);
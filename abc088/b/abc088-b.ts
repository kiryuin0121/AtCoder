const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());

const N = Number(lines[0]);
const cards = lines[1]?.split(" ").map(Number).sort((a,b)=>b-a) as number[];

let alice = 0;
let bob = 0;

cards.forEach((point,index) => {
  index%2==0?alice+=point:bob+=point;
});

console.log(alice-bob);

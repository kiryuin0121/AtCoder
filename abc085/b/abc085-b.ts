const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());

const N = Number(lines[0]);
const riceCakes = lines.slice(1).map(Number).sort((a,b)=>b-a);

let count = 1;
let top = riceCakes[0]!;
for(let i=1; i<N; i++) {
  if(top===riceCakes[i]){
    continue;
  }
  count++;
  top=riceCakes[i]!;
}
console.log(count);
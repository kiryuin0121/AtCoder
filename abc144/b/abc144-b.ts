const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());

const N = Number(lines[0]);
let isYes = false;
loop:for(let i=1; i<=9; i++) {
  for(let j=1; j<=9; j++) {
    if(i*j===N){
      isYes=true;
      break loop;
    }
  }
}
console.log(isYes?"Yes":"No");
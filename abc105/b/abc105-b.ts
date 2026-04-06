const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());

const N = Number(lines[0]);

// 4i+7j=N
let isYes = false;
loop:for(let i=0; i<N; i++) {
  for(let j=0; j<N; j++) {
    if(4*i+7*j===N){
      isYes = true;
      console.log("Yes");
      break loop;
    }
  }
}
if(!isYes){
  console.log("No");
}
const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());
const S = lines[0] as any;
const N = Number(lines[1]);
let nickName = "";
let index = 0;
loop:for(let i=0; i<5; i++) {
  for(let j=0; j<5; j++) {
    if(index===N){
      break loop;
    }
    nickName = S[i]+S[j];
    index+=1;
  }
}
console.log(nickName);
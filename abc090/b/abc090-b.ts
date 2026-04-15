const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());
const [A,B] = lines[0]?.split(" ").map(Number) as [number,number];
let kaibunCount = 0;
for(let n = A; n <= B; n++) {
  let isKaibun = true;
  const numStr = String(n);
  for(let i=0; i<Math.trunc(numStr.length/2); i++) {
    if(numStr[i]!==numStr[numStr.length-1-i]){
      isKaibun=false;
      break;
    }
  }
  if(isKaibun){
    kaibunCount+=1;
  }
}

console.log(kaibunCount);
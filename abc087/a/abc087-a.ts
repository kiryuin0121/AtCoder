const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());

const [A,B,C,X] = lines.map(Number);

let count = 0;
for(let a=0; a<=A!; a++) {
  for(let b=0; b<=B!; b++) {
    for(let c=0; c<=C!; c++) {
      500*a + 100*b + 50*c === X && count++;
    }
  }
}
console.log(count);
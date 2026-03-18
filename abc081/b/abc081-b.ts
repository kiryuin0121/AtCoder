const input: string = await Bun.stdin.text();
const lines: string[] = input
  .trim()
  .split("\n")
  .map((line) => line.trim());

const N = Number(lines[0]);
let numbers = lines[1]?.split(" ").map(Number) as number[];

let count = 0;
while(numbers.every(num=>num%2===0)){
  numbers = numbers.map(num=>num/2);
  count++;
}
console.log(count);
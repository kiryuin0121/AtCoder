const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());
const S = lines[0] as string;
const topping = (S.match(/o/g)||[]).length;
console.log(700+topping*100);
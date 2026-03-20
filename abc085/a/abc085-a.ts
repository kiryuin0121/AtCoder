const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());
const S = lines[0] as string;
console.log(S.replace("2017/","2018/"));
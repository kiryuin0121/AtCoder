const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());
const S = lines[0]?.split(" ").sort();
let result = "None";
const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split(" ");
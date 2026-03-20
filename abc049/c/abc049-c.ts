const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());
const S = lines[0] as string;
let s = S;

while (s.length > 0) {
  if (s.endsWith("dreamer")) {
    s = s.slice(0, -7);
  } else if (s.endsWith("eraser")) {
    s = s.slice(0, -6);
  } else if (s.endsWith("dream")) {
    s = s.slice(0, -5);
  } else if (s.endsWith("erase")) {
    s = s.slice(0, -5);
  } else {
    console.log("NO");
    process.exit(0);
  }
}

console.log("YES");
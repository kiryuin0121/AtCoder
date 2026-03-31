const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());
const N = Number(lines[0]);
const [T,A] = lines[1]?.split(" ").map(Number) as [number,number];
const places = lines[2]?.split(" ").map(Number) as number[];
const calcDifferenceFromA = (x:number) => {
  return Math.abs(A - (T - x*0.006));
}
let result=0;
let minDiff = calcDifferenceFromA(places[0]!);
places.forEach((place,idx) => {
  let diff = calcDifferenceFromA(place);
  if(diff<=minDiff){
    result=idx;
    minDiff= diff;
  }
});
console.log(result+1);
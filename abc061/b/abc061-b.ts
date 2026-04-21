const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());
const [N,M] = lines[0]?.split(" ").map(Number) as [number,number];
const roads = lines.slice(1).map((road)=>road.split(" ").map(Number));
const roadCountArr = new Array(N).fill(0);
roads.forEach((road)=>{
  road.forEach((city)=>roadCountArr[city-1]++);
})
roadCountArr.forEach((roadCount)=>console.log(roadCount));
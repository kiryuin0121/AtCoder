const input:string = await Bun.stdin.text();
const lines:string[] = input.trim().split("\n").map((line) => line.trim());

const [N,D] = lines[0]?.split(" ").map(Number) as [number,number];
const coordinates = lines.slice(1).map(coordinate=>coordinate.split(" ").map(Number)) as any;
let combination = 0;
for(let i=0; i<N-1; i++) {
  for(let j=i+1; j<N; j++) {
    let distance = 0;
    for(let k=0; k<D; k++) {
      distance += (coordinates[i][k]-coordinates[j][k])**2;
    }
    distance = Math.sqrt(distance);
    if(Number.isInteger(distance)===true){
      combination+=1;
    }
  }
}
console.log(combination);
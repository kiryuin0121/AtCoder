const [contest, task] = process.argv.slice(2);
const file = `${contest}/${task}/${contest}-${task}.ts`;

Bun.spawnSync(["acc", "submit", file], {
  stdout: "inherit",
  stderr: "inherit",
  stdin: "inherit",
});
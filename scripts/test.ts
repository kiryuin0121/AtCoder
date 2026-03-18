const [contest, task] = process.argv.slice(2);
const file = `${contest}/${task}/${contest}-${task}.ts`;
const testDir = `${contest}/${task}/tests`;

Bun.spawnSync(["oj", "test", "-c", `bun ${file}`, "-d", testDir], {
  stdout: "inherit",
  stderr: "inherit",
  stdin: "inherit",
  env: { ...Bun.env, NO_COLOR: "1" },
});

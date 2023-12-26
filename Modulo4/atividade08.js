const { createInterface } = require("readline");
const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question("Insira um numero para ver sua tabuada: ", async function (value) {
  for (var i = 1; i < 11; i++) {
    console.log(`${value}x${i} = ${value * i}`);
  }
});

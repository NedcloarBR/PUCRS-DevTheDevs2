const { createInterface } = require("readline");
const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question("Insira um numero: ", async function (value) {
  for (var i = 1, str = ""; i < Number(value) + 1; i++) {
    str += `${i} `;
    console.log(str);
  }
});

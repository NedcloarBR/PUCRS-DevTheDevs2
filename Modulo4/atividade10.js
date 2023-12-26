const { createInterface } = require("readline");
const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question("Insira o 1º numero: ", async function (value1) {
  rl.question("Insira o 2º numero: ", async function (value2) {
    rl.question("Insira o 3º numero: ", async function (value3) {
      console.log(Number(value1) + Number(value2) + Number(value3));
    });
  });
});

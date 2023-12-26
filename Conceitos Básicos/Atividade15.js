const { createInterface } = require("readline");
const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question("Insira número 1: ", async function (n1) {
  rl.question("Insira número 2: ", async function (n2) {
    rl.question("Insira número 3: ", async function (n3) {
      console.log("O maior número é: ", Math.max(n1, n2, n3));
      console.log("O menor número é: ", Math.min(n1, n2, n3));
      rl.close();
    });
  });
});

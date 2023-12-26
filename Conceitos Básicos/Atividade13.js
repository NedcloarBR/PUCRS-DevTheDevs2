const { createInterface } = require("readline");
const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question("Insira a nota 1: ", async function (n1) {
  rl.question("Insira a nota 2: ", async function (n2) {
    var media = (n1 + n2) / 2;
    if (media < 7) {
      console.log("reprovado", media);
    }
    if (media == 10) {
      console.log("aprovado com distinção", media);
    }
    if (media >= 7 && media < 10) {
      console.log("aprovado");
    }

    rl.close();
  });
});

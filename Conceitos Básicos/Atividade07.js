const { createInterface } = require("readline");
const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question("Insira o raio do circulo: ", async function (string) {
  var RAIO = string;

  if (isNaN(RAIO)) throw new Error("O raio precisa ser um número");

  console.log(`A área do círculo é: ${(RAIO * Math.PI).toFixed(0)}`);

  rl.close();
})

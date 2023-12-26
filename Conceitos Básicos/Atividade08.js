const { createInterface } = require("readline");
const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question("Insira o lado do quadrado: ", async function (string) {
  var LADO = string;
  if (isNaN(LADO)) throw new Error("O lado do quadrado precisa ser um número");

  var calc =  Math.pow(LADO, 2);
  console.log(`A área do círculo é: ${calc}\nO dobro da área é: ${calc * 2}`);

  rl.close();
})

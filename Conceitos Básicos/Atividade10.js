const { createInterface } = require("readline");
const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question("Insira o 1º número: ", async function (string) {
  var Number1 = string
  if (isNaN(Number1)) throw new Error("Insira um número...");
  rl.question("Insira o 2º número: ", async function (string2) {
    var Number2 = string2
    if (isNaN(Number1)) throw new Error("Insira um número...");
    rl.close();

    console.log(`Número 1: ${Number1}\nNúmero 2: ${Number2}`)
  })
})


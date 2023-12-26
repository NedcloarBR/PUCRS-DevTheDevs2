const { createInterface } = require("readline");
const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question("Insira o sexo (F = Feminino / M = Masculino): ", async function (string) {
  const Sex = string.toUpperCase()

  switch(Sex) {
    case "M": console.log("Masculino");
      break;
    case "F": console.log("Feminino");
      break;
    default: console.log("Sexo invalido");
      break;
  }

  rl.close()
})


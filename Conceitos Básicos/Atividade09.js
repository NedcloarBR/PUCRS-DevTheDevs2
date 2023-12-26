const { createInterface } = require("readline");
const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question("Insira a temperatura em Fahrenheit: ", async function (string) {
  var FH = string
  if (isNaN(FH)) throw new Error("A temperatura precisa ser um número");

  var calc =  5 * ((FH-32) / 9).toFixed(2);

  console.log(`${FH} Fahrenheit em Graus Celsius é: ${calc}`)
  rl.close();
})

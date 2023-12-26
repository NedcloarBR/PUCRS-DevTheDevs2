const { createInterface } = require("readline");
const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question("Insira um número positivo ou negativo: ", async function (string) {
  if (isNaN(string)) throw new Error("Insira um número...");
  switch (Math.sign(string)) {
    case 1:
      console.log("O número é positivo")
      break;
    case -1:
      console.log("O número é negativo")
      break;
  }

  rl.close()
})


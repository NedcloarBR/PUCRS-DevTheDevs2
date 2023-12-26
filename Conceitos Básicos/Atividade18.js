const { createInterface } = require("readline");
const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question("Insira a nota 1: ", async function (n1) {
  rl.question("Insira a nota 2: ", async function (n2) {
    var md = (n1 + n2) / 2;
    console.log("Média de Aproveitamento:");
    if (md >= 9.0 && md <= 10) {
      console.log("A");
    } else if (md >= 7.5 && md < 9.0) {
      console.log("B");
    } else if (md >= 6 && md < 7.5) {
      console.log("C");
    } else if (md >= 4.0 && md <= 6.0) {
      console.log("D");
    } else if (md >= 0 && md < 4.0) {
      console.log("E");
    }
    rl.close();
  });
});

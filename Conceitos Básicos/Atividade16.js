const { createInterface } = require("readline");
const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question("Insira o número 1: ", async function (n1) {
  rl.question("Insira o número 2: ", async function (n2) {
    rl.question("Insira o número 3: ", async function (n3) {
      var Arr = [n1, n2, n3];
      Arr.sort(function (a, b) {
        return a - b;
      });
      Arr.reverse();
      console.log(Arr);
      rl.close();
    });
  });
});

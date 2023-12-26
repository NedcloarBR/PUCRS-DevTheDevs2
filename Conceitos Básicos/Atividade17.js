const { createInterface } = require("readline");
const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question("Insira o salario: ", async function (salario) {
  var percentual = 0;
  var valorAumento = 0;
  function aplicarAumento(salario, percentual) {
    return (salario * percentual) / 100;
  }
  if (salario <= 280) {
    percentual = 20;
    valorAumento = aplicarAumento(salario, percentual);
  }
  if ((salario) => 280 && salario < 700) {
    percentual = 15;
    valorAumento = aplicarAumento(salario, percentual);
  }
  if (salario >= 700 && salario < 1500) {
    percentual = 10;
    valorAumento = aplicarAumento(salario, percentual);
  }
  if (salario >= 1500) {
    percentual = 5;
    valorAumento = aplicarAumento(salario, percentual);
  }
  console.log("o salário antes do reajuste:", salario);
  console.log("O percentual de aumento aplicado foi: ", percentual);
  console.log("O valor do aumento foi de: ", valorAumento);
  console.log("O novo salário, após o aumento é de: ", salario + valorAumento);
  rl.close();
});

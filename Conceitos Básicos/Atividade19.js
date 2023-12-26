const { createInterface } = require("readline");
const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question("Insira o valor do saque: ", async function (valor) {
  var cedulas = [100, 50, 10, 5, 1];
  let cedulasContabilizadas = [0, 0, 0, 0, 0];
  let valorContabilizado = 0;
  while (valorContabilizado < valorSaque) {
    for (var c = 0; c < cedulas.length; c++) {
      let valorProjetado = cedulas[c] + valorContabilizado;

      if (valorProjetado <= valorSaque) {
        cedulasContabilizadas[c]++;
        valorContabilizado = valorProjetado;
        c--;
      }
    }
  }

  for (var c = 0; c < cedulasContabilizadas.length; c++) {
    if (cedulasContabilizadas[c] > 0) {
      console.log(`${cedulasContabilizadas[c]} notas de ${cedulas[c]}`);
    }
  }
  rl.close();
});

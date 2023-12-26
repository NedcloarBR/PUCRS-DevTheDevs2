function somaImposto(taxa, custo) {
  return custo * (1 + taxa / 100);
}

console.log(somaImposto(6, 100));

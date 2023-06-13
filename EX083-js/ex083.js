let sorteio = [];

// Preenche o vetor com números aleatórios entre 0 e 99
for (let c = 1; c <= 20; c++) {
  sorteio[c] = Math.floor(Math.random() * 100);
}

// Ordena o vetor em ordem crescente
for (let c = 1; c <= 20; c++) {
  for (let o = c + 1; o <= 20; o++) {
    if (sorteio[c] > sorteio[o]) {
      let t = sorteio[c];
      sorteio[c] = sorteio[o];
      sorteio[o] = t;
    }
  }
}

// Exibe os valores ordenados
for (let c = 1; c <= 20; c++) {
  console.log(sorteio[c]);
}

let sorteio = [];

for (let c = 1; c <= 20; c++) {
  sorteio[c] = Math.floor(Math.random() * 100);
}

for (let c = 1; c <= 20; c++) {
  for (let o = c + 1; o <= 20; o++) {
    if (sorteio[c] > sorteio[o]) {
      let t = sorteio[c];
      sorteio[c] = sorteio[o];
      sorteio[o] = t;
    }
  }
}

for (let c = 1; c <= 20; c++) {
  console.log(sorteio[c]);
}

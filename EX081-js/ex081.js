let idade = [];
let M = 0;
let mi = 0;

for (let c = 1; c <= 8; c++) {
  idade[c] = parseInt(prompt("Qual a idade da " + c + "ª pessoa: "));
  M += idade[c];
}

console.log("A média das idades é " + M / 8);

for (let c = 1; c <= 8; c++) {
  if (idade[c] > 25) {
    console.log("O " + c + "º tem acima de 25 anos");
  }
  if (idade[c] >= mi) {
    mi = idade[c];
  }
}

console.log("A maior idade digitada foi " + mi);
console.log("A(s) maior(es) idade(s) registrada(s) está(ão) na(s) posição(ões):");

for (let c = 1; c <= 8; c++) {
  if (idade[c] === mi) {
    console.log(c);
  }
}

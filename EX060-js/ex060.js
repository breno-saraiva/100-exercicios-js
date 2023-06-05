let cont = 1;
let mj = Number.MAX_VALUE;
let pv = 0;
let pvelha = '';
let mjovem = '';
let S = 0;
let H = 0;
let M = 0;
let fim;

do {
  console.log("Escreva a descrição da " + cont + "ª pessoa!");

  const nome = prompt("Nome: ");
  const I = parseInt(prompt("Idade: "));
  const G = prompt("Sexo [m/s]: ");

  cont++;

  if (I > pv) {
    pv = I;
    pvelha = nome;
  }

  if (G === "f" && I < mj) {
    mj = I;
    mjovem = nome;
  }

  S += I;

  if (G === "m" && I > 30) {
    H++;
  }

  if (G === "f" && I < 18) {
    M++;
  }

  fim = prompt("Deseja continuar? [s/n]: ");

  console.clear();
} while (fim !== "n");

console.log("O nome da pessoa mais velha é: " + pvelha);
console.log("O nome da mulher mais jovem é: " + mjovem);
console.log("A média da idade do grupo é: " + S / (cont - 1));
console.log("O número de homens com mais de 30 anos: " + H);
console.log("O número de mulheres com menos de 18 anos: " + M);

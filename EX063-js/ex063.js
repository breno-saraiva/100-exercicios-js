let m = Infinity;
let cont = 0;
let fim = 0;
let S = 0;
let P = 0;

do {
  cont++;
  console.log("Digite o " + cont + "º número");
  const N = parseInt(prompt());

  S += N;

  if (N < m) {
    m = N;
  }

  if (N % 2 === 0) {
    P++;
  }

  console.log("[0]. Sim");
  console.log("[1]. Não");
  console.log("Deseja continuar?: ");
  fim = parseInt(prompt());

  console.clear();
} while (fim !== 1);

console.log("O somatório dos números digitados é: " + S);
console.log("O menor valor digitado foi: " + m);
console.log("A média entre os valores é: " + S / cont);
console.log("A quantidade de números pares digitados é: " + P);

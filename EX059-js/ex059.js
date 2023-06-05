let cont = 1;
let M = 0;
let nH = 0;
let mH = 0;
let mm = Number.MAX_VALUE;

do {
  console.log(cont + "ª pessoa");
  
  const I = parseInt(prompt("Idade: "));
  const S = prompt("Sexo [m/f]: ");
  
  if (I > M) {
    M = I;
  }
  
  if (S === "m") {
    nH++;
    mH += I;
  }
  
  if (S === "f" && I < mm) {
    mm = I;
  }
  
  const fim = prompt("Deseja cadastrar mais alguém [s/n]: ");
  
  console.clear();
  
  cont++;
} while (fim !== "n");

console.log("A maior idade cadastrada é de " + M);
console.log("O número de homens cadastrados é: " + nH);
console.log("A idade da mulher mais jovem é: " + mm);
console.log("A média da idade dos homens é: " + mH / nH);

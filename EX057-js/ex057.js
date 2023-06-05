let cont = 1;
let fim = 0;
let H = 0;
let M = 0;

while (fim < 2 || fim > 2) {
  console.log("Digite os dados do " + cont + "º funcionário");
  cont++;
  
  const S = parseFloat(prompt("Salário: "));
  const G = prompt("Sexo [m/f]: ");
  
  if (G === "m") {
    H += S;
  }
  
  if (G === "f") {
    M += S;
  }
  
  console.log("[1] Sim");
  console.log("[2] Não");
  fim = parseInt(prompt("Deseja continuar? "));
  
  console.clear();
}

console.log("O total pago para homens é: " + H);
console.log("O total pago para mulheres é: " + M);

var numeros = [];

for (var i = 0; i < 15; i++) {
  var numero = parseInt(prompt("Digite um número:"));
  numeros.push(numero);
}

console.log("Vetor completo:");
console.log(numeros);

console.log("Posições dos números múltiplos de 10:");
for (var i = 0; i < numeros.length; i++) {
  if (numeros[i] % 10 === 0) {
    console.log("Posição " + i + ": " + numeros[i]);
  }
}

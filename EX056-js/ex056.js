let sum = 0;
let number = 0;

while (number !== 1111) {
    number = parseInt(prompt("Digite um número (Digite 1111 para sair):"));
    
    if (number !== 1111) {
        sum += number;
    }
}

console.log("O somatório dos números digitados é:", sum);

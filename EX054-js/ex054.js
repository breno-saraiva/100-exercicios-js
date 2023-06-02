let cont = 1;
let mA = 0;
let M = 0;
let B = 0;
let G = 0;

while (cont <= 7) {
    let P = parseFloat(prompt(`Qual o peso da ${cont}° pessoa (em Kg)?`));
    let A = parseFloat(prompt(`Qual a altura da ${cont}° pessoa (em metros)?`));

    mA += A

    if (P > 90) {
        M++
    }

    if (P < 50 && A < 1.60) {
        B++
    }

    if (A > 1.90 && P > 100) {
        G++
    }

    cont++
}

console.log("A média das alturas é:", mA / (cont - 1));
console.log("Número de pessoas com mais de 90kg:", M);
console.log("Número de pessoas com menos de 50kg e menos de 1.60m:", B);
console.log("Número de pessoas com mais de 1.90m e mais de 100kg:", G);

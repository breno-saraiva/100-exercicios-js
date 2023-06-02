let cont = 1;
let H = 0;
let M = 0;
let G = 0;
let mH = 0;
let nM = 0;

while (cont <= 5) {
    let I = parseInt(prompt(`Qual a idade da ${cont}ª pessoa?`));
    let S = prompt(`Qual é o sexo da ${cont}ª pessoa? (m/f)`);

    if (S === "m") {
        H++;
        mH += I;
    }

    if (S === "f") {
        M++;
        if (I > 20) {
            nM++;
        }
    }

    G += I;
    cont++;
}

console.log("O número de homens cadastrados é:", H);
console.log("O número de mulheres cadastradas é:", M);
console.log("A média de idade do grupo é:", G / (cont - 1));
console.log("A média de idade dos homens é:", mH / H);
console.log("A quantidade de mulheres acima de 20 anos é:", nM);

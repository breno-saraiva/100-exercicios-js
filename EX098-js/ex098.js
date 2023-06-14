function superSomador (i,f) {
    let soma = 0;
    for (cont = i; cont <= f; cont++) {
        soma += cont;
    }
    return soma;
}

let i = parseInt(prompt("digite o numero que deve iniciar: "));
let f = parseInt(prompt("digite o numero em que deve terminar: "));

let resultado = superSomador(i,f);
console.log(`esse é o resultado da soma dos numeros ${resultado}`);
let nota = [];
let M = 0;
let am = 0;
let mn = 0;

for (let c = 1; c <= 10; c++) {
  nota[c] = parseFloat(prompt("Qual a nota do " + c + "º aluno? "));
  M += nota[c];
}

console.log("A média da turma foi: " + M / 10);

for (let c = 1; c <= 10; c++) {
  if (nota[c] > M / 10) {
    am++;
  }
}

console.log(am + " alunos estão acima da média");

for (let c = 1; c <= 10; c++) {
  if (nota[c] > mn) {
    mn = nota[c];
  }
}

console.log(mn + " foi a maior nota, tirada pelo(s) aluno(s):");

for (let c = 1; c <= 10; c++) {
  if (nota[c] === mn) {
    console.log(c);
  }
}

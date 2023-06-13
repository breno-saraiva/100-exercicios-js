let nomes = []

for (let i = 0; i < 7; i++) {
    let nome = prompt("Informe um nome:")
    nomes.push(nome)
}

console.log("Lista dos nomes (ordem inversa): ")
for (let i = 6;i >= 0; i--) {
    console.log(nomes[i])
}
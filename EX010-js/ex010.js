let lar = parseFloat(prompt("qual a largura da parede?(em metros)"))
let alt = parseFloat(prompt("qual a altura da parede?(em metros)"))
let area = lar*alt
console.log(`a parede tem ${area}m² e será necessário ${area/2}L de tinta`)
let km = parseFloat(prompt("Quantos quilômetros já foram percorrigdo nesse carro"))
let day = parseInt(prompt("Quantos dias ficou com o carro?"))
let custo = 90*day + 0.20*km
console.log(`o cliente ficou ${day} dias e rodou ${km}Km, sendo necessário o pagamento de ${custo} reais`)
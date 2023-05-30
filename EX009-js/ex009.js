let taxaCambio = 5.05; //valor do dolar
let val = parseFloat(prompt("quantos reias voce tem na carteira?"));
let valorEmReais = val/taxaCambio;
console.log("você tem US$" + valorEmReais.toFixed(2));
let c = parseFloat(prompt("Quantos cigarros você fuma por dia?"))
let t = parseInt(prompt("há quantos anos você fuma?"))
let v = (365*c*t)/144
console.log(`Você perdeu aproximadamente ${v} dias de vida`)
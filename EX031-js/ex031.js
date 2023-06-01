let p1 = prompt("Player 1, escolha: pedra, papel ou tesoura");
let p2 = prompt("Player 2, escolha: pedra, papel ou tesoura");

if (p1 === "pedra" || p1 === "papel" || p1 === "tesoura") {
  if (p2 === "pedra" || p2 === "papel" || p2 === "tesoura") {
    if (p1 === p2) {
      alert("Empate!");
    } else if (
      (p1 === "pedra" && p2 === "tesoura") || (p1 === "papel" && p2 === "pedra") || (p1 === "tesoura" && p2 === "papel")
    ) {
      alert("Player 1 venceu!");
    } else {
      alert("Player 2 venceu!");
    }
  } else {
    alert("Escolha inválida para o jogador 2. Por favor, tente novamente.");
  }
} else {
  alert("Escolha inválida para o jogador 1. Por favor, tente novamente.");
}

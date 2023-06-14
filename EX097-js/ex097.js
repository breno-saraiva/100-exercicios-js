function maior(A, B, C) {
    if (A > B && A > C) {
      return A;
    } else {
      if (B > A && B > C) {
        return B;
      } else {
        return C;
      }
    }
  }
  
  let X, Y, Z, R;
  
  console.log("Digite o primeiro número: ");
  X = parseInt(prompt());
  console.log("Digite o segundo número: ");
  Y = parseInt(prompt());
  console.log("Digite o terceiro número: ");
  Z = parseInt(prompt());
  
  R = maior(X, Y, Z);
  console.log("O maior número é " + R);
  
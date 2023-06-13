function gerador(msg, A) {
    const linha = "+-------=======------+";

    console.log(linha);
    for (i = 0; i < A; i++) {
        console.log(msg)
    }
    console.log(linha);
}

gerador("aprendendo JS", 4)
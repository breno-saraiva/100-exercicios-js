function gerador(msg, A , B) {
    if (B === 1) {
        const linha = "+-------=======------+";
    
        console.log(linha);
        for (i = 0; i < A; i++) {
            console.log(msg)
        }
        console.log(linha);        
    }
    if (B === 2) {
        const linha = "~~~~~~~~:::::::~~~~~~~";
    
        console.log(linha);
        for (i = 0; i < A; i++) {
            console.log(msg)
        }
        console.log(linha);        
    }
    if (B === 3) {
        const linha = "<<<<<<<<------->>>>>>>";
    
        console.log(linha);
        for (i = 0; i < A; i++) {
            console.log(msg)
        }
        console.log(linha);        
    }
}

gerador("aprendendo JS", 4, 3)
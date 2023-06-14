function fibonacci(q) {
    let a = 1;
    let b = 1;

    for(i = 1; i <= q ; i++ ) {
        console.log(a)
        let cont = a + b;
        a = b;
        b = cont;
    };
};

let q = parseInt(prompt("Digite quantos números da sequancia de fibonacci gostaria de ver: "));

fibonacci(q)
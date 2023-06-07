let a = 1
let b = 1

for(i = 1; i <=10 ; i++ ) {
    console.log(a)
    let cont = a + b
    a = b
    b = cont
}
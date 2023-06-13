a = 0
b = 1
c = 1
for (v = 0; v < 16; v++) {
    let n = []
    n[v] = c;
    console.log(n[v])
    c = a + b
    a = b
    b = c
}
let a = 7;
let b = 94;
console.log(`a = ${a} e b = ${b}`);

// Troque o valor das variáveis de maneira que o valor de a seja 94 e b 7

let c = a;
a = b;
b = c;

// poderia ser feito assim:  [a, b] = [b, a];

console.log(`a = ${a} e b = ${b}`);

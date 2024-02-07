// mostre o maior e o menor numero 
let n = 3, n2 = 9, n3 = 8, n4 = 10, n5 = 2

let numeros = [n3,n2,n, n5, n4]
console.log(numeros)


let maior = 0
let menor;
for (num of numeros) {
    if (num === numeros[0]) {
        menor = num
    }
    if (num >= maior) {
        maior = num
    }
    if (num <= menor) {
        menor = num
    }
}

console.log(maior)
console.log(menor)
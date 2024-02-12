// mostre o maior e o menor numero 
let n = 3, n2 = 9, n3 = 8, n4 = 10, n5 = 2

let numeros = [n3,n2,n, n5, n4]



let maior = 0
let menor = 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

for (let num in numeros) {
    if (numeros[num] >= maior) {
        maior = numeros[num]
}   else if (numeros[num] < menor) {
    menor = numeros[num]

}
}
console.log(maior)
console.log(menor)


let fact = 7
let acumlador = 1

for (i=0;fact!=i; fact--) {
    acumlador *= fact

}
console.log(acumlador)
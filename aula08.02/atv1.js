// faça um algoritmo que calcule o fatorial de um numero

const prompt = require('prompt-sync')()

let num = Number(prompt('informe um numero: '))


let resultado = 1
for (let i=0; num!=i; num--) {
    resultado *= num
}

console.log(resultado)
let resultado; 
function somar(num1, num2) {
    return num1 + num2
}

console.log(somar(10,30))
console.log(somar(10,20003))
console.log(somar(2423,32320))

function nomeidade(nome, idade) {
    return `meu nome é, ${nome}, minha idade é, ${idade}`
}

console.log(nomeidade('Artur', 18))


function multiplicar(parametro1, parametro2) {
    return parametro1 * parametro2
}
console.log(multiplicar(somar(2,3),somar(5, 4)))


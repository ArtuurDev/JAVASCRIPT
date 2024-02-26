/*
Crie um objeto literal chamado calculadora que tenha quatro 
propriedades: num1, num2, soma e multiplica. As propriedades num1 e num2 devem ser 
inicializadas com valores numéricosquaisquer.As propriedades soma e 
multiplica devem ser funções que retornem a soma e a multiplicação de num1 e num2, respectivamente.
*/


class Calculadora{
    constructor(num1, num2) {
        this.num1 = num1
        this.num2 = num2
        this.soma = 0
        this.multiplica = 0

    
    }

    multiplicacao() {
        this.multiplica = this.num1 * this.num2
        return this.multiplica
    }

    somar(){
        this.soma = this.num1 + this.num2
        return this.soma
    }

}


let meuValor = new Calculadora(10, 78)

console.log(meuValor.somar())
console.log(meuValor.multiplicacao())
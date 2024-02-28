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
        this.resultado = 0

    }

    get obterResultado() {
        return this.resultado
    }

    get obterNumeros(){
        return this.num1, this.num2
    }

    somar() {
        this.resultado = this.num1 + this.num2
        return this.resultado
    }

    multiplicar() {
        this.resultado = this.num1 * this.num2
        return this.resultado
    }   


}

let meuResultado = new Calculadora(10, 2)
console.log(meuResultado.somar())
console.log(meuResultado.multiplicar())



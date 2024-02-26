const calculadora = {
    num1: 0,
    num2: 0,
    resultado: 0,
    emitirInfo: function () {
        return `${this.num1}, ${this.num2}, ${this.resultado}`
    }

}


const multiplica = {
    multiplicacao: function () {
        this.resultado = this.num1 * this.num2
        return this.resultado

    }
}


const soma = {
    somar: function () {
        this.resultado = this.num1 + this.num2
        return this.resultado
    }
}

Object.setPrototypeOf(multiplica, calculadora)
Object.setPrototypeOf(soma, multiplica)

multiplica.num1 = 10
multiplica.num2 = 123

console.log(multiplica.multiplicacao())
console.log(multiplica.emitirInfo())

console.log(soma.somar())
console.log(soma.emitirInfo())
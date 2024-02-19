class Animal{
    constructor(tipo,cor) {
        this.tipo = tipo
        this.cor = cor
    }
    obterTipo() {
        return  this.tipo
    }
}


let animal = new Animal('mamifero', 'verde')
console.log(animal)


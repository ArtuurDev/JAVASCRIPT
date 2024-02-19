class Animal{
    constructor(tipo) {
        this.tipo = tipo
    }
    obterTipo() {
        return  this.tipo
    }
}


let animal = new Animal('mamifero')
console.log(animal)


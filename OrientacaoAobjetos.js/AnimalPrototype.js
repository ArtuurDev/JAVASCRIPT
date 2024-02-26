const Animal = {
    nome: '',
    som: '',
    emitirSom: function () {
        console.log(this.som)
    }
}


const gato = {
    raca: 'gatofei',
    verRaça: function () {
        console.log(this.raca)
    }
}

Object.setPrototypeOf(gato, Animal)

gato.nome = 'chaninha'
gato.som = 'miau'
gato.verRaça()


gato.emitirSom()
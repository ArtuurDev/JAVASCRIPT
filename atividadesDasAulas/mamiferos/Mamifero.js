export class Mamifero{
    constructor(patas) {
        this.patas = patas
    }

    get obterPatas() {
        return this.patas
    }


    get info() {
        this.informaçoes = {'nome': this.nome}
        return this.informaçoes
    }

    set mudarPatas(novasPatas) {
        return this.patas = novasPatas
    }
}



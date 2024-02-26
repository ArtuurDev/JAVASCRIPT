class Conversor{
    constructor(valor, unidade,) {
        this.valor = valor
        this.unidade = unidade
        this.resultado = 0

    }

    converterParaM() {
        if (this.unidade === 'km') {
            this.resultado = this.valor / 1000
            console.log(this.resultado)
        }
    }    
}


let meuValor = new Conversor(10, 'km')

meuValor.converterParaM()
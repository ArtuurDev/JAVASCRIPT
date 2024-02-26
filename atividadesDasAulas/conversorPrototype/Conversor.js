const conversor = {
    valor: 0,
    unidade: 'unidade',
    resultado:0
}

// é muito simplis, mantém a calma

const metros = {
    converterParaM: function () {
        if (this.unidade === 'km') {
            this.resultado = this.valor * 1000
            console.log('o resultado é teste')
        } if (this.unidade === 'cm') {
            resultado = this.valor / 100
            console.log('o resultado é teste tbm')
        }
    }
}

metros.valor = 200
metros.unidade = 'cm'
metros.converterParaM()

Object.setPrototypeOf(metros, conversor)


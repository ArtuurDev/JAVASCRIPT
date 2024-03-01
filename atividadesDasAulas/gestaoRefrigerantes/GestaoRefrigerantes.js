// prototipo

const bebidas = {
    nome: '',
    marca: '',
    preco: 0,
    dataValidade: '',
    dataFabricaçao: '',
    quantidade: 0,
    setQuantidade: function (novaQuantidade) {
        if (novaQuantidade > 0) {
            this.quantidade += novaQuantidade
            return true
        } else{
            if (this.quantidade < Math.abs(novaQuantidade)) {
                console.log(`voçe tem ${this.quantidade} impossivel vender ${Math.abs(novaQuantidade)}`)
                return false
            } else{
                this.quantidade += novaQuantidade
                return true
            }
        }
    },
    validaValidade: function () {
        const data = new Date()
        if (this.dataValidade < data) {
            return 'produto vencido'
        } else{
            return `produto dentro do prazo`
        }
    }, 

    setStatusVenda: function (quantidade) {
        if (this.setQuantidade(quantidade) === true){
            this.setStatusVenda = true
        }
    }

}


const saborLaranja = {
    statusVenda: false,
    setStatusVenda: function (quantidade) {
        if (this.setQuantidade(quantidade) === true){
            this.statusVenda = true
        }
    }

}


Object.setPrototypeOf(saborLaranja, bebidas)

saborLaranja.nome = 'fanta laranja'
saborLaranja.marca = 'fanta'
saborLaranja.dataValidade = '20/02/2025'
console.log(saborLaranja)

saborLaranja.quantidade = 3
console.log(saborLaranja)
saborLaranja.setQuantidade(-2)
saborLaranja.setStatusVenda(-1)
console.log(saborLaranja.statusVenda)
console.log(saborLaranja.validaValidade())
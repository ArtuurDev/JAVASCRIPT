const Veiculos = {
    marca: '',
    modelo: '',
    placa: false,
    cor: '',
    preco: 0,
    quantidade: 10,
    setMarca: function (novaMarca)  {
        this.marca = novaMarca
    },
    setPLaca: function (novaPlaca) {
        this.placa = novaPlaca
    },
    setCor: function (novaCor) {
        this.cor = novaCor
    },
    setPreco: function (novoPreco) {
        this.preco = novoPreco
    },
    setQuantidade: function (novaQuantidade) {
        if (novaQuantidade > 0) {
            this.quantidade = novaQuantidade
            return true
        } else{
            if (this.quantidade < Math.abs(novaQuantidade)) {
                console.log(`voçe tem ${this.quantidade} impossivel ${novaQuantidade}`)
                return false
            } else{
                this.quantidade += novaQuantidade
                return true
            }
        }
    }
}

const veiculosUsados = {
    quantidadeDeDonos: 'donos',
    kmRodados: 'todos',
    preco: 0, 
    statusDevenda: false,
    estadoConservacao: 'bom',
    vendaDoVeiculo: function (quantidade) {
        if (this.setQuantidade(quantidade) === true) {
            this.statusDevenda = true
            

        }
    }
}

Object.setPrototypeOf(veiculosUsados, Veiculos)

veiculosUsados.marca = 'fiat'
veiculosUsados.modelo = 'elx'
veiculosUsados.vendaDoVeiculo(-5)
console.log(veiculosUsados.statusDevenda)

// explicacao date

let dataAtual = new Date()
console.log(dataAtual)
let dia = new Date('2024-10-05').getDay()
console.log(dia)
let mes = new Date('2024-05-05').getMonth()
console.log(mes)
let ano = new Date('2024-10-05').getFullYear()
console.log(ano)
let minhaData = new Date("December 25, 1995 23:15:30")
let minhaHora = minhaData.getHours()
console.log(minhaHora)

let hora = '22:17:34'
let soHora = hora.split(':');
let horas = parseInt(soHora[0]);
console.log(horas)

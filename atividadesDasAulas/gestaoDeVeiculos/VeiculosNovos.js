import { Veiculos } from "./Veiculos.js"

export class VeiculosNovos extends Veiculos{
    constructor(marca, modelo, placa, cor, anoDeFabricacao, tipoDeCombustivel, quantidade, preco, localizacao) {
        super(marca, modelo, placa, cor, anoDeFabricacao, tipoDeCombustivel, quantidade)
        this._preco = preco
        this.localizacao = localizacao 
        this.emplacado = false
        this.TaxaEmplacamento = 0
        this.statusVenda = false

    }
    get getPreco(){
        return this._preco
    }

    get getLocalizacao(){
        return this.localizacao
    }

    get getEmplacado(){
        return this.emplacado
    }

    get getTaxaEmplacamento(){
        return this.TaxaEmplacamento
    }

    get getStatusVenda(){
        return this.statusVenda
    }


    set setPreco(novoPreco){
        this._preco = novoPreco
    }

    set setLocalizacao(novaLocalizacao){
        this.localizacao = novaLocalizacao
    }

    set setEmplacado(novoStstus){
        this.emplacado = novoStstus
    }

    set setTaxaEmplacamento(novaTaxa){
        this.TaxaEmplacamento = novaTaxa
    }

    set setStatusVenda(novoStatus){
        this.statusVenda = novoStatus
    }
}
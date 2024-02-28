export class Veiculos{
    constructor(marca, modelo, placa, cor, anoDeFabricacao, tipoDeCombustivel, quantidade) {
        this.marca = marca
        this.modelo = modelo
        this.placa = placa
        this.cor = cor
        this.anoDeFabricacao = anoDeFabricacao
        this.tipoDeCombustivel = tipoDeCombustivel
        this.quantidade = quantidade
    }

    get getMarca(){
        return this.marca
    }

    get getModelo(){
        return this.modelo
    }

    get getPlaca(){
        return this.placa
    }
    get getCor(){
        return this.cor

    }

    get getAnoDeFabricacao(){
        return this.anoDeFabricacao

    }

    get getTipoDeCombustivel(){
        return this.tipoDeCombustivel
    }

    get getQuantidade(){
        return this.quantidade
    }

    set setMarca(novaMarca){
        this.marca = novaMarca

    }

    set setModelo(novoModelo){
        this.modelo = novoModelo

    }
    set setPlaca(novaPlaca){
        this.placa = novaPlaca

    }

    set setAnoDeFabricacao(novoAnoFabricacao){
        this.anoDeFabricacao = novoAnoFabricacao
    }

    set setTipoDeCombustivel(novoCombustivel){
        this.tipoDeCombustivel = novoCombustivel
    }

    set setQuantidade(novaQuantidade){  // verificaçoes - adicionar, subtrair, nao deixar subtrair do que nao tem
      if (this.quantidade != 0) {
        if (novaQuantidade > 0) {
            this.quantidade += novaQuantidade
        } else{
            if (this.quantidade < Math.abs(novaQuantidade)) {
                console.log(`voçe tem ${this.quantidade} impossivel vender ${novaQuantidade}`)
            } else {
                this.quantidade += novaQuantidade
            }
        }
      }
      else{
        if (novaQuantidade > 0) {
            this.quantidade += novaQuantidade
        } else{
            console.log(`voçe tem ${this.quantidade} impossivel vender ${Math.abs(novaQuantidade)}`)
        }
      }

    }
}

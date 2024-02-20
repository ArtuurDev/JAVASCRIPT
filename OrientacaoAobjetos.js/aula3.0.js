
class Conta{
    constructor(nome, conta,){
        this.nome = nome
        this.conta = conta
        this._saldo = 0}

        

        nomeConta() {
            return this.nome
        }



        get saldo(){
            return this._saldo
        }



        depositar(valor) {
            if (valor <=0) {
                return
            } else(
                this._saldo += valor
            )
        }


        sacar(valor) {
            if (valor <= this.saldo) {
                this._saldo -= valor

            } else{
                return 'saldo indisponivel'
            }
                
        }
}


let conta1 = new Conta('artur', '12345', 10000) 

console.log(conta1.nomeConta())

console.log(conta1)


conta1.depositar(100)
console.log(conta1.sacar())

console.log(conta1._saldo)

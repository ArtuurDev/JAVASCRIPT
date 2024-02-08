const cliente = {
    nome: 'joao',
    idade: 24,
    email: 'joao@firma.com',
    telefones: ['112131323', '1213414141'],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > cliente.saldo)  {
            console.log(`Saldo insuficiente para realizar sua compra, seu saldo atual é ${cliente.saldo}`)
        } else {
            cliente.saldo -= valor
            console.log(`pagamento efetuado com sucesso,  seu saldo atual é ${cliente.saldo}`)

        }
    } 
}

cliente.efetuaPagamento(101)
console.log(cliente.saldo)



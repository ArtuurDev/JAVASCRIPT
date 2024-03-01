function pessoa(nome, sobrenome) {
    nome = nome
    sobrenome = sobrenome
    console.log(`meu nome é: ${nome} ${sobrenome}`)
}

pessoa('artur', 'santos')


class Pessoa{
    constructor() {
        this.nome = ''
        this.sobrenome = ''

    }
    nomePessoa(primeiroNome) {
        this.nome = primeiroNome
        console.log(`meu nome é ${this.nome}`)
    }
    sobrenomePessoa(segundoNome) {
        this.sobrenome = segundoNome
        console.log(`meu  sobrenome é: ${this.sobrenome}`)

    }
    nomeCompletopessoa() {
        let nomeCompleto = this.nome + ' ' + this.sobrenome
        console.log(`meu nome completo é: ${nomeCompleto}`)
    }
}


let nomeCliente= new Pessoa()

nomeCliente.nomePessoa('artur')

nomeCliente.sobrenomePessoa('santos')

nomeCliente.nomeCompletopessoa()


const hora1 = [60, 'minutos']
console.log(hora1)

console.log(`${hora1[0] - 60}`)
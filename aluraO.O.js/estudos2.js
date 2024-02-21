const user = {
    nome: 'juliana',
    email: 'ar@tur',
    nascimento: '24/02/2006',
    role: 'admin',
    ativo: true,
    info: function(){
        return (`Nome: ${this.nome}, email: ${this.email}, role: ${this.ativo}`)
    }
}

    

console.log(user.info())

let exibirNome = user.info

console.log(exibirNome())

const exibirr = function() {
    return this.nome
}

const mostrar = exibirr.bind(user)

console.log(mostrar())
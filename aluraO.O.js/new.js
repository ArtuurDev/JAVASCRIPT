function User(nome, email) {
    this.nome = nome
    this.email = email
    this.exibirInfos = function() {
        return `${this.nome}, ${this.email}`

    }
}


let usuario = new User('juliana','artur@email')

console.log(usuario.exibirInfos())

function Admin(role) {
    User.call(this, 'juliana', 'artur@email')
    this.role = role || 'estudante'
}
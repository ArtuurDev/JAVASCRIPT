class User{
    constructor(nome, email, nascimento, role, ativo = true ) {
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.role = role || 'estudante'
        this.ativo = ativo
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}`
    }
}


const user = new User('juliana', 'j@.com', '13323')

console.log(user.exibirInfos())

console.log(User.prototype.isPrototypeOf(user))
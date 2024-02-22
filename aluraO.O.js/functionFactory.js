function criaUser(nome, email) {
    return {
        nome,
        email,
        exibeinfos() {
            return `${this.nome} ${this.email}`
        }
    }
}


console.log(criaUser('artur', '12321'))
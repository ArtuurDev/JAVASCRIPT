export class Funcionario{
    #salario
    constructor(nome, cargo, salario, turno) {
        this.nome = nome
        this.cargo = cargo
        this.#salario = salario || 1412
        this.turno = turno || 'diurno'
    }

    get obterNome(){
        return this.nome
    }

    get ObterCargo() {
        return this.cargo

    }


    get obterSalario() {
        return this.#salario

    }
    
    get obterturno() {
        return this.turno
    }

    mudarNome(novoNome) {
        if (this.nome === novoNome) {
            return("Esse nome é o mesmo")
        } this.nome = novoNome
        console.log(`seu novo nome é ${this.nome}`)

    }
    mudarCargo(novoCargo) {
        if (this.cargo === novoCargo) {
            return `Esse ja é seu CARGO ATUAL`
        } this.cargo = novoCargo
        return `Seu novo cargo é ${this.cargo}`
    }

    mudarTurno(novoTurno) {
        if (this.turno === novoTurno) {
            return `Esse ja é seu TURNO ATUAL`
        } this.turno = novoTurno
    }

    mudarSalario(novoSalario) {
        if (this.#salario > novoSalario) {
            return `novo salario nao pode ser menor que o antigo`
        } this.#salario = novoSalario
    }


}



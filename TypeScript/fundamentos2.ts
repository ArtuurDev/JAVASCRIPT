




// READONLY


const meuReadonly: readonly string[][] = [['Artur']]
console.log(meuReadonly)

// meuReadonly.push(['junior]) * nao funciona


interface Carro{
    readonly marca: string
    readonly modelo: string
    readonly qtdPneus: Number
}

const Fusca: Carro = {
    marca: 'vw',
    modelo: 'fusca 1600',
    qtdPneus: 4,
}

// agora nao é possivel alterar os dados do objeto



// opcional em interfaces

interface newUser {
    email: string
    senha: number | number
    regra?: string

}

function showUserDetails(newUser: newUser): string{
    return `seu email é: ${newUser.email} sua senha é: ${newUser.senha} e sua regra de acesso é: ${newUser ? newUser.regra: 'SEM REGRA'}`
}

const user10: newUser = {
    email: 'dfsd',
    senha: 123,
    regra: 'gerente'
}

showUserDetails(user10)


const user11: newUser = {
    email: 'sdvdsv',
    senha: 24

}

showUserDetails(user11)
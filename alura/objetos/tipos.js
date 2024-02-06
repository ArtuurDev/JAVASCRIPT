// listas dentro de objetos


const cadastroUser = {
    nome:'Artur',
    idade:'18',
    cpf: '62240847344',
    telefones: [
        '85992546331', '88996036330',
    ]
}


console.log(cadastroUser)

const cadastroUser2 = {
    nome:'Artur',
    idade:'18',
    cpf: '62240847344',
    telefones: {
        telefone1: '85992546331',
        telefone2: '8896036330',
    }
}
console.log(cadastroUser2)


// formas de acessar os telefones de cada forma de objeto

console.log(cadastroUser.telefones[0]) // é uma lista, por isso podemos usar o indice

console.log(cadastroUser2.telefones) // para acessar todos os valores da chave telefone

console.log(cadastroUser2.telefones.telefone1) // ou .telefone2 para acessar valores especificos
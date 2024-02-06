const cliente = {
    nome: 'joao',
    idade: 24,
    email: 'joao@firma.com',
    telefones: ['112131323', '1213414141']
};


cliente.endereco = {
    rua: 'rua antero gaspa rorigues',
    numero: 262,
}

console.log(cliente)
console.log(cliente.endereco)
console.log(cliente.endereco['numero'])
console.log(cliente.endereco.rua)


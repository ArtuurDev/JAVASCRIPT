const cliente = {
    nome: 'joao',
    idade: 24,
    email: 'joao@firma.com',
    telefones: ['112131323', '1213414141']
};


cliente.enderecos = [{
    rua: 'rua antero gaspa rorigues',
    numero: 262,
    apartamento: false
}]

cliente.enderecos.push({
    nome:'artur',
    apartamento: true
})

let listaApartamentos = cliente.enderecos.filter((endereco)=> 
    endereco.apartamento === true
)

console.log(listaApartamentos)
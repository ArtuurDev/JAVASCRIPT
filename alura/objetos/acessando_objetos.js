const cliente = {
    nome: 'Artur',
    idade: '18',
    cpf: '62240847344',
    email: 'arturcastrodossantos.com@gmail.com'
}

console.log(`O nome do cliente é ${cliente.nome}, idade é ${cliente.idade}, e os 3 primeiros numeros do seu cpf sao ${cliente.cpf.substring(0,3)}`)


// outra forma de acessar
 

console.log(`O nome do cliente é ${cliente['nome']}, idade é ${cliente['idade']}, e os 3 primeiros numeros do seu cpf sao ${cliente.cpf.substring(0,3)}`)


let informacoes = ['nome', 'idade', 'cpf']

informacoes.forEach((chave) => {
    console.log(`A chave ${chave}, tem o valor de ${cliente[chave]}`)
})
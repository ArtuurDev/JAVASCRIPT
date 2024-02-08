

const informacoes = require('./clientes.json')


console.log(informacoes)


function encontrar(lista,chave, valor) {
    return lista.find(lista => lista[chave].includes(valor))
}

const encontrado = encontrar(informacoes,"nome", "Olva")

console.log(encontrado)



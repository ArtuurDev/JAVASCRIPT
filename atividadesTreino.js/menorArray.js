const arrayObjeto = [{
    titulo: 'javaScript',
    preco:25},
    {titulo:'php',
    preco:15},
    {titulo: 'java',
    preco: 30},
    {titulo:'elixir',
    preco:50},
    {titulo:'Go',
    preco:45},
    {titulo:'python',
    preco:20}]

console.log(arrayObjeto)
let maisBarato = 0
for (let atual = 0; atual < arrayObjeto.length; atual++) {
    if (atual === 0) {
        maisBarato = arrayObjeto[atual]
    } else if (arrayObjeto[atual].preco < maisBarato.preco) {
        maisBarato = arrayObjeto[atual]

    }
}

console.log(maisBarato)

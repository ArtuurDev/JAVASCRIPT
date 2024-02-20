let livros = [{
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


let array = [6,2,1]

let maisBarato = 0 
for (let atual = 0; atual < array.length; atual++) {
    if (atual === 0) {
        maisBarato = array[atual]
    } else if (array[atual] < maisBarato) {
        maisBarato = array[atual]
    }

} console.log(maisBarato)




let aux = 0

for (let atual = 0; atual < livros.length; atual++) {
    for (let maisUm = atual + 1; maisUm < livros.length; maisUm++) {
        if (livros[atual].preco > livros[maisUm].preco) {
            aux = livros[maisUm]

            livros[maisUm] = livros[atual]
            livros[atual] = aux

        }
    } 
}

console.log(livros)


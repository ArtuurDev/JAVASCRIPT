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



for (let atual = 0; atual < livros.length; atual++) {
    let analise = atual
    while (analise >0 && livros[analise].preco < livros[analise -1].preco) {
        itemAnalise = livros[analise]
        itemAnterior = livros[analise -1]

        livros[analise] = itemAnterior
        livros[analise -1 ] = itemAnalise

        analise--
    }
}




console.log(livros)
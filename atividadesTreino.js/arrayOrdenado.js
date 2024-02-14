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

for (atual=0; atual < arrayObjeto.length; atual++) {
    if (atual===0){
        maisBarato = arrayObjeto[atual].preco
    } else if(arrayObjeto[atual].preco < maisBarato) {
        maisBarato = arrayObjeto[atual]

    }

} console.log(`o titulo bais barato é ${maisBarato.titulo} e o preço é ${maisBarato.preco}`)
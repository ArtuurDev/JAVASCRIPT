/*
let frase = 'ana'
let splitado = frase.split("")
console.log(splitado)

splitado.reverse()
console.log(splitado)
*/

const prompt = require('prompt-sync')()

let palavraUsuario = prompt('digite uma palavra: ')
let palavraUsuarioSplitado = palavraUsuario.split('\n')
let palavraUsuarioReverse = palavraUsuario.split('\n').reverse()

if (palavraUsuarioSplitado.join('') === palavraUsuarioReverse.join('\n')) {
    console.log(`A sua palavra é um palindromo; palavra normal '${palavraUsuario}' - palavra ao contrario - '${palavraUsuarioReverse.join('')}`)
} else (
    console.log(`A sua palavra nao é um palindro ${palavraUsuario} - palavra ao contrario ${palavraUsuarioReverse.join('')}`)
)

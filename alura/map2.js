// Precisamos padronizar a lista de alunos para conter apenas letras maisculas:
// ['ana Julia', 'Caio Vinicius', 'BIA silva']

let listaNomes = ['ana Julia', 'Caio Vinicius', 'BIA silva']

let novosnome = listaNomes.map( (nome) => nome.toUpperCase())
console.log(novosnome)
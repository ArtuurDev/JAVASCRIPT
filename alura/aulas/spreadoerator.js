// criando copias 
// considere o seguinte array de notas:
// - const notas = [7,7,8,9,]
// crie um novo array com a nota 10 a mais, sem alterar o array original


const notas = [7, 7, 8, 9];
const novasnotas = [...notas]
// o valor 10 pode ser adicionado tbm dentro do spreadoperator apos o valor de notas, é possivel adicionar valores antes do operator
// [...notas,10]
// [ qualquer valor,...notas]

novasnotas.push(10)
console.log(novasnotas)
console.log
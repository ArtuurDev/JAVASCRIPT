
/*Crie um objeto chamado funcionarios que armazene o nome, o cargo e o salário de 5 funcionários. Em seguida, crie uma função chamada aumento que receba o 
objeto e um percentual como parâmetros e 
aplique um aumento de salário para todos os funcionários, de acordo com o percentual informado
*/

const funcionarios = [{
    nome: 'artur',
    cargo: 'back end',
    salario: 20000,},  
    {nome: 'mikael',
    cargo: 'back end',
    salario: 20000,},
    {nome: 'kaynan',
    cargo: 'lara',
    salario: 20000, },
    {nome: 'elvis',
    cargo: 'sedex',
    salario: 20000, }
]



function aumentaSalario(lista, aumento) {
    for (let chave of lista) {
        chave.salario += chave.salario * aumento
    } return lista
}

console.log(aumentaSalario(funcionarios, 0.05))


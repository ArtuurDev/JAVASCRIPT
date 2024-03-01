// Um aluno recebeu um ponto extra nas suas notas.
// Adicione esse ponto nas notas seguintes da lista



// tentando fazer sem o metodo map()

const notas = [10,9.5,8,7];
let novasNotas = [];
notas.forEach( function (nota) {
    nota +=1
    if (nota > 10) {
        nota = 10
    }
    novasNotas.push(nota)

}
)
console.log(novasNotas)


//fazendo com o metodo map()

//novasNotas = notas.map((nota) => {
//    return nota + 1 > 10 ? 10 : nota +1
    
//})
//console.log(novasNotas)
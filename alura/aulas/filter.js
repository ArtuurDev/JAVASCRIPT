const alunos = ['ana','marcos', 'maria', 'mauro']

const medias = [7,4.5,8,7.5]

const reprovados = alunos.filter((alunos, indice) => {
    return medias[indice] < 7 

})
console.log(reprovados)

alunos.filter((alunos, indice) => {
    console.log(alunos, indice)
})


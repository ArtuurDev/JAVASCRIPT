let listaaluno = ['artur', 'meire', 'bob']
let listanotas = [10,10,9] 

let listaunificada = [listaaluno, listanotas]


function OutraExibeAlunoEnota(aluno) {
    const [listaaluno, listanotas ] = listaunificada
    if (listaaluno.includes(aluno)) {
        indice =  listaaluno.indexOf(aluno)
        nota = listanotas[indice]
        console.log(`${aluno} esta presente e sua nota foi ${nota}`)

    } else {
        console.log(`${aluno} nao esta presente`)
    }
}

OutraExibeAlunoEnota('artur')
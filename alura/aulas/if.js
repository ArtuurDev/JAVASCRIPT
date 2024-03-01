let listaaluno = ['artur', 'meire', 'bob']
let listanotas = [10,10,9] 

let listaunificada = [listaaluno, listanotas]

function exibeAlunoEnota(aluno) {
    if (listaunificada[0].includes(aluno)) {
        const indice = listaunificada[0].indexOf(aluno)
        const nota = listaunificada[1][indice]
        console.log(`${aluno} esta presente e tem a nota ${nota}`)

    } else {
        console.log(`${aluno} nao esta presente`)
    }
}

exibeAlunoEnota("bob") 
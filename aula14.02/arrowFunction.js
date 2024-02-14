// finçoes anonimas
let vari = function(a, b) {return  a + b}
console.log(vari(2,4))

function aluno(nomeAluno, idadeAluno, notaAluno) {
    this.nomeAluno = nomeAluno
    this.idadeAluno = idadeAluno
    this.notaAluno = notaAluno
}
const aluno01 = new aluno('artur', 17)
console.log(aluno01.nomeAluno)
console.log(aluno01.idadeAluno)



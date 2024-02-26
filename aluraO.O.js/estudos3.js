const user = {
    nome: 'artur',
    cpf: '12345678',
    role: 'estudante',
    info: function() {
        console.log(this.nome, this.cpf, this.role)
    }
}
const professor = {
    nome:'paulo junior',
    cpf: '123454321',
    role: 'professor',
    darNotas: function() {
        console.log('aluno artur: nota 10')
    }
}
const professorJavaScript = {
    nome:'junior',
    cpf: '123454321',
    role: 'professor',
    darNotas: function() {
        console.log('aluno artur: nota 10')
    }
}
// herança de protótipo

const exibirInfo = user.info.bind(user)

exibirInfo()

Object.setPrototypeOf(professor, user)
Object.setPrototypeOf(professorJavaScript, user)

professor.darNotas()
professor.info()
professorJavaScript.darNotas()

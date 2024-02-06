const pessoa = {
    nome: 'Artur',
    profissao: 'dev back-end',
};

pessoa.telefone = '85992546331'
pessoa.nome = "Artur Santos"
console.log(pessoa)

const artur = {
    nome: 'artur',
    idade: '18',
    caraqteristicas:{
        bonito: 'sim',
        cheiroso: 'obvio',
        inteligente: 'dmais',
        lindo: 'perfeito',
        estudioso: 'muito',

    }
}


delete artur.caraqteristicas["inteligente"] // deletando so como exemplo, nao que eu nao seja
delete artur.caraqteristicas.cheiroso // so como exemplo tbm
console.log(artur)

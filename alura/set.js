// Um profesor acidentalmente adicionou nome repetidos na lista de chamadas 
// ['ana', 'clara', 'maria', 'maria', 'joao', 'joao', 'joao']

// remova os nomes repetidos deixando apenas um nome


const nomes =  ['ana', 'clara', 'maria', 'maria', 'joao', 'joao', 'joao']
let set = new Set(nomes);
console.log(set)

let listacorreta = []
for (n of set) {
    listacorreta.push(n)

}
console.log(listacorreta)

// nessa situaçao pode se usar o spreadoperator ja aprendido 
// ficaria...

let listacorreta2 = [...set]
console.log(listacorreta)
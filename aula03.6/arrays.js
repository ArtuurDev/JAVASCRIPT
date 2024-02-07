let meuArray = [1,2,3,4,5,6,7,8,9,]

console.log(meuArray)
console.log(meuArray[5])
let novoArray = meuArray.slice()
/*

metodos --- push adiciona no final
        --- pop remove no final
        --- slice faz uma copia 
        --- unshift adiciona no começo
        --- shift remove no começo
*/

console.log(novoArray.unshift(10))

for (i in meuArray) {
    console.log(i)

}
console.table(novoArray)

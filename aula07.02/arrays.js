let meuArray = [10,11,3,4,5,6,7,8,9,]

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

// selection sort

let aux = 0
for (let i = 0; i < meuArray.length; i++) {
    for (let maisUm = i+1; maisUm < meuArray.length; maisUm++) {
        if (meuArray[maisUm] < meuArray[i]) {
            aux = meuArray[maisUm]

            meuArray[maisUm] = meuArray[i]
            meuArray[i] = aux
        } 
    }
}
console.log(meuArray)


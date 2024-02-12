// procure o mais barato


const array = [25,15,30,50,45,20]

let maisBarato = 0
// Primeira forma que eu encontrei 

for (let atual = 0; atual < array.length; atual++) {
    if (atual === 0) {
        maisBarato = array[atual]

    } else if (array[atual] < maisBarato) {
        maisBarato = array[atual]

    }
}
console.log(maisBarato)


// segunda forma


for (let atual = 0; atual < array.length; atual++) {
    if (array[atual] < array[maisBarato]) {
        maisBarato = array[atual]
    }
}
console.log(`O livro mais barato custa ${maisBarato} reais`)
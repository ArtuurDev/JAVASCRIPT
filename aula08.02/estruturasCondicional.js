const prompt = require('prompt-sync')()

let idade = Number(prompt('informe sua idade: '))


if (idade >= 18 && idade < 65) {
    console.log("voçe é um adulto")

} else if (idade < 18 && idade >=12 ) {
    console.log("voçe é um adolecente")

} else if (idade < 12 && idade > 0 ) {
    console.log("voçe é uma crinça")

} else if (idade >= 65 && idade < 150) {
    console.log("voçe é um idoso")

} else {
    console.log("impossivel identificar a idade")
}
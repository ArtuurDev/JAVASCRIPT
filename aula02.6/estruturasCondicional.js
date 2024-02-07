const prompt = require('prompt-sync')()

let idade = Number(prompt('informe sua idade: '))
console.log(idade)

if (idade > 18) {
    console.log(`Voçe é de maior`)
    
} else{
    console.log(`Voçe é de menor`)
}

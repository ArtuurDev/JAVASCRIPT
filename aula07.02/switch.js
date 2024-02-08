// ele é utilizado para organizaçao de excesso de if
//cada if seria case

const prompt = require('prompt-sync') ()

/*
let idade = Number(prompt("informe sua idade: "))

switch (true) {
    case idade >=0 && idade < 12:
        console.log("voçe é uma criança")
        break;
    case idade >=12 && idade < 18:
        console.log("voçe é um adolecente")
        break;
    case idade >=18 && idade < 65:
        console.log("voçe é um adulto")
        break
    case idade >= 65 && idade <= 150:
        console.log("voçe é um idoso")
        default:
            break;
}
*/
let mesNasceu = Number(prompt("informe o numero do mês que voçe nasceu:"))

switch (true) {
    case mesNasceu === 1:
        console.log("voçe nasceu em janeiro")
        break;
    case mesNasceu === 2:
        console.log("voçe nasceu em fevereiro")
        break;
    case mesNasceu === 3:
        console.log("voçe nasceu em março")
        break;
    case mesNasceu === 4:
        console.log("voçe nasceu em maio")
        break;
    case mesNasceu === 5:
        console.log("voçe nasceu em abril")
        break;
    case mesNasceu === 6:
        console.log("voçe nasceu em junho")
        break;
    case mesNasceu === 7:
        console.log("voçe nasceu em julho")
        break;
    case mesNasceu === 8:
        console.log("voçe nasceu em agosto")
        break;
    case mesNasceu === 9:
        console.log("voçe nasceu em setembro")
        break;
    case mesNasceu === 10:
        console.log("voçe nasceu em outubro")
        break;
    case mesNasceu === 11:
        console.log("voçe nasceu em novembro")
        break;
    case mesNasceu === 12:
        console.log("voçe nasceu em dezembro")
        break;
    default:
        console.log("nao consegui identificar o mes")
        break;
}
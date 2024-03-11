// TIPO NUMBER


let numero: number = 2
numero = 233

let num :number[] = [1,2,5,9, ]
let letras: string[] = ['a','b','c','d']

// any pode receber qualquer tipo
let misto: any[] = ['a','b','c','d', 8, 10]


const nomes: Array<string>  = ['joao', 'maria']
const numerosPares: Array<number> = [2,2,3]
const misto2: Array<any> = ['artuur', 10]

function minhaFuncao(x: number, y: number): number{
    let somar: number = x + y
    return somar
}

function cordenadas(cord: {x: number, y: number}){
    console.log(`a cordenada x é ${cord.x}`)
    console.log(`a cordenada y é ${cord.y}`)
}

const minhacordenada = {x: 244, y: 3546}
cordenadas(minhacordenada)


function mostreNumero(a: number, b: number, c?: number){
    console.log(a,b,c)
}


mostreNumero(1,4)

function validaOpcao(opcao1: string | number, opcao2: number | boolean) {
    console.log(opcao1, opcao2)
}

validaOpcao('Paulo', true)
validaOpcao(23, 24)


//  leitor de codigo - tsc -w


// Alias
type myAlias = number | string

function showId(id: myAlias){
    console.log(`o ID é: ${id}`)
}

showId(15)
showId('15')

function showCPF(cpf: myAlias){
    console.log(cpf)
}

showCPF(12345678)
showCPF('1424353435')


type objectAlias = {
    name: string
    cpf: number
}

function userDectails(user: objectAlias){
    return user
}

console.log(userDectails({name: 'artur', cpf: 12345}))


// Interfaces





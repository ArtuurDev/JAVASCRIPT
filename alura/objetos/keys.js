// validar se contem um endereço no objeto
const pessoa = {
    nome: 'artur',
    idade: 18,
    hobbies: ['jogar bola', 'namorar'],
    endereco: 'antero gaspar'
}


let info = Object.keys(pessoa)
console.log(info)
if (! info.includes('endereco')) {
    console.error('error')

} else{
    console.log(pessoa.endereco)
}

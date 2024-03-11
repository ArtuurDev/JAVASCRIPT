"use strict";
// TIPO NUMBER
let numero = 2;
numero = 233;
let num = [1, 2, 5, 9,];
let letras = ['a', 'b', 'c', 'd'];
// any pode receber qualquer tipo
let misto = ['a', 'b', 'c', 'd', 8, 10];
const nomes = ['joao', 'maria'];
const numerosPares = [2, 2, 3];
const misto2 = ['artuur', 10];
function minhaFuncao(x, y) {
    let somar = x + y;
    return somar;
}
function cordenadas(cord) {
    console.log(`a cordenada x é ${cord.x}`);
    console.log(`a cordenada y é ${cord.y}`);
}
const minhacordenada = { x: 244, y: 3546 };
cordenadas(minhacordenada);
function mostreNumero(a, b, c) {
    console.log(a, b, c);
}
mostreNumero(1, 4);
function validaOpcao(opcao1, opcao2) {
    console.log(opcao1, opcao2);
}
validaOpcao('Paulo', true);
validaOpcao(23, 24);
function showId(id) {
    console.log(`o ID é: ${id}`);
}
showId(15);
showId('15');
function showCPF(cpf) {
    console.log(cpf);
}
showCPF(12345678);
showCPF('1424353435');
function userDectails(user) {
    return user;
}
console.log(userDectails({ name: 'artur', cpf: 12345 }));
// Interfaces

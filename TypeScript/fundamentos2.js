"use strict";
// READONLY
const meuReadonly = [['Artur']];
console.log(meuReadonly);
const Fusca = {
    marca: 'vw',
    modelo: 'fusca 1600',
    qtdPneus: 4,
};
function showUserDetails(newUser) {
    return `seu email é: ${newUser.email} sua senha é: ${newUser.senha} e sua regra de acesso é: ${newUser ? newUser.regra : 'SEM REGRA'}`;
}
const user10 = {
    email: 'dfsd',
    senha: 123,
    regra: 'gerente'
};
console.log(showUserDetails(user10));
const user11 = {
    email: 'sdvdsv',
    senha: 24,
};
console.log(showUserDetails(user11));

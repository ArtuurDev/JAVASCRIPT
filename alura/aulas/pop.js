// Um professor acidentalmente lançou 5 notas no sitema para um aluno:
// - 10,6,8,5.5,10
// Para corrigir, remova a ultima nota e faça o calculo da media correta

let notas = [10,6,8,5.5,10]
notas.pop()

console.log(media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length)
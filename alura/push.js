// Um professor acidentalmente passou apenas 3 das 4 nostas no sistema para um aluno:
// 10, 6, 8

// para corrigir adicione a nota 7 e faça o claculo da media correta


let notas = [10, 6, 8]
notas.push(7)

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media)
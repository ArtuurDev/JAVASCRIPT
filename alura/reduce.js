// com a media de todos os alunos de 3 salas, calcule a media geral de cada sala

// aplicando a logica sem o reduce
const salajS = [7,8,8,7,10,6.5,4,10,7]
const salaJava = [6,5,8,9,5,6]
const salaPython = [7,3.5,8,9.5]

const somaslas = [salajS,salaJava, salaPython]
let mediajs = 0 
let mediajava = 0
let mediapython = 0
let mediaslas = []


for (i = 0; i < somaslas[0].length; i++ ) {
    mediajs += somaslas[0][i]
}
console.log(mediajs / somaslas[0].length)


for (i = 0; i < somaslas[1].length; i++ ) {
    mediajava += somaslas[1][i]
}
console.log(mediajava / somaslas[1].length)


for (i = 0; i < somaslas[2].length; i++ ) {
    mediapython += somaslas[2][i]
}
console.log(mediapython / somaslas[2].length)

// aplicando a logica com o reduce, mentira... consegui fazer sem o reduce novamente

function calculamedia(sala) {
    let acumulador = 0;
    medias = sala
    for (n of medias) {
        acumulador += n

    } return acumulador / medias.length

}

console.log(calculamedia(salaJava))
console.log(calculamedia(salajS))
console.log(calculamedia(salaPython))

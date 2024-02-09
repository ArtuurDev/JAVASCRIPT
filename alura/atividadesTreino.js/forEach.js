// calcule a media das notas

const notas = [10,6,7,8]
let media = 0
notas.forEach(function(nota){
    media += nota / notas.length
})

console.log(media)
// divida em duas salas 10 alunos



let sala1 = [
    'artur', 'angeliny', 'rafael', 'lucas', 'mariza', 'ana', 'lia', 'roberto', 'mendes', 'gabriel'
]

let sala2 = sala1.slice(0,5)
console.log(sala2)

// outra forma

let sala3 = sala1.slice(sala1.length / 2)
console.log(sala3)
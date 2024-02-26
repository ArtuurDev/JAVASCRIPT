const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice(1, 2, "Rodrigo");

console.log(nomes);


nomes.forEach((nome)=> {
    console.log(nome)
})
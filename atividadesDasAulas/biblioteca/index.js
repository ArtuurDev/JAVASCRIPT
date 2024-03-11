import { Livros } from "./Biblioteca.js";
import { Emprestimo } from "./emprestimo.js";


let livro = new Livros('augtin', 100, 'otimo')

console.log(livro)

let augtin = new Emprestimo('augstin', 100, 'otimo', '20/02/2024', '27/02/2024')

console.log(augtin)
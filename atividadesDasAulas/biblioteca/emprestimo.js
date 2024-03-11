import { Livros} from "./Biblioteca.js";


export class Emprestimo extends Livros{
    constructor(nome, preco, estado, dataEmprestimo, dataDeEntrega) {
        super(nome, preco, estado)
        this.dataEmprestimo = dataEmprestimo
        this.dataDeEntrega = dataDeEntrega
        this.entregou = false
        this.muta = 0

    }    


    get getEmprestimo(){
        return this.emprestimo
    }

    get getDataEntrega(){
        return this.dataDeEntrega
    }

    get getEntregou(){
        return this.entregou
    }

    get getMuta(){
        return this.muta
    }

    set setDataEntrega(novaDataEntrega){
        this.dataDeEntrega = novaDataEntrega
    }

    set setEmprestimo(novoEmprestimo){
        this.dataEmprestimo = novoEmprestimo
    }

    set setEntregou(novoValor){
        this.entregou = novoValor
    }

    set setMuta(novoValor){
        this.muta = novoValor
    }


}
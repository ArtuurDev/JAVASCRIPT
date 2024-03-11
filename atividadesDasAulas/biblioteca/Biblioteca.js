export class Livros{
    constructor(titulo, preco, estado){
        this.titulo = titulo
        this.preco = preco
        this.estado = estado

    }

    get getTitulo(){
        return this.titulo
    }

    get getPreco(){
        return this.preco
    }

    get getEstado(){
        return this.estado
    }

    set setTitulo(novoTitulo){
        this.titulo = novoTitulo
    }

    set setPreco(novoPreco){
        this.preco = novoPreco
    }

    set setEstado(novoEstado){
        this.estado = novoEstado
    }
    
}
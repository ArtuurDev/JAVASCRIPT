/*
Crie uma classe chamada Animal que receba dois parâmetros no construtor: nome e som. 
Dentro da classe, defina uma propriedade chamada vivo que seja inicializada com o valor true. Em seguida, crie um 
método chamado fazerSom que imprima no console o nome e o som do animal.

*/



class Animal{
    constructor(nome, som) {
        this.nome = nome
        this.som = som
        this.vivo = true        
    }

    get obterNome() {
        return this.nome

    }

    get obtersom(){
        return this.som
    }

    get obtervivo(){
        return this.vivo

    }


    set mudarNome(novoNome){
        this.nome = novoNome
    }


    set mudarSom(novosom) {
        this.som = novosom
    }

}




let gato = new Animal('chaninha', 'miau')
gato.mudarNome = 'chani'


console.log(gato.obtervivo)


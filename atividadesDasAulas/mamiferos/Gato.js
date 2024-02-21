import { Mamifero } from "./Mamifero.js";

export class Gato extends Mamifero{
    constructor(nome, patas) {
        super(patas)
        this.nome = nome
        this.mia = 'miauu'

    }
}
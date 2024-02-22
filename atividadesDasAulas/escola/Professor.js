import { Funcionario } from "./Funcionarios.js";

export class Professor extends Funcionario{
    #salario
    constructor(nome,cargo,disciplina,salario,turno ){
        super(nome,cargo,turno, salario)
        this.disciplina = disciplina
        

    }


    get obterDisciplina(){
        return this.disciplina
    } 

    mudarDisplina(novaDisciplina) {
        this.disciplina = novaDisciplina
    }

}


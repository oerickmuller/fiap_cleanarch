import { Disciplina, Estudante, Matricula } from "@/entities";

interface DisciplinaGatewayInterface {
    BuscarDisciplina(nome: string): Disciplina; 
    IncluirDisciplina(nome: string): boolean;
}

interface MatriculaGatewayInterface {
    BuscarMatricula(
        estudante: Estudante,
        disciplina: Disciplina
    ): Matricula;
    IncluirMatricula(
        estudante: Estudante,
        disciplina: Disciplina
    ): boolean;
}

interface EstudanteGatewayInterface {
    BuscarEstudante( nome: string ): Estudante;
    IncluirEstudante( nome: string ): boolean;
}


export { 
    DisciplinaGatewayInterface , 
    EstudanteGatewayInterface, 
    MatriculaGatewayInterface
};
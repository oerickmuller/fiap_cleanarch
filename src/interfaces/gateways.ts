import { Disciplina } from "@entities/disciplina";
import { Estudante } from "@entities/estudante";
import { Matricula } from "@entities/matricula";

interface DisciplinaGatewayInterface {
  BuscarDisciplina(nome: string): Disciplina | null;
  BuscarTodasDisciplinas(): Promise<Disciplina[] | null>;
  IncluirDisciplina(nome: string): boolean;
}

interface MatriculaGatewayInterface {
  BuscarMatricula(
    estudante: Estudante,
    disciplina: Disciplina
  ): Matricula | null;

  IncluirMatricula(estudante: Estudante, disciplina: Disciplina): boolean;
}

interface EstudanteGatewayInterface {
  BuscarEstudante(nome: string): Estudante | null;
  IncluirEstudante(nome: string): boolean;
}

export {
  DisciplinaGatewayInterface,
  EstudanteGatewayInterface,
  MatriculaGatewayInterface,
};

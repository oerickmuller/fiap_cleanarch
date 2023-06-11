import { Disciplina } from "@entities/disciplina";
import { Estudante } from "@entities/estudante";
import { Matricula } from "@entities/matricula";

interface DisciplinaGatewayInterface {
  BuscarDisciplina(nome: string): Disciplina | null;
  BuscarTodasDisciplinas(): Promise<Disciplina[] | null>;
  IncluirDisciplina(nome: string): boolean;
}

interface MatriculaGatewayInterface {
  BuscarMatricula( estudante: Estudante, disciplina: Disciplina ): Matricula | null;
  IncluirMatricula(estudante: Estudante, disciplina: Disciplina): boolean;
}

interface EstudanteGatewayInterface {
  BuscarEstudantePorNome(nome: string): Promise<Estudante | null>;
  BuscarTodosEstudantes(): Promise<Estudante[] | null>;
  IncluirEstudante(estudante: Estudante): Promise<boolean>;
}

export {
  DisciplinaGatewayInterface,
  EstudanteGatewayInterface,
  MatriculaGatewayInterface,
};

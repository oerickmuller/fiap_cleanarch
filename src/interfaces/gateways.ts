import { Disciplina } from "@entities/disciplina";
import { Estudante } from "@entities/estudante";
import { Matricula } from "@entities/matricula";

interface DisciplinaGatewayInterface {
  BuscarPorId(id: number): Promise<Disciplina | null>;
  BuscarPorNome(nome: string): Promise<Disciplina | null>;
  BuscarTodas(): Promise<Disciplina[] | null>;
  Incluir(disciplina: Disciplina): Promise<void>;
}

interface MatriculaGatewayInterface {
  Buscar(
    estudante: Estudante,
    disciplina: Disciplina
  ): Promise<Matricula | null>;
  IncluirMatricula(matricula: Matricula): Promise<void>;
}

interface EstudanteGatewayInterface {
  BuscarPorNome(nome: string): Promise<Estudante | null>;
  BuscarPorId(id: number): Promise<Estudante | null>;
  BuscarTodos(): Promise<Estudante[] | null>;
  Incluir(estudante: Estudante): Promise<void>;
}

export {
  DisciplinaGatewayInterface,
  EstudanteGatewayInterface,
  MatriculaGatewayInterface,
};

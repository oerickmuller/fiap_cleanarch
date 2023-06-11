import { Disciplina } from "@entities/disciplina";
import { DbConnection } from "@interfaces/dbconnection";
import { DisciplinaGatewayInterface } from "@interfaces/gateways";
import { DisciplinaGateway } from "src/gateways";

export class DisciplinaUseCases {
  static async ObterTodasDisciplinas(
    disciplinasGateway: DisciplinaGatewayInterface
  ): Promise<Disciplina[] | null> {
    const todasAsDisciplinas =
      await disciplinasGateway.BuscarTodasDisciplinas();
    return todasAsDisciplinas;
  }

  static async IncluirDisciplina(
    nome: string,
    disciplinasGateway: DisciplinaGatewayInterface
  ) {
    const disciplina = await disciplinasGateway.BuscarDisciplinaPorNome(nome);

    if (disciplina !== null) return Promise.reject("Disciplina já existente");

    const novaDisciplina = new Disciplina(-1, nome);
    disciplinasGateway.IncluirDisciplina(novaDisciplina);
    return true;
  }
}

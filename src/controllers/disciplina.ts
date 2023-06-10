import { DisciplinaGateway } from "@gateways/disciplina";
import { DbConnection } from "@interfaces/dbconnection";
import { DisciplinaUseCases } from "@usecases";
import { DisciplinaAdapter } from "../adapters/disciplina";

export class DisciplinaController {
  static async ObterTodasDisciplinas(
    dbconnection: DbConnection
  ): Promise<string> {
    const disciplinasGateway = new DisciplinaGateway(dbconnection);
    const todasAsDisciplinas = await DisciplinaUseCases.ObterTodasDisciplinas(
      disciplinasGateway
    ); // vai retornar Disciplina[]

    const adapted =
      DisciplinaAdapter.adaptJsonTodasDisciplinas(todasAsDisciplinas);
    return adapted;
  }

  static CriarDisciplina(nome: string, dbconnection: DbConnection) {
    // const gateway = new DisciplinaGateway(dbconnection);
    // const disciplina = DisciplinaUseCases.NovaDisciplina(nome, gateway);
    // gateway.IncluirDisciplina(nome);
    // return {success: true};
  }
}

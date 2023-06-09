import { DisciplinaGateway } from "@gateways/disciplina";
import { DbConnection } from "@interfaces/dbconnection";
import { DisciplinaUseCases } from "@usecases";

export class DisciplinaController {
  static ObterTodasDisciplinas(dbconnection: DbConnection) {
    console.log(dbconnection);
    const disciplinasGateway = new DisciplinaGateway(dbconnection);
    const todasAsDisciplinas =
      DisciplinaUseCases.ObterTodasDisciplinas(disciplinasGateway);
    return todasAsDisciplinas;
  }

  static CriarDisciplina(nome: string, dbconnection: DbConnection) {
    // const gateway = new DisciplinaGateway(dbconnection);
    // const disciplina = DisciplinaUseCases.NovaDisciplina(nome, gateway);
    // gateway.IncluirDisciplina(nome);
    // return {success: true};
  }
}

import { Disciplina } from "@entities/disciplina";
import { DisciplinaGateway } from "src/gateways/disciplina";
import { DbConnection } from "@interfaces/dbconnection";
import { DisciplinaGatewayInterface } from "@interfaces/gateways";

export class DisciplinaUseCases {
  static ObterTodasDisciplinas(
    disciplinasGateway: DisciplinaGatewayInterface
  ): Disciplina[] | null {
    const todasAsDisciplinas = disciplinasGateway.BuscarTodasDisciplinas();
    return todasAsDisciplinas;
  }

  // static NovaDisciplina(nome: string, gatewayDisciplina: DisciplinaGatewayInterface): Disciplina {
  //     if (gatewayDisciplina.BuscarDisciplina(nome) !== null) {
  //         throw new Error('Disciplina ja existe');
  //     }
  //     return new Disciplina(nome);
  // }
}

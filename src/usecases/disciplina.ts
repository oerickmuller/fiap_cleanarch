import { Disciplina } from "@entities/disciplina";
import { DbConnection } from "@interfaces/dbconnection";
import { DisciplinaGatewayInterface } from "@interfaces/gateways";

export class DisciplinaUseCases {
  static async ObterTodasDisciplinas(
    disciplinasGateway: DisciplinaGatewayInterface
  ): Promise<Disciplina[] | null> {
    const todasAsDisciplinas =
      await disciplinasGateway.BuscarTodasDisciplinas();
    return todasAsDisciplinas;
  }

  // static NovaDisciplina(nome: string, gatewayDisciplina: DisciplinaGatewayInterface): Disciplina {
  //     if (gatewayDisciplina.BuscarDisciplina(nome) !== null) {
  //         throw new Error('Disciplina ja existe');
  //     }
  //     return new Disciplina(nome);
  // }
}

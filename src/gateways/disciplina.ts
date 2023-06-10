import { Disciplina } from "@entities/disciplina";
import { DbConnection } from "@interfaces/dbconnection";
import { DisciplinaGatewayInterface } from "@interfaces/gateways";

export class DisciplinaGateway implements DisciplinaGatewayInterface {
  private connection: DbConnection;
  private tableName = "disciplinas";

  constructor(database: DbConnection) {
    this.connection = database;
  }

  public BuscarDisciplina(nome: string): Disciplina | null {
    return null;
  }

  public async BuscarTodasDisciplinas(): Promise<Disciplina[] | null> {
    const result = await this.connection.RunSelectAllQuery(
      this.tableName,
      null
    );

    if (result === null) {
      return null;
    } else {
      const returnData: Disciplina[] = [];
      result.forEach((element: any) => {
        returnData.push(new Disciplina(element.disciplina_id, element.nome));
      });
      return returnData;
    }
  }

  public IncluirDisciplina(nome: string): boolean {
    /** ... */
    return true;
  }
}

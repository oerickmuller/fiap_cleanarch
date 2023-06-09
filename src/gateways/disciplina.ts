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
    // const result = this.connection.RunSelectQuery(
    //     this.tableName,
    //     null,
    //     [{field: 'nome', value: nome}]
    // );
    // if ( result != null ) {
    //     return new Disciplina(result[0].nome);
    // }
    // return null;

    return null;
  }

  public BuscarTodasDisciplinas(): Disciplina[] | null {
    const result = this.connection.RunSelectAllQuery(this.tableName, null);

    if (result === null) {
      return null;
    } else {
      const returnData: Disciplina[] = [];
      result.forEach((element) => {
        returnData.push(new Disciplina(element[0], element[1]));
      });
      return returnData;
    }
  }

  public IncluirDisciplina(nome: string): boolean {
    /** ... */
    return true;
  }
}

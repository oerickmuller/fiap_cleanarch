import { Disciplina, Estudante } from "@entities";
import { DbConnection } from "@interfaces/dbconnection";
import { EstudanteGatewayInterface } from "@interfaces/gateways";

export class EstudanteGateway implements EstudanteGatewayInterface {
  private connection: DbConnection;
  private tableName = "estudante";

  constructor(database: DbConnection) {
    this.connection = database;
  }
  BuscarEstudante(nome: string): Estudante | null {
    // const result = this.connection.RunSelectQuery(
    //     this.tableName,
    //     null,
    //     [{field: 'nome', value: nome}]
    // );
    // if ( result != null ) {
    //     return new Estudante(result[0].nome);
    // }
    return null;
  }
  IncluirEstudante(nome: string): boolean {
    /** ... */
    return true;
  }
}

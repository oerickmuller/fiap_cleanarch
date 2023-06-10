import { Disciplina, Estudante } from "@entities";
import { DbConnection } from "@interfaces/dbconnection";
import { EstudanteGatewayInterface } from "@interfaces/gateways";

export class EstudanteGateway implements EstudanteGatewayInterface {
  private connection: DbConnection;
  private tableName = "estudantes";

  constructor(database: DbConnection) {
    this.connection = database;
  }
  async BuscarTodosEstudantes(): Promise<Estudante[] | null> {
    const result = await this.connection.RunSelectAllQuery(
      this.tableName,
      null
    );

    if (result === null) {
      return null;
    } else {
      const returnData: Estudante[] = [];
      result.forEach((element: any) => {
        returnData.push(new Estudante(element.estudante_id, element.nome));
      });
      return returnData;
    }
  }
  BuscarEstudante(nome: string): Estudante | null {
    return null;
  }
  IncluirEstudante(nome: string): boolean {
    return true;
  }
}

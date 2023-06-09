import { EstudanteGateway } from "@gateways/estudante";
import { DbConnection } from "@interfaces/dbconnection";
import { EstudanteUseCases } from "@usecases";

export class EstudanteController {
  static ObterTodosEstudantes() {
    throw new Error("Method not implemented.");
  }
  static CriarEstudante(nome: string, dbconnection: DbConnection) {
    const gateway = new EstudanteGateway(dbconnection);
    const estudante = EstudanteUseCases.NovoEstudante(nome, gateway);
    gateway.IncluirEstudante(nome);
    return { success: true };
  }
}

import { EstudanteGateway } from "@gateways/estudante";
import { DbConnection } from "@interfaces/dbconnection";
import { EstudanteUseCases } from "@usecases";
import { EstudanteAdapter } from "@adapters";

export class EstudanteController {
  static async ObterTodosEstudantes(
    dbconnection: DbConnection
  ): Promise<string> {
    const estudantesGateway = new EstudanteGateway(dbconnection);
    const todosOsEstudantes = await EstudanteUseCases.ObterTodosEstudantes(
      estudantesGateway
    );

    const adapted =
      EstudanteAdapter.adaptJsonTodosEstudantes(todosOsEstudantes);
    return adapted;
  }
  static CriarEstudante(nome: string, dbconnection: DbConnection) {
    const gateway = new EstudanteGateway(dbconnection);
    const estudante = EstudanteUseCases.NovoEstudante(nome, gateway);
    gateway.IncluirEstudante(nome);
    return { success: true };
  }
}

import { Estudante } from "@entities/estudante";
import { EstudanteGatewayInterface } from "@interfaces/gateways";
import { EstudanteGateway } from "src/gateways";

export class EstudanteUseCases {
  static async ObterTodosEstudantes(
    estudantesGateway: EstudanteGateway
  ): Promise<Estudante[] | null> {
    const todosOsEstudantes = await estudantesGateway.BuscarTodosEstudantes();
    return todosOsEstudantes;
  }
  static NovoEstudante(nome: string, gateway: EstudanteGatewayInterface) {
    throw new Error("Method not implemented.");
  }
  static RegistrarEstudante(nome: string): Estudante | null {
    return new Estudante(1, "");
  }
}

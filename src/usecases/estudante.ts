import { Estudante } from "@entities/estudante";
import { EstudanteGatewayInterface } from "@interfaces/gateways";

export class EstudanteUseCases {
  static NovoEstudante(nome: string, gateway: EstudanteGatewayInterface) {
    throw new Error("Method not implemented.");
  }
  static RegistrarEstudante(nome: string): Estudante | null {
    return new Estudante(1, "");
  }
}

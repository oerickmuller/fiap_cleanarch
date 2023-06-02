import { Estudante } from "@/entities";
import { EstudanteGatewayInterface } from "@/interfaces/gateways";

export class EstudanteUseCases {
    static NovoEstudante(nome: string, gateway: EstudanteGatewayInterface) {
        throw new Error("Method not implemented.");
    }
    static RegistrarEstudante(nome: string): Estudante {
        return new Estudante(nome);
    }
}
import { Disciplina } from "@/entities";
import { DisciplinaGateway } from "@/gateways/disciplina";
import { DisciplinaGatewayInterface } from "@/interfaces/gateways";

export class DisciplinaUseCases {
    static NovaDisciplina(nome: string, gatewayDisciplina: DisciplinaGatewayInterface): Disciplina {
        if (gatewayDisciplina.BuscarDisciplina(nome) !== null) {
            throw new Error('Disciplina ja existe');
        } 
        return new Disciplina(nome);
    }
}
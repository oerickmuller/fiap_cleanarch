import { Disciplina, Estudante, Matricula } from "@/entities";
import { MatriculaGatewayInterface } from "@/interfaces/gateways";

export class MatriculaUseCases {
    static MatricularEstudanteEmDisciplina(
        estudante: Estudante,
        disciplina: Disciplina,
        gateway: MatriculaGatewayInterface
    ): Matricula {
        return new Matricula(estudante, disciplina);

    }
}
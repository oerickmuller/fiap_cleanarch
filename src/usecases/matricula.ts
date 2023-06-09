import { Matricula } from "@entities/matricula";
import { Estudante } from "@entities/estudante";
import { Disciplina } from "@entities/disciplina";

import { MatriculaGatewayInterface } from "@interfaces/gateways";

export class MatriculaUseCases {
  static MatricularEstudanteEmDisciplina(
    estudante: Estudante,
    disciplina: Disciplina,
    gateway: MatriculaGatewayInterface
  ): Matricula {
    return new Matricula(estudante, disciplina);
  }
}

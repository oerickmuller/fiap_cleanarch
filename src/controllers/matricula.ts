import { Disciplina, Estudante } from "@entities";
import {
  DisciplinaGateway,
  EstudanteGateway,
  MatriculaGateway,
} from "@gateways/matricula";
import { DbConnection } from "@interfaces/dbconnection";
import { MatriculaUseCases } from "@usecases";

export class MatriculaController {
  static async MatricularEstudanteEmDisciplina(
    estudanteId: number,
    disciplinaId: number,
    dbconnection: DbConnection
  ): Promise<void> {
    const matriculaGateway = new MatriculaGateway(dbconnection);
    const estudanteGateway = new EstudanteGateway(dbconnection);
    const disciplinaGateway = new DisciplinaGateway(dbconnection);

    const matricula = await MatriculaUseCases.MatricularEstudanteEmDisciplina(
      estudanteId,
      disciplinaId,
      matriculaGateway,
      estudanteGateway,
      disciplinaGateway
    );

    if (matricula !== null && matricula !== undefined) {
      // gravar no banco de dados!
      await matriculaGateway.IncluirMatricula(matricula);
    }

    // se chegou aqui, deu tudo certo.
  }
}

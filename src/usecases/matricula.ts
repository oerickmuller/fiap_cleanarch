import { Matricula } from "@entities/matricula";
import { Estudante } from "@entities/estudante";
import { Disciplina } from "@entities/disciplina";

import {
  DisciplinaGatewayInterface,
  EstudanteGatewayInterface,
  MatriculaGatewayInterface,
} from "@interfaces/gateways";

export class MatriculaUseCases {
  static async MatricularEstudanteEmDisciplina(
    estudanteId: number,
    disciplinaId: number,
    matriculaGateway: MatriculaGatewayInterface,
    estudanteGateway: EstudanteGatewayInterface,
    disciplinaGateway: DisciplinaGatewayInterface
  ): Promise<Matricula> {
    // estudante existe?
    const estudante = await estudanteGateway.BuscarPorId(estudanteId);
    if (estudante === null) return Promise.reject("Estudante nao encontrado");

    // disciplina existe?
    const disciplina = await disciplinaGateway.BuscarPorId(disciplinaId);
    if (disciplina === null) return Promise.reject("Disciplina nao encontrada");

    // ja existe estudante essa disciplina?
    const matriculaExistente = await matriculaGateway.Buscar(
      estudante,
      disciplina
    );
    if (matriculaExistente !== null)
      return Promise.reject("Matrícula ja efetuada");

    // como tudo está correto, podemos dar andamento!
    const matriculaNova = new Matricula(estudante, disciplina);
    return matriculaNova;
  }
}

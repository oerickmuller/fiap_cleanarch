import { Disciplina, Estudante } from "@/entities";
import { MatriculaGateway } from "@/gateways/matricula";
import { DbConnection } from "@/interfaces/dbconnection";
import { MatriculaUseCases } from "@/usecases";

export class MatriculaController {
    static ObterEstudantesDisciplina(disciplina: Disciplina) {
        throw new Error("Method not implemented.");
    }
    static ObterDisciplinasEstudante(estudante: Estudante) {
        throw new Error("Method not implemented.");
    }
    static MatricularEstudante(
        estudante: Estudante,
        disciplina: Disciplina,
        dbconnection: DbConnection
    ) {
        const gateway = new MatriculaGateway(dbconnection);
        const matricula = MatriculaUseCases.MatricularEstudanteEmDisciplina(
            estudante, 
            disciplina, 
            gateway
        )
        gateway.IncluirMatricula(estudante, disciplina);
        return true;
    }
}
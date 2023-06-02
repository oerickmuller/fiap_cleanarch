import { DisciplinaGateway } from "@/gateways/disciplina";
import { DbConnection } from "@/interfaces/dbconnection";
import { DisciplinaUseCases } from "@/usecases";

export class DisciplinaController {
    static ObterTodasDisciplinas() {
        throw new Error("Method not implemented.");
    }
    static CriarDisciplina(nome: string, dbconnection: DbConnection) {
        const gateway = new DisciplinaGateway(dbconnection);
        const disciplina = DisciplinaUseCases.NovaDisciplina(nome, gateway);
        gateway.IncluirDisciplina(nome);
        return {success: true};
    }
}
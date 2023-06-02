import { Estudante, Disciplina, Matricula } from "@/entities";
import { DbConnection } from "@/interfaces/dbconnection";
import { MatriculaGatewayInterface } from "@/interfaces/gateways";

export class MatriculaGateway implements MatriculaGatewayInterface{
    private connection: DbConnection;
    private tableName = 'matricula';

    constructor(database: DbConnection){
        this.connection = database;
    }
    BuscarMatricula(estudante: Estudante, disciplina: Disciplina): Matricula|null {
        const result = this.connection.RunSelectQuery(
            this.tableName,
            null, 
            [{
                field: 'estudante', value: estudante.nome,
            }, {
                field: 'disciplina', value: disciplina.nome
            }]
        );
        if (result !== null) {
            return new Matricula(
                new Estudante(result[0].estudante), 
                new Disciplina(result[0].disciplina)
            );
        }
        return null;
    }
    IncluirMatricula(estudante: Estudante, disciplina: Disciplina): boolean {
        /** .. */
        return true;
    }
}
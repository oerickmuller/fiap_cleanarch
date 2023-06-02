import { Disciplina } from "@/entities";
import { DbConnection } from "@/interfaces/dbconnection";
import { DisciplinaGatewayInterface } from "@/interfaces/gateways";


export class DisciplinaGateway implements DisciplinaGatewayInterface {
    
    private connection: DbConnection;
    private tableName = "disciplina";
    
    constructor(database: DbConnection) {
        this.connection = database;
    }
    BuscarDisciplina(nome: string): Disciplina | null {
        const result = this.connection.RunSelectQuery(
            this.tableName, 
            null, 
            [{field: 'nome', value: nome}]
        );
        if ( result != null ) {
            return new Disciplina(result[0].nome);
        }
        return null;
    }

    IncluirDisciplina(nome: string): boolean {
        /** ... */
        return true;
    }

  
}
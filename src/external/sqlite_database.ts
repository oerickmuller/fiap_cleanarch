import { DbConnection } from "@/interfaces/dbconnection";
import { SqlParameter } from "@/types/sqlparameter";
import { Database } from "sqlite3";

export class SqliteConnection implements DbConnection {
    private _connection: Database; 
    
    constructor(dsn: string) {
        this._connection = new Database(dsn);
    }

    RunSelectQuery(tableName: string, fields?: string[], parameters?: SqlParameter[]): any {
        const sqlcommand = ['select '];
        if (fields === null) {
            sqlcommand.push(" * ");
        }
        else {
            sqlcommand.push(fields.join(', '));
        }

        sqlcommand.push(` from ${tableName} `);

        const query_values = [];

        if (parameters !== null) {
            const fieldNames = [];
            parameters.forEach(element => {
                fieldNames.push(`${element.field} = ?`);
                query_values.push(element.value);
            });
            sqlcommand.push(' where ');
            sqlcommand.push(fieldNames.join(' and '));
        }

        this._connection.get(sqlcommand.join(''), query_values, (_err, row) => { return row; })
        
    }


}
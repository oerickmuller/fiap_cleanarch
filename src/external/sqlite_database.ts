import { DbConnection } from "@interfaces/dbconnection";
import { SqlParameter } from "src/types/sqlparameter";
import { Database } from "sqlite3";

export class SqliteConnection implements DbConnection {
  private _connection: Database;

  constructor(dsn: string) {
    this._connection = new Database(dsn, (err) => {
      if (err) {
        console.error(err.message);
      }
      console.log("conectado ao banco de dados");
    });
  }

  RunSelectAllQuery(tableName: string, fields: string[] | null): any[] {
    let fieldsExpression: string;
    if (fields !== null) {
      fieldsExpression = fields.join(", ");
    } else {
      fieldsExpression = " * ";
    }

    const sql = `SELECT ${fieldsExpression} FROM ${tableName} `;
    console.log(sql);

    this._connection.all(sql, [], (err, rows) => {
      if (err) {
        throw new Error(err.message);
      }
      console.log(rows);
      return rows;
    });

    return [];
  }

  RunSelectQuery(
    tableName: string,
    fields: string[],
    parameters: SqlParameter[]
  ): any {
    const sqlcommand = ["select "];

    if (fields === null || (fields !== null && fields?.length == 0)) {
      sqlcommand.push("id, nome"); // os campos da tabela.
    } else {
      sqlcommand.push(fields.join(", "));
    }

    sqlcommand.push(` from ${tableName} `);

    const query_values: any[] = [];

    if (parameters.length > 0) {
      const fieldNames: string[] = [];
      parameters.forEach((element) => {
        fieldNames.push(`${element.field} = ?`);
        query_values.push(element.value);
      });
      sqlcommand.push(" where ");
      sqlcommand.push(fieldNames.join(" and "));
    }

    const fullSqlCommand: string = sqlcommand.join("");
    console.log(fullSqlCommand);

    this._connection.get(
      sqlcommand.join(""),
      query_values.length == 0 ? null : query_values,
      (_err, row) => {
        console.log(_err);

        console.log(row);
        return row;
      }
    );
  }
}

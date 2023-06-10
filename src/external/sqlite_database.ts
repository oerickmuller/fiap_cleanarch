import { DbConnection } from "@interfaces/dbconnection";
import { SqlParameter } from "src/types/sqlparameter";
import { open } from "sqlite";

const sqlite3 = require("sqlite3").verbose();

export class SqliteConnection implements DbConnection {
  private _dsn: string;

  constructor(dsn: string) {
    this._dsn = dsn;
  }

  private openDatabase() {
    return open({ filename: this._dsn, driver: sqlite3.Database });
  }

  async RunSelectAllQuery(
    tableName: string,
    fields: string[] | null
  ): Promise<any[]> {
    // tratar os campos
    let fieldsExpression: string;
    if (fields !== null) {
      fieldsExpression = fields.join(", ");
    } else {
      fieldsExpression = " * ";
    }

    // construir o comando sql
    const sql = `SELECT ${fieldsExpression} FROM ${tableName} `;
    const connection = await this.openDatabase();
    const rows = await connection.all(sql, []);
    connection.close();
    return rows;
  }

  async RunSelectQuery(
    tableName: string,
    fields: string[],
    parameters: SqlParameter[]
  ): Promise<any> {
    return null;
  }
}

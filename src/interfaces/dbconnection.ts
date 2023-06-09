import { SqlParameter } from "src/types/sqlparameter";

export interface DbConnection {
  RunSelectQuery(
    tableName: string,
    fields?: string[],
    parameters?: SqlParameter[]
  ): any[];

  RunSelectAllQuery(tableName: string, fields: string[] | null): any[];
}

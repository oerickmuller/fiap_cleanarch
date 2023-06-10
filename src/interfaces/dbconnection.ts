import { SqlParameter } from "src/types/sqlparameter";

export interface DbConnection {
  RunSelectQuery(
    tableName: string,
    fields?: string[],
    parameters?: SqlParameter[]
  ): Promise<any>;

  RunSelectAllQuery(tableName: string, fields: string[] | null): Promise<any[]>;
}

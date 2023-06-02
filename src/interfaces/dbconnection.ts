import { SqlParameter } from "@/types/sqlparameter";

export interface DbConnection {
    RunSelectQuery(tableName: string, fields: string[], parameters?: SqlParameter[]);
}
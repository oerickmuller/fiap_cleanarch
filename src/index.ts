import { FaculdadeApp } from "./api";
import { SqliteConnection } from "./external/sqlite_database";

const sqlconnection = new SqliteConnection('./dbfile.sqlite');
const faculdadeApp = new FaculdadeApp(sqlconnection);
faculdadeApp.start();

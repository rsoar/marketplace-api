require("dotenv").config();
import mysql2, { Connection } from "mysql2/promise";
import { IDatabase } from "../interface/base/IDatabase";

class MySQLDatabase implements IDatabase<Connection> {
  private _connectionUri: string;

  constructor(connectionUri: string) {
    this._connectionUri = connectionUri;
  }

  async connect(): Promise<Connection> {
    return mysql2.createConnection(this._connectionUri);
  }
}

export const database = new MySQLDatabase(process.env.DB_URI as string);

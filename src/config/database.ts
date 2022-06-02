require("dotenv").config();
import mysql2 from "mysql2/promise";

class Database {
  private _connectionUri: string;

  constructor(connectionUri: string) {
    this._connectionUri = connectionUri;
  }

  async connect() {
    return mysql2.createConnection(this._connectionUri);
  }
}

export const database = new Database(process.env.DB_URI as string);

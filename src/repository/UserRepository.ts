import { Connection } from "mysql2/promise";
import { IUserRepository } from "../interface/base/IUserRepository";
import { database } from "../config/database";
import { IUser } from "../interface/IUser";

export class UserRepository implements IUserRepository {
  private readonly _db: Promise<Connection>;

  constructor() {
    this._db = database.connect();
  }

  async getUserByEmail(email: string): Promise<any> {
    const db = await this._db;
    const [result] = await db.query(
      "SELECT * FROM usuarios WHERE email = ?",
      email
    );
    return result;
  }

  async getUserById(id: number) {
    const db = await this._db;
    const [result] = await db.query("SELECT * FROM usuarios WHERE id = ?", id);
    return result;
  }

  async createUser(data: IUser) {
    const db = await this._db;
    await db.query(
      "INSERT INTO usuarios (nome, sobrenome, email, senha) VALUES (?, ?, ?, ?)",
      [data.nome, data.sobrenome, data.email, data.senha]
    );
  }
}

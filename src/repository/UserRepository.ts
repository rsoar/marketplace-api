import { Connection } from "mysql2/promise";
import { IUserRepository } from "../interface/base/IUserRepository";
import { database } from "../config/database";
import { IUser } from "../interface/IUser";
import { GenericMethod } from "../helpers/GenericMethod";

export class UserRepository implements IUserRepository {
  private readonly _db: Promise<Connection>;
  private _generic: GenericMethod<IUser>;

  constructor() {
    this._db = database.connect();
    this._generic = new GenericMethod();
  }

  async getUserByEmail(email: string): Promise<IUser[]> {
    const db = await this._db;
    const [result]: any = await db.query(
      "SELECT * FROM usuarios WHERE email = ?",
      email
    );

    return this._generic.mapObjects(result, [
      "id",
      "nome",
      "sobrenome",
      "email",
      "senha",
    ]);
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

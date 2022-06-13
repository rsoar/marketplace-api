import { Connection } from "mysql2/promise";
import { IUserRepository } from "../interface/base/IUserRepository";
import { IUser } from "../interface/IUser";
import { IDatabase } from "../interface/base/IDatabase";
import { IHelper } from "../interface/base/IHelper";

export class UserRepository implements IUserRepository {
  constructor(
    private readonly _db: IDatabase<Connection>,
    private _helper: IHelper<IUser>
  ) {}

  async getUserByEmail(email: string): Promise<IUser[]> {
    const db = await this._db.connect();
    const [result] = await db.query(
      "SELECT * FROM usuarios WHERE email = ?",
      email
    );

    return this._helper.mapObjects(result, [
      "id",
      "nome",
      "sobrenome",
      "email",
      "senha",
    ]);
  }

  async getUserById(id: number): Promise<IUser[]> {
    const db = await this._db.connect();
    const [result] = await db.query("SELECT * FROM usuarios WHERE id = ?", id);

    return this._helper.mapObjects(result, [
      "id",
      "nome",
      "sobrenome",
      "email",
      "senha",
    ]);
  }

  async createUser(data: IUser): Promise<void> {
    const db = await this._db.connect();
    await db.query(
      "INSERT INTO usuarios (nome, sobrenome, email, senha) VALUES (?, ?, ?, ?)",
      [data.nome, data.sobrenome, data.email, data.senha]
    );
  }
}

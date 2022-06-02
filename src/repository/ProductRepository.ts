import { GenericMethod } from "../helpers/GenericMethod";
import { database } from "../config/database";
import { IRepository } from "../interface/base/IRepository";
import { IProduct } from "../interface/IProduct";
import { Connection } from "mysql2/promise";

export class ProductRepository implements IRepository<IProduct> {
  private readonly _database: Promise<Connection>;
  private _generic: GenericMethod<IProduct>;

  constructor() {
    this._database = database.connect();
    this._generic = new GenericMethod();
  }

  async getItem(id: number): Promise<IProduct[]> {
    const db = await this._database;
    let query = "SELECT * FROM produtos WHERE id = ?";
    const [item]: any[] = await db.query(query, id);
    return this._generic.mapObjects(item, [
      "id",
      "name",
      "description",
      "price",
      "rate",
      "seller",
      "category",
      "count",
    ]);
  }

  async getItems(): Promise<IProduct[]> {
    const db = await this._database;
    const [items]: any[] = await db.query("SELECT * FROM produtos");
    return this._generic.mapObjects(items, [
      "id",
      "name",
      "description",
      "price",
      "rate",
      "seller",
      "category",
      "count",
    ]);
  }
}

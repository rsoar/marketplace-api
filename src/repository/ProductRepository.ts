import { IRepository } from "../interface/base/IRepository";
import { IProduct } from "../interface/IProduct";
import { Connection } from "mysql2/promise";
import { IDatabase } from "../interface/base/IDatabase";
import { IHelper } from "../interface/base/IHelper";

export class ProductRepository implements IRepository<IProduct> {
  constructor(
    private readonly _database: IDatabase<Connection>,
    private _helper: IHelper<IProduct>
  ) {}

  async getItem(id: number): Promise<IProduct[]> {
    const db = await this._database.connect();
    let query = "SELECT * FROM produtos WHERE id = ?";
    const [item]: any[] = await db.query(query, id);
    return this._helper.mapObjects(item, [
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
    const db = await this._database.connect();
    const [items]: any[] = await db.query("SELECT * FROM produtos");
    return this._helper.mapObjects(items, [
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

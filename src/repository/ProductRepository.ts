import { database } from "../database/config";
import { IRepository } from "../interfaces/base/IRepository";
import { IProduct, IProductRaw } from "../interfaces/IProduct";

export class ProductRepository implements IRepository<IProduct> {
  private _database = database.connect();

  async getItem(id: number): Promise<IProduct[]> {
    const db = await this._database;
    let query = "SELECT * FROM produtos WHERE id = ?";
    const [item]: any[] = await db.query(query, id);
    return this.mapObjects(item);
  }

  async getItems(): Promise<IProduct[]> {
    const db = await this._database;
    const [items]: any[] = await db.query("SELECT * FROM produtos");
    return this.mapObjects(items);
  }

  objectSet(v: IProductRaw): IProduct {
    return {
      name: v.nome,
      description: v.descricao,
      seller: v.vendedor,
      rate: v.avaliacao,
      price: v.preco,
      category: v.categoria,
      count: v.quantidade,
    };
  }

  mapObjects(items: any[]): IProduct[] {
    return items.map((m: IProductRaw) => this.objectSet(m));
  }
}

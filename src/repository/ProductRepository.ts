import { IQueries } from "../interfaces/base/IQueries";
import { IRepository } from "../interfaces/base/IRepository";
import { InsertProduct, IProduct, IProductRaw } from "../interfaces/IProduct";

export class ProductRepository implements IRepository<IProduct, InsertProduct> {
  getQuerySQL(v?: InsertProduct): IQueries {
    const _selectItems = "SELECT * FROM produtos";

    const _insertItem = {
      query: "INSERT INTO produtos (nome, descricao, categoria, preco, vendedor, quantidade) VALUES(?, ?, ?, ?, ?)",
      values: v ? Object.values(v) : [""],
    };

    return {
      selectItems: _selectItems,
      insertItem: [_insertItem.query, _insertItem.values],
    };
  }

  setObject(v: IProductRaw): IProduct {
    return {
      name: v.nome,
      description: v.descricao,
      price: v.preco,
      count: v.quantidade,
      seller: v.vendedor,
      rate: v.avaliacao,
      category: v.categoria,
    };
  }

  mapObjects(item: IProductRaw[]): IProduct[] {
    return item.map((m) => this.setObject(m));
  }
}

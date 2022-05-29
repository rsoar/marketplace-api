import { IQueries } from "../interfaces/base/IQueries";
import { IRepository } from "../interfaces/base/IRepository";
import { InsertProduct, IProduct, IProductRaw } from "../interfaces/IProduct";

export class ProductRepository implements IRepository<IProduct, InsertProduct> {
  getQuerySQL(v?: InsertProduct): IQueries {
    const _selectItems = "SELECT * FROM produtos";

    const _insertItem = {
      query: "INSERT INTO produtos (nome, descricao, preco, vendedor, quantidade) VALUES(?, ?, ?, ?, ?)",
      values: v ? [v.name, v.description, v.price, v.seller, v.count] : [""],
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
    };
  }

  mapObjects(item: IProductRaw[]): IProduct[] {
    return item.map((m) => this.setObject(m));
  }
}

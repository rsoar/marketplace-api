import { database } from "../database/config";
import { IRepository } from "../interfaces/base/IRepository";
import { IBaseCrudService } from "../interfaces/base/IBaseCrudRepository";

export class BaseCrudService<T, K> implements IBaseCrudService<T, K> {
  private _db = database.connect();
  private _repository: IRepository<T, K>;

  constructor(repository: IRepository<T, K>) {
    this._repository = repository;
  }

  async getItems() {
    const _db = await this._db;
    const query = this._repository.getQuerySQL().selectItems;
    const [rows] = await _db.query(query);
    return rows;
  }

  async insertItem(_v: K) {
    const _db = await this._db;
    const [query, values] = this._repository.getQuerySQL(_v).insertItem;
    await _db.query(query, values);
  }
}

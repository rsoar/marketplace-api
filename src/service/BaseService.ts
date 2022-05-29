import { IRepository } from "../interfaces/base/IRepository";

interface IBaseService<T> {
  getItem(id: number): any;
}

export class BaseService<T> implements IBaseService<T> {
  private _repository: IRepository<T>;

  constructor(repository: IRepository<T>) {
    this._repository = repository;
  }

  async getItem(id: number): Promise<T[]> {
    return this._repository.getItem(id);
  }

  async getItems(): Promise<T[]> {
    return this._repository.getItems();
  }
}

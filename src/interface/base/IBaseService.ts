export interface IBaseService<T> {
  getItem(id: number): Promise<T[]>;
  getItems: () => Promise<T[]>;
}

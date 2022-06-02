export interface IRepository<T> {
  getItem: (id: number) => Promise<T[]>;
  getItems: () => Promise<T[]>;
}

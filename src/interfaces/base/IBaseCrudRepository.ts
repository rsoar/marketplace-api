export interface IBaseCrudService<T, K> {
  getItems: () => Promise<any>;
  insertItem: (item: K) => void;
}

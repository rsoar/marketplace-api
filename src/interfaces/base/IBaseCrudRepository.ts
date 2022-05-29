export interface IBaseCrudService<T, K> {
  list: () => Promise<any>;
  insert: (item: K) => void;
}

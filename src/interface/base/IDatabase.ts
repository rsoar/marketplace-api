export interface IDatabase<T> {
  connect: () => Promise<T>;
}

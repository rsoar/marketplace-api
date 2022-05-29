import { IQueries } from "./IQueries";

export interface IRepository<T, K> {
  getQuerySQL: (keys?: K) => IQueries;
  setObject: (item: any) => T;
  mapObjects: (item: any[]) => T[];
}

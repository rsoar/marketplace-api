export interface IRepository<T> {
  getItem: (id: number) => Promise<T[]>;
  getItems: () => Promise<T[]>;
  objectSet: (v: any) => T;
  mapObjects: (items: any[]) => T[];
}

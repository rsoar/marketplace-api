export interface IHelper<T> {
  objectSet: (_target: any, model: Array<keyof T>) => T;
  mapObjects: (_target: any, keys: Array<keyof T>) => T[];
}

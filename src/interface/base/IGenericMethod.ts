export interface IGenericMethod<T> {
  objectSet: (_target: any, model: Array<keyof T>) => T | null;
  mapObjects: (_target: any, keys: Array<keyof T>) => T[];
}

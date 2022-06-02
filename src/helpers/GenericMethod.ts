import { IGenericMethod } from "../interface/base/IGenericMethod";

export class GenericMethod<T> implements IGenericMethod<T> {
  objectSet(target: any, keys: Array<keyof T>): T {
    const _values = Object.values(target);
    return Object.assign(
      {},
      ...keys.map((m, i) => ({
        [m]: _values[i],
      }))
    );
  }

  mapObjects(target: any, keys: Array<keyof T>): T[] {
    return target.map((m: any) => this.objectSet(m, keys));
  }
}

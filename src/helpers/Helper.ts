import { IHelper } from "../interface/base/IHelper";

class Helper<T> implements IHelper<T> {
  objectSet(target: any, keys: Array<keyof T>): T {
    if (!target) return {} as T;
    const _values = Object.values(target);
    return Object.assign(
      {},
      ...keys.map((m, i) => ({
        [m]: _values[i],
      }))
    );
  }

  mapObjects(target: any, keys: Array<keyof T>): T[] {
    if (!target) return [];
    return target.map((m: any) => this.objectSet(m, keys));
  }
}

export const helper: IHelper<any> = new Helper();

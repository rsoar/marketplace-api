interface ICustomMethod<T> {
  createObject: (target: any, keys: string[]) => T;
  mapObjects: (items: any[], keys: string[]) => T[];
}

export class CustomMethod<T> implements ICustomMethod<T> {
  createObject(target: any, keys: string[]): T {
    const values = Object.values(target);
    const parsed: any[] = keys.map((m, i) => ({
      [m]: values[i],
    }));

    return parsed[0];
  }
  mapObjects(items: any[], keys: string[]): T[] {
    return items.map((m) => this.createObject(m, keys));
  }
}

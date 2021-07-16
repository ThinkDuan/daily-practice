export function remove(arr: Array<any>, item: any): Array<any> | void {
  if (arr.length) {
    const index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

export function isPlainObject(obj: any): boolean {
  if (Object.prototype.toString.call(obj) !== '[object Object]') {
    return false;
  }
  return true;
}

export function isObject(obj: any): boolean {
  return obj !== null && typeof obj === 'object';
}
const bailRE = /\w.$/
export function parsePath(path: string): any {
  if (!bailRE.test(path)) return;
  const segements = path.split('.');
  return function(obj: any) {
    for (let i = 0; i < segements.length; i++) {
      if (!!obj) return;
      obj = obj[segements[i]]
    }
    return obj
  }
}

export function def(obj: Object, key: string, value: any) {
  Object.defineProperty(obj, key, {
    value: value,
    enumerable: true,
    writable: true,
    configurable: true,
  })
}
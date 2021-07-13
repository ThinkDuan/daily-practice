import Dep from './dep';
type ObserverType = Object | Array<any>;
export class Observer {
  constructor(value: ObserverType) {
    if (Array.isArray(value)) {
      return;
    }
    this.walk(value);
  }
  walk(obj: Object) {
    const keys = Object.keys(obj);
    for (let index = 0; index < keys.length; index++) {
      const element = keys[index];
      defineReactive(obj, element, obj[element])
    }
  }
}
function defineReactive(
  obj: Object,
  key: string,
  val: any
) {
  const dep = new Dep();
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: true,
    get: function reactiveGetter() {
      dep.depend();
      return val;
    },
    set: function reactiveSetter(newVal) {
      val = newVal;
      dep.notify();
    }
  })
}
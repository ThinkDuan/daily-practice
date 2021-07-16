import Dep from './dep';
import { isObject } from '../utils'
type ObserverType = Object | Array<any>;
type ObserverObject = {
  [key: string]: any
}
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
      defineReactive(obj, element)
    }
  }
  observeArray (items: Array<any>) {
    for (let index = 0; index < items.length; index++) {
      const element = items[index];
      observe(element);
    }
  }
}
function defineReactive(
  obj: ObserverObject,
  key: string,
  val?: any
) {
  const dep = new Dep();

  const descriptor = Object.getOwnPropertyDescriptor(obj, key);
  if (descriptor && descriptor.configurable === false) {
    return
  }
  const getter = descriptor && descriptor.get;
  const setter = descriptor && descriptor.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }
  if (isObject(val)) {
    observe(val)
  }
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

function observe(val: ObserverObject) {
  if (!isObject(val)) return;
  for (const key in val) {
    if (Object.prototype.hasOwnProperty.call(val, key)) {
      defineReactive(val, key)
    }
  }
}
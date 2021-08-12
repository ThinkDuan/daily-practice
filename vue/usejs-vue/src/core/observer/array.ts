import { def } from '../utils';
export const arrayMethods = Object.create(Array.prototype);
const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

methodsToPatch.forEach(method => {
  const original = arrayMethods[method];
  def(arrayMethods, method, function(...args: any[]) {
    const result = original.apply(this, args)
    const ob = this.__ob__;
    let inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break;
      case 'splice':
        inserted = args.slice(2)    
        break;
    }
    if (inserted) {
      ob.observerArray(inserted);
    }
    ob.dep.notify()
    return result
  })
})
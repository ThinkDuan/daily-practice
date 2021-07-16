import Dep from './dep';
import { parsePath } from '../utils';
export default class Watcher {
  vm: any;
  expOrFn: string;
  cb: Function;
  depIds: Set<number>;
  value: any;
  getter: Function;
  constructor(vm: any, expOrFn: string , cb: Function) {
    this.vm = vm;
    this.expOrFn = expOrFn;
    this.cb = cb;
    this.depIds = new Set();
    this.getter = parsePath(this.expOrFn)
    this.value = this.get()
  }
  update() {
    console.log('update')
  }
  addDep(dep: Dep) {
    const id = dep.id;
    if (!this.depIds.has(id)) {
      dep.addSub(this);
      this.depIds.add(id);
    }
  }
  get(){
    let value = this.getter.call(this.vm)
    Dep.target = this
    return value;
  }
}
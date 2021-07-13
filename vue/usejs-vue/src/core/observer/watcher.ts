import Dep from './dep';
export default class Watcher {
  constructor() {}
  update() {
    console.log('update')
  }
  addDep(dep: Dep) {
    dep.addSub(this);
  }
}
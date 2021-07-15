import Dep from './dep';
export default class Watcher {
  depIds: Set<number>;
  constructor() {
    this.depIds = new Set();
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
}
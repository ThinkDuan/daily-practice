/**
 * @description: 
 * @param {*}
 * @return {*}
 */
import Watcher from './watcher';
import { remove } from '../utils';
export default class Dep {
  static target: Watcher;
  private subs: Array<Watcher>;
  constructor() {
    this.subs = []
  }
  addSub(sub: Watcher) {
    this.subs.push(sub);
  }
  removeSub(sub: Watcher) {
    remove(this.subs, sub);
  }
  notify() {
    this.subs.forEach(item => {
      item.update();
    })
  }
  depend() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  }
}

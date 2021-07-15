/**
 * @description: 
 * @param {*}
 * @return {*}
 */
import Watcher from './watcher';
import { remove } from '../utils';
let uid = 0;
export default class Dep {
  static target: Watcher;
  private subs: Array<Watcher>;
  id: number;
  constructor() {
    this.subs = [];
    this.id = uid++;
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

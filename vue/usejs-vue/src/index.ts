import { Observer } from './core/observer/observer';
import Watcher from './core/observer/watcher';
import Dep from './core/observer/dep';
export function UsejsVue(obj: Object) {
  const observe = new Observer(obj);
  const watcher = new Watcher();
  Dep.target = watcher;
}

window.UsejsVue = UsejsVue
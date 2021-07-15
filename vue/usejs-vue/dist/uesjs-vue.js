(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.UsejsVue = {}));
}(this, (function (exports) { 'use strict';

  function remove(arr, item) {
      if (arr.length) {
          var index = arr.indexOf(item);
          if (index > -1) {
              return arr.splice(index, 1);
          }
      }
  }
  function isObject(obj) {
      if (Object.prototype.toString.call(obj) !== '[object Object]') {
          return false;
      }
      return true;
  }

  var uid = 0;
  var Dep = /** @class */ (function () {
      function Dep() {
          this.subs = [];
          this.id = uid++;
      }
      Dep.prototype.addSub = function (sub) {
          this.subs.push(sub);
      };
      Dep.prototype.removeSub = function (sub) {
          remove(this.subs, sub);
      };
      Dep.prototype.notify = function () {
          this.subs.forEach(function (item) {
              item.update();
          });
      };
      Dep.prototype.depend = function () {
          if (Dep.target) {
              Dep.target.addDep(this);
          }
      };
      return Dep;
  }());

  var Observer = /** @class */ (function () {
      function Observer(value) {
          if (Array.isArray(value)) {
              return;
          }
          this.walk(value);
      }
      Observer.prototype.walk = function (obj) {
          var keys = Object.keys(obj);
          for (var index = 0; index < keys.length; index++) {
              var element = keys[index];
              defineReactive(obj, element);
          }
      };
      return Observer;
  }());
  function defineReactive(obj, key, val) {
      var dep = new Dep();
      var descriptor = Object.getOwnPropertyDescriptor(obj, key);
      if (descriptor && descriptor.configurable === false) {
          return;
      }
      var getter = descriptor && descriptor.get;
      var setter = descriptor && descriptor.set;
      if ((!getter || setter) && arguments.length === 2) {
          val = obj[key];
      }
      if (isObject(val)) {
          observe(val);
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
      });
  }
  function observe(val) {
      for (var key in val) {
          if (Object.prototype.hasOwnProperty.call(val, key)) {
              defineReactive(val, key);
          }
      }
  }

  var Watcher = /** @class */ (function () {
      function Watcher() {
          this.depIds = new Set();
      }
      Watcher.prototype.update = function () {
          console.log('update');
      };
      Watcher.prototype.addDep = function (dep) {
          var id = dep.id;
          if (!this.depIds.has(id)) {
              dep.addSub(this);
              this.depIds.add(id);
          }
      };
      return Watcher;
  }());

  function UsejsVue(obj) {
      new Observer(obj);
      var watcher = new Watcher();
      Dep.target = watcher;
  }
  window.UsejsVue = UsejsVue;

  exports.UsejsVue = UsejsVue;

  Object.defineProperty(exports, '__esModule', { value: true });

})));

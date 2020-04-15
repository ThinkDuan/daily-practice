/*
 * @Author: duanxinxin
 * @Date: 2020-04-07 19:49:37
 * @LastEditTime: 2020-04-11 13:31:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /daily-practice/vue/simplevue/simpleVue.js
 */
class SimpleVue {
  constructor(obj){
    this.shandowDom = null;
    this.el = obj.el;
    this.data = obj.data;
    this.vm=null;
    this.compileData=null
  }
  setShandowDom(){
    let dom = document.querySelector(this.el);
    this.shandowDom = this.nodeToFragment(dom);
    console.log('>>>>>> dom: ',this.shandowDom)
    dom.appendChild(this.shandowDom)
  }
  nodeToFragment(node){
    let flag = document.createDocumentFragment();
    let child;
    while(child = node.firstChild){
      this.compile(child)
      flag.appendChild(child)
    }
    return flag
  }
  getDefind(){
    if(typeof this.data === 'function'){
      this.vm = this.data();
      // this.observer(this.vm)
    }
  }
  compile(node){
    if(node.nodeType === 1){
      let attr = node.attributes;
      for(let i = 0;i<attr.length;i++){
        if(attr[i].nodeName === 'v-model'){
          let objName = attr[i].nodeValue;
          let objNameArr = objName.split('.');
          console.log('111',this.getDataValue(objNameArr,this.vm),this.compileData);
          node.value = this.compileData;
          node.addEventListener('input',function(e){
            this.vm[objNameArr[0]][objNameArr[1]] = e.target.value;
          })
          node.removeAttribute('v-model')
        }
      }
    }
    let reg = /\{\{(.*)\}\}/;
    if(node.nodeType === 3){
      if(reg.test(node.nodeValue)){
        let name = RegExp.$1;
        let objNameArr = name.split('.');
        node.nodeValue = this.vm[objNameArr[0]][objNameArr[1]];
      }
    }
  }
  defineReactive(obj,key,val){
    Object.defineProperty(obj,key,{
      get: function(){
        return val
      },
      set: function(newVal){
        if(val === newVal) return
        val = newVal
        console.log(val)
      }
    })
  }
  observer(obj,vm){
    Object.keys(obj).forEach((item) => {
      this.defineReactive(vm,item,obj[key])
    })
  }
  getDataValue(arr,value){
    console.log('start')
    let data;
    let copyArr;
    if(value){
      data = value
    }
    if(arr){
      copyArr = arr
    }
    data = data[copyArr.shift()];
    if(copyArr.length > 0){
      console.log('data: ',data)
      this.getDataValue(copyArr,data);
      console.log('222',data)
    } else {
      console.log('end:',data)
      this.compileData = data;
      return data;
    }
    return data;
  }
  
  mounted(){
    this.getDefind()
    this.setShandowDom()
  }
}
window.SimpleVue = SimpleVue
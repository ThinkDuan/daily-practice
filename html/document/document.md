<!--
 * @Author: your name
 * @Date: 2020-04-08 14:54:11
 * @LastEditTime: 2020-04-08 15:52:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /daily-practice/html/document/document.md
 -->
### document document object model
### nodeType
- nodeType 表示该节点的类型
  - 9 Document
  - 1 Element
  - 3 Text
  - 8 Comment  html或者xml的注释
  - 11 DocumentFragment
- nodeName 表示元素的标签名以大写的形式表示
- nodeValue Text或者Comment节点的文本内容
- parentNode 该节点的父节点，document对象的 parentNode 为null
- childNodes 只读的类数组对象（NodeList对象），是该节点的子节点的实时展示
- firstChild，lastChild 该节点的第一个子节点和最后一个子节点
- nextSibling，previousSibling 该节点的兄弟节点的后一个和前一个。具有相同父节点的节点是兄弟节点，节点的顺序反映了节点在文档中出现的顺序
  
### node.appendChild（aChild） 会删除aChild,返回aChild，如果aChild 是DocumentFragment则返回空的 DocumentFragment
var dupNode = node.cloneNode(deep)
node 被克隆的节点
dupNode 克隆生成的副本节点
deep 是否是深度克隆，true/false 建议填写
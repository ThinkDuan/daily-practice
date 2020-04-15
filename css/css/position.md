<!--
 * @Author: duanxinxin
 * @Date: 2020-04-07 15:44:59
 * @LastEditTime: 2020-04-07 16:29:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /daily-practice/css/css/position.md
 -->
### css属性 position
css的position用于指定一个元素在文档中的定位方式，top，right，bottom，和left决定了该元素的最终位置
#### 可选值
- static（默认）
> 使用正常的布局行为，即该元素在文档常规流当前的布局位置，此时top，right，bottom，left和z-index属性无效
- relative
> 元素先放置在未添加定位的位置，在不改变页面布局的前提下调整元素位置。此时 table-*-group，table-row，table-column，table-cell,table-caption无效
- absolute
> 元素被移出正常文档流，不为元素预留空间，通过指定元素相对于最近的非static定位的祖先元素的位置。绝对定位的元素可以设置外边距，且不会与其他边距合并
- fixed
> 元素被移除正常文档流，并不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置。fixed属性会创建新的层叠上下文，当祖先元素的transform，perspective或者fliter属性非none时，容器由视口改为该祖先
- sticky  position: -webkit-sticky; position: sticky
> 元素根据正常文档流进行定位，然后相对于它的最近滚动祖先和最近块级祖先，包括table-related元素，基于top,right,bottom,left的值进行便宜，偏移值不会影响其他元素的位置
> 该值总是创建一个新的层叠上下文，一个sticky元素会固定在离他最近的一个拥有桂东机制的祖先上（当该祖先的overfloe为hiddle，scroll，auto或者overlay时），即使这个祖先不是真的滚动祖先。这个阻止了所有的sticky行为
#### 元素的概念
1. 定位元素
> 计算后位置属性为除static以外的任何值
2. 相对定位元素
> 计算后定位属性为relative
3. 绝对定位元素
> 计算后定位属性为absolute或者fixed
4. 粘性定位元素
> 计算后定位属性为sticky的元素


### top.right,bottom,left
> top属性定义了定义了定位元素的上外边界与其包含块上边界之间的便宜，非定位元素设置此值无效
- 当position为absolute或者fixed时，top指定了定位元素上外边界与其包含块的上内边界的之间的偏移
- 当position为relative时，top指定了定位元素离开正常位置的偏移
- 当position为sticky时，如果元素在viewport里面，top属性的效果和position为relative效果相同，如果元素在viewport之外，top属性的效果和position为fixed效果相同
- 当position为static时，top属性无效

top和bottom属性同时设置且height没有被设置或者为auto时，top和bottom都会生效。其他情况下，如果height被限制，则top属性会被优先设置，bottom属性会被会略
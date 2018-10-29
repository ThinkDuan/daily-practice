[toc]
## Markdown学习记录
<a href="http://www.markdown.cn/#overview">markdown官方学习文档，Markdown最健全的学习文档都在这里</a>

> 区块引用
  多行区块引用

> 嵌套
>> 嵌套区块引用
  属于嵌套的引用

> ## 另外一个引用
> 1. 这是第一项
> 2. 这是第二项
> 3. 这是第三项
## 无序列表
> 无序列表可以使用 - + * 三种方式来定义
- 第一
+ 第二
* 第三
- >列表的引用
## 代码区块
> 和程序相关的写作或是标签语言原始码通常会有已经排版好的代码区块，通常这些区块我们并不希望它以一般段落文件的方式去排版，而是照原来的样子显示，Markdown 会用 \<pre> 和 \<code> 标签来把代码区块包起来。 要在 Markdown 中建立代码区块很简单，只要简单地缩进 4 个空格或是 1 个制表符就可以
    
    var a = [123,'123',true];
    console.log(a);
    if(a.isArray()){
      console.log(a);
    }
## 分割线
> 可以使用* - _来建立分割线,行内不能有任何东西
------------------
******************
__________________
```
| -- dist
| -- build
|   |-- dist
|   |-- static
|   |-- image
| -- config.js
```
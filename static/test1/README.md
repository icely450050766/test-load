#测试CSS的加载会不会阻塞js的执行

index.html测试行为：

一个延时3s的css
一个内嵌的js
一个延时1s的js

index2.html测试行为：

一个内嵌的js
一个延时3s的css
一个延时1s的js
一个延时8s的css

index3.html测试行为：

一个内嵌的js，延时1s打印dom元素
一个延时3s的css

得出结论：
 - css的加载不阻塞之后的js下载，但阻塞执行。（index.html、index2.html）
 
 - 只有css解析完毕，才会执行js（即使js已经提前下载完成），因为js的执行有可能依赖于样式表的代码。（index.html、index2.html）

 - css不阻塞DOM解析，但阻塞DOM渲染，即会阻塞页面呈现。（index3.html）
 
  这可能是浏览器的一种优化机制。
  因为加载css的时候，可能会修改下面DOM节点的样式。
  如果css加载不阻塞DOM树渲染的话，当css加载完之后，DOM树可能又得重新重绘或者回流了，就造成了一些没有必要的损耗。
  所以干脆就先把DOM树的结构先解析完，把可以做的工作做完，然后等css加载完之后，在根据最终的样式来渲染DOM树。
  
 - 动态插入的css，不阻塞DOM解析和渲染


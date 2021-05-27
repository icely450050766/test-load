#测试CSS的加载会不会阻塞js的执行

index.html测试行为：

一个外联的css样式
一个内嵌的js
一个外联的js

index2.html测试行为：

一个内嵌的js
一个外联的css样式
一个外联的js样式

得出结论：
 - css的加载会阻塞之后js的执行，不阻塞dom解析、js下载等。（index.html、index2.html）
 - 只有css解析完毕，才会执行js（即使js已经提前下载完成），因为js的执行有可能依赖于样式表的代码。（index.html、index2.html）

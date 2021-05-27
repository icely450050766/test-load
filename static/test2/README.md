#测试DOMContentLoaded之后插入css影响load吗

##index.html测试行为：

一个内联的js
一个延时1s的js（DOMContentLoaded 后，延时1s插入延时2s的css）

##index2.html测试行为：

一个内嵌js
一个延时1s的js（DOMContentLoaded 后，延时1s插入延时2s的css）
一个延时8s的css

##index3.html测试行为

一个内嵌的js
一个延时0s的js（DOMContentLoaded 后插入1s插入延时8s的css）
一个延时2s的css

##index4.html测试行为：
一个内嵌js
一个延时0s的js（DOMContentLoaded 后1s插入延时8s的css）
一个延时0s的css

得出结论：
 - DOMContentLoaded 是指的 domReady，load 是指的外部资源加载完毕。
 
 - 如果插入外部资源链接前，load事件已经触发，那么无影响。
  (index.html、index4.html)
 
 - 如果插入外部资源链接前，load事件还未触发，那么插入的资源的加载时间，会加到load时间去（load事件延迟）
 （index3.html）
  
 - 页面从上往下解析，如果css放<head>，那css加载时间会阻塞页面呈现（解析完成才会展示页面，动态插入的css除外）。
 （index2.html）

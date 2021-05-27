document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded start')
    console.time('DOMContentLoaded - load');
    setTimeout(function () {
        loadCSS();
    }, 1000)

    // 测试 domContentLoadedEventStart - domContentLoadedEventEnd
    // for (var i = 0; i < 1000; i++) {
    //     console.log(1)
    // }
    console.log('DOMContentLoaded end')
}, false);

window.onload = function () {
    console.timeEnd('DOMContentLoaded - load')
    console.log('load')
}

function loadCSS() {
    var a = document.createElement('link');
    a.href = './delay8s.css';
    a.type = 'text/css';
    a.rel = 'stylesheet'

    console.log('loadCSS')
    document.head.appendChild(a);
}


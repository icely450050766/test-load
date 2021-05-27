document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded')
    console.time('DOMContentLoaded - load');
    setTimeout(function () {
        loadCSS();
    }, 1000)
}, false);

window.onload = function () {
    console.timeEnd('DOMContentLoaded - load')
    console.log('load')
}

function loadCSS() {
    var a = document.createElement('link');
    a.href = './delay2s.css';
    a.type = 'text/css';
    a.rel = 'stylesheet'

    console.log('loadCSS')
    document.head.appendChild(a);
}


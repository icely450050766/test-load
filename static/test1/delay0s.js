function loadCSS() {
    var a = document.createElement('link');
    a.href = './delay8s.css';
    a.type = 'text/css';
    a.rel = 'stylesheet'

    console.log('loadCSS')
    document.head.appendChild(a);
}

loadCSS();


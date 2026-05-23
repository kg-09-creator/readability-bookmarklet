javascript: (function () {
    alert('hallooo welcome to my bookmarklet! hopefully after using this it becomes easier to read the webpage!')
    document.body.style.backgroundColor = '#f4ecd8';
    document.body.style.color = '#222222';
    document.body.style.fontSize = '24px';
    document.body.style.fontFamily = 'sans-serif';

    var imgs=document.querySelectorAll('img');
    for(var i=0; i<imgs.length; i++) {
        imgs[i].remove();
    }
})();
